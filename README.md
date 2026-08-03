# Bucket List

A personal bucket-list app for tracking life goals. Each item has a headline, a
category (Activity / Place / Other), an optional link, and a free-text
description. Items can be created, edited, marked complete with a date, and
deleted, and each one has its own detail page. The list supports filtering by
category, searching by headline, and a running completed/open counter.

## Screenshot

![The Bucket List home page: a category nav bar, the done/open counter, the
Export and Import buttons, a search field, and the list of items with their
category, status, and a delete button.](screenshot.png)

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **localStorage** for persistence — no backend, no database, no login

Data lives entirely in the browser, so the list is per-browser and per-device.
Clearing site data clears the buckets.

## Getting Started

```bash
git clone https://github.com/sus1hi/bucket-list-app.git
cd bucket-list-app
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Features

- **Create** a bucket item through a modal form: headline, category, optional
  link, description, and an optional completion date.
- **List view** on the home page showing every item with its category and
  status.
- **Detail page** per item at `/buckets/[id]`, showing all fields.
- **Edit** any item from its detail page, using the same form.
- **Delete** an item, with a confirmation prompt.
- **Quick-delete** straight from the list via an × button on each row, on the
  home page and the category pages alike, with the same confirmation prompt.
- **Category pages** at `/category/Activity`, `/category/Place`, and
  `/category/Other`, reachable from the nav bar.
- **Search** the list by headline.
- **Counter** showing how many items are done and how many are still open.
- **Automatic done status** — an item counts as complete exactly when it has a
  completion date, so the two fields can never disagree.
- **Persistence** across reloads via `localStorage` (key: `bucketlist.v1`),
  with corrupt stored data falling back to an empty list instead of crashing.
- **JSON export/import** on the home page as a manual backup: export writes
  the list to `bucketlist-export.json`, import validates the file first and
  then replaces the current list, after a confirmation prompt.
- **Category-specific background illustrations** — a landscape on the home
  page, and activity, world-map, and night-sky scenes on the category and
  detail pages, all contrast-checked to stay legible behind text.
