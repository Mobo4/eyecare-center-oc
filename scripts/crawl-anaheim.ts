
import { allConditions } from '../data/conditions-search';
import { allSmartServices } from '../data/services-enhanced';

const BASE_URL = 'http://localhost:8500';
const CITY_SLUG = 'anaheim';
const CONCURRENCY = 10;

async function crawlUrl(url: string): Promise<{ url: string; status: number; success: boolean }> {
    try {
        const res = await fetch(url);
        return { url, status: res.status, success: res.status === 200 };
    } catch (error) {
        return { url, status: 0, success: false };
    }
}

async function crawlAnaheim() {
    console.log(`Starting full HTTP crawl for city: ${CITY_SLUG}`);

    const urls: string[] = [];

    // 1. Add all Condition URLs
    allConditions.forEach(condition => {
        urls.push(`${BASE_URL}/conditions/${condition.slug}/${CITY_SLUG}`);
    });

    // 2. Add all Service URLs
    allSmartServices.forEach(service => {
        urls.push(`${BASE_URL}/services/${service.slug}/${CITY_SLUG}`);
    });

    console.log(`Total pages to crawl: ${urls.length}`);

    let completed = 0;
    let failures: { url: string; status: number }[] = [];

    // Process in chunks to avoid overwhelming the server
    for (let i = 0; i < urls.length; i += CONCURRENCY) {
        const chunk = urls.slice(i, i + CONCURRENCY);
        const results = await Promise.all(chunk.map(url => crawlUrl(url)));

        results.forEach(r => {
            if (!r.success) {
                failures.push({ url: r.url, status: r.status });
                process.stdout.write('X');
            } else {
                process.stdout.write('.');
            }
        });

        completed += chunk.length;
    }

    console.log('\n\n---------------------------------------------------');
    console.log(`Crawl Complete for Anaheim`);
    console.log(`Total Pages Scanned: ${urls.length}`);
    console.log(`Successful: ${urls.length - failures.length}`);
    console.log(`Failed: ${failures.length}`);
    console.log('---------------------------------------------------');

    if (failures.length > 0) {
        console.log('Failed URLs:');
        failures.forEach(f => console.log(`[${f.status}] ${f.url}`));
        process.exit(1);
    } else {
        console.log('SUCCESS: All Anaheim pages are live and returning 200 OK.');
    }
}

crawlAnaheim();
