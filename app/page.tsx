"use client";

import Link from "next/link";
import { useState } from "react";
import { BucketForm } from "@/components/BucketForm";
import { useBuckets } from "@/hooks/useBuckets";
import type { BucketInput } from "@/types/bucket";

export default function Home() {
  const { buckets, loaded, addBucket } = useBuckets();
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleCreate(input: BucketInput) {
    addBucket(input);
    setIsFormOpen(false);
  }

  return (
    <div className="max-w-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Bucket List</h1>
        <button
          type="button"
          onClick={() => setIsFormOpen(true)}
          className="rounded border border-zinc-300 px-3 py-1 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          + Add bucket
        </button>
      </div>

      {loaded && buckets.length === 0 && (
        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
          No buckets yet.
        </p>
      )}

      {buckets.length > 0 && (
        <ul className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-800">
          {buckets.map((bucket) => (
            <li key={bucket.id} className="py-3">
              <Link
                href={`/buckets/${bucket.id}`}
                className="font-medium hover:underline"
              >
                {bucket.headline}
              </Link>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {bucket.category} &middot;{" "}
                {bucket.done ? `Done (${bucket.doneDate})` : "Open"}
              </p>
            </li>
          ))}
        </ul>
      )}

      {isFormOpen && (
        <div
          // Closes only when the overlay itself is clicked, not the panel.
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsFormOpen(false);
          }}
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 p-4"
        >
          <div className="max-h-full w-full max-w-md overflow-y-auto rounded bg-white p-4 dark:bg-zinc-900">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-medium">New bucket</h2>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                aria-label="Close"
                className="px-2 text-xl leading-none"
              >
                &times;
              </button>
            </div>
            <BucketForm onCreate={handleCreate} />
          </div>
        </div>
      )}
    </div>
  );
}
