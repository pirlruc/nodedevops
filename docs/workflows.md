# Workflows

## ci.yml

Runs on pull request and on push to `main`.

| Job | Reusable |
| --- | --- |
| infra-lint | `common-infra-lint` |
| pins | `common-pins-verify` |
| docs | `common-doc-verify` with `run_hygiene: true` |
| secrets-sast | `common-secrets-sast` |
| scorecard | `common-scorecard` (advisory) |

## node-quality.yml

Callers pin the workflow by tag and pass the same value as `devops_ref`.
`checkout_token` is optional and is used only when this repository is private.
