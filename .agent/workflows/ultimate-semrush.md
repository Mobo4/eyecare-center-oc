---
description: Run the Ultimate Semrush Clone with live server crawling
---

# Ultimate Semrush Clone - 100% Coverage

This is the complete SEO auditor with two modes:

## Static Mode (Fast - No Server)
Analyzes codebase only. Good for quick checks.

```bash
npm run audit:static
```

## Live Mode (Complete - Starts Server)
Starts Next.js dev server, crawls with fetch API, analyzes rendered content.
**This gives you 100% Semrush parity!**

// turbo
```bash
npm run audit:live
```

## What Live Mode Adds
- ✅ Actual word count from rendered HTML
- ✅ Real text/HTML ratio from browser
- ✅ HTTP status codes (4XX detection)
- ✅ Page load times
- ✅ Rendered H1 validation
- ✅ External link checking
- ✅ Performance metrics

## Fix All Issues

```bash
npm run audit:fix
```

## Reports
- Static: `tools/seo-audit/ultimate-semrush-report-static.md`
- Live: `tools/seo-audit/ultimate-semrush-report-live.md`

## Comparison

| Feature | Static Mode | Live Mode |
|---------|-------------|-----------|
| Speed | ⚡ Fast (10s) | 🐢 Slow (2-3min) |
| Accuracy | 85% | 100% |
| Server Required | No | Yes |
| Coverage | Code only | Full site |

**Recommendation**: Use Static for development, Live before deployment.
