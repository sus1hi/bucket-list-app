"use client";

import { useState } from "react";
import { BucketForm } from "@/components/BucketForm";
import { BucketList } from "@/components/BucketList";
import { Modal } from "@/components/Modal";
import { useBuckets } from "@/hooks/useBuckets";
import type { BucketInput } from "@/types/bucket";

export default function Home() {
  const { buckets, loaded, addBucket } = useBuckets();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [search, setSearch] = useState("");

  function handleCreate(input: BucketInput) {
    addBucket(input);
    setIsFormOpen(false);
  }

  // An empty query matches every headline, so no special case is needed.
  const query = search.trim().toLowerCase();
  const visibleBuckets = buckets.filter((bucket) =>
    bucket.headline.toLowerCase().includes(query),
  );

  // The counter reflects the full list, not the current search.
  const doneCount = buckets.filter((bucket) => bucket.done).length;
  const openCount = buckets.length - doneCount;

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

      {loaded && (
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {doneCount} done &middot; {openCount} open
        </p>
      )}

      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search by headline"
        aria-label="Search buckets by headline"
        className="mt-6 w-full rounded border border-zinc-300 px-2 py-1 dark:border-zinc-700 dark:bg-zinc-900"
      />

      {loaded && buckets.length === 0 && (
        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
          No buckets yet.
        </p>
      )}

      {buckets.length > 0 && visibleBuckets.length === 0 && (
        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
          No buckets match your search.
        </p>
      )}

      {visibleBuckets.length > 0 && <BucketList buckets={visibleBuckets} />}

      {isFormOpen && (
        <Modal title="New bucket" onClose={() => setIsFormOpen(false)}>
          <BucketForm onSave={handleCreate} />
        </Modal>
      )}
    </div>
  );
}
