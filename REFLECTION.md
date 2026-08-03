# Reflection

## Persistence decision

I consulted Claude Code on how to persist data for a single-user,
no-backend browser app. The options considered were localStorage,
sessionStorage, IndexedDB, cookies, the File System Access API, and
manual JSON export/import.

I chose **localStorage**, with a manual JSON export/import as a backup.
The app's dataset is small (text-only bucket list items), so localStorage's
5 MB limit and lack of querying are not real constraints. IndexedDB would
add async complexity and a schema for a scale problem this app does not
have. The export/import feature guards against localStorage's main risk:
it is browser-managed storage that can be wiped by clearing site data or
switching machines.

## What I built and how I scoped it

A bucket-list app: each item has a headline, a category (Activity / Place /
Other), an optional link, a description, and a done status carrying its
completion date. Every item gets its own detail page; the list supports
category filtering, headline search, and a done/open counter. I cut anything
needing a server — no accounts, no sharing, no sync — plus tags, priorities,
and due dates. Only once that core worked did I add JSON export/import and a
quick-delete × on each row.

## The technique that changed the outcome

AGENTS.md warns that this Next.js version differs from the model's training
data. Before writing any route, I had Claude read the installed docs and
capture the dynamic-segments section into `docs/nextjs-routing.md`, source
URL cited. That is why my routes take `params` as a `Promise` and unwrap it —
`use(params)` in the detail page — instead of the plain object memory would
have produced.

## The design pass

I asked for a handwriting font, a warm palette, and per-category background
illustrations. The scaffold's black-on-white Geist with dark mode became
Kalam on warm cream, with one amber button style. Contrast was a hard
requirement, and it changed decisions: white on amber failed at 2.4:1, so
buttons use deep brown at 5.6:1, and I darkened the muted taupe to 4.81:1.

## Harder than the static-site lesson

The client/server split. localStorage does not exist during server rendering,
so reads have to happen in an effect — and the load order caused two bugs.
The save effect ran before the load finished and wrote an empty array over my
stored list, fixed with a `loaded` guard. Deleting from a detail page briefly
flashed "Bucket not found" before the redirect, fixed with an `isDeleting`
flag.

## What I would keep or change

I would keep the small single-feature commits and citing sources in `docs/`.
Next time I would build the storage hook's load and save guards first, since
every later bug traced back to them.
