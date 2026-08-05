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
- Data persistence mechanism: localStorage (key: `bucketlist.v1`), with a
  manual JSON export/import as backup. Read/write only inside useEffect,
  never in the component body (Next.js renders first on the server, where
  localStorage does not exist).

## Rules

- Use the App Router (`app/`), never the Pages Router.
- Do not add new libraries or dependencies without asking first.
- All code, comments, and file content must be in English.
- Keep components small and focused; one feature at a time.
- Do not run `npm audit fix --force`.
- Follow WCAG contrast guidelines (minimum 4.5:1 for normal text, 3:1 for
  large text) for all color and typography choices.
- After any code change, run the build (`npx tsc --noEmit`) and any relevant
  tests before reporting a task as complete. Never claim something works,
  passes, or is verified without having actually run it.
- Never invent data, results, or test outcomes. If something fails or
  cannot be verified, state that clearly and stop — do not silently fall
  back to a default, placeholder, or guessed value.
