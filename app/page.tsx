"use client";

import { useState } from "react";
import { BucketForm } from "@/components/BucketForm";
import { BucketList } from "@/components/BucketList";
import { HomeBackground } from "@/components/HomeBackground";
import { ImportExport } from "@/components/ImportExport";
import { Modal } from "@/components/Modal";
import { useBuckets } from "@/hooks/useBuckets";
import type { BucketInput } from "@/types/bucket";

export default function Home() {
  const { buckets, loaded, addBucket, deleteBucket, replaceBuckets } =
    useBuckets();
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

  // The tally reflects the full list, not the current search.
  const doneCount = buckets.filter((bucket) => bucket.done).length;
  const openCount = buckets.length - doneCount;

  return (
    <>
      <HomeBackground />
      <div className="max-w-3xl">
        {/* The sheet's head: what you wrote at the top of the page on the
            left, the standing balance on the right. */}
        <header className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <h1 className="text-4xl font-bold">Bucket List</h1>

          {loaded && (
            <dl className="font-typewriter text-[0.75rem] font-bold uppercase tracking-[0.1em]">
              <div className="flex items-baseline justify-between gap-8 border-b border-rule pb-0.5">
                <dt>Open</dt>
                <dd className="text-base tracking-normal">{openCount}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-8 pt-0.5">
                <dt>Done</dt>
                <dd className="text-base tracking-normal text-secondary">
                  {doneCount}
                </dd>
              </div>
            </dl>
          )}
        </header>

        {/* Tool line. The search field is a fill-in-the-blank rule rather than
            a box, so what you type reads as written onto the form. */}
        <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
          <label className="flex min-w-0 flex-1 items-baseline gap-3">
            <span className="font-typewriter text-[0.75rem] font-bold uppercase tracking-[0.1em]">
              Find
            </span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="by headline"
              className="min-w-0 flex-1 border-b border-rule bg-transparent pb-1 placeholder:text-muted focus:border-foreground"
            />
          </label>

          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="btn shrink-0 px-4 py-1.5"
          >
            + Add bucket
          </button>
        </div>

        {loaded && buckets.length === 0 && (
          <p className="mt-8 text-muted">
            This page is empty. Add your first bucket to start the list.
          </p>
        )}

        {buckets.length > 0 && visibleBuckets.length === 0 && (
          <p className="mt-8 text-muted">
            No buckets match &ldquo;{search.trim()}&rdquo;.
          </p>
        )}

        {visibleBuckets.length > 0 && (
          <BucketList buckets={visibleBuckets} onDelete={deleteBucket} />
        )}

        {/* Gated on `loaded` so an import cannot be overwritten by the hook's
            initial read of localStorage, which runs once on mount. The note
            sits here because it is what makes Export worth pressing. */}
        {loaded && (
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-4">
            <p className="max-w-xs font-typewriter text-[0.75rem] font-bold uppercase leading-relaxed tracking-[0.1em] text-muted">
              Saved in this browser only. Export a copy to keep it.
            </p>
            <ImportExport buckets={buckets} onImport={replaceBuckets} />
          </div>
        )}

        {isFormOpen && (
          <Modal title="New bucket" onClose={() => setIsFormOpen(false)}>
            <BucketForm onSave={handleCreate} />
          </Modal>
        )}
      </div>
    </>
  );
}
