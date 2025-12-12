# SEO Audit Tool

A local "mini-Semrush" that scans your Next.js codebase for common SEO issues.

## Features

- **Missing Metadata**: Checks all `page.tsx` files for `metadata` exports
- **Missing Alt Text**: Scans images for accessibility and SEO
- **Missing Schema**: Verifies JSON-LD structured data on key pages
- **Broken Links**: Detects internal links pointing to non-existent routes
- **Keyword Gaps**: Analyzes keyword density on homepage/layout

## Usage

```bash
# From project root
node tools/seo-audit/audit.mjs
```

## Output

- Console report with severity levels (🔴 HIGH, 🟡 MEDIUM, 🟢 LOW)
- JSON report saved to `docs/seo-audit-report.json`

## Configuration

Edit `tools/seo-audit/config.mjs` to customize:
- Required keywords
- Excluded directories
- Critical pages list
