@AGENTS.md

# Bucket List App

A personal bucket-list app for tracking life goals. Each bucket item has a
headline, a category (Activity / Place / Other), an optional link, and a
free-text description. Items can be created, edited, marked complete with
a date, and deleted. Each item has its own detail page. The app supports
category filtering, text search, and a completed/open counter.

## Stack

- Next.js (App Router — not Pages Router)
- TypeScript
- Tailwind CSS
- No backend, no login. Runs locally only via `npm run dev` at localhost:3000.
- Data persistence mechanism: TBD (to be decided after consulting Claude Code)

## Rules

- Use the App Router (`app/`), never the Pages Router.
- Do not add new libraries or dependencies without asking first.
- All code, comments, and file content must be in English.
- Keep components small and focused; one feature at a time.
- Do not run `npm audit fix --force`.
