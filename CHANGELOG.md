# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `ci.yml` runs doc verification, scaffold verification, secret scanning, and Scorecard.
- Dependabot updates are one multi-ecosystem group.

### Removed

- The unused Dockerfile. Callers install Node with `actions/setup-node`.

### Changed

- `docs/guardrails` is 1.17.0 and `.github/scaffold` is 1.14.0.
- `checkout_token` is passed to the nodedevops checkout.

## [1.0.0] - 2026-11-20

### Added

- `node-quality.yml` runs ESLint, tsc, tests, coverage floors, and npm audit.
- Digest-pinned Node 24 CI image running as uid 10001.
