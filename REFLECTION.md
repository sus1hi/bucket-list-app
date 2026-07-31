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

[More sections to be added: what I built and scoped down, a Sprint 1
technique that changed the outcome, the design pass, what was harder than
the static-site lesson, what I'd change next time.]
