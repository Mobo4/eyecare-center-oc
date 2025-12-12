/**
 * Local SEO Audit Script - "Mini Semrush"
 * 
 * This script scans the Next.js codebase for common SEO issues:
 * 1. Missing metadata exports in page.tsx files
 * 2. Missing alt text on images
 * 3. Missing JSON-LD Schema blocks
 * 4. Broken internal links (href to non-existent routes)
 * 5. Keyword density analysis
 * 
 * Usage: node tools/seo-audit/audit.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CONFIG } from './config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..', '..');

// Resolve paths from config
const appDir = path.join(projectRoot, CONFIG.appDir);
const componentsDir = path.join(projectRoot, CONFIG.componentsDir);
const outputPath = path.join(projectRoot, CONFIG.outputPath);

// Results storage
const results = {
    timestamp: new Date().toISOString(),
    projectRoot: projectRoot,
    pagesScanned: 0,
    componentsScanned: 0,
    issues: {
        missingMetadata: [],
        missingAltText: [],
        missingSchema: [],
        brokenLinks: [],
        keywordGaps: [],
    },
    summary: {},
};

// Helper: Recursively get all files with extension
function getAllFiles(dir, ext, files = []) {
    if (!fs.existsSync(dir)) return files;

    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (CONFIG.excludeDirs.some(ex => fullPath.includes(ex))) continue;

        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            getAllFiles(fullPath, ext, files);
        } else if (item.endsWith(ext)) {
            files.push(fullPath);
        }
    }
    return files;
}

// Check 1: Missing Metadata
function checkMissingMetadata() {
    console.log('\n🔍 Checking for missing metadata exports...');
    const pageFiles = getAllFiles(appDir, 'page.tsx');

    for (const file of pageFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(projectRoot, file);

        // Check for metadata export or generateMetadata function
        const hasMetadata =
            content.includes('export const metadata') ||
            content.includes('export async function generateMetadata') ||
            content.includes('export function generateMetadata');

        if (!hasMetadata) {
            results.issues.missingMetadata.push({
                file: relativePath,
                severity: 'HIGH',
                message: 'Page is missing metadata export. This affects SEO title and description.',
            });
        }
        results.pagesScanned++;
    }
}

// Check 2: Missing Alt Text
function checkMissingAltText() {
    console.log('🔍 Checking for missing alt text on images...');
    const allFiles = [
        ...getAllFiles(appDir, '.tsx'),
        ...getAllFiles(componentsDir, '.tsx'),
    ];

    for (const file of allFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(projectRoot, file);

        // Find all <img> and <Image> tags
        const imgTagRegex = /<(?:img|Image)[^>]*>/gi;
        const matches = content.match(imgTagRegex) || [];

        for (const match of matches) {
            // Check if alt attribute exists and is not empty
            const hasAlt = /alt\s*=\s*["'][^"']+["']/.test(match) ||
                /alt\s*=\s*\{[^}]+\}/.test(match);
            const emptyAlt = /alt\s*=\s*["']\s*["']/.test(match);

            if (!hasAlt || emptyAlt) {
                results.issues.missingAltText.push({
                    file: relativePath,
                    severity: 'MEDIUM',
                    tag: match.substring(0, 80) + (match.length > 80 ? '...' : ''),
                    message: 'Image is missing alt text. This affects accessibility and image SEO.',
                });
            }
        }
        results.componentsScanned++;
    }
}

// Check 3: Missing Schema
function checkMissingSchema() {
    console.log('🔍 Checking for missing JSON-LD Schema...');
    const pageFiles = getAllFiles(appDir, 'page.tsx');

    for (const file of pageFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(projectRoot, file);

        // Check for JSON-LD script tags or Schema component imports
        const hasSchema =
            content.includes('application/ld+json') ||
            content.includes('Schema') ||
            content.includes('generateMedicalBusinessSchema') ||
            content.includes('generateLocalBusinessSchema') ||
            content.includes('generateBreadcrumbSchema');

        // Only flag as HIGH if it's a critical page
        const isCritical = CONFIG.criticalPagesForSchema.some(cp => relativePath.includes(cp.replace('app/', '')));

        if (!hasSchema && isCritical) {
            results.issues.missingSchema.push({
                file: relativePath,
                severity: 'HIGH',
                message: 'Critical page is missing JSON-LD Schema. This affects rich snippets in search results.',
            });
        } else if (!hasSchema && relativePath.includes('locations/')) {
            results.issues.missingSchema.push({
                file: relativePath,
                severity: 'MEDIUM',
                message: 'Location page is missing LocalBusiness Schema.',
            });
        }
    }
}

// Check 4: Broken Internal Links
function checkBrokenLinks() {
    console.log('🔍 Checking for potentially broken internal links...');

    // Build a list of all valid routes
    const validRoutes = new Set(['/']);
    const pageFiles = getAllFiles(appDir, 'page.tsx');

    for (const file of pageFiles) {
        const relativePath = path.relative(appDir, file);
        // Convert file path to route
        let route = '/' + relativePath
            .replace('/page.tsx', '')
            .replace('page.tsx', '')
            .replace(/\[([^\]]+)\]/g, ':$1'); // [slug] -> :slug

        if (route === '/') route = '/';
        validRoutes.add(route);
    }

    // Add known static routes
    ['/sitemap.xml', '/robots.txt', '/favicon.ico'].forEach(r => validRoutes.add(r));

    // Scan all files for Link href
    const allFiles = [
        ...getAllFiles(appDir, '.tsx'),
        ...getAllFiles(componentsDir, '.tsx'),
    ];

    for (const file of allFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(projectRoot, file);

        // Find all href attributes in Link components
        const linkRegex = /<Link[^>]*href\s*=\s*["']([^"']+)["'][^>]*>/gi;
        let match;

        while ((match = linkRegex.exec(content)) !== null) {
            const href = match[1];

            // Skip external links, anchors, and dynamic routes
            if (href.startsWith('http') || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:')) continue;
            if (href.includes('${') || href.includes('{')) continue; // Template literals

            // Check if static file exists for simple routes
            const staticPath = path.join(appDir, href.replace(/^\//, ''), 'page.tsx');
            const staticExists = fs.existsSync(staticPath);

            // Check if it's a valid dynamic route pattern
            const isDynamicRoute = [...validRoutes].some(r => {
                if (!r.includes(':')) return false;
                const pattern = r.replace(/:[^/]+/g, '[^/]+');
                return new RegExp(`^${pattern}$`).test(href);
            });

            if (!staticExists && !isDynamicRoute && !href.includes(':')) {
                // Double-check by looking for the file
                const possiblePath = path.join(appDir, href.replace(/^\//, ''), 'page.tsx');
                if (!fs.existsSync(possiblePath) && !validRoutes.has(href)) {
                    results.issues.brokenLinks.push({
                        file: relativePath,
                        severity: 'HIGH',
                        href: href,
                        message: `Link to "${href}" may be broken. No matching page.tsx found.`,
                    });
                }
            }
        }
    }
}

// Check 5: Keyword Density Analysis
function checkKeywordDensity() {
    console.log('🔍 Analyzing keyword presence on key pages...');

    const keyPages = [
        path.join(appDir, 'page.tsx'),
        path.join(appDir, 'layout.tsx'),
    ];

    for (const file of keyPages) {
        if (!fs.existsSync(file)) continue;

        const content = fs.readFileSync(file, 'utf-8').toLowerCase();
        const relativePath = path.relative(projectRoot, file);
        const missingKeywords = [];

        for (const keyword of CONFIG.requiredKeywords) {
            if (!content.includes(keyword.toLowerCase())) {
                missingKeywords.push(keyword);
            }
        }

        if (missingKeywords.length > 0) {
            results.issues.keywordGaps.push({
                file: relativePath,
                severity: 'LOW',
                missingKeywords: missingKeywords,
                message: `Missing ${missingKeywords.length} target keywords in file content or metadata.`,
            });
        }
    }
}

// Generate Report
function generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 SEO AUDIT REPORT');
    console.log('='.repeat(60));
    console.log(`📄 Pages Scanned: ${results.pagesScanned}`);
    console.log(`🧩 Components Scanned: ${results.componentsScanned}`);
    console.log('');

    const categories = [
        { key: 'missingMetadata', label: '❌ Missing Metadata', emoji: '📝' },
        { key: 'missingAltText', label: '🖼️  Missing Alt Text', emoji: '🖼️' },
        { key: 'missingSchema', label: '📋 Missing Schema', emoji: '📋' },
        { key: 'brokenLinks', label: '🔗 Potential Broken Links', emoji: '🔗' },
        { key: 'keywordGaps', label: '🔑 Keyword Gaps', emoji: '🔑' },
    ];

    let totalIssues = 0;
    let highCount = 0;
    let mediumCount = 0;
    let lowCount = 0;

    for (const cat of categories) {
        const issues = results.issues[cat.key];
        totalIssues += issues.length;

        console.log(`\n${cat.label}: ${issues.length} issue(s)`);
        console.log('-'.repeat(40));

        if (issues.length === 0) {
            console.log('  ✅ No issues found!');
        } else {
            for (const issue of issues.slice(0, CONFIG.maxIssuesPerCategory)) {
                const severityIcon = issue.severity === 'HIGH' ? '🔴' : issue.severity === 'MEDIUM' ? '🟡' : '🟢';
                console.log(`  ${severityIcon} [${issue.severity}] ${issue.file}`);
                console.log(`     └─ ${issue.message}`);
                if (issue.href) console.log(`     └─ href: ${issue.href}`);
                if (issue.missingKeywords) console.log(`     └─ Missing: ${issue.missingKeywords.join(', ')}`);

                if (issue.severity === 'HIGH') highCount++;
                else if (issue.severity === 'MEDIUM') mediumCount++;
                else lowCount++;
            }
            if (issues.length > CONFIG.maxIssuesPerCategory) {
                console.log(`  ... and ${issues.length - CONFIG.maxIssuesPerCategory} more`);
            }
        }
    }

    // Update summary
    results.summary = {
        totalIssues,
        high: highCount,
        medium: mediumCount,
        low: lowCount,
    };

    console.log('\n' + '='.repeat(60));
    console.log('📈 SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total Issues Found: ${totalIssues}`);
    console.log(`  🔴 HIGH:   ${highCount}`);
    console.log(`  🟡 MEDIUM: ${mediumCount}`);
    console.log(`  🟢 LOW:    ${lowCount}`);
    console.log('');

    if (totalIssues === 0) {
        console.log('🎉 Congratulations! Your site has no detected SEO issues.');
    } else if (highCount > 0) {
        console.log('⚠️  You have HIGH severity issues that should be fixed immediately.');
    } else {
        console.log('✅ No critical issues. Consider addressing MEDIUM/LOW items for best results.');
    }

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`\n📁 Full report saved to: ${CONFIG.outputPath}`);
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
}

// Main Execution
console.log('🚀 Starting Local SEO Audit...');
console.log(`📂 Project Root: ${projectRoot}`);

checkMissingMetadata();
checkMissingAltText();
checkMissingSchema();
checkBrokenLinks();
checkKeywordDensity();
generateReport();

console.log('\n✨ Audit Complete!\n');
