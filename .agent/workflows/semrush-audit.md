---
description: Run an autonomous Semrush-style SEO audit on the codebase
---

# Semrush SEO Audit Agent

This workflow triggers a deep SEO analysis of the project, mimicking the checks performed by Semrush.

## 1. Prepare Environment
Ensure dependencies are installed for the audit tools.

```bash
npm install -g ts-node typescript
# Ensure local dev dependencies are installed
npm install
```

## 2. Run the Semrush Agent
Execute the main agent script which will:
- Crawl the `app/` directory
- Analyze metadata, H1s, and content quality
- Check for broken links and images
- Generate a comprehensive report

// turbo
```bash
npx ts-node tools/seo-audit/semrush-agent.ts
```

## 3. Review Report
The agent will generate a report at `tools/seo-audit/semrush-report.md`.
Open this file to see the findings.

```bash
open tools/seo-audit/semrush-report.md
```
