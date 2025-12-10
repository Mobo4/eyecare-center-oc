/**
 * Atlas Image Mapping Data
 * Generated automatically from atlas images
 * Maps clinical images to condition pages
 */

export interface ClinicalImage {
    url: string;
    filename: string;
    title: string;
    alt: string;
    description: string;
    category: string;
}

export interface ConditionImageMap {
    [conditionSlug: string]: ClinicalImage[];
}

// Category to condition slug mappings
const categoryToConditions: Record<string, string> = {
    'CATARACT': 'cataracts',
    // 'CORNEA': 'keratoconus', // REMOVED: Too broad. Specific cornea images must match via regex.
    'RETINA': 'macular-degeneration',
    'GLAUCOMA': 'glaucoma',
    'UVEITIS': 'anterior-uveitis-iritis',
    'NEURO-OP': 'optic-neuritis',
    'OCULOPLASTICS': 'ptosis',
    'TRAUMA': 'corneal-abrasion',
    'EXTERNAL DISEASE': 'dry-eye-syndrome',
    'VITREOUS': 'floaters',
    'LENS': 'cataracts',
    'GENETICS': 'retinitis-pigmentosa',
    'INHERITED DISEASE': 'retinitis-pigmentosa',
    'IRIS': 'anisocoria',
    // 'CONTACT LENS': 'keratoconus', // REMOVED: Too broad, causing cataract images to appear in keratoconus
    'PATHOLOGY': 'malignant-melanoma-of-the-choroid'
};

// Keyword to condition slug mappings
const keywordMappings: Array<[RegExp, string]> = [
    [/keratoconus/i, 'keratoconus'],
    [/scleral/i, 'scleral-lenses'],
    [/cataract|aciol|intraocular.lens/i, 'cataracts'], // Added ACIOL
    [/orthokeratology/i, 'myopia'],
    [/fuchs|damek|dsaek|graft.rejection/i, 'fuchs-endothelial-dystrophy'], // Added DSAEK/Graft Rejection to Fuchs (common indication)
    [/avellino|granular.dystrophy/i, 'corneal-dystrophies'], // Added Avellino
    [/pterygium/i, 'pterygium'],
    [/pinguecula/i, 'pinguecula'],
    [/blepharitis/i, 'blepharitis'],
    [/chalazion|chalazia/i, 'chalazion'], // Added Chalazia (plural)
    [/stye|hordeolum/i, 'stye-hordeolum'],
    [/conjunctivitis/i, 'conjunctivitis'],
    [/dry.eye|xerophthalmia/i, 'dry-eye-syndrome'],
    [/bitot/i, 'vitamin-a-deficiency'], // Added Bitot's spots
    [/glaucoma/i, 'glaucoma'],
    [/macular.degeneration|amd|drusen/i, 'macular-degeneration'],
    [/diabetic.retinopathy/i, 'diabetic-retinopathy'],
    [/retinal.detachment/i, 'retinal-detachment'],
    [/macular.hole/i, 'macular-hole'],
    [/epiretinal|macular.pucker/i, 'epiretinal-membrane-macular-pucker'],
    [/uveitis|iritis/i, 'anterior-uveitis-iritis'],
    [/optic.neuritis/i, 'optic-neuritis'],
    [/papilledema/i, 'papilledema'],
    [/ptosis/i, 'ptosis'],
    [/strabismus/i, 'strabismus'],
    [/amblyopia/i, 'amblyopia'],
    [/corneal.abrasion/i, 'corneal-abrasion'],
    [/corneal.ulcer/i, 'corneal-ulcer'],
    [/herpes.simplex|hsv.keratitis/i, 'herpes-simplex-keratitis'],
    [/herpes.zoster|shingles/i, 'herpes-zoster-ophthalmicus'],
    [/wilson/i, 'wilson-disease'],
    [/marfan|ectopia.lentis|sublux/i, 'subluxed-dislocated-lens-ectopia-lentis'],
    [/retinitis.pigmentosa/i, 'retinitis-pigmentosa'],
    [/stargardt/i, 'stargardt-disease'],
    [/melanoma/i, 'malignant-melanoma-of-the-choroid'],
    [/nevus/i, 'choroidal-nevus'],
    [/toxoplasmosis/i, 'toxoplasmosis'],
    [/sarcoidosis/i, 'sarcoidosis'],
    [/behcet/i, 'behcet-disease'],
    [/cmv|cytomegalovirus/i, 'cytomegalovirus-cmv-retinitis'],
    [/endophthalmitis/i, 'postoperative-endophthalmitis'],
    [/vitreous.hemorrhage/i, 'vitreous-hemorrhage'],
    [/floater/i, 'floaters'],
    [/entropion/i, 'entropion'],
    [/ectropion/i, 'ectropion'],
    [/orbital.fracture/i, 'orbital-fracture'],
    [/hyphema/i, 'hyphema'],
    [/chemical.burn|alkali.burn/i, 'chemical-eye-injury'],
    [/band.keratopathy/i, 'band-keratopathy'],
    [/acanthamoeba/i, 'acanthamoeba-keratitis'],
    [/arcus/i, 'arcus-senilis'],
    [/posterior.capsul|pco/i, 'cataracts'],
    [/pseudoexfoliation/i, 'pseudoexfoliation-syndrome'],
    [/central.retinal.artery|crao/i, 'central-retinal-artery-occlusion'],
    [/central.retinal.vein|crvo/i, 'central-retinal-vein-occlusion'],
    [/branch.retinal/i, 'branch-retinal-vein-occlusion'],
    [/cone.dystrophy/i, 'cone-dystrophies'],
    [/best.disease|vitelliform/i, 'best-disease'],
    [/chorioretinal/i, 'inherited-chorioretinal-dystrophies'],
    [/crystalline.retinopathy/i, 'crystalline-retinopathy'],
    [/solar.retinopathy/i, 'solar-retinopathy'],
    [/optic.pit/i, 'optic-pit'],
    [/photophobia/i, 'photophobia'],
    [/anisocoria/i, 'anisocoria'],
    [/periorbital.cellulitis/i, 'periorbital-cellulitis'],
    [/facial.nerve|bell/i, 'facial-nerve-palsy'],
    [/cranial.nerve/i, 'cranial-nerve-palsies'],
    [/double.vision|diplopia/i, 'double-vision'],
    [/nystagmus/i, 'nystagmus'],
    [/albinism/i, 'albinism'],
    [/vitamin.a/i, 'vitamin-a-deficiency'],
    [/stevens.johnson|sjs/i, 'stevens-johnson-syndrome-sjs'],
    [/sympathetic.ophthalmia/i, 'sympathetic-ophthalmia'],
    [/vkh|vogt.koyanagi/i, 'vogt-koyanagi-harada-vkh-syndrome'],
    [/acute.retinal.necrosis|arn/i, 'acute-retinal-necrosis-arn'],
    [/candida/i, 'candida-retinitis-uveitis-endophthalmitis'],
    [/syphilis/i, 'syphilis'],
    [/intermediate.uveitis|pars.planitis/i, 'intermediate-uveitis-pars-planitis'],
    [/posterior.uveitis/i, 'posterior-uveitis'],
    [/hypotony/i, 'hypotony-syndrome'],
    [/phakomatoses/i, 'phakomatoses'],
    [/subconjunctival.hemorrhage/i, 'subconjunctival-hemorrhage'],
    [/eye.twitch|myokymia/i, 'eye-twitching'],
    [/yellow.eye|jaundice/i, 'yellow-eyes'],
    [/eye.pain/i, 'eye-pain'],
    [/plaquenil|hydroxychloroquine|chloroquine/i, 'chloroquine-hydroxychloroquine-toxicity'],
    [/choroidal.effusion/i, 'choroidal-effusion-detachment'],
    [/polypoidal|ipcv/i, 'idiopathic-polypoidal-choroidal-vasculopathy'],
    [/macroaneurysm/i, 'retinal-arterial-macroaneurysm'],
    [/convergence/i, 'convergence-insufficiency'],
    [/accommodative/i, 'accommodative-spasm'],
    [/myopia|nearsight/i, 'myopia'],
    [/hyperopia|farsight/i, 'hyperopia'],
    [/astigmatism/i, 'astigmatism'],
    [/presbyopia/i, 'presbyopia'],
    [/anisometropia/i, 'anisometropia'],
];

/**
 * Clean image filename to create readable title
 */
function cleanTitle(filename: string): string {
    const withoutExt = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const parts = withoutExt.split('_');
    const rawTitle = parts.slice(1).join(' ').replace(/-/g, ' ');

    return rawTitle.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
        .trim();
}

/**
 * Generate SEO-optimized alt text
 */
function generateAlt(title: string, category: string): string {
    return `Clinical ophthalmic photograph of ${title.toLowerCase()} - ${category.toLowerCase().replace(/-/g, ' ')} condition`;
}

/**
 * Generate description for image
 */
function generateDescription(title: string): string {
    return `High-resolution clinical image showing ${title.toLowerCase()} as observed during a comprehensive eye examination.`;
}

/**
 * Find the best condition match for an image
 */
export function findConditionSlug(filename: string, category: string): string {
    const lowerFilename = filename.toLowerCase();

    // Try keyword matching first
    for (const [regex, slug] of keywordMappings) {
        if (regex.test(lowerFilename)) {
            return slug;
        }
    }

    // Fall back to category default if exists
    // CRITICAL FIX: Do NOT default to 'cataracts' if unknown. Return empty string to filter out.
    return categoryToConditions[category] || '';
}

/**
 * Process a single image filename into ClinicalImage object
 */
export function processImage(filename: string): ClinicalImage {
    const parts = filename.split('_');
    const category = parts[0];
    const title = cleanTitle(filename);

    return {
        url: `/images/atlas/${encodeURIComponent(filename)}`,
        filename,
        title: title || filename,
        alt: generateAlt(title || filename, category),
        description: generateDescription(title || filename),
        category: category.replace(/-/g, ' ')
    };
}

/**
 * Get condition slug for an image
 */
export function getConditionSlugForImage(filename: string): string {
    const parts = filename.split('_');
    const category = parts[0];
    return findConditionSlug(filename, category);
}
