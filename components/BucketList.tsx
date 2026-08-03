import Link from "next/link";
import type { Bucket } from "@/types/bucket";

// `onDelete` is optional: the row only grows a delete button where the caller
// supplies one. Both the home page and the category pages pass deleteBucket,
// so the two lists behave identically. It stays optional so a read-only list
// remains possible without touching this component.
export function BucketList({
  buckets,
  onDelete,
}: {
  buckets: Bucket[];
  onDelete?: (id: string) => void;
}) {
  return (
    <ul className="mt-6 divide-y divide-muted/30">
      {buckets.map((bucket) => (
        <li key={bucket.id} className="flex items-start gap-3 py-3">
          {/* Three things are needed together, and min-w-0 alone was not
              enough: flex-1 + min-w-0 let this box shrink below the width of
              its longest word, and break-words lets the text actually break
              inside that word. Without the last one a long unbroken headline
              simply overflowed the box and ran under the button. */}
          <div className="min-w-0 flex-1 break-words">
            <Link
              href={`/buckets/${bucket.id}`}
              className="font-bold hover:text-accent-hover"
            >
              {bucket.headline}
            </Link>
            <p className="text-sm text-muted">
              {bucket.category} &middot;{" "}
              {bucket.done ? (
                <span className="text-secondary">Done ({bucket.doneDate})</span>
              ) : (
                "Open"
              )}
            </p>
          </div>

          {onDelete && (
            <button
              type="button"
              // Names the item, so the prompt is unambiguous in a long list
              // and screen readers can tell the buttons apart.
              aria-label={`Delete ${bucket.headline}`}
              onClick={() => {
                if (window.confirm(`Delete "${bucket.headline}"?`)) {
                  onDelete(bucket.id);
                }
              }}
              className="shrink-0 rounded px-2 py-0.5 text-lg leading-none text-muted hover:bg-secondary/10 hover:text-secondary"
            >
              &times;
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
