import Link from "next/link";
import type { Bucket } from "@/types/bucket";

export function BucketList({ buckets }: { buckets: Bucket[] }) {
  return (
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
  );
}
