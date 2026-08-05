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
    <div className="mt-4 border-b border-rule">
      {/* Printed column headers. Hidden below 40rem, where .ledger-row drops
          to a stacked layout and there are no columns left to head. The
          fourth grid column is left empty for the delete button. */}
      <div
        className="ledger-row hidden border-b-2 border-foreground/50 py-1.5 font-typewriter text-[0.75rem] font-bold uppercase tracking-[0.1em] sm:grid"
        aria-hidden="true"
      >
        <span>Entry</span>
        <span>Category</span>
        <span>Done</span>
      </div>

      {/* Greenbar: the alternating bands are the row separation, so there are
          no divider rules on top of them. */}
      <ul>
        {buckets.map((bucket) => (
          <li key={bucket.id} className="ledger-row odd:bg-band">
            {/* Three things are needed together, and min-w-0 alone was not
                enough: flex-1 + min-w-0 let this box shrink below the width of
                its longest word, and break-words lets the text actually break
                inside that word. Without the last one a long unbroken headline
                simply overflowed the box and ran under the button. */}
            <Link
              href={`/buckets/${bucket.id}`}
              className={`col-start-1 row-start-1 min-w-0 break-words font-bold hover:text-accent-hover hover:underline ${
                bucket.done
                  ? "line-through decoration-secondary decoration-2"
                  : ""
              }`}
            >
              {bucket.headline}
            </Link>

            {/* One typewritten metadata line below 40rem; at 40rem and up
                `contents` dissolves this wrapper so the two spans become grid
                items in their own columns. Font and size are set here and
                inherit through `display: contents`, so both layouts share
                them. */}
            <div className="col-start-1 row-start-2 flex items-baseline gap-3 font-typewriter text-[0.8rem] font-bold uppercase tracking-[0.1em] sm:contents">
              <span className="text-muted sm:col-start-2 sm:row-start-1">
                {bucket.category}
              </span>

              <span className="sm:col-start-3 sm:row-start-1">
                {bucket.done ? (
                  <span className="text-secondary">
                    {/* The column header carries this word on wide screens
                        and is hidden on narrow ones, so the row states it
                        for assistive tech either way. */}
                    <span className="sr-only">Done </span>
                    {bucket.doneDate}
                  </span>
                ) : (
                  <>
                    <span className="sr-only">Open</span>
                    <span aria-hidden="true" className="text-muted sm:hidden">
                      Open
                    </span>
                    {/* The blank waiting to be filled in. A column of these
                        with a few dates written into it is the page. */}
                    <span
                      aria-hidden="true"
                      className="hidden w-16 border-b border-dotted border-rule sm:inline-block"
                    />
                  </>
                )}
              </span>
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
                className="col-start-2 row-start-1 w-6 shrink-0 self-center font-typewriter text-lg font-bold leading-none text-muted hover:text-secondary sm:col-start-4"
              >
                &times;
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
