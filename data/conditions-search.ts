/**
 * FILE: data/conditions-search.ts
 * PURPOSE: Comprehensive conditions search data for autosuggest functionality
 * SOURCE: Wills Eye Manual diagnoses (505 conditions)
 * CREATED: 2025-11-21
 */

export interface SearchCondition {
  name: string;
  slug: string;
  category: string;
  aliases?: string[];
  icdCode?: string;
  symptoms?: string[];
}

// Featured conditions for the homepage cards
export const featuredConditions = [
  'Headache',
  'Ocular Migraine',
  'Keratoconus',
  'Dry Eye Syndrome',
  'Chalazion/Hordeolum', // Styes
  'Blepharitis/Meibomitis',
  'Myopia',
  'Hyperopia',
  'Astigmatism',
  'Presbyopia',
  'Demodex',
];

// Comprehensive conditions list from Wills Eye Manual
export const allConditions: SearchCondition[] = [
  // Cancers/Tumors
  { name: "Malignant Melanoma of the Iris", slug: "malignant-melanoma-of-the-iris", category: "Cancers & Tumors", icdCode: "C69-9" },
  { name: "Malignant Melanoma of the Choroid", slug: "malignant-melanoma-of-the-choroid", category: "Cancers & Tumors", icdCode: "C69-9" },
  { name: "Melanoma of the Choroid", slug: "melanoma-of-the-choroid", category: "Cancers & Tumors", icdCode: "C69-9" },
  { name: "Choroidal Nevus", slug: "choroidal-nevus", category: "Cancers & Tumors", icdCode: "D31-3" },
  { name: "Conjunctival Tumors", slug: "conjunctival-tumors", category: "Cancers & Tumors" },
  { name: "Orbital Tumors in Children", slug: "orbital-tumors-in-children", category: "Cancers & Tumors" },
  { name: "Orbital Tumors in Adults", slug: "orbital-tumors-in-adults", category: "Cancers & Tumors" },
  { name: "Malignant Tumors of the Eyelid", slug: "malignant-tumors-of-the-eyelid", category: "Cancers & Tumors" },

  // Diabetic & Systemic
  { name: "Diabetic Retinopathy", slug: "diabetic-retinopathy", category: "Diabetic & Systemic", icdCode: "E11-3", aliases: ["NPDR", "PDR", "Proliferative Diabetic Retinopathy", "Non-Proliferative Diabetic Retinopathy"], symptoms: ["blurry vision", "floaters", "dark spots", "vision loss"] },
  { name: "Hypertensive Retinopathy", slug: "hypertensive-retinopathy", category: "Diabetic & Systemic", symptoms: ["headache", "vision changes"] },
  { name: "Sickle Cell Disease", slug: "sickle-cell-disease", category: "Diabetic & Systemic", aliases: ["Sickle Cell Anemia", "Sickle Trait"], symptoms: ["eye pain", "redness", "vision loss"] },

  // Eyelid Conditions
  { name: "Chalazion/Hordeolum", slug: "chalazion-hordeolum", category: "Eyelid Conditions", icdCode: "H00-19", aliases: ["Stye", "Styes", "Chalazion", "Hordeolum", "Eyelid Bump"], symptoms: ["eyelid bump", "red eyelid", "painful eyelid", "swelling"] },
  { name: "Blepharitis/Meibomitis", slug: "blepharitis-meibomitis", category: "Eyelid Conditions", icdCode: "H01-009", aliases: ["Blepharitis", "Meibomitis", "Eyelid Inflammation"], symptoms: ["crusty eyelids", "itchy eyelids", "red eyelids", "burning"] },
  { name: "Demodex Blepharitis", slug: "demodex", category: "Eyelid Conditions", aliases: ["Eyelash Mites", "Demodex"], symptoms: ["itchy eyelashes", "cylindrical dandruff", "redness"] },
  { name: "Ectropion", slug: "ectropion", category: "Eyelid Conditions", icdCode: "H02-10", symptoms: ["watery eyes", "redness", "irritation"] },
  { name: "Congenital Ptosis", slug: "congenital-ptosis", category: "Eyelid Conditions", icdCode: "H02-40", symptoms: ["droopy eyelid"] },
  { name: "Ptosis", slug: "ptosis", category: "Eyelid Conditions", aliases: ["Droopy Eyelids", "Eyelids Drooping"], symptoms: ["droopy eyelid", "tired eyes"] },
  { name: "Blepharospasm", slug: "blepharospasm", category: "Eyelid Conditions", symptoms: ["eye twitching", "uncontrollable blinking"] },
  { name: "Floppy Eyelid Syndrome", slug: "floppy-eyelid-syndrome", category: "Eyelid Conditions", symptoms: ["red eyes", "irritation upon waking"] },
  { name: "Eyelid Abnormalities", slug: "eyelid-abnormalities", category: "Eyelid Conditions" },
  { name: "Eyelid Swelling", slug: "eyelid-swelling", category: "Eyelid Conditions", symptoms: ["puffy eyes", "swollen eyelids"] },
  { name: "Eyelash Loss", slug: "eyelash-loss", category: "Eyelid Conditions", symptoms: ["missing lashes"] },
  { name: "Trichiasis", slug: "trichiasis", category: "Eyelid Conditions", symptoms: ["ingrown eyelash", "eye pain", "irritation"] },
  { name: "Eyelid Twitch", slug: "eyelid-twitch", category: "Eyelid Conditions", symptoms: ["twitching", "spasm"] },
  { name: "Eyelid Crusting", slug: "eyelid-crusting", category: "Eyelid Conditions", symptoms: ["crusty lashes", "sticky eyes"] },

  // Conjunctiva
  { name: "Allergic Conjunctivitis", slug: "allergic-conjunctivitis", category: "Conjunctiva", icdCode: "H10-45", aliases: ["Eye Allergies", "Itchy Eyes", "Seasonal Allergies"], symptoms: ["itchy eyes", "redness", "watery eyes", "sneezing"] },
  { name: "Acute Conjunctivitis", slug: "acute-conjunctivitis", category: "Conjunctiva", icdCode: "H10-9", aliases: ["Pink Eye", "Red Eye"], symptoms: ["pink eye", "discharge", "crusting"] },
  { name: "Bacterial Conjunctivitis", slug: "bacterial-conjunctivitis", category: "Conjunctiva", aliases: ["Pink Eye", "Conjunctivitis"], symptoms: ["thick discharge", "eyes stuck shut", "redness"] },
  { name: "Viral Conjunctivitis", slug: "viral-conjunctivitis", category: "Conjunctiva", aliases: ["Epidemic Keratoconjunctivitis", "Pink Eye"], symptoms: ["watery discharge", "redness", "contagious"] },
  { name: "Chlamydial Inclusion Conjunctivitis", slug: "chlamydial-inclusion-conjunctivitis", category: "Conjunctiva", symptoms: ["redness", "discharge"] },
  { name: "Herpes Simplex Virus Conjunctivitis", slug: "herpes-simplex-virus-conjunctivitis", category: "Conjunctiva", symptoms: ["pain", "redness", "blisters"] },
  { name: "Chronic Conjunctivitis", slug: "chronic-conjunctivitis", category: "Conjunctiva", symptoms: ["persistent redness", "irritation"] },
  { name: "Toxic Conjunctivitis", slug: "toxic-conjunctivitis", category: "Conjunctiva", aliases: ["Medicamentosa"], symptoms: ["redness", "burning", "reaction to drops"] },
  { name: "Superior Limbic Keratoconjunctivitis", slug: "superior-limbic-keratoconjunctivitis", category: "Conjunctiva", symptoms: ["burning", "foreign body sensation"] },
  { name: "Vernal/Atopic Conjunctivitis", slug: "vernal-atopic-conjunctivitis", category: "Conjunctiva", symptoms: ["intense itching", "thick discharge"] },
  { name: "Papillary Conjunctivitis", slug: "papillary-conjunctivitis", category: "Conjunctiva", symptoms: ["itchy bumps", "contact lens intolerance"] },
  { name: "Newborn Conjunctivitis", slug: "newborn-conjunctivitis", category: "Conjunctiva", aliases: ["Ophthalmia Neonatorum"], symptoms: ["discharge in baby", "redness"] },
  { name: "Subconjunctival Hemorrhage", slug: "subconjunctival-hemorrhage", category: "Conjunctiva", symptoms: ["blood in eye", "red spot"] },
  { name: "Conjunctival Laceration", slug: "conjunctival-laceration", category: "Conjunctiva", symptoms: ["pain", "bleeding"] },
  { name: "Contact Lens Induced Giant Papillary Conjunctivitis", slug: "contact-lens-induced-gpc", category: "Conjunctiva", symptoms: ["itchy eyes", "mucus", "lens discomfort"] },
  { name: "Phlyctenulosis", slug: "phlyctenulosis", category: "Conjunctiva", symptoms: ["small bump on eye", "redness"] },
  { name: "Pterygium/Pinguecula", slug: "pterygium-pinguecula", category: "Conjunctiva", symptoms: ["growth on eye", "yellow bump", "redness"] },

  // Cornea
  { name: "Keratoconus", slug: "keratoconus", category: "Cornea", icdCode: "H18-6", aliases: ["KC", "Corneal Ectasia"], symptoms: ["blurry vision", "distorted vision", "light sensitivity", "ghost images"] },
  { name: "Acanthamoeba Keratitis", slug: "acanthamoeba-keratitis", category: "Cornea", icdCode: "H16-9", symptoms: ["severe eye pain", "redness", "light sensitivity"] },
  { name: "Bacterial Keratitis", slug: "bacterial-keratitis", category: "Cornea", aliases: ["Corneal Ulcer", "Bacterial Corneal Ulcer"], symptoms: ["pain", "white spot on eye", "redness"] },
  { name: "Herpes Simplex Virus Keratitis", slug: "herpes-simplex-virus-keratitis", category: "Cornea", aliases: ["HSV Keratitis", "Herpetic Keratitis"], symptoms: ["pain", "redness", "tearing"] },
  { name: "Herpes Zoster Ophthalmicus", slug: "herpes-zoster-ophthalmicus", category: "Cornea", aliases: ["Shingles of the Eye", "HZO"], symptoms: ["rash on forehead", "pain", "swelling"] },
  { name: "Interstitial Keratitis", slug: "interstitial-keratitis", category: "Cornea", symptoms: ["cloudy cornea", "vision loss"] },
  { name: "Corneal Dystrophies", slug: "corneal-dystrophies", category: "Cornea", symptoms: ["cloudy vision", "glare"] },
  { name: "Anterior Corneal Dystrophies", slug: "anterior-corneal-dystrophies", category: "Cornea" },
  { name: "Corneal Stromal Dystrophies", slug: "corneal-stromal-dystrophies", category: "Cornea" },
  { name: "Corneal Endothelial Dystrophies", slug: "corneal-endothelial-dystrophies", category: "Cornea" },
  { name: "Fuchs Endothelial Dystrophy", slug: "fuchs-endothelial-dystrophy", category: "Cornea", symptoms: ["blurry morning vision", "glare", "halos"] },
  { name: "Corneal Abrasion", slug: "corneal-abrasion", category: "Cornea", icdCode: "S05-0", symptoms: ["sharp pain", "tearing", "light sensitivity"] },
  { name: "Corneal Laceration", slug: "corneal-laceration", category: "Cornea", symptoms: ["severe pain", "vision loss"] },
  { name: "Corneal Graft Rejection", slug: "corneal-graft-rejection", category: "Cornea", symptoms: ["redness", "pain", "decreased vision"] },
  { name: "Recurrent Corneal Erosion", slug: "recurrent-corneal-erosion", category: "Cornea", symptoms: ["sharp pain upon waking", "tearing"] },
  { name: "Band Keratopathy", slug: "band-keratopathy", category: "Cornea", symptoms: ["calcium deposit", "irritation"] },
  { name: "Filamentary Keratopathy", slug: "filamentary-keratopathy", category: "Cornea", symptoms: ["foreign body sensation", "pain"] },
  { name: "Exposure Keratopathy", slug: "exposure-keratopathy", category: "Cornea", symptoms: ["dryness", "pain", "incomplete blinking"] },
  { name: "Neurotrophic Keratopathy", slug: "neurotrophic-keratopathy", category: "Cornea", symptoms: ["numb eye", "ulcer"] },
  { name: "Thermal/Ultraviolet Keratopathy", slug: "thermal-ultraviolet-keratopathy", category: "Cornea", symptoms: ["pain", "light sensitivity", "welder's flash"] },
  { name: "Crystalline Keratopathy", slug: "crystalline-keratopathy", category: "Cornea" },
  { name: "Aphakic Bullous Keratopathy", slug: "aphakic-bullous-keratopathy", category: "Cornea" },
  { name: "Pseudophakic Bullous Keratopathy", slug: "pseudophakic-bullous-keratopathy", category: "Cornea", symptoms: ["pain", "blisters on eye"] },
  { name: "Contact Lens Related Problems", slug: "contact-lens-problems", category: "Cornea", symptoms: ["redness", "discomfort", "dryness"] },
  { name: "Peripheral Corneal Thinning/Ulceration", slug: "peripheral-corneal-thinning", category: "Cornea" },
  { name: "Dellen", slug: "dellen", category: "Cornea", symptoms: ["dry spot", "irritation"] },
  { name: "Thygeson Superficial Punctate Keratopathy", slug: "thygeson-superficial-punctate-keratopathy", category: "Cornea", symptoms: ["foreign body sensation", "light sensitivity"] },
  { name: "Keratoconjunctivitis", slug: "keratoconjunctivitis", category: "Cornea" },
  { name: "Microsporidial Keratoconjunctivitis", slug: "microsporidial-keratoconjunctivitis", category: "Cornea" },

  // Dry Eye
  { name: "Dry Eye Syndrome", slug: "dry-eye-syndrome", category: "Dry Eye", icdCode: "H00-9", aliases: ["Dry Eyes", "DES", "Keratoconjunctivitis Sicca"], symptoms: ["burning", "gritty sensation", "watery eyes", "redness"] },
  { name: "Meibomian Gland Dysfunction", slug: "meibomian-gland-dysfunction", category: "Dry Eye", aliases: ["MGD"], symptoms: ["dry eyes", "crusty lids", "oil gland blockage"] },
  { name: "Ocular Rosacea", slug: "ocular-rosacea", category: "Dry Eye", symptoms: ["red eyes", "burning", "skin rosacea"] },
  { name: "Staphylococcal Hypersensitivity", slug: "staphylococcal-hypersensitivity", category: "Dry Eye", symptoms: ["redness", "irritation"] },

  // Sclera & Episclera
  { name: "Episcleritis", slug: "episcleritis", category: "Sclera & Episclera" },
  { name: "Scleritis", slug: "scleritis", category: "Sclera & Episclera" },

  // Uveitis
  { name: "Anterior Uveitis", slug: "anterior-uveitis", category: "Uveitis", aliases: ["Iritis", "Iridocyclitis"] },
  { name: "Posterior Uveitis", slug: "posterior-uveitis", category: "Uveitis" },
  { name: "HLA-B27 Associated Uveitis", slug: "hla-b27-uveitis", category: "Uveitis" },
  { name: "Chronic Postoperative Uveitis", slug: "chronic-postoperative-uveitis", category: "Uveitis" },
  { name: "Traumatic Iritis", slug: "traumatic-iritis", category: "Uveitis" },
  { name: "Behcet Disease", slug: "behcet-disease", category: "Uveitis" },
  { name: "Sarcoidosis", slug: "sarcoidosis", category: "Uveitis" },
  { name: "Vogt-Koyanagi-Harada Syndrome", slug: "vogt-koyanagi-harada-syndrome", category: "Uveitis" },
  { name: "Sympathetic Ophthalmia", slug: "sympathetic-ophthalmia", category: "Uveitis" },

  // Lens & Cataract
  { name: "Acquired Cataract", slug: "acquired-cataract", category: "Lens & Cataract" },
  { name: "Dislocation or Subluxation of Lens", slug: "lens-dislocation-subluxation", category: "Lens & Cataract" },
  { name: "Subluxed or Dislocated IOL", slug: "subluxed-dislocated-iol", category: "Lens & Cataract" },

  // Glaucoma
  { name: "Primary Open Angle Glaucoma", slug: "primary-open-angle-glaucoma", category: "Glaucoma", aliases: ["POAG", "Open Angle Glaucoma"] },
  { name: "Acute Angle Closure Glaucoma", slug: "acute-angle-closure-glaucoma", category: "Glaucoma", aliases: ["Angle Closure", "Narrow Angle Glaucoma"] },
  { name: "Chronic Angle Closure Glaucoma", slug: "chronic-angle-closure-glaucoma", category: "Glaucoma" },
  { name: "Normal Tension Glaucoma", slug: "normal-tension-glaucoma", category: "Glaucoma", aliases: ["Low Pressure Glaucoma", "NTG"] },
  { name: "Congenital/Infantile Glaucoma", slug: "congenital-infantile-glaucoma", category: "Glaucoma" },
  { name: "Neovascular Glaucoma", slug: "neovascular-glaucoma", category: "Glaucoma" },
  { name: "Pigmentary Glaucoma", slug: "pigmentary-glaucoma", category: "Glaucoma" },
  { name: "Exfoliative Glaucoma", slug: "exfoliative-glaucoma", category: "Glaucoma", aliases: ["Pseudoexfoliation Glaucoma"] },
  { name: "Steroid Response Glaucoma", slug: "steroid-response-glaucoma", category: "Glaucoma" },
  { name: "Inflammatory Open Angle Glaucoma", slug: "inflammatory-open-angle-glaucoma", category: "Glaucoma" },
  { name: "Lens Induced Glaucoma", slug: "lens-induced-glaucoma", category: "Glaucoma", aliases: ["Phacogenic Glaucoma"] },
  { name: "Lens Particle Glaucoma", slug: "lens-particle-glaucoma", category: "Glaucoma" },
  { name: "Ghost Cell Glaucoma", slug: "ghost-cell-glaucoma", category: "Glaucoma" },
  { name: "Angle Recession Glaucoma", slug: "angle-recession-glaucoma", category: "Glaucoma" },
  { name: "Malignant Glaucoma", slug: "malignant-glaucoma", category: "Glaucoma", aliases: ["Aqueous Misdirection Syndrome"] },
  { name: "Glaucomatocyclitic Crisis", slug: "glaucomatocyclitic-crisis", category: "Glaucoma", aliases: ["Posner-Schlossman Syndrome"] },
  { name: "Pigment Dispersion Syndrome", slug: "pigment-dispersion-syndrome", category: "Glaucoma" },
  { name: "Pseudoexfoliation Syndrome", slug: "pseudoexfoliation-syndrome", category: "Glaucoma" },
  { name: "Plateau Iris", slug: "plateau-iris", category: "Glaucoma" },
  { name: "Uveitis Glaucoma Hyphema Syndrome", slug: "uveitis-glaucoma-hyphema-syndrome", category: "Glaucoma", aliases: ["UGH Syndrome"] },
  { name: "Postoperative Glaucoma", slug: "postoperative-glaucoma", category: "Glaucoma" },
  { name: "Iridocorneal Endothelial Syndrome", slug: "iridocorneal-endothelial-syndrome", category: "Glaucoma", aliases: ["ICE Syndrome"] },

  // Retina
  { name: "Retinal Detachment", slug: "retinal-detachment", category: "Retina", icdCode: "H33-2", aliases: ["RD", "Detached Retina"] },
  { name: "Retinal Break", slug: "retinal-break", category: "Retina", icdCode: "H33-3", aliases: ["Retinal Tear", "Retinal Hole"] },
  { name: "Posterior Vitreous Detachment", slug: "posterior-vitreous-detachment", category: "Retina", aliases: ["PVD", "Floaters"] },
  { name: "Central Retinal Artery Occlusion", slug: "central-retinal-artery-occlusion", category: "Retina", icdCode: "H34-1", aliases: ["CRAO", "Eye Stroke"] },
  { name: "Branch Retinal Artery Occlusion", slug: "branch-retinal-artery-occlusion", category: "Retina", aliases: ["BRAO"] },
  { name: "Central Retinal Vein Occlusion", slug: "central-retinal-vein-occlusion", category: "Retina", icdCode: "H34-81", aliases: ["CRVO"] },
  { name: "Branch Retinal Vein Occlusion", slug: "branch-retinal-vein-occlusion", category: "Retina", icdCode: "H34-83", aliases: ["BRVO"] },
  { name: "Age-Related Macular Degeneration", slug: "age-related-macular-degeneration", category: "Retina", aliases: ["AMD", "ARMD", "Macular Degeneration"] },
  { name: "Dry Age-Related Macular Degeneration", slug: "dry-age-related-macular-degeneration", category: "Retina", aliases: ["Dry AMD", "Non-Exudative AMD"] },
  { name: "Wet Age-Related Macular Degeneration", slug: "wet-age-related-macular-degeneration", category: "Retina", aliases: ["Wet AMD", "Neovascular AMD", "Exudative AMD"] },
  { name: "Central Serous Chorioretinopathy", slug: "central-serous-chorioretinopathy", category: "Retina", aliases: ["CSR", "CSCR", "CSC"] },
  { name: "Epiretinal Membrane", slug: "epiretinal-membrane", category: "Retina", aliases: ["Macular Pucker", "Cellophane Maculopathy"] },
  { name: "Macular Hole", slug: "macular-hole", category: "Retina" },
  { name: "Vitreous Hemorrhage", slug: "vitreous-hemorrhage", category: "Retina" },
  { name: "Retinitis Pigmentosa", slug: "retinitis-pigmentosa", category: "Retina", aliases: ["RP"] },
  { name: "Stargardt Disease", slug: "stargardt-disease", category: "Retina", aliases: ["Fundus Flavimaculatus"] },
  { name: "Best Disease", slug: "best-disease", category: "Retina", aliases: ["Vitelliform Macular Dystrophy"] },
  { name: "Cone Dystrophies", slug: "cone-dystrophies", category: "Retina" },
  { name: "X-Linked Juvenile Retinoschisis", slug: "x-linked-juvenile-retinoschisis", category: "Retina" },
  { name: "Retinoschisis", slug: "retinoschisis", category: "Retina" },
  { name: "Retinopathy of Prematurity", slug: "retinopathy-of-prematurity", category: "Retina", aliases: ["ROP"] },
  { name: "Chloroquine/Hydroxychloroquine Toxicity", slug: "chloroquine-hydroxychloroquine-toxicity", category: "Retina", aliases: ["Plaquenil Toxicity"] },
  { name: "Crystalline Retinopathy", slug: "crystalline-retinopathy", category: "Retina" },
  { name: "Angioid Streaks", slug: "angioid-streaks", category: "Retina" },
  { name: "Retinal Arterial Macroaneurysm", slug: "retinal-arterial-macroaneurysm", category: "Retina" },
  { name: "Idiopathic Polypoidal Choroidal Vasculopathy", slug: "idiopathic-polypoidal-choroidal-vasculopathy", category: "Retina", aliases: ["PCV"] },
  { name: "Ocular Histoplasmosis", slug: "ocular-histoplasmosis", category: "Retina", aliases: ["POHS"] },
  { name: "Commotio Retinae", slug: "commotio-retinae", category: "Retina", aliases: ["Berlin's Edema"] },
  { name: "Chorioretinitis Sclopetaria", slug: "chorioretinitis-sclopetaria", category: "Retina" },
  { name: "Traumatic Choroidal Rupture", slug: "traumatic-choroidal-rupture", category: "Retina" },
  { name: "Purtscher Retinopathy", slug: "purtscher-retinopathy", category: "Retina" },
  { name: "Valsalva Retinopathy", slug: "valsalva-retinopathy", category: "Retina" },
  { name: "Solar Retinopathy", slug: "solar-retinopathy", category: "Retina" },
  { name: "High Myopia", slug: "high-myopia", category: "Retina", aliases: ["Pathological Myopia", "Degenerative Myopia"] },
  { name: "Choroidal Effusion/Detachment", slug: "choroidal-effusion-detachment", category: "Retina" },

  // Infections
  { name: "Toxoplasmosis", slug: "toxoplasmosis", category: "Infections" },
  { name: "Acute Retinal Necrosis", slug: "acute-retinal-necrosis", category: "Infections", aliases: ["ARN"] },
  { name: "Cytomegalovirus Retinitis", slug: "cytomegalovirus-retinitis", category: "Infections", aliases: ["CMV Retinitis"] },
  { name: "Endophthalmitis", slug: "endophthalmitis", category: "Infections" },
  { name: "Postoperative Endophthalmitis", slug: "postoperative-endophthalmitis", category: "Infections" },
  { name: "Traumatic Endophthalmitis", slug: "traumatic-endophthalmitis", category: "Infections" },
  { name: "Endogenous Bacterial Endophthalmitis", slug: "endogenous-bacterial-endophthalmitis", category: "Infections" },
  { name: "Bleb Infection/Blebitis", slug: "bleb-infection-blebitis", category: "Infections" },
  { name: "Lyme Disease", slug: "lyme-disease", category: "Infections" },
  { name: "Varicella Zoster Virus", slug: "varicella-zoster-virus", category: "Infections", aliases: ["Chicken Pox", "Shingles"] },
  { name: "HIV Retinopathy", slug: "hiv-retinopathy", category: "Infections", aliases: ["Microvasculopathy"] },
  { name: "Ocular Vaccinia", slug: "ocular-vaccinia", category: "Infections" },
  { name: "Pediculosis", slug: "pediculosis", category: "Infections", aliases: ["Lice", "Crabs"] },
  { name: "Parinaud Oculoglandular Conjunctivitis", slug: "parinaud-oculoglandular-conjunctivitis", category: "Infections" },

  // Neuro-Ophthalmology
  { name: "Headache", slug: "headache", category: "Neuro-Ophthalmology" },
  { name: "Ocular Migraine", slug: "ocular-migraine", category: "Neuro-Ophthalmology", aliases: ["Migraine", "Migraine Headache", "Visual Migraine"] },
  { name: "Cluster Headache", slug: "cluster-headache", category: "Neuro-Ophthalmology" },
  { name: "Optic Neuritis", slug: "optic-neuritis", category: "Neuro-Ophthalmology", icdCode: "H46" },
  { name: "Papilledema", slug: "papilledema", category: "Neuro-Ophthalmology" },
  { name: "Idiopathic Intracranial Hypertension", slug: "idiopathic-intracranial-hypertension", category: "Neuro-Ophthalmology", aliases: ["Pseudotumor Cerebri", "IIH"] },
  { name: "Arteritic Ischemic Optic Neuropathy", slug: "arteritic-ischemic-optic-neuropathy", category: "Neuro-Ophthalmology", aliases: ["Giant Cell Arteritis", "AION"] },
  { name: "Non-Arteritic Ischemic Optic Neuropathy", slug: "non-arteritic-ischemic-optic-neuropathy", category: "Neuro-Ophthalmology", aliases: ["NAION"] },
  { name: "Posterior Ischemic Optic Neuropathy", slug: "posterior-ischemic-optic-neuropathy", category: "Neuro-Ophthalmology" },
  { name: "Compressive Optic Neuropathy", slug: "compressive-optic-neuropathy", category: "Neuro-Ophthalmology" },
  { name: "Toxic/Metabolic Optic Neuropathy", slug: "toxic-metabolic-optic-neuropathy", category: "Neuro-Ophthalmology" },
  { name: "Leber Hereditary Optic Neuropathy", slug: "leber-hereditary-optic-neuropathy", category: "Neuro-Ophthalmology", aliases: ["LHON"] },
  { name: "Radiation Optic Neuropathy", slug: "radiation-optic-neuropathy", category: "Neuro-Ophthalmology" },
  { name: "Dominant Optic Atrophy", slug: "dominant-optic-atrophy", category: "Neuro-Ophthalmology" },
  { name: "Third Nerve Palsy", slug: "third-nerve-palsy", category: "Neuro-Ophthalmology", aliases: ["Oculomotor Nerve Palsy"] },
  { name: "Pupil Dilation Third Nerve Palsy", slug: "pupil-dilation-third-nerve-palsy", category: "Neuro-Ophthalmology" },
  { name: "Chronic Progressive External Ophthalmoplegia", slug: "chronic-progressive-external-ophthalmoplegia", category: "Neuro-Ophthalmology", aliases: ["CPEO"] },
  { name: "Internuclear Ophthalmoplegia", slug: "internuclear-ophthalmoplegia", category: "Neuro-Ophthalmology", aliases: ["INO"] },
  { name: "Cavernous Sinus Syndrome", slug: "cavernous-sinus-syndrome", category: "Neuro-Ophthalmology" },
  { name: "Horner Syndrome", slug: "horner-syndrome", category: "Neuro-Ophthalmology" },
  { name: "Adie Tonic Pupil", slug: "adie-tonic-pupil", category: "Neuro-Ophthalmology" },
  { name: "Argyll Robertson Pupils", slug: "argyll-robertson-pupils", category: "Neuro-Ophthalmology" },
  { name: "Anisocoria", slug: "anisocoria", category: "Neuro-Ophthalmology", aliases: ["Unequal Pupils"] },
  { name: "Nystagmus", slug: "nystagmus", category: "Neuro-Ophthalmology" },
  { name: "Vertebrobasilar Artery Insufficiency", slug: "vertebrobasilar-artery-insufficiency", category: "Neuro-Ophthalmology" },
  { name: "Cortical Blindness", slug: "cortical-blindness", category: "Neuro-Ophthalmology" },
  { name: "Nonphysiologic Visual Loss", slug: "nonphysiologic-visual-loss", category: "Neuro-Ophthalmology", aliases: ["Functional Vision Loss"] },
  { name: "Transient Visual Loss", slug: "transient-visual-loss", category: "Neuro-Ophthalmology", aliases: ["Amaurosis Fugax"] },
  { name: "Myasthenia Gravis", slug: "myasthenia-gravis", category: "Neuro-Ophthalmology" },
  { name: "Aberrant Regeneration", slug: "aberrant-regeneration", category: "Neuro-Ophthalmology" },
  { name: "Optic Pit", slug: "optic-pit", category: "Neuro-Ophthalmology" },

  // Orbit
  { name: "Thyroid Eye Disease", slug: "thyroid-eye-disease", category: "Orbit", aliases: ["Graves Disease", "Graves Ophthalmopathy", "TED"] },
  { name: "Proptosis", slug: "proptosis", category: "Orbit", aliases: ["Bulging Eyes", "Exophthalmos"] },
  { name: "Idiopathic Orbital Inflammatory Disease", slug: "idiopathic-orbital-inflammatory-disease", category: "Orbit", aliases: ["Orbital Pseudotumor", "IOID"] },
  { name: "Orbital Cellulitis", slug: "orbital-cellulitis", category: "Orbit" },
  { name: "Subperiosteal Abscess", slug: "subperiosteal-abscess", category: "Orbit" },
  { name: "Traumatic Orbital Disease", slug: "traumatic-orbital-disease", category: "Orbit" },
  { name: "Traumatic Retrobulbar Hemorrhage", slug: "traumatic-retrobulbar-hemorrhage", category: "Orbit" },
  { name: "Intraorbital Foreign Body", slug: "intraorbital-foreign-body", category: "Orbit" },
  { name: "Dacryoadenitis", slug: "dacryoadenitis", category: "Orbit", aliases: ["Lacrimal Gland Inflammation"] },
  { name: "Lacrimal Gland Mass", slug: "lacrimal-gland-mass", category: "Orbit" },
  { name: "Miscellaneous Orbital Diseases", slug: "miscellaneous-orbital-diseases", category: "Orbit" },

  // Lacrimal System
  { name: "Dacryocystitis", slug: "dacryocystitis", category: "Lacrimal System", aliases: ["Lacrimal Sac Inflammation"] },
  { name: "Congenital Nasolacrimal Duct Obstruction", slug: "congenital-nasolacrimal-duct-obstruction", category: "Lacrimal System", aliases: ["Blocked Tear Duct"] },
  { name: "Tearing", slug: "tearing", category: "Lacrimal System", aliases: ["Epiphora", "Watery Eyes"] },

  // Trauma
  { name: "Traumatic Hyphema", slug: "traumatic-hyphema", category: "Trauma", icdCode: "S05-1" },
  { name: "Hyphema and Microhyphema", slug: "hyphema-microhyphema", category: "Trauma" },
  { name: "Postsurgical Hyphema", slug: "postsurgical-hyphema", category: "Trauma" },
  { name: "Intraocular Foreign Body", slug: "intraocular-foreign-body", category: "Trauma" },
  { name: "Iridodialysis/Cyclodialysis", slug: "iridodialysis-cyclodialysis", category: "Trauma" },
  { name: "Chemical Burns", slug: "chemical-burns", category: "Trauma", aliases: ["Mild to Moderate Burns", "Severe Burns"] },
  { name: "Ocular Injury", slug: "ocular-injury", category: "Trauma" },
  { name: "Shaken Baby Syndrome", slug: "shaken-baby-syndrome", category: "Trauma", aliases: ["Inflicted Childhood Neurotrauma"] },

  // Pediatrics
  { name: "Strabismus", slug: "strabismus", category: "Pediatrics", aliases: ["Crossed Eyes", "Lazy Eye"] },
  { name: "Amblyopia", slug: "amblyopia", category: "Pediatrics", aliases: ["Lazy Eye"] },
  { name: "Developmental Anterior Segment Anomalies", slug: "developmental-anterior-segment-anomalies", category: "Pediatrics" },
  { name: "The Bilaterally Blind Infant", slug: "bilaterally-blind-infant", category: "Pediatrics" },
  { name: "PFV/PHPV", slug: "pfv-phpv", category: "Pediatrics", aliases: ["Persistent Fetal Vasculature"] },

  // Refractive
  { name: "Myopia", slug: "myopia", category: "Refractive", aliases: ["Nearsightedness"], symptoms: ["blurry distance vision", "squinting"] },
  { name: "Hyperopia", slug: "hyperopia", category: "Refractive", aliases: ["Farsightedness"], symptoms: ["blurry near vision", "eye strain"] },
  { name: "Astigmatism", slug: "astigmatism", category: "Refractive", symptoms: ["distorted vision", "blurry vision at all distances"] },
  { name: "Presbyopia", slug: "presbyopia", category: "Refractive", aliases: ["Aging Eyes"], symptoms: ["trouble reading", "holding phone far away"] },
  { name: "Anisometropia", slug: "anisometropia", category: "Refractive", aliases: ["Unequal Refractive Power"], symptoms: ["eye strain", "headache", "unequal vision"] },
  { name: "Phoria", slug: "phoria", category: "Refractive", aliases: ["Heterophoria", "Eye Misalignment"], symptoms: ["eye strain", "double vision when tired"] },
  { name: "Refractive Surgery Complications", slug: "refractive-surgery-complications", category: "Refractive" },
  { name: "LASIK Complications", slug: "lasik-complications", category: "Refractive" },
  { name: "PRK Complications", slug: "prk-complications", category: "Refractive", aliases: ["Photorefractive Keratectomy"] },
  { name: "Radial Keratotomy Complications", slug: "radial-keratotomy-complications", category: "Refractive", aliases: ["RK Complications"] },
  { name: "Convergence Insufficiency", slug: "convergence-insufficiency", category: "Refractive" },
  { name: "Accommodative Spasm", slug: "accommodative-spasm", category: "Refractive" },

  // Systemic/Other
  { name: "Stevens-Johnson Syndrome", slug: "stevens-johnson-syndrome", category: "Systemic/Other", aliases: ["Erythema Multiforme Major", "SJS"] },
  { name: "Ocular Cicatricial Pemphigoid", slug: "ocular-cicatricial-pemphigoid", category: "Systemic/Other", aliases: ["OCP", "Mucous Membrane Pemphigoid"] },
  { name: "Albinism", slug: "albinism", category: "Systemic/Other" },
  { name: "Wilson Disease", slug: "wilson-disease", category: "Systemic/Other" },
  { name: "Vitamin A Deficiency", slug: "vitamin-a-deficiency", category: "Systemic/Other" },
  { name: "Contact Dermatitis", slug: "contact-dermatitis", category: "Systemic/Other" },
  { name: "Pregnancy Related Eye Conditions", slug: "pregnancy-related-eye-conditions", category: "Systemic/Other" },
  { name: "Preeclampsia/Eclampsia", slug: "preeclampsia-eclampsia", category: "Systemic/Other" },

  // Phakomatoses
  { name: "Neurofibromatosis Type 1", slug: "neurofibromatosis-type-1", category: "Phakomatoses", aliases: ["Von Recklinghausen Syndrome", "NF1"] },
  { name: "Neurofibromatosis Type 2", slug: "neurofibromatosis-type-2", category: "Phakomatoses", aliases: ["NF2"] },
  { name: "Tuberous Sclerosis Complex", slug: "tuberous-sclerosis-complex", category: "Phakomatoses", aliases: ["Bourneville Syndrome"] },
  { name: "Von Hippel-Lindau Syndrome", slug: "von-hippel-lindau-syndrome", category: "Phakomatoses" },
  { name: "Wyburn-Mason Syndrome", slug: "wyburn-mason-syndrome", category: "Phakomatoses", aliases: ["Racemose Hemangiomatosis"] },
  { name: "Ataxia Telangiectasia", slug: "ataxia-telangiectasia", category: "Phakomatoses", aliases: ["Louis-Bar Syndrome"] },
  { name: "Sturge-Weber Syndrome", slug: "sturge-weber-syndrome", category: "Phakomatoses" },

  // Postoperative
  { name: "Hypotony Syndrome", slug: "hypotony-syndrome", category: "Postoperative" },
  { name: "Blind Painful Eye", slug: "blind-painful-eye", category: "Postoperative" },
  { name: "Postoperative Complications of Cataract Surgery", slug: "postoperative-complications-cataract-surgery", category: "Postoperative" },
  { name: "Postoperative Complications of Filtering Surgery", slug: "postoperative-complications-filtering-surgery", category: "Postoperative" },
  { name: "Low Postoperative IOP", slug: "low-postoperative-iop", category: "Postoperative" },
  { name: "Increased Postoperative IOP", slug: "increased-postoperative-iop", category: "Postoperative" },

  // Symptoms (searchable)
  { name: "Burning Eyes", slug: "burning-eyes", category: "Symptoms" },
  { name: "Discharge", slug: "discharge", category: "Symptoms", aliases: ["Eye Discharge", "Mucus"] },
  { name: "Distortion of Vision", slug: "distortion-of-vision", category: "Symptoms", aliases: ["Metamorphopsia"] },
  { name: "Double Vision", slug: "double-vision", category: "Symptoms", aliases: ["Diplopia"] },
  { name: "Decreased Vision", slug: "decreased-vision", category: "Symptoms", aliases: ["Vision Loss", "Blurry Vision"] },
  { name: "Flashes of Light", slug: "flashes-of-light", category: "Symptoms", aliases: ["Photopsia"] },
  { name: "Floaters", slug: "floaters", category: "Symptoms", aliases: ["Eye Floaters", "Spots in Vision"] },
  { name: "Foreign Body Sensation", slug: "foreign-body-sensation", category: "Symptoms" },
  { name: "Halos Around Lights", slug: "halos-around-lights", category: "Symptoms" },
  { name: "Itchy Eyes", slug: "itchy-eyes", category: "Symptoms", aliases: ["Eye Itching", "Ocular Pruritis"] },
  { name: "Light Sensitivity", slug: "light-sensitivity", category: "Symptoms", aliases: ["Photophobia"] },
  { name: "Night Blindness", slug: "night-blindness", category: "Symptoms", aliases: ["Nyctalopia"] },
  { name: "Red Eye", slug: "red-eye", category: "Symptoms" },
  { name: "Eyes Jumping", slug: "eyes-jumping", category: "Symptoms", aliases: ["Oscillopsia"] },

  // MEWDS and other inflammatory
  { name: "MEWDS", slug: "mewds", category: "Inflammatory", aliases: ["Multiple Evanescent White Dot Syndrome"] },
  { name: "APMPPE", slug: "apmppe", category: "Inflammatory", aliases: ["Acute Posterior Multifocal Placoid Pigment Epitheliopathy"] },
  { name: "DUSN", slug: "dusn", category: "Inflammatory", aliases: ["Diffuse Unilateral Subacute Neuroretinitis"] },
];

// Get condition names for autosuggest (flat list of all searchable names)
export function getAllConditionNames(): string[] {
  const names = new Set<string>();

  allConditions.forEach(condition => {
    names.add(condition.name);
    if (condition.aliases) {
      condition.aliases.forEach(alias => names.add(alias));
    }
  });

  return Array.from(names).sort();
}

// Search conditions with fuzzy matching
export function searchConditions(query: string): SearchCondition[] {
  if (!query || query.length < 2) return [];

  const lowerQuery = query.toLowerCase();

  return allConditions.filter(condition => {
    // Match condition name
    if (condition.name.toLowerCase().includes(lowerQuery)) return true;

    // Match aliases
    if (condition.aliases?.some(alias => alias.toLowerCase().includes(lowerQuery))) return true;

    // Match category
    if (condition.category.toLowerCase().includes(lowerQuery)) return true;

    return false;
  });
}

// Get featured conditions for homepage display
export function getFeaturedConditions(): SearchCondition[] {
  return allConditions.filter(condition =>
    featuredConditions.some(featured =>
      condition.name.toLowerCase().includes(featured.toLowerCase()) ||
      condition.aliases?.some(alias => alias.toLowerCase().includes(featured.toLowerCase()))
    )
  );
}
