# Progress

## Last Session Summary
- **Date:** 2026-02-10
- **What was done:**
  - Built auto-update system: tag repos with `portfolio` topic, data syncs from GitHub API
  - Created data layer: `data/config.ts`, `data/overrides.ts`, `data/projects.json`, `data/index.ts`
  - Created sync script: `scripts/sync-projects.ts` (pre-build, fetches GitHub API)
  - Refactored all 7 components to import from `@/data`
  - Converted CV from static HTML to Next.js page at `app/cv/page.tsx`
  - Added GitHub Actions deploy workflow (daily cron + push + manual)
  - Tagged 4 repos with "portfolio" topic
  - Build verified passing with `/` and `/cv` routes

- **What's next:**
  - Push to master to trigger first GitHub Pages deploy
  - Verify live URLs work

## Live URLs
- Portfolio: https://yonkoo11.github.io/portfolio/
- CV: https://yonkoo11.github.io/portfolio/cv
- Repo: https://github.com/Yonkoo11/portfolio

## How to add a new project
1. `gh repo edit Yonkoo11/<repo> --add-topic portfolio`
2. Optionally add override in `data/overrides.ts`
3. Wait for daily cron or trigger: `gh workflow run deploy.yml`
