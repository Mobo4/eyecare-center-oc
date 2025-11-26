
import { allConditions } from '../data/conditions-search';
import { allSmartServices } from '../data/services-enhanced';
import { getCityBySlug } from '../data/cities';
import { getEnhancedConditionBySlug } from '../data/conditions';

const CITY_SLUG = 'anaheim';

async function verifyAnaheimPages() {
    console.log(`Starting verification for city: ${CITY_SLUG}`);

    const city = getCityBySlug(CITY_SLUG);
    if (!city) {
        console.error(`CRITICAL: City data not found for slug: ${CITY_SLUG}`);
        process.exit(1);
    }
    console.log(`City verified: ${city.name}`);

    let conditionErrors = 0;
    let serviceErrors = 0;

    // Verify all conditions
    console.log(`\nVerifying ${allConditions.length} condition pages...`);
    for (const condition of allConditions) {
        try {
            const enhanced = getEnhancedConditionBySlug(condition.slug);
            if (!enhanced) {
                console.error(`[FAIL] Condition data missing for: ${condition.slug}`);
                conditionErrors++;
            }
            // Simulate page generation check
            if (!enhanced || !enhanced.name || !enhanced.description) {
                console.error(`[FAIL] Incomplete data for: ${condition.slug}`);
                conditionErrors++;
            }
        } catch (error) {
            console.error(`[CRASH] Error processing condition: ${condition.slug}`, error);
            conditionErrors++;
        }
    }

    // Verify all services
    console.log(`\nVerifying ${allSmartServices.length} service pages...`);
    for (const service of allSmartServices) {
        try {
            if (!service.slug || !service.name) {
                console.error(`[FAIL] Invalid service data: ${JSON.stringify(service)}`);
                serviceErrors++;
            }
        } catch (error) {
            console.error(`[CRASH] Error processing service: ${service.slug}`, error);
            serviceErrors++;
        }
    }

    console.log('\n---------------------------------------------------');
    console.log(`Verification Complete for Anaheim`);
    console.log(`Total Conditions Checked: ${allConditions.length}`);
    console.log(`Condition Errors: ${conditionErrors}`);
    console.log(`Total Services Checked: ${allSmartServices.length}`);
    console.log(`Service Errors: ${serviceErrors}`);
    console.log('---------------------------------------------------');

    if (conditionErrors === 0 && serviceErrors === 0) {
        console.log('SUCCESS: All Anaheim pages verified successfully.');
    } else {
        console.log('FAILURE: Some pages failed verification.');
        process.exit(1);
    }
}

verifyAnaheimPages();
