"use client";

import { useState } from "react";
import { CATEGORIES, type Bucket, type Category } from "@/types/bucket";

const FILENAME = "bucketlist-export.json";

function isCategory(value: unknown): value is Category {
  return (
    typeof value === "string" && (CATEGORIES as readonly string[]).includes(value)
  );
}

type ParseResult =
  | { ok: true; buckets: Bucket[] }
  | { ok: false; error: string };

// Validates an imported file before anything is written to state, so a bad
// file can never leave the stored list half-updated. Strict about the two
// fields that carry meaning and cannot be guessed (headline, category), and
// forgiving about the rest so a hand-edited file still imports.
function parseBucketsJson(text: string): ParseResult {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    return { ok: false, error: "That file is not valid JSON." };
  }

  if (!Array.isArray(data)) {
    return {
      ok: false,
      error: "Expected a JSON array of bucket items at the top level.",
    };
  }

  const buckets: Bucket[] = [];
  const usedIds = new Set<string>();

  for (let index = 0; index < data.length; index += 1) {
    const raw: unknown = data[index];
    const label = `Item ${index + 1}`;

    if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
      return { ok: false, error: `${label}: expected an object.` };
    }
    const item = raw as Record<string, unknown>;

    if (typeof item.headline !== "string" || !item.headline.trim()) {
      return {
        ok: false,
        error: `${label}: "headline" must be a non-empty string.`,
      };
    }
    if (!isCategory(item.category)) {
      return {
        ok: false,
        error: `${label}: "category" must be one of ${CATEGORIES.join(", ")}.`,
      };
    }
    for (const field of ["link", "description", "doneDate"] as const) {
      if (item[field] !== undefined && typeof item[field] !== "string") {
        return {
          ok: false,
          error: `${label}: "${field}" must be a string when present.`,
        };
      }
    }

    // Keep the stored id when it is usable, otherwise mint one. Duplicate ids
    // would make the detail page ambiguous, so they are replaced too.
    const storedId = item.id;
    const id =
      typeof storedId === "string" && storedId.trim() && !usedIds.has(storedId)
        ? storedId
        : crypto.randomUUID();
    usedIds.add(id);

    const link = typeof item.link === "string" ? item.link.trim() : "";
    const doneDate =
      typeof item.doneDate === "string" ? item.doneDate.trim() : "";

    buckets.push({
      id,
      headline: item.headline.trim(),
      category: item.category,
      link: link || undefined,
      description: typeof item.description === "string" ? item.description : "",
      // Recomputed from doneDate by the hook on write; this is a placeholder.
      done: false,
      doneDate: doneDate || undefined,
    });
  }

  return { ok: true, buckets };
}

// Import replaces the list rather than merging it: the file is a backup, so a
// restore should reproduce it exactly. Merging would need rules for colliding
// ids and near-duplicate headlines, which this app has no way to resolve.
export function ImportExport({
  buckets,
  onImport,
}: {
  buckets: Bucket[];
  onImport: (buckets: Bucket[]) => void;
}) {
  const [status, setStatus] = useState<
    { kind: "ok" | "error"; message: string } | null
  >(null);

  function handleExport() {
    const blob = new Blob([JSON.stringify(buckets, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = FILENAME;
    anchor.click();
    URL.revokeObjectURL(url);
    setStatus({
      kind: "ok",
      message: `Exported ${buckets.length} bucket${buckets.length === 1 ? "" : "s"}.`,
    });
  }

  async function handleImport(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const file = input.files?.[0];
    if (!file) return;

    const text = await file.text();
    // Clearing the value lets the same file be picked again after a failure.
    input.value = "";

    const result = parseBucketsJson(text);
    if (!result.ok) {
      setStatus({ kind: "error", message: result.error });
      return;
    }

    // Only ask once the file is known to be good, so a bad file never
    // threatens the current list.
    if (
      buckets.length > 0 &&
      !window.confirm(
        `Replace all ${buckets.length} current buckets with ${result.buckets.length} from this file?`,
      )
    ) {
      return;
    }

    onImport(result.buckets);
    setStatus({
      kind: "ok",
      message: `Imported ${result.buckets.length} bucket${result.buckets.length === 1 ? "" : "s"}.`,
    });
  }

  return (
    <div className="mt-4">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={handleExport}
          disabled={buckets.length === 0}
          className="btn disabled:opacity-40"
        >
          Export
        </button>

        {/* A label wrapping a hidden input keeps the native file picker but
            lets it wear the same button style as everything else. */}
        <label className="btn cursor-pointer">
          Import
          <input
            type="file"
            accept="application/json,.json"
            onChange={handleImport}
            className="hidden"
          />
        </label>
      </div>

      {status && (
        <p
          role="alert"
          className={`mt-2 text-sm ${
            status.kind === "error" ? "text-secondary" : "text-muted"
          }`}
        >
          {status.message}
        </p>
      )}
    </div>
  );
}
