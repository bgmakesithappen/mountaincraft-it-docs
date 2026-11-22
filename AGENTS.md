# Agent rules: Mountaincraft IT Docs

This repo is a Hugo docs site (Hextra theme) for the Mountaincraft Makerspace IT team. Agents draft pull requests from change-request issues. A human always reviews and merges.

## Drafting a PR from an issue

- One issue, one PR, one topic. Put `Closes #<issue>` in the PR body.
- Change only what the issue asks for. If it is ambiguous, comment on the issue with a question instead of guessing.
- New pages start from `templates/<kind>.md`. Keep frontmatter valid for its `kind` (rules: `data/pagekinds.yaml`).
- Set `last_reviewed` to today only on pages whose facts the issue confirms.
- Never write passwords, keys, Wi-Fi passphrases, door codes or tokens. If an issue contains one, do not copy it. Reference the password-manager item name and flag the issue for a human.
- Do not edit `content/policies/`, `content/decisions/`, `.github/`, `hugo.toml`, `data/`, `layouts/`, `assets/` or `themes/` unless the issue is explicitly about them. Those need an IT lead.
- Do not add npm, Node or other build dependencies.
- Run `hugo --gc --minify` before opening the PR. It must pass.

## Writing style

Plain, short sentences. Numbered steps, one action each, with the expected result. Dates as YYYY-MM-DD. Callouts use GitHub alert syntax (`> [!WARNING]`). See `content/start-here/conventions.md`.

## Development

`hugo server` serves the site at http://localhost:1313 with live reload. Hugo docs: https://gohugo.io/documentation/. Hextra docs: https://imfing.github.io/hextra/docs/.
