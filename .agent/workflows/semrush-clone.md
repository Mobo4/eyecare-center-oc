---
description: Run the Semrush Clone SEO Checker on the codebase
---

# Semrush Clone SEO Checker

This workflow runs a comprehensive SEO audit that replicates Semrush's Site Audit capabilities.

## Features
- ✅ Broken link detection (88 issues in Semrush)
- ✅ Schema validation (43 issues in Semrush)
- ✅ Sitemap accuracy (30 issues in Semrush)
- ✅ Metadata analysis (titles, descriptions, canonicals)
- ✅ Content quality (word count, text/HTML ratio)
- ✅ H1 tag validation
- ✅ Global file checking (robots.txt, sitemap.xml, favicon, llms.txt)

## Run the Audit

// turbo
```bash
npx ts-node tools/seo-audit/semrush-clone.ts
```

## View Results

```bash
open tools/seo-audit/semrush-clone-report.md
```

## Compare with Semrush

After running, compare the results with your live Semrush audit to validate accuracy.
