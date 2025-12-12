/**
 * SEO Audit Configuration
 */

export const CONFIG = {
    // Directories to scan
    appDir: 'app',
    componentsDir: 'components',
    dataDir: 'data',

    // Directories to exclude
    excludeDirs: ['node_modules', '.next', '.git', 'public', 'tools'],

    // Required keywords for homepage/layout analysis
    requiredKeywords: [
        'eye care',
        'optometrist',
        'eye doctor',
        'orange county',
        'keratoconus',
        'dry eye',
        'lasik',
        'cataract',
        'contact lenses',
        'eye exam',
        'vision',
        'ophthalmologist',
        'scleral lens',
    ],

    // Critical pages that MUST have Schema markup
    criticalPagesForSchema: [
        'app/page.tsx',           // Homepage
        'app/about/page.tsx',     // About
        'app/contact/page.tsx',   // Contact
        'app/services/page.tsx',  // Services index
    ],

    // Output settings
    outputPath: 'docs/seo-audit-report.json',
    maxIssuesPerCategory: 20,
};
