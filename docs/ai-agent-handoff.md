# AI agent handoff — nodedevops

Reusable Node and TypeScript quality workflow. Callers pin a commit or tag and pass the same value as `devops_ref`.

## Pins

| Item | Value |
|------|-------|
| guardrails | 1.15.0 (`2d4bb70e95449f6922781716857adeb22badf676`) |
| github-scaffold | 1.12.0 (`9c443ea978851768f451b1df2020dd86dfb1a967`) |
| commondevops | `0e78652fa9f65b9d98033ac82bf9e5308ebb17a7` |
| Node image | `node:24-bookworm-slim@sha256:dc26ae92c9fb15cf6b1d63e20f0944b2efe0f115b20e00be48fb23fceb061c54` |

## Commands

```bash
sh scripts/check-ci-local.sh
```

## Known pitfalls

The analog submodules are private. A public caller checkout does not clone them unless it has a read token. Coverage floors are workflow inputs so the job does not need the private pack at runtime.

*Last updated: 2026-11-20 — initial node-quality workflow.*
