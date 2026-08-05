---
name: pr-review
description: Pre-commit hygiene checklist for the user's own in-progress changes — diff summary, oversized-file warnings, and commit message quality. Use when the user says "before I commit", "before I push", "check my changes before committing", or otherwise asks for a look over uncommitted or unpushed work.
---

Work through the checklist below in order. Report the findings as a short
written summary — do not edit any files or amend any commits unless the user
asks for that afterwards.

## 1. Read the diff summary

Determine the review range:

- A PR number or branch was named → `git diff main...<branch>`
- Otherwise → `git diff main...HEAD`
- If that range is empty, or there are uncommitted changes → also run
  `git diff HEAD` and include the working tree in scope

Get the per-file summary first, before reading any file contents:

```
git diff --stat <range>
```

Then read the full diff for the changed files and summarize, in two or three
sentences, what the change actually does.

## 2. Flag files with a large number of changes

From the `--stat` output, add up insertions + deletions per file and flag:

- Any single file with **more than 150 changed lines**
- A total diff of **more than 500 changed lines** across all files

For each flagged file, say how many lines changed and whether it looks
splittable — for example a genuinely new file or a mechanical rename is fine at
any size, while 300 mixed edits to one existing module is worth splitting into
separate commits. If nothing crosses the thresholds, say so in one line.

## 3. Check the commit message

Read the message under review:

```
git log -1 --pretty=%B
```

Call it vague if it does any of these:

- Says only what kind of change it is, not what changed (`fix`, `update`,
  `changes`, `wip`, `misc`)
- Names a file without saying what happened to it (`update page.tsx`)
- Is a bare ticket reference with no summary

If it is vague, propose a replacement: an imperative subject line under ~72
characters naming the concrete change, plus a body line on the *why* when the
reason is not obvious from the subject. Show the suggested message in a fenced
block so it is easy to copy. If the existing message is already specific, say
so and move on — do not rewrite good messages.

## Scope

This is a quality and hygiene pass. Correctness bugs and security issues are
out of scope here — point the user at `/code-review` or `/security-review` if
the diff looks like it needs one.
