"use client";

import { useState } from "react";
import { CATEGORIES, type BucketInput, type Category } from "@/types/bucket";

// Optional fields become empty strings, because the inputs are controlled.
function toFormState(initial?: BucketInput) {
  return {
    headline: initial?.headline ?? "",
    category: initial?.category ?? ("Activity" as Category),
    link: initial?.link ?? "",
    description: initial?.description ?? "",
    doneDate: initial?.doneDate ?? "",
  };
}

// border-rule rather than a faded --muted: a field boundary is meaningful UI,
// so it has to clear 3:1 against the paper behind it (4.01:1), which a 40%
// tint of --muted did not (1.98:1).
const inputClasses =
  "w-full rounded border border-rule bg-background px-2 py-1";

// The bucket is written by the parent, which owns the list state. This
// component only collects the input, for both creating and editing.
export function BucketForm({
  initial,
  submitLabel = "Add bucket",
  onSave,
}: {
  initial?: BucketInput;
  submitLabel?: string;
  onSave: (input: BucketInput) => void;
}) {
  // `initial` is read on mount only; the modal remounts the form on each open.
  const [form, setForm] = useState(() => toFormState(initial));

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    onSave({
      headline: form.headline.trim(),
      category: form.category,
      link: form.link.trim() || undefined,
      description: form.description.trim(),
      doneDate: form.doneDate || undefined,
    });
    setForm(toFormState(initial));
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className="flex flex-col gap-1">
        Headline
        <input
          required
          autoFocus
          value={form.headline}
          onChange={(event) =>
            setForm({ ...form, headline: event.target.value })
          }
          className={inputClasses}
        />
      </label>

      <label className="flex flex-col gap-1">
        Category
        <select
          value={form.category}
          onChange={(event) =>
            setForm({ ...form, category: event.target.value as Category })
          }
          className={inputClasses}
        >
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1">
        Link
        <input
          type="url"
          value={form.link}
          onChange={(event) => setForm({ ...form, link: event.target.value })}
          className={inputClasses}
        />
      </label>

      <label className="flex flex-col gap-1">
        Description
        <textarea
          rows={3}
          value={form.description}
          onChange={(event) =>
            setForm({ ...form, description: event.target.value })
          }
          className={inputClasses}
        />
      </label>

      <label className="flex flex-col gap-1">
        Done date
        <input
          type="date"
          value={form.doneDate}
          onChange={(event) =>
            setForm({ ...form, doneDate: event.target.value })
          }
          className={inputClasses}
        />
      </label>

      <button type="submit" className="btn self-start">
        {submitLabel}
      </button>
    </form>
  );
}
