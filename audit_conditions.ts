import { conditions as fullConditions } from './data/conditions-full';
import { allConditions as searchConditions } from './data/conditions-search';

console.log(`Full Conditions Count: ${fullConditions.length}`);
console.log(`Search Conditions Count: ${searchConditions.length}`);

// Check for missing conditions in full list
const fullSlugs = new Set(fullConditions.map(c => c.slug));
const searchSlugs = new Set(searchConditions.map(c => c.slug));

const missingInFull = searchConditions.filter(c => !fullSlugs.has(c.slug));
console.log(`\nConditions in Search but MISSING in Full (Detail Pages): ${missingInFull.length}`);
if (missingInFull.length > 0) {
    console.log('Sample missing:', missingInFull.slice(0, 5).map(c => c.name));
}

// Check SEO data in full list
console.log('\n--- SEO Audit (Full Conditions) ---');
let missingSeo = 0;
let missingKeywords = 0;
fullConditions.forEach(c => {
    if (!c.seoTitle || !c.seoDescription) missingSeo++;
    if (!c.keywords || c.keywords.length === 0) missingKeywords++;
});
console.log(`Conditions missing SEO Title/Desc: ${missingSeo}`);
console.log(`Conditions missing Keywords: ${missingKeywords}`);

// Check Category Alignment
console.log('\n--- Category Check ---');
const fullCategories = new Set(fullConditions.map(c => c.category));
console.log('Categories in Full List:', Array.from(fullCategories).slice(0, 10));
