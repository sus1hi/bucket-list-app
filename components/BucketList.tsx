import Link from "next/link";
import type { Bucket } from "@/types/bucket";

export function BucketList({ buckets }: { buckets: Bucket[] }) {
  return (
    <ul className="mt-6 divide-y divide-muted/30">
      {buckets.map((bucket) => (
        <li key={bucket.id} className="py-3">
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
        </li>
      ))}
    </ul>
  );
}
