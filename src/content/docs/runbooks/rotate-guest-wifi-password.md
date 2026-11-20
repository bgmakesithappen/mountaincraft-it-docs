---
title: Rotate the guest Wi-Fi password (EXAMPLE)
description: Example runbook. Replace with the real procedure.
kind: runbook
owner: Network steward
applies_to:
  - services/wifi
risk: low
last_reviewed: 2026-11-19
---

:::caution[Example page]
This page shows the runbook format. Replace the steps before launch.
:::

## When to use this

On the scheduled rotation, or after the password has been shared outside the space.

## Before you start

- Admin access to the Wi-Fi controller (password manager item: "IT / Wi-Fi controller admin").
- About 10 minutes.

## Steps

1. Generate a new password in the password manager and save it to the guest Wi-Fi item.
2. Sign in to the Wi-Fi controller.
3. Update the guest network password. Expected: guest devices disconnect.
4. Update the signage at the front desk.
5. Post in the members channel that the guest password changed.

## Rollback

Restore the previous password from the item's history in the password manager.
