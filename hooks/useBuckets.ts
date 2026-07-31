"use client";

import { useCallback, useEffect, useState } from "react";
import type { Bucket, BucketInput } from "@/types/bucket";

const STORAGE_KEY = "bucketlist.v1";

// Business rule: a bucket is done exactly when it has a non-empty doneDate.
// Applied on every write so the two fields can never contradict each other.
function applyDoneRule(bucket: Bucket): Bucket {
  const doneDate = bucket.doneDate?.trim() ? bucket.doneDate : undefined;
  return { ...bucket, doneDate, done: Boolean(doneDate) };
}

export function useBuckets() {
  const [buckets, setBuckets] = useState<Bucket[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load once on mount. localStorage only exists in the browser, so this must
  // not run during server rendering.
  useEffect(() => {
    let stored: Bucket[] = [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          stored = parsed;
        }
      }
    } catch {
      // Corrupt or hand-edited data: start empty instead of crashing.
    }
    // Reading an external store on mount is what this effect is for. The lint
    // rule targets state derived from props/state, which this is not.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBuckets(stored);
    setLoaded(true);
  }, []);

  // Save on change, but never before the initial load has finished — otherwise
  // the empty initial state would overwrite the stored list.
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(buckets));
  }, [buckets, loaded]);

  const addBucket = useCallback((input: BucketInput) => {
    setBuckets((current) => [
      ...current,
      applyDoneRule({ ...input, id: crypto.randomUUID(), done: false }),
    ]);
  }, []);

  const updateBucket = useCallback(
    (id: string, changes: Partial<BucketInput>) => {
      setBuckets((current) =>
        current.map((bucket) =>
          bucket.id === id ? applyDoneRule({ ...bucket, ...changes }) : bucket,
        ),
      );
    },
    [],
  );

  const deleteBucket = useCallback((id: string) => {
    setBuckets((current) => current.filter((bucket) => bucket.id !== id));
  }, []);

  return { buckets, loaded, addBucket, updateBucket, deleteBucket };
}
