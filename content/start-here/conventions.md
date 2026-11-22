---
title: Conventions
description: Page kinds, required frontmatter and writing rules.
weight: 2
---

## Page kinds

Set `kind` in frontmatter. The build checks the required fields for each kind against `data/pagekinds.yaml`. Copy a starting file from `templates/` in the repo.

| Kind | Folder | Required fields |
|---|---|---|
| `service` | `services/` | `owner`, `status`, `criticality`, `hosted_on`, `admin_access`, `last_reviewed` |
| `runbook` | `runbooks/` | `owner`, `applies_to`, `risk`, `last_reviewed` |
| `policy` | `policies/` | `owner`, `approved_by`, `effective`, `last_reviewed` |
| `decision` | `decisions/` | `status`, `date` |
| (none) | anywhere | plain page, only `title` |

Pages not reviewed in 180 days show a "Review overdue" note.

## Rules

- **No secrets.** Name the password-manager item in `credentials`, never the value. No Wi-Fi keys, door codes, API tokens or recovery codes anywhere in the repo.
- **Owners are roles**, not personal emails: "IT lead", "Network steward".
- **Write steps as numbered lists**, one action per step, with the expected result.
- **Dates** are `YYYY-MM-DD`.
- **File names** are lowercase-with-dashes.
- **Order in the sidebar** is set with `weight:` (lower comes first). Without it, pages sort by title.
- **Callouts** use GitHub alert syntax: `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`, `> [!CAUTION]`.
