"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { BucketForm } from "@/components/BucketForm";
import { Modal } from "@/components/Modal";
import { useBuckets } from "@/hooks/useBuckets";
import type { BucketInput } from "@/types/bucket";

export default function BucketDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { buckets, loaded, updateBucket, deleteBucket } = useBuckets();
  const [isEditOpen, setIsEditOpen] = useState(false);
  // Keeps the "not found" message from flashing between delete and redirect.
  const [isDeleting, setIsDeleting] = useState(false);

  const bucket = buckets.find((item) => item.id === id);

  function handleSave(input: BucketInput) {
    updateBucket(id, input);
    setIsEditOpen(false);
  }

  function handleDelete() {
    if (!window.confirm("Delete this bucket?")) return;
    setIsDeleting(true);
    deleteBucket(id);
    router.push("/");
  }

  // The list only exists after the hook has read localStorage.
  if (!loaded) {
    return <p className="text-muted">Loading…</p>;
  }

  if (!bucket) {
    if (isDeleting) return null;
    return (
      <div>
        <h1 className="text-2xl font-bold">Bucket not found</h1>
        <p className="mt-4">
          <Link href="/" className="text-accent-hover hover:underline">
            Back to list
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl">
      <p className="mb-4">
        <Link href="/" className="text-accent-hover hover:underline">
          Back to list
        </Link>
      </p>

      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">{bucket.headline}</h1>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setIsEditOpen(true)}
            className="btn"
          >
            Edit
          </button>
          <button type="button" onClick={handleDelete} className="btn">
            Delete
          </button>
        </div>
      </div>

      <dl className="mt-6 flex flex-col gap-4">
        <div>
          <dt className="text-sm text-muted">Category</dt>
          <dd>{bucket.category}</dd>
        </div>

        <div>
          <dt className="text-sm text-muted">Status</dt>
          <dd className={bucket.done ? "text-secondary" : undefined}>
            {bucket.done ? `Done (${bucket.doneDate})` : "Open"}
          </dd>
        </div>

        {bucket.link && (
          <div>
            <dt className="text-sm text-muted">Link</dt>
            <dd>
              <a
                href={bucket.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-hover underline"
              >
                {bucket.link}
              </a>
            </dd>
          </div>
        )}

        {bucket.description && (
          <div>
            <dt className="text-sm text-muted">Description</dt>
            <dd className="whitespace-pre-wrap">{bucket.description}</dd>
          </div>
        )}
      </dl>

      {isEditOpen && (
        <Modal title="Edit bucket" onClose={() => setIsEditOpen(false)}>
          <BucketForm
            initial={bucket}
            submitLabel="Save changes"
            onSave={handleSave}
          />
        </Modal>
      )}
    </div>
  );
}
