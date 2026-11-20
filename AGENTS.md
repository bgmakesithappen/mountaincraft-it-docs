# Agent rules: Mountaincraft IT Docs

This repo is a Starlight (Astro) docs site for the Mountaincraft Makerspace IT team. Agents draft pull requests from change-request issues. A human always reviews and merges.

## Drafting a PR from an issue

- One issue, one PR, one topic. Put `Closes #<issue>` in the PR body.
- Change only what the issue asks for. If it is ambiguous, comment on the issue with a question instead of guessing.
- New pages start from `templates/<kind>.md`. Keep frontmatter valid for its `kind` (schema: `src/content.config.ts`).
- Set `last_reviewed` to today only on pages whose facts the issue confirms.
- Never write passwords, keys, Wi-Fi passphrases, door codes or tokens. If an issue contains one, do not copy it. Reference the password-manager item name and flag the issue for a human.
- Do not edit `policies/`, `decisions/`, `.github/`, `astro.config.mjs` or `src/content.config.ts` unless the issue is explicitly about them. Those need an IT lead.
- Run `npm run build` before opening the PR. It must pass.

## Writing style

Plain, short sentences. Numbered steps, one action each, with the expected result. Dates as YYYY-MM-DD. See `src/content/docs/start-here/conventions.md`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Astro docs: https://docs.astro.build. Starlight docs: https://starlight.astro.build.
