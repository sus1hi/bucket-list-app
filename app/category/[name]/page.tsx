"use client";

import { use } from "react";
import { ActivityBackground } from "@/components/ActivityBackground";
import { BucketList } from "@/components/BucketList";
import { PlaceBackground } from "@/components/PlaceBackground";
import { useBuckets } from "@/hooks/useBuckets";
import { CATEGORIES } from "@/types/bucket";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = use(params);
  const { buckets, loaded } = useBuckets();

  // Resolve the URL segment to the canonical category, so the heading always
  // shows the official casing regardless of how the URL was typed.
  const category = CATEGORIES.find(
    (item) => item.toLowerCase() === name.toLowerCase(),
  );

  // Validity depends only on the URL, so this needs no stored data.
  if (!category) {
    return (
      <div className="max-w-xl">
        <h1 className="text-2xl font-bold">Unknown category</h1>
        <p className="mt-6 text-muted">
          &quot;{name}&quot; is not one of {CATEGORIES.join(", ")}.
        </p>
      </div>
    );
  }

  const matches = buckets.filter((bucket) => bucket.category === category);

  return (
    <>
      {category === "Activity" && <ActivityBackground />}
      {category === "Place" && <PlaceBackground />}
      <div className="max-w-xl">
        <h1 className="text-2xl font-bold">Category: {category}</h1>

        {loaded && matches.length === 0 && (
          <p className="mt-6 text-muted">No buckets in this category yet.</p>
        )}

        {matches.length > 0 && <BucketList buckets={matches} />}
      </div>
    </>
  );
}
