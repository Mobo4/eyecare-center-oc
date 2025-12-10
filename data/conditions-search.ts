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
  { name: "Corneal and Conjunctival", slug: "corneal-and-conjunctival", category: "Trauma" },
  { name: "Conjunctival Laceration", slug: "conjunctival-laceration", category: "Trauma" },
  { name: "Traumatic Iritis", slug: "traumatic-iritis", category: "Trauma" },
  { name: "Hyphema and Microhyphema", slug: "hyphema-and-microhyphema", category: "Trauma" },
  { name: "Iridodialysis/Cyclodialysis", slug: "iridodialysiscyclodialysis", category: "Trauma" },
  { name: "Eyelid Laceration", slug: "eyelid-laceration", category: "Trauma" },
  { name: "Orbital Blow-Out Fracture", slug: "orbital-blow-out-fracture", category: "Trauma" },
  { name: "Traumatic Retrobulbar", slug: "traumatic-retrobulbar", category: "Trauma" },
  { name: "Traumatic Optic Neuropathy", slug: "traumatic-optic-neuropathy", category: "Trauma" },
  { name: "Intraorbital Foreign Body", slug: "intraorbital-foreign-body", category: "Trauma" },
  { name: "Corneal Laceration", slug: "corneal-laceration", category: "Trauma" },
  { name: "Ruptured Globe and Penetrating", slug: "ruptured-globe-and-penetrating", category: "Trauma" },
  { name: "Intraocular Foreign Body", slug: "intraocular-foreign-body", category: "Trauma" },
  { name: "Commotio Retinae", slug: "commotio-retinae", category: "Trauma" },
  { name: "Traumatic Choroidal Rupture", slug: "traumatic-choroidal-rupture", category: "Trauma" },
  { name: "Chorioretinitis Sclopetaria", slug: "chorioretinitis-sclopetaria", category: "Trauma" },
  { name: "Purtscher Retinopathy", slug: "purtscher-retinopathy", category: "Trauma" },
  { name: "Shaken Baby Syndrome/Inﬂ  icted", slug: "shaken-baby-syndromein-icted", category: "Trauma" },
  { name: "Superﬁ  cial Punctate Keratopathy", slug: "super-cial-punctate-keratopathy", category: "Cornea" },
  { name: "Recurrent Corneal Erosion", slug: "recurrent-corneal-erosion", category: "Cornea" },
  { name: "Dry-Eye Syndrome", slug: "dry-eye-syndrome", category: "Cornea", aliases: ["DES", "Tear Dysfunction Syndrome", "Sicca", "Evaporative Dry Eye", "Aqueous Deficient Dry Eye"] },
  { name: "Filamentary Keratopathy", slug: "filamentary-keratopathy", category: "Cornea" },
  { name: "Exposure Keratopathy", slug: "exposure-keratopathy", category: "Cornea" },
  { name: "Neurotrophic Keratopathy", slug: "neurotrophic-keratopathy", category: "Cornea" },
  { name: "Thermal/Ultraviolet", slug: "thermalultraviolet", category: "Cornea" },
  { name: "Thygeson Superﬁ  cial Punctate", slug: "thygeson-super-cial-punctate", category: "Cornea" },
  { name: "Pterygium/Pinguecula", slug: "pterygiumpinguecula", category: "Cornea" },
  { name: "Band Keratopathy", slug: "band-keratopathy", category: "Cornea" },
  { name: "Acanthamoeba Keratitis", slug: "acanthamoeba-keratitis", category: "Cornea" },
  { name: "Crystalline Keratopathy", slug: "crystalline-keratopathy", category: "Cornea" },
  { name: "Herpes Simplex Virus", slug: "herpes-simplex-virus", category: "Cornea" },
  { name: "Herpes Zoster Ophthalmicus/", slug: "herpes-zoster-ophthalmicus", category: "Cornea" },
  { name: "Ocular Vaccinia", slug: "ocular-vaccinia", category: "Cornea" },
  { name: "Interstitial Keratitis", slug: "interstitial-keratitis", category: "Cornea" },
  { name: "Staphylococcal", slug: "staphylococcal", category: "Cornea" },
  { name: "Phlyctenulosis", slug: "phlyctenulosis", category: "Cornea" },
  { name: "Contact Lens-Related Problems", slug: "contact-lens-related-problems", category: "Cornea" },
  { name: "Contact Lens-Induced Giant", slug: "contact-lens-induced-giant", category: "Cornea" },
  { name: "Peripheral Corneal", slug: "peripheral-corneal", category: "Cornea" },
  { name: "Dellen", slug: "dellen", category: "Cornea" },
  { name: "Corneal Dystrophies", slug: "corneal-dystrophies", category: "Cornea" },
  { name: "Fuchs Endothelial Dystrophy", slug: "fuchs-endothelial-dystrophy", category: "Cornea", aliases: ["Fuchs", "Corneal Edema", "Guttata"] },
  { name: "Aphakic Bullous Keratopathy/", slug: "aphakic-bullous-keratopathy", category: "Cornea" },
  { name: "Corneal Graft Rejection", slug: "corneal-graft-rejection", category: "Cornea" },
  { name: "Corneal Refractive Surgery", slug: "corneal-refractive-surgery", category: "Cornea" },
  { name: "Acute Conjunctivitis", slug: "acute-conjunctivitis", category: "Conjunctiva/Sclera/Iris/External Disease" },
  { name: "Chronic Conjunctivitis", slug: "chronic-conjunctivitis", category: "Conjunctiva/Sclera/Iris/External Disease" },
  { name: "Parinaud Oculoglandular", slug: "parinaud-oculoglandular", category: "Conjunctiva/Sclera/Iris/External Disease" },
  { name: "Superior Limbic", slug: "superior-limbic", category: "Conjunctiva/Sclera/Iris/External Disease" },
  { name: "Episcleritis", slug: "episcleritis", category: "Conjunctiva/Sclera/Iris/External Disease" },
  { name: "Scleritis", slug: "scleritis", category: "Conjunctiva/Sclera/Iris/External Disease" },
  { name: "Blepharitis/Meibomitis", slug: "blepharitismeibomitis", category: "Conjunctiva/Sclera/Iris/External Disease", aliases: ["MGD", "Meibomian Gland Dysfunction", "Eyelid Inflammation", "Posterior Blepharitis"] },
  { name: "Ocular Rosacea", slug: "ocular-rosacea", category: "Conjunctiva/Sclera/Iris/External Disease" },
  { name: "Ocular Cicatricial Pemphigoid", slug: "ocular-cicatricial-pemphigoid", category: "Conjunctiva/Sclera/Iris/External Disease" },
  { name: "Contact Dermatitis", slug: "contact-dermatitis", category: "Conjunctiva/Sclera/Iris/External Disease" },
  { name: "Conjunctival Tumors", slug: "conjunctival-tumors", category: "Conjunctiva/Sclera/Iris/External Disease" },
  { name: "Malignant Melanoma of the Iris", slug: "malignant-melanoma-of-the-iris", category: "Conjunctiva/Sclera/Iris/External Disease" },
  { name: "Chalazion/Hordeolum", slug: "chalazionhordeolum", category: "Eyelid" },
  { name: "Trichiasis", slug: "trichiasis", category: "Eyelid" },
  { name: "Floppy Eyelid Syndrome", slug: "floppy-eyelid-syndrome", category: "Eyelid" },
  { name: "Blepharospasm", slug: "blepharospasm", category: "Eyelid" },
  { name: "Canaliculitis", slug: "canaliculitis", category: "Eyelid" },
  { name: "Dacryocystitis/Inﬂ  ammation of", slug: "dacryocystitisin-ammation-of", category: "Eyelid" },
  { name: "Malignant Tumors of", slug: "malignant-tumors-of", category: "Eyelid" },
  { name: "Orbital Disease", slug: "orbital-disease", category: "Orbit" },
  { name: "Inﬂ  ammatory Orbital Disease", slug: "in-ammatory-orbital-disease", category: "Orbit" },
  { name: "Infectious Orbital Disease", slug: "infectious-orbital-disease", category: "Orbit" },
  { name: "Orbital Tumors", slug: "orbital-tumors", category: "Orbit" },
  { name: "Traumatic Orbital Disease", slug: "traumatic-orbital-disease", category: "Orbit" },
  { name: "Lacrimal Gland Mass/Chronic", slug: "lacrimal-gland-masschronic", category: "Orbit" },
  { name: "Miscellaneous Orbital Diseases", slug: "miscellaneous-orbital-diseases", category: "Orbit" },
  { name: "Leukocoria", slug: "leukocoria", category: "Pediatrics" },
  { name: "Retinopathy of Prematurity", slug: "retinopathy-of-prematurity", category: "Pediatrics" },
  { name: "Familial Exudative", slug: "familial-exudative", category: "Pediatrics" },
  { name: "Esodeviations in Children", slug: "esodeviations-in-children", category: "Pediatrics" },
  { name: "Exodeviations in Children", slug: "exodeviations-in-children", category: "Pediatrics" },
  { name: "Strabismus Syndromes", slug: "strabismus-syndromes", category: "Pediatrics" },
  { name: "Amblyopia", slug: "amblyopia", category: "Pediatrics" },
  { name: "Congenital Cataract", slug: "congenital-cataract", category: "Pediatrics" },
  { name: "Ophthalmia Neonatorum", slug: "ophthalmia-neonatorum", category: "Pediatrics" },
  { name: "Congenital Nasolacrimal Duct", slug: "congenital-nasolacrimal-duct", category: "Pediatrics" },
  { name: "Congenital/Infantile", slug: "congenitalinfantile", category: "Pediatrics" },
  { name: "Developmental Anterior Segment", slug: "developmental-anterior-segment", category: "Pediatrics" },
  { name: "Congenital Ptosis", slug: "congenital-ptosis", category: "Pediatrics" },
  { name: "The Bilaterally Blind Infant", slug: "the-bilaterally-blind-infant", category: "Pediatrics" },
  { name: "Primary Open-Angle Glaucoma", slug: "primary-open-angle-glaucoma", category: "Glaucoma", aliases: ["POAG", "Chronic Glaucoma", "Open Angle Glaucoma"] },
  { name: "Low-Pressure Primary Open-", slug: "low-pressure-primary-open-", category: "Glaucoma" },
  { name: "Ocular Hypertension", slug: "ocular-hypertension", category: "Glaucoma", aliases: ["High Eye Pressure", "Elevated IOP", "Glaucoma Suspect"] },
  { name: "Acute Angle-Closure Glaucoma", slug: "acute-angle-closure-glaucoma", category: "Glaucoma", aliases: ["AACG", "Closed Angle Glaucoma", "Narrow Angle Glaucoma", "Acute Glaucoma Attack"] },
  { name: "Chronic Angle-Closure", slug: "chronic-angle-closure", category: "Glaucoma" },
  { name: "Angle-Recession Glaucoma", slug: "angle-recession-glaucoma", category: "Glaucoma" },
  { name: "Inﬂ  ammatory Open-Angle", slug: "in-ammatory-open-angle", category: "Glaucoma" },
  { name: "Glaucomatocyclitic Crisis/Posner–", slug: "glaucomatocyclitic-crisisposner", category: "Glaucoma" },
  { name: "Steroid-Response Glaucoma", slug: "steroid-response-glaucoma", category: "Glaucoma" },
  { name: "Pigment Dispersion Syndrome/", slug: "pigment-dispersion-syndrome", category: "Glaucoma" },
  { name: "Pseudoexfoliation Syndrome/", slug: "pseudoexfoliation-syndrome", category: "Glaucoma" },
  { name: "Lens-Induced (Phacogenic)", slug: "lens-induced-phacogenic", category: "Glaucoma" },
  { name: "Plateau Iris", slug: "plateau-iris", category: "Glaucoma" },
  { name: "Neovascular Glaucoma", slug: "neovascular-glaucoma", category: "Glaucoma" },
  { name: "Iridocorneal Endothelial", slug: "iridocorneal-endothelial", category: "Glaucoma" },
  { name: "Postoperative Glaucoma", slug: "postoperative-glaucoma", category: "Glaucoma" },
  { name: "Aqueous Misdirection Syndrome/", slug: "aqueous-misdirection-syndrome", category: "Glaucoma" },
  { name: "Postoperative Complications of", slug: "postoperative-complications-of", category: "Glaucoma" },
  { name: "Blebitis", slug: "blebitis", category: "Glaucoma" },
  { name: "Anisocoria", slug: "anisocoria", category: "Neuro-Ophthalmology" },
  { name: "Horner Syndrome", slug: "horner-syndrome", category: "Neuro-Ophthalmology", aliases: ["Oculosympathetic Paresis"] },
  { name: "Argyll Robertson Pupils", slug: "argyll-robertson-pupils", category: "Neuro-Ophthalmology" },
  { name: "Adie (Tonic) Pupil", slug: "adie-tonic-pupil", category: "Neuro-Ophthalmology" },
  { name: "Isolated Third Nerve Palsy", slug: "isolated-third-nerve-palsy", category: "Neuro-Ophthalmology" },
  { name: "Aberrant Regeneration", slug: "aberrant-regeneration", category: "Neuro-Ophthalmology" },
  { name: "Isolated Fourth Nerve Palsy", slug: "isolated-fourth-nerve-palsy", category: "Neuro-Ophthalmology" },
  { name: "Isolated Sixth Nerve Palsy", slug: "isolated-sixth-nerve-palsy", category: "Neuro-Ophthalmology" },
  { name: "Isolated Seventh Nerve Palsy", slug: "isolated-seventh-nerve-palsy", category: "Neuro-Ophthalmology" },
  { name: "Cavernous Sinus And Associated", slug: "cavernous-sinus-and-associated", category: "Neuro-Ophthalmology" },
  { name: "Myasthenia Gravis", slug: "myasthenia-gravis", category: "Neuro-Ophthalmology" },
  { name: "Chronic Progressive External", slug: "chronic-progressive-external", category: "Neuro-Ophthalmology" },
  { name: "Internuclear Ophthalmoplegia", slug: "internuclear-ophthalmoplegia", category: "Neuro-Ophthalmology" },
  { name: "Optic Neuritis", slug: "optic-neuritis", category: "Neuro-Ophthalmology", aliases: ["Papillitis", "Retrobulbar Neuritis", "MS Related Vision Loss"] },
  { name: "Idiopathic Intracranial", slug: "idiopathic-intracranial", category: "Neuro-Ophthalmology" },
  { name: "Arteritic Ischemic Optic Neuropathy", slug: "arteritic-ischemic-optic-neuropathy", category: "Neuro-Ophthalmology", aliases: ["AAION", "Giant Cell Arteritis", "GCA", "Temporal Arteritis"] },
  { name: "Nonarteritic Ischemic Optic Neuropathy", slug: "nonarteritic-ischemic", category: "Neuro-Ophthalmology", aliases: ["NAION", "Stroke of the Optic Nerve"] },
  { name: "Posterior Ischemic", slug: "posterior-ischemic", category: "Neuro-Ophthalmology" },
  { name: "Miscellaneous Optic", slug: "miscellaneous-optic", category: "Neuro-Ophthalmology" },
  { name: "Nystagmus", slug: "nystagmus", category: "Neuro-Ophthalmology" },
  { name: "Transient Visual Loss/Amaurosis", slug: "transient-visual-lossamaurosis", category: "Neuro-Ophthalmology" },
  { name: "Vertebrobasilar Artery", slug: "vertebrobasilar-artery", category: "Neuro-Ophthalmology" },
  { name: "Cortical Blindness", slug: "cortical-blindness", category: "Neuro-Ophthalmology" },
  { name: "Nonphysiologic Visual Loss", slug: "nonphysiologic-visual-loss", category: "Neuro-Ophthalmology" },
  { name: "Headache", slug: "headache", category: "Neuro-Ophthalmology" },
  { name: "Migraine", slug: "migraine", category: "Neuro-Ophthalmology" },
  { name: "Cluster Headache", slug: "cluster-headache", category: "Neuro-Ophthalmology" },
  { name: "Posterior Vitreous Detachment", slug: "posterior-vitreous-detachment", category: "Retina", aliases: ["PVD", "Vitreous Floaters", "Flashes"] },
  { name: "Retinal Break", slug: "retinal-break", category: "Retina" },
  { name: "Retinoschisis", slug: "retinoschisis", category: "Retina" },
  { name: "Cotton-Wool Spot", slug: "cotton-wool-spot", category: "Retina", aliases: ["CWS", "Retinal Ischemia", "Diabetic Retinopathy Sign", "Hypertensive Retinopathy Sign"] },
  { name: "Branch Retinal Artery Occlusion", slug: "branch-retinal-artery-occlusion", category: "Retina" },
  { name: "Hypertensive Retinopathy", slug: "hypertensive-retinopathy", category: "Retina" },
  { name: "Ocular Ischemic Syndrome/Carotid Occlusive Disease", slug: "ocular-ischemic-syndromecarotid", category: "Retina", aliases: ["OIS", "Carotid Artery Disease"] },
  { name: "Central Serous Chorioretinopathy", slug: "central-serous", category: "Retina", aliases: ["CSR", "CSC", "Central Serous Retinopathy", "Central Serous"] },
  { name: "Nonexudative (Dry) Age-Related Macular Degeneration", slug: "nonexudative-dry-age-related", category: "Retina", aliases: ["Dry AMD", "Dry ARMD", "Geographic Atrophy", "Drusen"] },
  { name: "Neovascular or Exudative (Wet) Age-Related Macular Degeneration", slug: "neovascular-or-exudative-wet-age-", category: "Retina", aliases: ["Wet AMD", "Wet ARMD", "CNV", "Choroidal Neovascularization"] },
  { name: "Idiopathic Polypoidal Choroidal", slug: "idiopathic-polypoidal-choroidal", category: "Retina" },
  { name: "Sickle Cell Disease (Including Sickle", slug: "sickle-cell-disease-including-sickle", category: "Retina" },
  { name: "Valsalva Retinopathy", slug: "valsalva-retinopathy", category: "Retina" },
  { name: "High Myopia", slug: "high-myopia", category: "Retina" },
  { name: "Angioid Streaks", slug: "angioid-streaks", category: "Retina" },
  { name: "Ocular Histoplasmosis", slug: "ocular-histoplasmosis", category: "Retina" },
  { name: "Epiretinal Membrane", slug: "epiretinal-membrane-macular-pucker", category: "Retina", aliases: ["ERM", "Macular Pucker", "Cellophane Maculopathy", "Surface Wrinkling Retinopathy"] },
  { name: "Choroidal Effusion/", slug: "choroidal-effusion", category: "Retina" },
  { name: "Retinitis Pigmentosa and Inherited Retinal Diseases", slug: "retinitis-pigmentosa-and-inherited", category: "Retina", aliases: ["RP", "Night Blindness", "Rod-Cone Dystrophy", "Usher Syndrome"] },
  { name: "Stargardt Disease (Fundus", slug: "stargardt-disease-fundus", category: "Retina" },
  { name: "Best Disease (Vitelliform Macular", slug: "best-disease-vitelliform-macular", category: "Retina" },
  { name: "Chloroquine/Hydroxychloroquine", slug: "chloroquinehydroxychloroquine", category: "Retina" },
  { name: "Choroidal Nevus and Malignant", slug: "choroidal-nevus-and-malignant", category: "Retina" },
  { name: "Anterior Uveitis (Iritis/", slug: "anterior-uveitis-iritis", category: "Uveitis" },
  { name: "Intermediate Uveitis", slug: "intermediate-uveitis", category: "Uveitis" },
  { name: "Human Leukocyte Antigen (HLA)–", slug: "human-leukocyte-antigen-hla", category: "Uveitis" },
  { name: "Cytomegalovirus Retinitis", slug: "cytomegalovirus-retinitis", category: "Uveitis" },
  { name: "Noninfectious Retinal", slug: "noninfectious-retinal", category: "Uveitis" },
  { name: "Vogt–Koyanagi–Harada Syndrome", slug: "vogtkoyanagiharada", category: "Uveitis", aliases: ["VKH", "Uveo-Meningitic Syndrome"] },
  { name: "Chronic Postoperative Uveitis", slug: "chronic-postoperative-uveitis", category: "Uveitis" },
  { name: "Endogenous Bacterial", slug: "endogenous-bacterial", category: "Uveitis" },
  { name: "Candida Retinitis/Uveitis/", slug: "candida-retinitisuveitis", category: "Uveitis" },
  { name: "Pregnancy", slug: "pregnancy", category: "General Ophthalmic Problems" },
  { name: "Lyme Disease", slug: "lyme-disease", category: "General Ophthalmic Problems" },
  { name: "Convergence Insufﬁ  ciency", slug: "convergence-insuf-ciency", category: "General Ophthalmic Problems" },
  { name: "Stevens–Johnson Syndrome", slug: "stevensjohnson-syndrome", category: "General Ophthalmic Problems" },
  { name: "Vitamin A Deﬁ  ciency", slug: "vitamin-a-de-ciency", category: "General Ophthalmic Problems" },
  { name: "Subluxed or Dislocated", slug: "subluxed-or-dislocated", category: "General Ophthalmic Problems" },
  { name: "Plain Films", slug: "plain-films", category: "Imaging Modalities in Ophthalmology" },
  { name: "Computed Tomography", slug: "computed-tomography", category: "Imaging Modalities in Ophthalmology" },
  { name: "Magnetic Resonance Imaging", slug: "magnetic-resonance-imaging", category: "Imaging Modalities in Ophthalmology" },
  { name: "Magnetic Resonance", slug: "magnetic-resonance", category: "Imaging Modalities in Ophthalmology" },
  { name: "Cerebral Arteriography", slug: "cerebral-arteriography", category: "Imaging Modalities in Ophthalmology" },
  { name: "Nuclear Medicine", slug: "nuclear-medicine", category: "Imaging Modalities in Ophthalmology" },
  { name: "Ophthalmic Ultrasonography", slug: "ophthalmic-ultrasonography", category: "Imaging Modalities in Ophthalmology" },
  { name: "Photographic Studies", slug: "photographic-studies", category: "Imaging Modalities in Ophthalmology" },
  { name: "Intravenous Fluorescein", slug: "intravenous-fluorescein", category: "Imaging Modalities in Ophthalmology" },
  { name: "Indocyanine Green", slug: "indocyanine-green", category: "Imaging Modalities in Ophthalmology" },
  { name: "Optical Coherence Tomography", slug: "optical-coherence-tomography", category: "Imaging Modalities in Ophthalmology" },
  { name: "Confocal Scanning Laser", slug: "confocal-scanning-laser", category: "Imaging Modalities in Ophthalmology" },
  { name: "Confocal Biomicroscopy", slug: "confocal-biomicroscopy", category: "Imaging Modalities in Ophthalmology" },
  { name: "Corneal Topography & Tomography", slug: "corneal-topography-tomography", category: "Imaging Modalities in Ophthalmology" },
  { name: "Dacryocystography", slug: "dacryocystography", category: "Imaging Modalities in Ophthalmology" },

  // Symptoms (searchable)
  { name: "Burning Eyes", slug: "burning-eyes", category: "Symptoms" },
  { name: "Discharge", slug: "discharge", category: "Symptoms", aliases: ["Eye Discharge", "Mucus"] },
  { name: "Distortion of Vision", slug: "distortion-of-vision", category: "Symptoms", aliases: ["Metamorphopsia"] },
  { name: "Double Vision", slug: "double-vision", category: "Symptoms", aliases: ["Diplopia", "Seeing Double", "Ghost Images"] },
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
