---
description: Run a comprehensive local SEO audit on the current project
---

# SEO Audit Workflow

This workflow runs a local "mini-Semrush" audit on the codebase to detect common SEO issues.

## Prerequisites
- Node.js 18+
- Project must have an `app/` directory (Next.js App Router)

## Steps

// turbo
1. Run the SEO audit script:
```bash
node tools/seo-audit/audit.mjs
```

2. Review the console output for:
   - 🔴 HIGH severity issues (fix immediately)
   - 🟡 MEDIUM severity issues (fix soon)
   - 🟢 LOW severity issues (nice to have)

3. Check the detailed JSON report at `docs/seo-audit-report.json`

4. For each HIGH severity issue:
   - Missing Metadata: Add `export const metadata` to the page
   - Missing Schema: Add JSON-LD or import a Schema component
   - Broken Links: Fix the href or create the missing page

5. Re-run the audit to confirm fixes:
```bash
node tools/seo-audit/audit.mjs
```
