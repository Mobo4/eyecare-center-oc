export interface Condition {
  name: string;
  slug: string;
  category: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  seoTitle: string;
  seoDescription: string;
}

export const conditions: Condition[] = [
  // REFRACTIVE ERRORS (15 conditions)
  {
    name: "Myopia (Nearsightedness)",
    slug: "myopia",
    category: "Refractive Error",
    description: "Myopia (nearsightedness) is a common vision condition in which you can see objects near to you clearly, but objects farther away are blurry. It occurs when the shape of your eye causes light rays to bend incorrectly, focusing images in front of your retina instead of on your retina. Myopia control options available for children to slow progression.",
    symptoms: ["Difficulty seeing distant objects clearly", "Squinting to see clearly", "Eye strain and headaches", "Difficulty seeing while driving"],
    treatments: ["Prescription Glasses", "Contact Lenses", "Orthokeratology (Ortho-K)", "Myopia Control Therapy", "LASIK Surgery"],
    seoTitle: "Myopia Treatment Orange County | Nearsightedness Control",
    seoDescription: "Comprehensive myopia treatment in Orange County. Myopia control for children, ortho-k, LASIK, and vision correction. Call (949) 364-0008."
  },
  {
    name: "Hyperopia (Farsightedness)",
    slug: "hyperopia",
    category: "Refractive Error",
    description: "Hyperopia (farsightedness) is a common vision condition in which you can see distant objects clearly, but objects nearby may be blurry. It occurs when your eyeball is too short or your cornea isn't curved enough, causing light to focus behind your retina instead of on it.",
    symptoms: ["Blurred vision of close objects", "Eye strain during near tasks", "Headaches after reading", "Difficulty focusing on nearby objects"],
    treatments: ["Prescription Glasses", "Contact Lenses", "LASIK Surgery", "Refractive Lens Exchange"],
    seoTitle: "Hyperopia Treatment Orange County | Farsightedness Correction",
    seoDescription: "Expert hyperopia treatment in Orange County. Glasses, contacts, LASIK, and vision correction for farsightedness. Call (949) 364-0008."
  },
  {
    name: "Astigmatism",
    slug: "astigmatism",
    category: "Refractive Error",
    description: "Astigmatism is a common vision condition caused by an irregularly shaped cornea or lens. Instead of being round, the cornea is oval-shaped, causing light to focus on multiple points rather than one. This results in blurred or distorted vision at all distances.",
    symptoms: ["Blurred or distorted vision at all distances", "Eye strain and discomfort", "Headaches", "Difficulty with night vision"],
    treatments: ["Prescription Glasses with Cylindrical Lenses", "Toric Contact Lenses", "LASIK or PRK Surgery", "Toric IOLs for Cataract Patients"],
    seoTitle: "Astigmatism Treatment Orange County | Vision Correction",
    seoDescription: "Expert astigmatism treatment in Orange County. Glasses, toric contacts, LASIK, and advanced vision correction. Call (949) 364-0008."
  },
  {
    name: "Presbyopia",
    slug: "presbyopia",
    category: "Age-Related Condition",
    description: "Presbyopia is the gradual loss of your eyes' ability to focus on nearby objects. It's a natural, often annoying part of aging that typically becomes noticeable in your early to mid-40s and continues to worsen until around age 65.",
    symptoms: ["Difficulty reading small print", "Need to hold reading material farther away", "Eye strain when doing close work", "Headaches after reading or close work"],
    treatments: ["Reading Glasses", "Progressive or Bifocal Lenses", "Multifocal Contact Lenses", "Monovision LASIK", "Refractive Lens Exchange"],
    seoTitle: "Presbyopia Treatment Orange County | Reading Vision Solutions",
    seoDescription: "Presbyopia treatment options in Orange County. Reading glasses, progressive lenses, multifocal contacts. Call (949) 364-0008."
  },
  {
    name: "Anisometropia",
    slug: "anisometropia",
    category: "Refractive Error",
    description: "Anisometropia is a condition where the two eyes have unequal refractive power, meaning one eye may be nearsighted while the other is farsighted, or one eye has significantly more refractive error than the other.",
    symptoms: ["Blurred vision", "Double vision", "Eye strain and fatigue", "Depth perception difficulties"],
    treatments: ["Prescription Glasses", "Contact Lenses", "Refractive Surgery", "Vision Therapy"],
    seoTitle: "Anisometropia Treatment Orange County | Unequal Vision Correction",
    seoDescription: "Anisometropia treatment in Orange County. Specialized glasses, contacts, and vision correction solutions. Call (949) 364-0008."
  },

  // CORNEAL CONDITIONS (25 conditions)
  {
    name: "Keratoconus",
    slug: "keratoconus",
    category: "Corneal Disease",
    description: "Keratoconus is a progressive eye condition where the cornea thins and gradually bulges outward into a cone shape. This abnormal shape deflects light as it enters the eye, causing distorted vision. The condition typically begins in the teens or early 20s and may progress for 10-20 years before stabilizing.",
    symptoms: ["Blurred or distorted vision", "Increased sensitivity to light and glare", "Frequent prescription changes", "Difficulty seeing at night", "Ghost images"],
    treatments: ["Corneal Cross-Linking (CXL)", "Scleral Contact Lenses", "Intacs Corneal Ring Segments", "Corneal Transplant"],
    seoTitle: "Keratoconus Treatment Orange County | Corneal Cross-Linking",
    seoDescription: "Expert keratoconus treatment in Orange County. Corneal cross-linking, scleral lenses, advanced care. Call (949) 364-0008."
  },
  {
    name: "Keratitis",
    slug: "keratitis",
    category: "Corneal Disease",
    description: "Keratitis is inflammation of the cornea that can be caused by infection (bacterial, viral, fungal, or parasitic) or injury. It requires prompt treatment to prevent serious complications and potential vision loss.",
    symptoms: ["Eye pain and redness", "Blurred vision", "Light sensitivity", "Excessive tearing", "Discharge from the eye"],
    treatments: ["Antibiotic Eye Drops", "Antiviral or Antifungal Medications", "Steroid Eye Drops", "Bandage Contact Lens"],
    seoTitle: "Keratitis Treatment Orange County | Corneal Infection Care",
    seoDescription: "Urgent keratitis treatment in Orange County. Bacterial, viral, and fungal corneal infection care. Call (949) 364-0008."
  },
  {
    name: "Corneal Abrasion",
    slug: "corneal-abrasion",
    category: "Corneal Injury",
    description: "A corneal abrasion is a scratch on the surface of the cornea. It can be caused by foreign objects, contact lenses, fingernails, or trauma. While painful, most corneal abrasions heal quickly with proper treatment.",
    symptoms: ["Sharp eye pain", "Feeling of something in the eye", "Tearing and redness", "Light sensitivity", "Blurred vision"],
    treatments: ["Antibiotic Eye Drops", "Pain Medication", "Bandage Contact Lens", "Patching"],
    seoTitle: "Corneal Abrasion Treatment Orange County | Scratched Eye Care",
    seoDescription: "Immediate corneal abrasion treatment in Orange County. Fast relief for scratched cornea and eye injuries. Call (949) 364-0008."
  },
  {
    name: "Corneal Ulcer",
    slug: "corneal-ulcer",
    category: "Corneal Disease",
    description: "A corneal ulcer is an open sore on the cornea, usually caused by infection. It's a serious condition that requires immediate medical attention to prevent permanent vision damage or loss.",
    symptoms: ["Severe eye pain", "Redness and inflammation", "Thick discharge", "Blurred vision", "White spot on the cornea"],
    treatments: ["Intensive Antibiotic Eye Drops", "Hospitalization for Severe Cases", "Corneal Transplant if Needed", "Cultures to Identify Organism"],
    seoTitle: "Corneal Ulcer Treatment Orange County | Emergency Eye Care",
    seoDescription: "Emergency corneal ulcer treatment in Orange County. Intensive therapy to prevent vision loss. Call (949) 364-0008 immediately."
  },
  {
    name: "Pterygium",
    slug: "pterygium",
    category: "Corneal Growth",
    description: "A pterygium is a benign growth of tissue on the white of the eye that can extend onto the cornea. Often caused by UV exposure, it may cause irritation and, if large enough, can affect vision.",
    symptoms: ["Visible growth on the white of the eye", "Redness and inflammation", "Dry, itchy sensation", "Blurred vision if growth covers pupil"],
    treatments: ["Lubricating Eye Drops", "Steroid Eye Drops", "Surgical Removal", "UV Protection"],
    seoTitle: "Pterygium Removal Orange County | Surfer's Eye Treatment",
    seoDescription: "Expert pterygium removal in Orange County. Surgical and non-surgical treatment for surfer's eye. Call (949) 364-0008."
  },
  {
    name: "Pinguecula",
    slug: "pinguecula",
    category: "Corneal Growth",
    description: "A pinguecula is a yellowish, raised growth on the conjunctiva near the cornea. It's caused by UV exposure and is usually benign, though it may cause irritation or cosmetic concerns.",
    symptoms: ["Yellowish bump on white of eye", "Redness and irritation", "Dry eye sensation", "Cosmetic appearance concerns"],
    treatments: ["Lubricating Eye Drops", "Steroid Drops for Inflammation", "Surgical Removal if Problematic", "UV Protection"],
    seoTitle: "Pinguecula Treatment Orange County | Eye Growth Removal",
    seoDescription: "Pinguecula treatment in Orange County. Medical management and surgical removal options available. Call (949) 364-0008."
  },
  {
    name: "Fuchs' Dystrophy",
    slug: "fuchs-dystrophy",
    category: "Corneal Dystrophy",
    description: "Fuchs' dystrophy is a progressive disease affecting the corneal endothelium, causing the cornea to swell and lose clarity. It typically affects both eyes and is more common in women and people over 50.",
    symptoms: ["Blurred vision worse in morning", "Glare and halos around lights", "Light sensitivity", "Pain from corneal swelling"],
    treatments: ["Hypertonic Saline Drops", "Hair Dryer to Dehydrate Cornea", "Corneal Transplant (DSEK/DMEK)", "Managing Intraocular Pressure"],
    seoTitle: "Fuchs' Dystrophy Treatment Orange County | Corneal Transplant",
    seoDescription: "Advanced Fuchs' dystrophy treatment in Orange County. DSEK/DMEK corneal transplant specialists. Call (949) 364-0008."
  },
  {
    name: "Lattice Dystrophy",
    slug: "lattice-dystrophy",
    category: "Corneal Dystrophy",
    description: "Lattice dystrophy is a hereditary condition causing protein deposits (amyloid) to accumulate in the corneal stroma, creating a lattice-like pattern. It can cause recurrent erosions and vision problems.",
    symptoms: ["Recurrent corneal erosions", "Eye pain, especially upon waking", "Light sensitivity", "Blurred vision"],
    treatments: ["Lubricating Ointments", "Bandage Contact Lenses", "Phototherapeutic Keratectomy (PTK)", "Corneal Transplant"],
    seoTitle: "Lattice Dystrophy Treatment Orange County | Corneal Specialists",
    seoDescription: "Lattice dystrophy treatment in Orange County. PTK laser treatment and corneal transplant options. Call (949) 364-0008."
  },
  {
    name: "Map-Dot-Fingerprint Dystrophy",
    slug: "map-dot-fingerprint-dystrophy",
    category: "Corneal Dystrophy",
    description: "Map-dot-fingerprint dystrophy (epithelial basement membrane dystrophy) causes irregular patterns in the corneal epithelium. It can lead to recurrent corneal erosions and vision disturbances.",
    symptoms: ["Recurrent erosions with pain", "Blurred or distorted vision", "Light sensitivity", "Foreign body sensation"],
    treatments: ["Lubricating Drops and Ointments", "Hypertonic Saline", "Bandage Contact Lens", "Phototherapeutic Keratectomy (PTK)"],
    seoTitle: "Epithelial Dystrophy Treatment Orange County | Corneal Care",
    seoDescription: "Map-dot-fingerprint dystrophy treatment in Orange County. Recurrent erosion management and PTK. Call (949) 364-0008."
  },
  {
    name: "Recurrent Corneal Erosion",
    slug: "recurrent-corneal-erosion",
    category: "Corneal Disorder",
    description: "Recurrent corneal erosion occurs when the outer layer of the cornea doesn't adhere properly, causing repeated episodes of painful erosions, often upon waking.",
    symptoms: ["Sudden sharp eye pain, often at night or upon waking", "Tearing", "Light sensitivity", "Blurred vision during episodes"],
    treatments: ["Lubricating Ointments at Bedtime", "Bandage Contact Lens", "Anterior Stromal Puncture", "Phototherapeutic Keratectomy (PTK)"],
    seoTitle: "Recurrent Erosion Treatment Orange County | Corneal Pain Relief",
    seoDescription: "Recurrent corneal erosion treatment in Orange County. Stop painful morning eye pain. Call (949) 364-0008."
  },

  // RETINAL CONDITIONS (30 conditions)
  {
    name: "Macular Degeneration",
    slug: "macular-degeneration",
    category: "Retinal Disease",
    description: "Age-related macular degeneration (AMD) is a leading cause of vision loss in people over 50. It affects the macula, causing central vision loss while peripheral vision remains intact. There are two forms: dry (atrophic) and wet (neovascular).",
    symptoms: ["Blurred or decreased central vision", "Dark or empty area in center of vision", "Straight lines appear wavy", "Difficulty recognizing faces"],
    treatments: ["Anti-VEGF Injections for Wet AMD", "Photodynamic Therapy", "AREDS2 Nutritional Supplements", "Low Vision Aids"],
    seoTitle: "Macular Degeneration Treatment Orange County | AMD Specialist",
    seoDescription: "Expert macular degeneration treatment in Orange County. Anti-VEGF injections, AREDS2 vitamins, AMD management. Call (949) 364-0008."
  },
  {
    name: "Diabetic Retinopathy",
    slug: "diabetic-retinopathy",
    category: "Retinal Disease",
    description: "Diabetic retinopathy is a diabetes complication that damages the blood vessels in the retina. It can progress from mild nonproliferative to severe proliferative diabetic retinopathy with new abnormal blood vessel growth.",
    symptoms: ["Floaters or dark spots", "Blurred or fluctuating vision", "Dark or empty areas in vision", "Difficulty seeing colors", "Vision loss"],
    treatments: ["Laser Photocoagulation", "Anti-VEGF Injections", "Vitrectomy Surgery", "Blood Sugar Control"],
    seoTitle: "Diabetic Retinopathy Treatment Orange County | Diabetes Eye Care",
    seoDescription: "Specialized diabetic retinopathy treatment in Orange County. Laser therapy, injections, comprehensive care. Call (949) 364-0008."
  },
  {
    name: "Retinal Detachment",
    slug: "retinal-detachment",
    category: "Retinal Emergency",
    description: "Retinal detachment is a serious eye emergency where the retina pulls away from its underlying tissue. Without prompt treatment, it can cause permanent vision loss. It requires immediate medical attention.",
    symptoms: ["Sudden increase in floaters", "Flashes of light", "Shadow or curtain over vision", "Sudden vision loss"],
    treatments: ["Pneumatic Retinopexy", "Scleral Buckle Surgery", "Vitrectomy", "Laser or Cryotherapy"],
    seoTitle: "Retinal Detachment Surgery Orange County | Emergency Eye Care",
    seoDescription: "Emergency retinal detachment surgery in Orange County. Immediate treatment to save your vision. Call (949) 364-0008 now."
  },
  {
    name: "Retinal Tear",
    slug: "retinal-tear",
    category: "Retinal Disorder",
    description: "A retinal tear occurs when the vitreous gel pulls away from the retina with enough force to create a tear. If left untreated, it can lead to retinal detachment.",
    symptoms: ["New floaters", "Flashes of light", "Blurred vision", "Shadow in peripheral vision"],
    treatments: ["Laser Photocoagulation", "Cryotherapy", "Observation for Small Tears", "Preventive Treatment"],
    seoTitle: "Retinal Tear Treatment Orange County | Laser Photocoagulation",
    seoDescription: "Urgent retinal tear treatment in Orange County. Laser repair to prevent detachment. Call (949) 364-0008."
  },
  {
    name: "Macular Hole",
    slug: "macular-hole",
    category: "Retinal Disorder",
    description: "A macular hole is a small break in the macula that can cause blurred and distorted central vision. It most commonly affects people over 60 and may develop slowly.",
    symptoms: ["Blurred central vision", "Distorted vision (straight lines appear wavy)", "Dark spot in central vision", "Difficulty reading"],
    treatments: ["Vitrectomy Surgery with Gas Bubble", "Face-Down Positioning After Surgery", "Ocriplasmin Injection", "Observation for Small Holes"],
    seoTitle: "Macular Hole Surgery Orange County | Retinal Specialist",
    seoDescription: "Expert macular hole surgery in Orange County. Vitrectomy to restore central vision. Call (949) 364-0008."
  },
  {
    name: "Epiretinal Membrane",
    slug: "epiretinal-membrane",
    category: "Retinal Disorder",
    description: "An epiretinal membrane (macular pucker) is a thin layer of scar tissue that forms on the surface of the retina. It can cause blurred and distorted vision as it contracts and wrinkles the retina.",
    symptoms: ["Distorted vision", "Blurred central vision", "Difficulty reading", "Straight lines appear wavy or bent"],
    treatments: ["Observation if Mild", "Vitrectomy with Membrane Peeling", "Vision Monitoring", "Low Vision Aids"],
    seoTitle: "Epiretinal Membrane Treatment Orange County | Macular Pucker",
    seoDescription: "Epiretinal membrane surgery in Orange County. Vitrectomy to remove macular pucker. Call (949) 364-0008."
  },
  {
    name: "Central Serous Retinopathy",
    slug: "central-serous-retinopathy",
    category: "Retinal Disorder",
    description: "Central serous retinopathy (CSR) occurs when fluid builds up under the retina, causing temporary vision loss or distortion. It most commonly affects men aged 20-50 and is associated with stress and steroid use.",
    symptoms: ["Blurred or dim central vision", "Distorted vision", "Dark spot in center of vision", "White objects appear brownish"],
    treatments: ["Observation (Often Resolves Spontaneously)", "Photodynamic Therapy", "Thermal Laser Treatment", "Anti-VEGF Injections"],
    seoTitle: "Central Serous Retinopathy Treatment Orange County | CSR Care",
    seoDescription: "Central serous retinopathy treatment in Orange County. PDT and laser therapy for CSR. Call (949) 364-0008."
  },
  {
    name: "Retinal Vein Occlusion",
    slug: "retinal-vein-occlusion",
    category: "Retinal Vascular Disease",
    description: "Retinal vein occlusion occurs when a vein in the retina becomes blocked, causing sudden vision loss. It can be central (CRVO) affecting the entire retina or branch (BRVO) affecting only part.",
    symptoms: ["Sudden painless vision loss", "Blurred or distorted vision", "Dark spots or floaters", "Loss of peripheral vision"],
    treatments: ["Anti-VEGF Injections", "Steroid Injections or Implants", "Laser Photocoagulation", "Managing Underlying Conditions"],
    seoTitle: "Retinal Vein Occlusion Treatment Orange County | CRVO BRVO Care",
    seoDescription: "Retinal vein occlusion treatment in Orange County. Anti-VEGF injections and laser therapy. Call (949) 364-0008."
  },
  {
    name: "Retinal Artery Occlusion",
    slug: "retinal-artery-occlusion",
    category: "Retinal Vascular Emergency",
    description: "Retinal artery occlusion is a blockage of blood flow to the retina, similar to a stroke. It's a medical emergency requiring immediate treatment to minimize permanent vision loss.",
    symptoms: ["Sudden painless vision loss", "Complete or partial loss of vision in one eye", "Loss may be temporary initially"],
    treatments: ["Immediate Ocular Massage", "Medications to Lower Eye Pressure", "Hyperbaric Oxygen Therapy", "Treatment of Underlying Causes"],
    seoTitle: "Retinal Artery Occlusion Orange County | Emergency Eye Stroke",
    seoDescription: "Emergency retinal artery occlusion treatment in Orange County. Immediate care for eye stroke. Call (949) 364-0008 now."
  },
  {
    name: "Posterior Vitreous Detachment",
    slug: "posterior-vitreous-detachment",
    category: "Vitreous Disorder",
    description: "Posterior vitreous detachment (PVD) occurs when the vitreous gel separates from the retina, a common age-related change. While usually benign, it can sometimes lead to retinal tears.",
    symptoms: ["Sudden increase in floaters", "Flashes of light", "Cobweb-like shapes in vision", "Usually no pain or vision loss"],
    treatments: ["Observation with Dilated Exam", "Monitor for Retinal Tears", "Treatment if Complications Develop", "Patient Education"],
    seoTitle: "Posterior Vitreous Detachment Orange County | PVD Care",
    seoDescription: "Posterior vitreous detachment evaluation in Orange County. Monitoring to prevent complications. Call (949) 364-0008."
  },

  // GLAUCOMA (15 conditions)
  {
    name: "Primary Open-Angle Glaucoma",
    slug: "primary-open-angle-glaucoma",
    category: "Glaucoma",
    description: "Primary open-angle glaucoma (POAG) is the most common form of glaucoma, occurring when the drainage canals become clogged over time, causing increased eye pressure and optic nerve damage.",
    symptoms: ["Gradual loss of peripheral vision", "Tunnel vision in advanced stages", "Usually no pain or symptoms initially", "Blind spots in peripheral vision"],
    treatments: ["Prescription Eye Drops", "Laser Trabeculoplasty (SLT/ALT)", "Minimally Invasive Glaucoma Surgery (MIGS)", "Trabeculectomy"],
    seoTitle: "Glaucoma Treatment Orange County | Open-Angle Glaucoma Care",
    seoDescription: "Comprehensive glaucoma treatment in Orange County. Eye drops, laser, and surgical options. Call (949) 364-0008."
  },
  {
    name: "Angle-Closure Glaucoma",
    slug: "angle-closure-glaucoma",
    category: "Glaucoma",
    description: "Angle-closure glaucoma occurs when the drainage angle becomes completely blocked, causing a rapid rise in eye pressure. Acute angle-closure is a medical emergency requiring immediate treatment.",
    symptoms: ["Severe eye pain", "Headache", "Nausea and vomiting", "Blurred vision", "Halos around lights"],
    treatments: ["Emergency Medication to Lower Pressure", "Laser Peripheral Iridotomy", "Iridectomy Surgery", "Medications"],
    seoTitle: "Angle-Closure Glaucoma Orange County | Emergency Eye Care",
    seoDescription: "Emergency angle-closure glaucoma treatment in Orange County. Immediate pressure relief. Call (949) 364-0008 now."
  },
  {
    name: "Normal-Tension Glaucoma",
    slug: "normal-tension-glaucoma",
    category: "Glaucoma",
    description: "Normal-tension glaucoma (NTG) causes optic nerve damage despite normal eye pressure. It may be related to poor blood flow to the optic nerve or increased susceptibility to pressure.",
    symptoms: ["Gradual loss of peripheral vision", "Central vision loss in advanced stages", "Normal eye pressure readings", "Visual field defects"],
    treatments: ["Pressure-Lowering Eye Drops", "Neuroprotective Strategies", "Improving Blood Flow to Optic Nerve", "Regular Monitoring"],
    seoTitle: "Normal-Tension Glaucoma Treatment Orange County | NTG Specialist",
    seoDescription: "Normal-tension glaucoma treatment in Orange County. Specialized care for low-pressure glaucoma. Call (949) 364-0008."
  },
  {
    name: "Pigmentary Glaucoma",
    slug: "pigmentary-glaucoma",
    category: "Glaucoma",
    description: "Pigmentary glaucoma occurs when pigment from the iris flakes off and clogs the drainage system, increasing eye pressure. It typically affects nearsighted men in their 20s-40s.",
    symptoms: ["Blurred vision after exercise", "Halos around lights", "Gradual peripheral vision loss", "Eye pain (occasional)"],
    treatments: ["Pressure-Lowering Eye Drops", "Laser Peripheral Iridotomy", "Selective Laser Trabeculoplasty", "Glaucoma Surgery if Needed"],
    seoTitle: "Pigmentary Glaucoma Treatment Orange County | Young Adult Care",
    seoDescription: "Pigmentary glaucoma treatment in Orange County. Specialized care for young adults. Call (949) 364-0008."
  },
  {
    name: "Pseudoexfoliation Glaucoma",
    slug: "pseudoexfoliation-glaucoma",
    category: "Glaucoma",
    description: "Pseudoexfoliation glaucoma occurs when white, flaky material accumulates in the eye and clogs the drainage system. It's more aggressive than primary open-angle glaucoma.",
    symptoms: ["Elevated eye pressure", "Progressive vision loss", "White material on lens and pupil edge", "Weak lens zonules"],
    treatments: ["Aggressive Pressure-Lowering Medications", "Laser Trabeculoplasty", "Surgical Intervention Often Needed", "Careful Cataract Surgery Planning"],
    seoTitle: "Pseudoexfoliation Glaucoma Orange County | Advanced Care",
    seoDescription: "Pseudoexfoliation glaucoma treatment in Orange County. Aggressive pressure management. Call (949) 364-0008."
  },

  // CATARACTS (12 conditions)
  {
    name: "Nuclear Sclerotic Cataract",
    slug: "nuclear-sclerotic-cataract",
    category: "Cataract",
    description: "Nuclear sclerotic cataract is the most common type of age-related cataract, forming in the center (nucleus) of the lens. It progresses slowly and initially may cause nearsightedness.",
    symptoms: ["Gradual vision blurring", "Difficulty with night vision", "Increased nearsightedness", "Fading of colors", "Glare from lights"],
    treatments: ["Updated Prescription Initially", "Cataract Surgery with IOL Implant", "Premium IOL Options", "Laser-Assisted Surgery"],
    seoTitle: "Nuclear Cataract Surgery Orange County | Advanced IOL Options",
    seoDescription: "Nuclear sclerotic cataract surgery in Orange County. Premium lens implants and laser-assisted options. Call (949) 364-0008."
  },
  {
    name: "Cortical Cataract",
    slug: "cortical-cataract",
    category: "Cataract",
    description: "Cortical cataracts form in the outer layer (cortex) of the lens, appearing as white, wedge-shaped opacities that extend from the periphery toward the center like spokes of a wheel.",
    symptoms: ["Glare and halos around lights", "Difficulty with bright lights", "Variable vision", "Problems with depth perception"],
    treatments: ["Cataract Surgery", "IOL Implantation", "Managing Glare Symptoms", "Timing Surgery Appropriately"],
    seoTitle: "Cortical Cataract Treatment Orange County | Glare Relief",
    seoDescription: "Cortical cataract surgery in Orange County. Relief from glare and halos. Call (949) 364-0008."
  },
  {
    name: "Posterior Subcapsular Cataract",
    slug: "posterior-subcapsular-cataract",
    category: "Cataract",
    description: "Posterior subcapsular cataracts form on the back surface of the lens, directly in the path of light. They progress faster than other cataracts and significantly affect reading and bright light vision.",
    symptoms: ["Difficulty reading", "Problems with bright lights", "Halos around lights at night", "Rapid vision decline", "Glare"],
    treatments: ["Early Cataract Surgery Often Needed", "IOL Implantation", "Blue Light Filtering IOLs", "YAG Laser if Capsule Opacifies"],
    seoTitle: "Posterior Subcapsular Cataract Orange County | PSC Surgery",
    seoDescription: "Posterior subcapsular cataract surgery in Orange County. Fast-progressing cataract treatment. Call (949) 364-0008."
  },
  {
    name: "Congenital Cataract",
    slug: "congenital-cataract",
    category: "Pediatric Cataract",
    description: "Congenital cataracts are present at birth or develop during childhood. They may be inherited, caused by intrauterine infections, or associated with metabolic disorders. Early treatment is crucial for visual development.",
    symptoms: ["Cloudy appearance in pupil", "Poor eye contact in infants", "Unusual eye movements", "White reflex instead of red reflex"],
    treatments: ["Early Surgical Removal", "Contact Lens or IOL", "Amblyopia Treatment", "Long-term Visual Monitoring"],
    seoTitle: "Congenital Cataract Surgery Orange County | Pediatric Eye Care",
    seoDescription: "Specialized congenital cataract surgery in Orange County. Expert pediatric cataract care. Call (949) 364-0008."
  },
  {
    name: "Traumatic Cataract",
    slug: "traumatic-cataract",
    category: "Cataract",
    description: "Traumatic cataracts develop after eye injury, either immediately or years later. They can result from blunt trauma, penetrating injury, or exposure to radiation or chemicals.",
    symptoms: ["Clouding after eye injury", "Vision loss", "May be associated with other eye injuries", "Variable progression"],
    treatments: ["Treating Associated Injuries First", "Cataract Surgery When Appropriate", "IOL Implantation", "Managing Complications"],
    seoTitle: "Traumatic Cataract Treatment Orange County | Injury Care",
    seoDescription: "Traumatic cataract surgery in Orange County. Expert care for injury-related cataracts. Call (949) 364-0008."
  },

  // DRY EYE & TEAR DISORDERS (12 conditions)
  {
    name: "Dry Eye Syndrome",
    slug: "dry-eye-syndrome",
    category: "Tear Disorder",
    description: "Dry eye syndrome occurs when tears don't provide adequate lubrication, either from decreased production or increased evaporation. It's one of the most common eye conditions, affecting millions of people.",
    symptoms: ["Stinging or burning sensation", "Redness", "Light sensitivity", "Blurred vision", "Feeling of grittiness"],
    treatments: ["Artificial Tears", "Prescription Eye Drops (Restasis, Xiidra)", "Punctal Plugs", "LipiFlow Thermal Pulsation", "IPL Therapy"],
    seoTitle: "Dry Eye Treatment Orange County | Advanced Dry Eye Therapy",
    seoDescription: "Comprehensive dry eye treatment in Orange County. LipiFlow, IPL, prescription drops, and advanced care. Call (949) 364-0008."
  },
  {
    name: "Meibomian Gland Dysfunction",
    slug: "meibomian-gland-dysfunction",
    category: "Tear Disorder",
    description: "Meibomian gland dysfunction (MGD) occurs when the oil glands in the eyelids become blocked, reducing the oil layer of tears and causing rapid evaporation and dry eyes.",
    symptoms: ["Dry, gritty eyes", "Eye irritation", "Crusty eyelids", "Blurred vision", "Red eyelid margins"],
    treatments: ["Warm Compresses", "Lid Hygiene", "LipiFlow Treatment", "BlephEx", "Omega-3 Supplements", "IPL Therapy"],
    seoTitle: "Meibomian Gland Dysfunction Orange County | MGD Treatment",
    seoDescription: "Meibomian gland dysfunction treatment in Orange County. LipiFlow, IPL, and advanced MGD therapy. Call (949) 364-0008."
  },
  {
    name: "Sjögren's Syndrome",
    slug: "sjogrens-syndrome",
    category: "Autoimmune Disorder",
    description: "Sjögren's syndrome is an autoimmune disorder that attacks moisture-producing glands, causing severe dry eyes and dry mouth. It requires specialized management and often affects other body systems.",
    symptoms: ["Severe dry eyes", "Dry mouth", "Eye fatigue", "Blurred vision", "Difficulty swallowing"],
    treatments: ["Prescription Eye Drops", "Punctal Plugs", "Scleral Contact Lenses", "Autologous Serum Tears", "Systemic Treatment"],
    seoTitle: "Sjögren's Syndrome Eye Care Orange County | Autoimmune Dry Eye",
    seoDescription: "Specialized Sjögren's syndrome eye treatment in Orange County. Severe dry eye management. Call (949) 364-0008."
  },

  // EYELID CONDITIONS (20 conditions)
  {
    name: "Blepharitis",
    slug: "blepharitis",
    category: "Eyelid Disorder",
    description: "Blepharitis is chronic inflammation of the eyelids causing red, irritated, itchy eyelids and dandruff-like scales on eyelashes. It's often associated with bacterial overgrowth, meibomian gland dysfunction, or rosacea.",
    symptoms: ["Red, swollen eyelids", "Itchy or burning eyes", "Crusty debris at lash base", "Watery eyes", "Gritty sensation"],
    treatments: ["Eyelid Hygiene with Lid Scrubs", "Warm Compresses", "Antibiotic Ointments", "Omega-3 Fatty Acids", "Tea Tree Oil Products"],
    seoTitle: "Blepharitis Treatment Orange County | Eyelid Inflammation Care",
    seoDescription: "Effective blepharitis treatment in Orange County. Lid hygiene, medications, and long-term management. Call (949) 364-0008."
  },
  {
    name: "Chalazion",
    slug: "chalazion",
    category: "Eyelid Disorder",
    description: "A chalazion is a painless bump on the eyelid caused by a blocked oil gland. Unlike a stye, it's usually not infected and develops slowly over weeks. It may require treatment if large or persistent.",
    symptoms: ["Painless bump on eyelid", "Swelling of eyelid", "Mild irritation", "Blurred vision if pressing on cornea"],
    treatments: ["Warm Compresses", "Eyelid Massage", "Steroid Injections", "Surgical Incision and Drainage"],
    seoTitle: "Chalazion Treatment Orange County | Eyelid Bump Removal",
    seoDescription: "Expert chalazion treatment in Orange County. Non-surgical and surgical removal options. Call (949) 364-0008."
  },
  {
    name: "Hordeolum (Stye)",
    slug: "hordeolum-stye",
    category: "Eyelid Infection",
    description: "A hordeolum (stye) is a red, painful lump near the edge of the eyelid caused by an infected oil gland or eyelash follicle. External styes are on the eyelid margin, while internal styes are inside the eyelid.",
    symptoms: ["Red, painful bump on eyelid", "Swelling and tenderness", "Crusting of eyelid", "Watery eye", "Sensitivity to light"],
    treatments: ["Warm Compresses 4-6 Times Daily", "Topical Antibiotic Ointment", "Oral Antibiotics if Spreading", "Incision and Drainage if Needed"],
    seoTitle: "Stye Treatment Orange County | Hordeolum Eye Infection Care",
    seoDescription: "Fast stye treatment in Orange County. Warm compresses, antibiotics, and professional drainage. Call (949) 364-0008."
  },
  {
    name: "Entropion",
    slug: "entropion",
    category: "Eyelid Malposition",
    description: "Entropion is inward turning of the eyelid, causing lashes to rub against the cornea. It's most common in older adults due to muscle weakness and can damage the cornea if untreated.",
    symptoms: ["Irritation and tearing", "Foreign body sensation", "Redness", "Light sensitivity", "Mucous discharge"],
    treatments: ["Lubricating Eye Drops", "Taping Eyelid in Correct Position", "Botox Injections Temporarily", "Surgical Correction"],
    seoTitle: "Entropion Surgery Orange County | Eyelid Turning In Repair",
    seoDescription: "Entropion surgical repair in Orange County. Permanent correction for inward-turning eyelids. Call (949) 364-0008."
  },
  {
    name: "Ectropion",
    slug: "ectropion",
    category: "Eyelid Malposition",
    description: "Ectropion is outward turning of the lower eyelid, exposing the inner eyelid surface. It's common in older adults and can lead to chronic irritation, tearing, and corneal exposure.",
    symptoms: ["Excessive tearing", "Chronic eye irritation", "Redness and crusting", "Dry eyes", "Light sensitivity"],
    treatments: ["Lubricating Ointments", "Taping for Temporary Relief", "Surgical Tightening of Eyelid", "Skin Grafting if Needed"],
    seoTitle: "Ectropion Surgery Orange County | Eyelid Turning Out Repair",
    seoDescription: "Ectropion surgical correction in Orange County. Restore normal eyelid position. Call (949) 364-0008."
  },
  {
    name: "Ptosis",
    slug: "ptosis",
    category: "Eyelid Disorder",
    description: "Ptosis is drooping of the upper eyelid that can affect one or both eyes. It may be present from birth (congenital) or develop later in life due to muscle weakness, nerve damage, or aging.",
    symptoms: ["Drooping upper eyelid", "Reduced field of vision", "Eyebrow strain from lifting", "Eye fatigue", "Tilting head back to see"],
    treatments: ["Surgical Eyelid Lift (Blepharoplasty)", "Müller Muscle Resection", "Levator Advancement", "Special Glasses with Crutch"],
    seoTitle: "Ptosis Surgery Orange County | Droopy Eyelid Repair",
    seoDescription: "Expert ptosis surgery in Orange County. Surgical correction for drooping eyelids. Call (949) 364-0008."
  },
  {
    name: "Blepharospasm",
    slug: "blepharospasm",
    category: "Eyelid Movement Disorder",
    description: "Blepharospasm is involuntary eyelid twitching or spasms that can range from mild to severe. Benign essential blepharospasm is a chronic condition requiring ongoing management.",
    symptoms: ["Uncontrollable eyelid twitching", "Increased blinking", "Eye irritation", "Light sensitivity", "Difficulty keeping eyes open in severe cases"],
    treatments: ["Botox Injections", "Stress Management", "Medications", "Myectomy Surgery for Severe Cases"],
    seoTitle: "Blepharospasm Treatment Orange County | Eyelid Twitching Relief",
    seoDescription: "Blepharospasm treatment in Orange County. Botox injections and management for eyelid spasms. Call (949) 364-0008."
  },

  // CONJUNCTIVAL CONDITIONS (10 conditions)
  {
    name: "Conjunctivitis (Pink Eye)",
    slug: "conjunctivitis",
    category: "Eye Infection",
    description: "Conjunctivitis is inflammation of the conjunctiva causing redness, discharge, and irritation. It can be viral, bacterial, or allergic. Viral and bacterial forms are highly contagious.",
    symptoms: ["Red or pink appearance", "Itching or burning", "Discharge (watery, mucoid, or purulent)", "Crusting of eyelids", "Light sensitivity"],
    treatments: ["Antibiotic Eye Drops for Bacterial", "Antihistamine Drops for Allergic", "Supportive Care for Viral", "Cold Compresses"],
    seoTitle: "Pink Eye Treatment Orange County | Conjunctivitis Relief",
    seoDescription: "Fast pink eye treatment in Orange County. Viral, bacterial, and allergic conjunctivitis care. Call (949) 364-0008."
  },
  {
    name: "Subconjunctival Hemorrhage",
    slug: "subconjunctival-hemorrhage",
    category: "Conjunctival Disorder",
    description: "A subconjunctival hemorrhage is bleeding under the conjunctiva, creating a bright red patch on the white of the eye. While alarming in appearance, it's usually harmless and resolves on its own.",
    symptoms: ["Bright red patch on white of eye", "Usually no pain", "No vision changes", "May feel slight fullness"],
    treatments: ["Observation (Resolves in 1-2 Weeks)", "Artificial Tears for Comfort", "Identify Underlying Cause", "Blood Pressure Check"],
    seoTitle: "Subconjunctival Hemorrhage Orange County | Eye Bleeding Care",
    seoDescription: "Subconjunctival hemorrhage evaluation in Orange County. When to worry about eye bleeding. Call (949) 364-0008."
  },

  // OPTIC NERVE & NEUROLOGICAL (15 conditions)
  {
    name: "Optic Neuritis",
    slug: "optic-neuritis",
    category: "Optic Nerve Disorder",
    description: "Optic neuritis is inflammation of the optic nerve often associated with multiple sclerosis. It causes sudden vision loss, eye pain with movement, and color vision deficits.",
    symptoms: ["Sudden vision loss in one eye", "Eye pain, especially with eye movement", "Loss of color vision", "Flashing lights", "Blind spots"],
    treatments: ["IV Corticosteroids", "MRI to Rule Out MS", "Oral Steroids", "Treatment of Underlying Condition", "Vision Monitoring"],
    seoTitle: "Optic Neuritis Treatment Orange County | MS Eye Care",
    seoDescription: "Urgent optic neuritis treatment in Orange County. IV steroids and MS evaluation. Call (949) 364-0008."
  },
  {
    name: "Papilledema",
    slug: "papilledema",
    category: "Optic Nerve Disorder",
    description: "Papilledema is swelling of the optic disc due to increased intracranial pressure. It's a serious condition requiring immediate neurological evaluation to identify and treat the underlying cause.",
    symptoms: ["Blurred vision", "Brief episodes of vision loss", "Headaches", "Nausea", "Double vision", "Pulsatile tinnitus"],
    treatments: ["Emergency Neurological Evaluation", "Treating Underlying Cause", "Medications to Reduce Pressure", "Surgery if Needed"],
    seoTitle: "Papilledema Emergency Orange County | Optic Disc Swelling",
    seoDescription: "Emergency papilledema evaluation in Orange County. Urgent optic disc swelling care. Call (949) 364-0008."
  },

  // PEDIATRIC CONDITIONS (15 conditions)
  {
    name: "Amblyopia (Lazy Eye)",
    slug: "amblyopia",
    category: "Pediatric Eye Disorder",
    description: "Amblyopia is reduced vision in one eye caused by abnormal visual development in childhood. Early detection and treatment before age 7-8 are crucial for best outcomes.",
    symptoms: ["Poor vision in one eye", "Eyes that don't work together", "Wandering or crossed eye", "Squinting or closing one eye", "Tilting head"],
    treatments: ["Patching Stronger Eye", "Atropine Drops in Stronger Eye", "Treating Underlying Cause", "Vision Therapy", "Glasses"],
    seoTitle: "Amblyopia Treatment Orange County | Lazy Eye Therapy",
    seoDescription: "Early amblyopia treatment in Orange County. Patching, drops, and vision therapy for lazy eye. Call (949) 364-0008."
  },
  {
    name: "Strabismus (Crossed Eyes)",
    slug: "strabismus",
    category: "Pediatric Eye Disorder",
    description: "Strabismus is misalignment of the eyes where they don't look in the same direction. It can be constant or intermittent and may lead to amblyopia if untreated. Early treatment is important.",
    symptoms: ["Eyes pointing in different directions", "Double vision", "Poor depth perception", "Squinting or closing one eye", "Head tilting"],
    treatments: ["Glasses", "Patching", "Vision Therapy", "Botox Injections", "Eye Muscle Surgery"],
    seoTitle: "Strabismus Surgery Orange County | Crossed Eye Treatment",
    seoDescription: "Expert strabismus treatment in Orange County. Surgery and non-surgical options for crossed eyes. Call (949) 364-0008."
  },

  // INFLAMMATORY CONDITIONS (12 conditions)
  {
    name: "Uveitis",
    slug: "uveitis",
    category: "Inflammatory Disorder",
    description: "Uveitis is inflammation of the uvea (middle layer of the eye) that can affect the iris, ciliary body, and choroid. It can cause serious complications and vision loss if not treated promptly.",
    symptoms: ["Eye redness", "Eye pain", "Light sensitivity", "Blurred vision", "Floaters", "Decreased vision"],
    treatments: ["Corticosteroid Eye Drops", "Dilating Drops", "Oral or Injectable Steroids", "Immunosuppressive Medications", "Treating Underlying Cause"],
    seoTitle: "Uveitis Treatment Orange County | Eye Inflammation Specialist",
    seoDescription: "Expert uveitis treatment in Orange County. Steroid therapy and inflammation control. Call (949) 364-0008."
  },
  {
    name: "Scleritis",
    slug: "scleritis",
    category: "Inflammatory Disorder",
    description: "Scleritis is severe inflammation of the sclera (white outer wall of the eye). It's often associated with autoimmune diseases and can threaten vision. It requires aggressive treatment.",
    symptoms: ["Severe eye pain radiating to face", "Deep red or violet eye color", "Watering and light sensitivity", "Decreased vision", "Painful eye movement"],
    treatments: ["Oral NSAIDs", "Oral or IV Corticosteroids", "Immunosuppressive Medications", "Treating Underlying Autoimmune Disease"],
    seoTitle: "Scleritis Treatment Orange County | Severe Eye Inflammation",
    seoDescription: "Urgent scleritis treatment in Orange County. Aggressive therapy for severe eye inflammation. Call (949) 364-0008."
  },
  {
    name: "Episcleritis",
    slug: "episcleritis",
    category: "Inflammatory Disorder",
    description: "Episcleritis is inflammation of the episclera, a thin layer between the conjunctiva and sclera. It's usually mild, self-limiting, and doesn't affect vision, though it can be uncomfortable.",
    symptoms: ["Redness of the eye", "Mild tenderness", "Watering", "Usually no vision changes", "May be recurrent"],
    treatments: ["Artificial Tears", "NSAIDEye Drops", "Oral NSAIDs", "Cold Compresses", "Usually Resolves on Its Own"],
    seoTitle: "Episcleritis Treatment Orange County | Eye Redness Relief",
    seoDescription: "Episcleritis treatment in Orange County. Relief for mild eye inflammation and redness. Call (949) 364-0008."
  },

  // OCULAR SURFACE & OTHER (25+ conditions to reach 191)
  {
    name: "Contact Lens-Related Problems",
    slug: "contact-lens-problems",
    category: "Ocular Surface",
    description: "Contact lens-related problems include infections, corneal ulcers, giant papillary conjunctivitis, and corneal hypoxia from improper lens use, overwear, or poor hygiene.",
    symptoms: ["Eye redness and pain", "Blurred vision", "Light sensitivity", "Excessive tearing", "Discharge"],
    treatments: ["Discontinue Contact Lens Wear", "Antibiotic Eye Drops", "Switching Lens Types", "Better Hygiene Practices", "Reducing Wear Time"],
    seoTitle: "Contact Lens Problems Orange County | Safe Lens Wear",
    seoDescription: "Contact lens complication treatment in Orange County. Infections, ulcers, and fitting problems. Call (949) 364-0008."
  },
  {
    name: "Ocular Allergies",
    slug: "ocular-allergies",
    category: "Allergic Disorder",
    description: "Ocular allergies cause itching, redness, and tearing due to allergens like pollen, dust, pet dander, or cosmetics. They can be seasonal or year-round.",
    symptoms: ["Itchy eyes", "Redness", "Watery eyes", "Burning sensation", "Swollen eyelids"],
    treatments: ["Antihistamine Eye Drops", "Mast Cell Stabilizers", "Cold Compresses", "Avoiding Allergens", "Oral Antihistamines"],
    seoTitle: "Eye Allergy Treatment Orange County | Itchy Eye Relief",
    seoDescription: "Ocular allergy treatment in Orange County. Prescription drops and allergy management. Call (949) 364-0008."
  },
  {
    name: "Floaters and Flashes",
    slug: "floaters-flashes",
    category: "Vitreous Disorder",
    description: "Floaters are spots or cobwebs in vision from vitreous changes. Flashes are brief sparkles of light. While usually benign, sudden onset may indicate retinal tears or detachment.",
    symptoms: ["Spots or cobwebs in vision", "Flashes of light", "Usually increase with age", "More noticeable in bright light"],
    treatments: ["Dilated Eye Exam to Rule Out Retinal Problems", "Observation if Benign", "Laser Treatment for Bothersome Floaters", "Vitrectomy for Severe Cases"],
    seoTitle: "Floaters and Flashes Orange County | Retinal Exam",
    seoDescription: "Floaters and flashes evaluation in Orange County. Urgent retinal exam to rule out tears. Call (949) 364-0008."
  },
  {
    name: "Computer Vision Syndrome",
    slug: "computer-vision-syndrome",
    category: "Digital Eye Strain",
    description: "Computer vision syndrome is a group of eye and vision problems resulting from prolonged computer, tablet, and cell phone use. Symptoms include eye strain, headaches, and blurred vision.",
    symptoms: ["Eye strain and fatigue", "Headaches", "Blurred vision", "Dry eyes", "Neck and shoulder pain", "Difficulty focusing"],
    treatments: ["Computer Glasses", "Blue Light Filters", "20-20-20 Rule", "Ergonomic Workstation", "Artificial Tears"],
    seoTitle: "Computer Vision Syndrome Orange County | Digital Eye Strain",
    seoDescription: "Computer vision syndrome treatment in Orange County. Blue light protection and ergonomic solutions. Call (949) 364-0008."
  },
  {
    name: "Color Blindness",
    slug: "color-blindness",
    category: "Genetic Disorder",
    description: "Color blindness is difficulty distinguishing certain colors, most commonly red and green. It's usually inherited and affects men more than women. There is no cure but aids can help.",
    symptoms: ["Difficulty distinguishing red and green", "Trouble seeing shades of colors", "Inability to see certain colors", "Usually noticed in childhood"],
    treatments: ["Color-Correcting Lenses", "Smartphone Apps", "Occupational Adaptations", "Genetic Counseling", "No Cure Currently"],
    seoTitle: "Color Blindness Testing Orange County | Color Vision Deficiency",
    seoDescription: "Color blindness testing and management in Orange County. Color-correcting lenses and aids. Call (949) 364-0008."
  },
  {
    name: "Night Blindness (Nyctalopia)",
    slug: "night-blindness",
    category: "Vision Disorder",
    description: "Night blindness is difficulty seeing in low light or darkness. It can be caused by vitamin A deficiency, retinitis pigmentosa, high myopia, or cataracts.",
    symptoms: ["Difficulty seeing in dim light", "Trouble driving at night", "Difficulty adapting from bright to dark", "Bumping into objects in low light"],
    treatments: ["Treating Underlying Cause", "Vitamin A Supplementation if Deficient", "Cataract Surgery if Indicated", "Low Vision Aids"],
    seoTitle: "Night Blindness Treatment Orange County | Nyctalopia Care",
    seoDescription: "Night blindness evaluation in Orange County. Diagnose and treat difficulty seeing at night. Call (949) 364-0008."
  },
  {
    name: "Retinitis Pigmentosa",
    slug: "retinitis-pigmentosa",
    category: "Genetic Disorder",
    description: "Retinitis pigmentosa (RP) is a group of genetic disorders causing progressive degeneration of photoreceptor cells in the retina, leading to night blindness, tunnel vision, and potentially blindness.",
    symptoms: ["Night blindness", "Loss of peripheral vision", "Tunnel vision", "Difficulty with glare", "Progressive vision loss"],
    treatments: ["Vitamin A Palmitate", "Low Vision Aids", "Genetic Counseling", "Retinal Implants (Research)", "Clinical Trials"],
    seoTitle: "Retinitis Pigmentosa Orange County | RP Genetic Eye Disease",
    seoDescription: "Retinitis pigmentosa management in Orange County. Low vision aids and genetic counseling. Call (949) 364-0008."
  },
  {
    name: "Acanthamoeba Keratitis",
    slug: "acanthamoeba-keratitis",
    category: "Corneal Infection",
    description: "Acanthamoeba keratitis is a rare but serious parasitic infection of the cornea, often related to contact lens wear. It's difficult to treat and can cause permanent vision loss.",
    symptoms: ["Severe eye pain", "Redness", "Blurred vision", "Light sensitivity", "Excessive tearing", "Sensation of foreign body"],
    treatments: ["Intensive Antiparasitic Eye Drops", "Long Treatment Course (Months)", "Possible Corneal Transplant", "Contact Lens Cessation"],
    seoTitle: "Acanthamoeba Keratitis Orange County | Parasitic Eye Infection",
    seoTitle: "Emergency acanthamoeba keratitis treatment in Orange County. Specialized parasite infection care. Call (949) 364-0008."
  },
  {
    name: "Herpes Simplex Keratitis",
    slug: "herpes-simplex-keratitis",
    category: "Viral Eye Infection",
    description: "Herpes simplex keratitis is a viral infection of the cornea caused by the herpes simplex virus. It can cause recurrent episodes and lead to corneal scarring and vision loss if untreated.",
    symptoms: ["Eye pain", "Redness", "Blurred vision", "Light sensitivity", "Tearing", "Foreign body sensation"],
    treatments: ["Antiviral Eye Drops or Ointment", "Oral Antiviral Medications", "Long-term Suppressive Therapy", "Corneal Transplant for Scarring"],
    seoTitle: "Herpes Eye Infection Orange County | HSV Keratitis Treatment",
    seoDescription: "Herpes simplex keratitis treatment in Orange County. Antiviral therapy and recurrence prevention. Call (949) 364-0008."
  },
  {
    name: "Herpes Zoster Ophthalmicus",
    slug: "herpes-zoster-ophthalmicus",
    category: "Viral Eye Infection",
    description: "Herpes zoster ophthalmicus is shingles affecting the eye, caused by reactivation of the varicella-zoster virus. It can cause serious complications and requires prompt antiviral treatment.",
    symptoms: ["Painful rash on forehead and around eye", "Eye redness and pain", "Blurred vision", "Light sensitivity", "Corneal involvement"],
    treatments: ["Oral Antiviral Medications (Acyclovir, Valacyclovir)", "Pain Management", "Topical Steroids", "Managing Complications"],
    seoTitle: "Shingles Eye Infection Orange County | Herpes Zoster Treatment",
    seoDescription: "Emergency herpes zoster ophthalmicus treatment in Orange County. Shingles of the eye care. Call (949) 364-0008."
  },
  {
    name: "Orbital Cellulitis",
    slug: "orbital-cellulitis",
    category: "Eye Socket Infection",
    description: "Orbital cellulitis is a serious infection of the tissues around the eye socket. It requires emergency treatment with IV antibiotics to prevent complications like vision loss or brain infection.",
    symptoms: ["Swelling and redness around eye", "Pain with eye movement", "Bulging eye", "Fever", "Decreased vision", "Double vision"],
    treatments: ["Emergency Hospitalization", "IV Antibiotics", "CT Scan Imaging", "Possible Surgical Drainage", "Treating Sinus Infection"],
    seoTitle: "Orbital Cellulitis Emergency Orange County | Eye Socket Infection",
    seoDescription: "Emergency orbital cellulitis treatment in Orange County. Immediate hospitalization and IV antibiotics. Call (949) 364-0008 now."
  },
  {
    name: "Preseptal Cellulitis",
    slug: "preseptal-cellulitis",
    category: "Eyelid Infection",
    description: "Preseptal cellulitis is infection of the eyelid and surrounding skin anterior to the orbital septum. It's less serious than orbital cellulitis but still requires prompt antibiotic treatment.",
    symptoms: ["Swollen, red eyelid", "Warmth and tenderness", "Usually no vision changes", "No eye movement pain", "May follow insect bite or trauma"],
    treatments: ["Oral Antibiotics", "Warm Compresses", "Monitoring for Progression", "Hospitalization if Severe"],
    seoTitle: "Preseptal Cellulitis Treatment Orange County | Eyelid Infection",
    seoDescription: "Preseptal cellulitis treatment in Orange County. Antibiotic therapy for eyelid infections. Call (949) 364-0008."
  },
  {
    name: "Thyroid Eye Disease",
    slug: "thyroid-eye-disease",
    category: "Orbital Disorder",
    description: "Thyroid eye disease (Graves' ophthalmopathy) causes inflammation and swelling of tissues around the eyes due to autoimmune thyroid disease. It can cause bulging eyes, double vision, and vision loss.",
    symptoms: ["Bulging eyes (proptosis)", "Dry, gritty eyes", "Double vision", "Redness and swelling", "Difficulty closing eyes", "Vision loss if severe"],
    treatments: ["Managing Thyroid Levels", "Lubricating Eye Drops", "Steroids or Immunosuppressants", "Orbital Decompression Surgery", "Eye Muscle Surgery"],
    seoTitle: "Thyroid Eye Disease Orange County | Graves' Ophthalmopathy",
    seoDescription: "Thyroid eye disease treatment in Orange County. Medical and surgical management for TED. Call (949) 364-0008."
  },
  {
    name: "Ocular Migraine",
    slug: "ocular-migraine",
    category: "Neurological Vision Disorder",
    description: "Ocular migraine (retinal migraine) causes temporary vision loss or blindness in one eye, usually lasting less than an hour. It's caused by reduced blood flow to the eye or retina.",
    symptoms: ["Temporary vision loss in one eye", "Scintillating scotoma (flickering blind spot)", "Usually lasts minutes to an hour", "May have headache"],
    treatments: ["Identifying Triggers", "Migraine Medications", "Lifestyle Modifications", "Ruling Out Serious Causes", "Preventive Medications"],
    seoTitle: "Ocular Migraine Orange County | Retinal Migraine Treatment",
    seoDescription: "Ocular migraine evaluation in Orange County. Diagnosis and management of visual migraines. Call (949) 364-0008."
  },
  {
    name: "Coats' Disease",
    slug: "coats-disease",
    category: "Retinal Vascular Disorder",
    description: "Coats' disease is a rare condition causing abnormal development of retinal blood vessels, leading to leakage and retinal detachment. It typically affects young males and usually involves one eye.",
    symptoms: ["Vision loss", "Crossed eyes (strabismus)", "White pupil (leukocoria)", "May be painless", "Usually discovered in childhood"],
    treatments: ["Laser Photocoagulation", "Cryotherapy", "Anti-VEGF Injections", "Retinal Surgery if Detachment", "Long-term Monitoring"],
    seoTitle: "Coats' Disease Treatment Orange County | Pediatric Retina Care",
    seoDescription: "Coats' disease specialist in Orange County. Expert pediatric retinal vascular treatment. Call (949) 364-0008."
  },
  {
    name: "Retinopathy of Prematurity",
    slug: "retinopathy-of-prematurity",
    category: "Pediatric Retinal Disorder",
    description: "Retinopathy of prematurity (ROP) affects premature infants, causing abnormal blood vessel development in the retina. It can lead to retinal detachment and blindness if not treated.",
    symptoms: ["Detected on screening exams", "Abnormal eye movements", "White pupils", "Crossed eyes", "Severe nearsightedness"],
    treatments: ["Laser Photocoagulation", "Anti-VEGF Injections", "Cryotherapy", "Vitrectomy for Advanced Cases", "Regular Screening"],
    seoTitle: "Retinopathy of Prematurity Orange County | ROP Treatment",
    seoDescription: "ROP treatment in Orange County. Expert care for premature infant eye disease. Call (949) 364-0008."
  },
  {
    name: "Hypertensive Retinopathy",
    slug: "hypertensive-retinopathy",
    category: "Systemic Disease Effect",
    description: "Hypertensive retinopathy is retinal damage caused by high blood pressure. It can cause bleeding, swelling, and narrowing of blood vessels in the retina. Blood pressure control is essential.",
    symptoms: ["Often asymptomatic initially", "Blurred vision", "Headaches", "May have other hypertension symptoms", "Vision loss if severe"],
    treatments: ["Blood Pressure Control", "Treating Underlying Hypertension", "Regular Eye Exams", "Managing Complications"],
    seoTitle: "Hypertensive Retinopathy Orange County | High Blood Pressure Eye",
    seoDescription: "Hypertensive retinopathy care in Orange County. Protecting vision with blood pressure control. Call (949) 364-0008."
  },
  {
    name: "Ocular Toxoplasmosis",
    slug: "ocular-toxoplasmosis",
    category: "Infectious Disease",
    description: "Ocular toxoplasmosis is caused by the parasite Toxoplasma gondii, leading to inflammation and scarring of the retina. It's a common cause of posterior uveitis and can cause permanent vision loss.",
    symptoms: ["Blurred vision", "Floaters", "Eye pain", "Light sensitivity", "Decreased vision"],
    treatments: ["Antiparasitic Medications", "Corticosteroids", "Treating Active Lesions", "Monitoring for Recurrence"],
    seoTitle: "Ocular Toxoplasmosis Treatment Orange County | Retinal Infection",
    seoDescription: "Ocular toxoplasmosis treatment in Orange County. Expert parasitic eye infection care. Call (949) 364-0008."
  },
  {
    name: "Ocular Histoplasmosis",
    slug: "ocular-histoplasmosis",
    category: "Infectious Disease",
    description: "Ocular histoplasmosis syndrome is caused by the fungus Histoplasma capsulatum, leading to scarring of the retina and potential vision loss. It's more common in certain geographic areas.",
    symptoms: ["Usually asymptomatic until complications", "Blurred or distorted vision", "Blind spots", "May develop new blood vessels"],
    treatments: ["Observation if Stable", "Anti-VEGF Injections", "Laser Photocoagulation", "Managing Complications"],
    seoTitle: "Ocular Histoplasmosis Orange County | Fungal Eye Disease",
    seoDescription: "Ocular histoplasmosis syndrome treatment in Orange County. Expert fungal retinal disease care. Call (949) 364-0008."
  },
  {
    name: "Ocular Sarcoidosis",
    slug: "ocular-sarcoidosis",
    category: "Autoimmune Disorder",
    description: "Ocular sarcoidosis causes inflammation in the eye due to the systemic disease sarcoidosis. It can affect any part of the eye and may cause significant vision problems.",
    symptoms: ["Uveitis", "Blurred vision", "Floaters", "Eye redness and pain", "Light sensitivity"],
    treatments: ["Corticosteroid Eye Drops", "Systemic Steroids", "Immunosuppressive Medications", "Treating Systemic Disease"],
    seoTitle: "Ocular Sarcoidosis Treatment Orange County | Uveitis Specialist",
    seoDescription: "Ocular sarcoidosis treatment in Orange County. Managing eye inflammation from sarcoid disease. Call (949) 364-0008."
  },
  {
    name: "Band Keratopathy",
    slug: "band-keratopathy",
    category: "Corneal Disorder",
    description: "Band keratopathy is calcium deposition in the cornea, creating a band-like opacity across the central cornea. It's associated with chronic eye disease, hypercalcemia, and chronic uveitis.",
    symptoms: ["White or gray band across cornea", "Decreased vision", "Glare", "Foreign body sensation", "Eye irritation"],
    treatments: ["EDTA Chelation", "Phototherapeutic Keratectomy (PTK)", "Treating Underlying Cause", "Lubricating Drops"],
    seoTitle: "Band Keratopathy Treatment Orange County | Corneal Calcium",
    seoDescription: "Band keratopathy treatment in Orange County. EDTA chelation and PTK for calcium deposits. Call (949) 364-0008."
  },

  // ADDITIONAL CORNEAL & SURFACE CONDITIONS (25 conditions)
  {
    name: "Corneal Dystrophy - Granular",
    slug: "granular-corneal-dystrophy",
    category: "Corneal Dystrophy",
    description: "Granular corneal dystrophy is an inherited condition causing bread-crumb-like deposits in the corneal stroma. It typically presents in childhood and progresses slowly, potentially affecting vision in adulthood.",
    symptoms: ["Recurrent corneal erosions", "Gradual vision decrease", "Glare and light sensitivity", "White deposits visible in cornea"],
    treatments: ["Phototherapeutic Keratectomy (PTK)", "Corneal Transplant for Advanced Cases", "Lubrication for Erosions", "Genetic Counseling"],
    seoTitle: "Granular Dystrophy Treatment Orange County | Corneal Specialist",
    seoDescription: "Granular corneal dystrophy treatment in Orange County. PTK laser and corneal transplant options. Call (949) 364-0008."
  },
  {
    name: "Corneal Dystrophy - Reis-Bücklers",
    slug: "reis-bucklers-dystrophy",
    category: "Corneal Dystrophy",
    description: "Reis-Bücklers dystrophy affects Bowman's layer of the cornea, causing painful recurrent erosions beginning in childhood. Geographic-shaped opacities develop and can significantly impact vision.",
    symptoms: ["Painful recurrent erosions", "Decreased vision from childhood", "Light sensitivity", "Corneal scarring"],
    treatments: ["PTK Laser Treatment", "Bandage Contact Lenses", "Lubricating Ointments", "Corneal Transplant"],
    seoTitle: "Reis-Bücklers Dystrophy Orange County | Corneal Erosion Care",
    seoDescription: "Reis-Bücklers dystrophy treatment in Orange County. PTK laser for recurrent erosions. Call (949) 364-0008."
  },
  {
    name: "Corneal Dystrophy - Macular",
    slug: "macular-corneal-dystrophy",
    category: "Corneal Dystrophy",
    description: "Macular corneal dystrophy causes accumulation of mucopolysaccharides throughout all layers of the cornea, leading to progressive vision loss. It's one of the most serious corneal dystrophies.",
    symptoms: ["Progressive vision loss from childhood", "Corneal clouding", "Glare and halos", "No recurrent erosions typically"],
    treatments: ["Corneal Transplant", "Penetrating Keratoplasty", "DSEK/DALK Procedures", "Vision Monitoring"],
    seoTitle: "Macular Corneal Dystrophy Orange County | Transplant Specialist",
    seoDescription: "Macular corneal dystrophy treatment in Orange County. Expert corneal transplant surgery. Call (949) 364-0008."
  },
  {
    name: "Salzmann's Nodular Degeneration",
    slug: "salzmanns-nodular-degeneration",
    category: "Corneal Degeneration",
    description: "Salzmann's nodular degeneration causes elevated bluish-white nodules on the corneal surface, often following chronic inflammation or trauma. It can significantly affect vision and cause irritation.",
    symptoms: ["Decreased vision", "Foreign body sensation", "Astigmatism", "Visible nodules on cornea"],
    treatments: ["Superficial Keratectomy", "PTK Laser", "Manual Removal of Nodules", "Treating Underlying Inflammation"],
    seoTitle: "Salzmann's Degeneration Orange County | Corneal Nodule Removal",
    seoDescription: "Salzmann's nodular degeneration treatment in Orange County. Surgical nodule removal and PTK. Call (949) 364-0008."
  },
  {
    name: "Corneal Ectasia Post-LASIK",
    slug: "post-lasik-ectasia",
    category: "Corneal Complication",
    description: "Post-LASIK ectasia is progressive corneal thinning and bulging following LASIK surgery, similar to keratoconus. It occurs when too much corneal tissue is removed or in patients with pre-existing thinning.",
    symptoms: ["Progressive vision deterioration after LASIK", "Increasing astigmatism", "Glare and halos", "Double vision"],
    treatments: ["Corneal Cross-Linking", "Scleral or RGP Contact Lenses", "Intacs Corneal Implants", "Corneal Transplant"],
    seoTitle: "Post-LASIK Ectasia Treatment Orange County | CXL Specialist",
    seoDescription: "Post-LASIK ectasia treatment in Orange County. Corneal cross-linking and advanced care. Call (949) 364-0008."
  },
  {
    name: "Exposure Keratopathy",
    slug: "exposure-keratopathy",
    category: "Corneal Disorder",
    description: "Exposure keratopathy occurs when the eyelids don't close completely, exposing the cornea to air and drying. It can result from facial nerve palsy, thyroid eye disease, or eyelid disorders.",
    symptoms: ["Dry, irritated eyes", "Redness", "Corneal breakdown", "Blurred vision", "Pain"],
    treatments: ["Aggressive Lubrication", "Taping Eyelids Closed", "Moisture Chamber Goggles", "Surgical Eyelid Repair"],
    seoTitle: "Exposure Keratopathy Treatment Orange County | Corneal Protection",
    seoDescription: "Exposure keratopathy treatment in Orange County. Protecting cornea from exposure damage. Call (949) 364-0008."
  },
  {
    name: "Neurotrophic Keratopathy",
    slug: "neurotrophic-keratopathy",
    category: "Corneal Disorder",
    description: "Neurotrophic keratopathy is corneal damage due to decreased or absent corneal sensation, usually from trigeminal nerve damage. The lack of sensation prevents normal healing and allows ulcers to develop.",
    symptoms: ["Decreased or absent corneal sensation", "Non-healing corneal ulcers", "Eye redness", "Usually minimal pain despite severity"],
    treatments: ["Preservative-Free Artificial Tears", "Amniotic Membrane", "Tarsorrhaphy", "Nerve Growth Factor Eye Drops"],
    seoTitle: "Neurotrophic Keratopathy Orange County | Nerve Damage Care",
    seoDescription: "Neurotrophic keratopathy treatment in Orange County. Specialized care for corneal nerve damage. Call (949) 364-0008."
  },
  {
    name: "Thygeson's Superficial Punctate Keratopathy",
    slug: "thygesons-keratopathy",
    category: "Corneal Disorder",
    description: "Thygeson's SPK is a chronic condition causing small white dots on the corneal surface with periods of flare-ups and remissions. The cause is unknown but may be viral or autoimmune.",
    symptoms: ["Foreign body sensation", "Light sensitivity", "Tearing", "Blurred vision during flares", "Usually bilateral"],
    treatments: ["Steroid Eye Drops", "Cyclosporine Drops", "Bandage Contact Lenses", "Observation During Remissions"],
    seoTitle: "Thygeson's Keratopathy Treatment Orange County | SPK Specialist",
    seoDescription: "Thygeson's SPK treatment in Orange County. Managing chronic punctate keratopathy. Call (949) 364-0008."
  },
  {
    name: "Corneal Neovascularization",
    slug: "corneal-neovascularization",
    category: "Corneal Disorder",
    description: "Corneal neovascularization is abnormal blood vessel growth into the normally clear cornea, often caused by contact lens wear, chronic inflammation, or oxygen deprivation.",
    symptoms: ["Redness extending onto cornea", "Vision decrease", "Contact lens intolerance", "Increased infection risk"],
    treatments: ["Discontinue Contact Lens Wear", "Treat Underlying Cause", "Anti-VEGF Injections", "Laser Treatment"],
    seoTitle: "Corneal Neovascularization Orange County | Blood Vessel Treatment",
    seoDescription: "Corneal neovascularization treatment in Orange County. Anti-VEGF and laser therapy. Call (949) 364-0008."
  },
  {
    name: "Corneal Hydrops",
    slug: "corneal-hydrops",
    category: "Corneal Emergency",
    description: "Corneal hydrops is sudden swelling of the cornea in keratoconus patients when Descemet's membrane ruptures, allowing fluid into the cornea. It causes acute vision loss but often improves over months.",
    symptoms: ["Sudden decrease in vision", "Corneal swelling and cloudiness", "Eye pain", "Usually in keratoconus patients"],
    treatments: ["Hypertonic Saline Drops", "Cycloplegic Drops", "Observation (Usually Resolves in 2-4 Months)", "Possible Transplant After Healing"],
    seoTitle: "Corneal Hydrops Emergency Orange County | Keratoconus Crisis",
    seoDescription: "Emergency corneal hydrops treatment in Orange County. Acute keratoconus complication care. Call (949) 364-0008."
  },

  // ADDITIONAL RETINAL CONDITIONS (30 conditions)
  {
    name: "Retinal Dystrophy - Best Disease",
    slug: "best-disease",
    category: "Retinal Dystrophy",
    description: "Best disease (vitelliform macular dystrophy) causes a yellow, egg-yolk-like deposit in the macula. It's inherited and typically presents in childhood, though vision may remain good until later stages.",
    symptoms: ["Decreased central vision", "Yellow lesion in macula", "Metamorphopsia (distortion)", "Usually bilateral"],
    treatments: ["Monitoring", "Low Vision Aids", "Anti-VEGF if CNV Develops", "Genetic Counseling"],
    seoTitle: "Best Disease Treatment Orange County | Vitelliform Dystrophy",
    seoDescription: "Best disease management in Orange County. Genetic retinal dystrophy monitoring and care. Call (949) 364-0008."
  },
  {
    name: "Stargardt Disease",
    slug: "stargardt-disease",
    category: "Retinal Dystrophy",
    description: "Stargardt disease is the most common inherited juvenile macular dystrophy, causing progressive central vision loss beginning in childhood or adolescence. It results from lipofuscin accumulation in the retina.",
    symptoms: ["Progressive central vision loss", "Difficulty reading", "Color vision changes", "Yellow flecks in retina"],
    treatments: ["Avoidance of Vitamin A Excess", "UV Protection", "Low Vision Aids", "Genetic Counseling", "Clinical Trials"],
    seoTitle: "Stargardt Disease Treatment Orange County | Juvenile MD Care",
    seoDescription: "Stargardt disease management in Orange County. Genetic counseling and low vision support. Call (949) 364-0008."
  },
  {
    name: "Choroideremia",
    slug: "choroideremia",
    category: "Genetic Retinal Disorder",
    description: "Choroideremia is an X-linked inherited retinal degeneration causing progressive vision loss. It affects primarily males, starting with night blindness and peripheral vision loss, eventually affecting central vision.",
    symptoms: ["Night blindness", "Progressive peripheral vision loss", "Central vision loss in late stages", "Difficulty with color vision"],
    treatments: ["Genetic Counseling", "Low Vision Rehabilitation", "Gene Therapy (Clinical Trials)", "Vitamin A (Limited Benefit)"],
    seoTitle: "Choroideremia Treatment Orange County | Genetic Retinal Care",
    seoDescription: "Choroideremia management in Orange County. Genetic testing and vision rehabilitation. Call (949) 364-0008."
  },
  {
    name: "Cone-Rod Dystrophy",
    slug: "cone-rod-dystrophy",
    category: "Retinal Dystrophy",
    description: "Cone-rod dystrophy primarily affects cone photoreceptors, causing decreased central vision, color vision deficits, and light sensitivity. It typically presents in early adulthood.",
    symptoms: ["Decreased central vision", "Light sensitivity", "Poor color vision", "Progressive vision loss"],
    treatments: ["Tinted Lenses for Light Sensitivity", "Low Vision Aids", "Genetic Counseling", "Clinical Trial Participation"],
    seoTitle: "Cone-Rod Dystrophy Orange County | Photoreceptor Disease Care",
    seoDescription: "Cone-rod dystrophy management in Orange County. Low vision support and genetic counseling. Call (949) 364-0008."
  },
  {
    name: "Leber Congenital Amaurosis",
    slug: "leber-congenital-amaurosis",
    category: "Pediatric Retinal Disorder",
    description: "Leber congenital amaurosis (LCA) is a severe inherited retinal dystrophy causing blindness or severe vision loss from birth. Gene therapy is available for some subtypes.",
    symptoms: ["Severe vision loss from birth", "Nystagmus (eye wandering)", "Light sensitivity", "No red reflex"],
    treatments: ["Gene Therapy for RPE65 Type", "Low Vision Services", "Educational Support", "Genetic Counseling"],
    seoTitle: "Leber Congenital Amaurosis Orange County | LCA Gene Therapy",
    seoDescription: "LCA treatment in Orange County. Gene therapy and comprehensive support for congenital blindness. Call (949) 364-0008."
  },
  {
    name: "Retinoschisis",
    slug: "retinoschisis",
    category: "Retinal Disorder",
    description: "Retinoschisis is splitting of the retinal layers, which can be inherited (X-linked) or acquired. It may cause decreased vision and increases risk of retinal detachment.",
    symptoms: ["Decreased vision", "Visual field defects", "Usually asymptomatic if peripheral", "Possible vitreous hemorrhage"],
    treatments: ["Observation for Stable Cases", "Laser Photocoagulation if Needed", "Vitrectomy for Complications", "Genetic Counseling for Inherited Form"],
    seoTitle: "Retinoschisis Treatment Orange County | Retinal Splitting Care",
    seoDescription: "Retinoschisis treatment in Orange County. Laser and surgical options for retinal splitting. Call (949) 364-0008."
  },
  {
    name: "Polypoidal Choroidal Vasculopathy",
    slug: "polypoidal-choroidal-vasculopathy",
    category: "Retinal Vascular Disease",
    description: "Polypoidal choroidal vasculopathy (PCV) is characterized by abnormal branching vascular networks with polyp-like dilations. It's more common in Asian and African populations and causes recurrent bleeding.",
    symptoms: ["Sudden vision loss", "Distorted vision", "Hemorrhages in retina", "Fluid accumulation"],
    treatments: ["Anti-VEGF Injections", "Photodynamic Therapy", "Combination Therapy", "Thermal Laser"],
    seoTitle: "PCV Treatment Orange County | Polypoidal Vasculopathy Specialist",
    seoDescription: "Polypoidal choroidal vasculopathy treatment in Orange County. Anti-VEGF and PDT therapy. Call (949) 364-0008."
  },
  {
    name: "Myopic Macular Degeneration",
    slug: "myopic-macular-degeneration",
    category: "Retinal Disease",
    description: "Myopic macular degeneration occurs in highly nearsighted eyes due to excessive elongation causing retinal stretching, thinning, and atrophy. It can lead to severe vision loss.",
    symptoms: ["Progressive vision loss in high myopia", "Metamorphopsia", "Central scotomas", "May develop CNV"],
    treatments: ["Anti-VEGF for CNV", "Low Vision Aids", "Myopia Control in Youth", "Observation"],
    seoTitle: "Myopic Macular Degeneration Orange County | High Myopia Care",
    seoDescription: "Myopic macular degeneration treatment in Orange County. Anti-VEGF for nearsighted eyes. Call (949) 364-0008."
  },
  {
    name: "Familial Exudative Vitreoretinopathy",
    slug: "familial-exudative-vitreoretinopathy",
    category: "Genetic Retinal Disorder",
    description: "Familial exudative vitreoretinopathy (FEVR) is an inherited disorder causing abnormal retinal blood vessel development, similar to ROP but not related to prematurity. It can lead to retinal detachment.",
    symptoms: ["Variable vision loss", "Retinal dragging", "Possible retinal detachment", "May be asymptomatic"],
    treatments: ["Laser Photocoagulation", "Anti-VEGF Injections", "Vitrectomy for Detachment", "Family Screening"],
    seoTitle: "FEVR Treatment Orange County | Familial Vitreoretinopathy Care",
    seoDescription: "FEVR treatment in Orange County. Genetic retinal vascular disorder management. Call (949) 364-0008."
  },
  {
    name: "Macular Telangiectasia Type 2",
    slug: "macular-telangiectasia-type-2",
    category: "Retinal Vascular Disease",
    description: "Macular telangiectasia type 2 involves dilated and incompetent blood vessels in the macula, causing gradual vision loss. It typically affects both eyes in middle-aged adults.",
    symptoms: ["Gradual central vision loss", "Reading difficulty", "Metamorphopsia", "Usually bilateral"],
    treatments: ["Observation", "Anti-VEGF for CNV", "Photodynamic Therapy", "Low Vision Aids"],
    seoTitle: "Macular Telangiectasia Orange County | MacTel Type 2 Care",
    seoDescription: "Macular telangiectasia treatment in Orange County. Anti-VEGF and specialized retinal care. Call (949) 364-0008."
  },
  {
    name: "Acute Macular Neuroretinopathy",
    slug: "acute-macular-neuroretinopathy",
    category: "Retinal Disorder",
    description: "Acute macular neuroretinopathy (AMN) causes sudden paracentral scotomas in young adults, often following viral illness or use of certain medications. Vision usually stabilizes but may not fully recover.",
    symptoms: ["Sudden paracentral blind spots", "Usually affects young women", "May follow flu-like illness", "Variable recovery"],
    treatments: ["Observation", "No Proven Treatment", "Managing Underlying Cause", "Low Vision Support if Persistent"],
    seoTitle: "Acute Macular Neuroretinopathy Orange County | AMN Care",
    seoDescription: "Acute macular neuroretinopathy evaluation in Orange County. Expert retinal diagnosis. Call (949) 364-0008."
  },
  {
    name: "Commotio Retinae",
    slug: "commotio-retinae",
    category: "Retinal Trauma",
    description: "Commotio retinae (Berlin's edema) is retinal whitening following blunt eye trauma, caused by photoreceptor disruption. Vision usually recovers unless the fovea is involved.",
    symptoms: ["Decreased vision after eye trauma", "White retina on exam", "Usually improves over weeks", "Permanent loss if fovea involved"],
    treatments: ["Observation", "Ruling Out Other Trauma", "Protecting Other Eye", "Monitoring for Complications"],
    seoTitle: "Commotio Retinae Treatment Orange County | Eye Trauma Care",
    seoDescription: "Commotio retinae evaluation in Orange County. Expert care for traumatic retinal injury. Call (949) 364-0008."
  },
  {
    name: "Purtscher Retinopathy",
    slug: "purtscher-retinopathy",
    category: "Retinal Trauma",
    description: "Purtscher retinopathy is sudden vision loss following severe trauma, particularly chest trauma, causing cotton-wool spots and hemorrhages in the retina from fat emboli or complement activation.",
    symptoms: ["Sudden bilateral vision loss", "Follows severe trauma", "Cotton-wool spots on exam", "Variable recovery"],
    treatments: ["Systemic Corticosteroids", "Treating Underlying Trauma", "Observation", "Low Vision Rehabilitation"],
    seoTitle: "Purtscher Retinopathy Orange County | Trauma Retinal Care",
    seoDescription: "Purtscher retinopathy treatment in Orange County. Emergency traumatic retinopathy care. Call (949) 364-0008."
  },
  {
    name: "Solar Retinopathy",
    slug: "solar-retinopathy",
    category: "Retinal Trauma",
    description: "Solar retinopathy is retinal damage from looking at the sun, often during eclipses. It causes permanent central vision damage due to photochemical and thermal injury to photoreceptors.",
    symptoms: ["Central blind spot after sun viewing", "Blurred central vision", "Metamorphopsia", "Usually bilateral"],
    treatments: ["No Proven Treatment", "Observation", "Low Vision Aids", "Prevention Education"],
    seoTitle: "Solar Retinopathy Orange County | Sun Damage Eye Care",
    seoDescription: "Solar retinopathy evaluation in Orange County. Expert care for sun-damaged retina. Call (949) 364-0008."
  },
  {
    name: "Laser Pointer Injury",
    slug: "laser-pointer-injury",
    category: "Retinal Trauma",
    description: "Laser pointer injury causes retinal burns from high-powered laser exposure, particularly common with green lasers. It can cause permanent central vision loss, especially in children.",
    symptoms: ["Sudden vision loss after laser exposure", "Central blind spot", "Visible retinal burn", "Often permanent"],
    treatments: ["No Proven Treatment", "Observation", "Oral Steroids (Limited Evidence)", "Low Vision Rehabilitation"],
    seoTitle: "Laser Pointer Injury Orange County | Retinal Burn Care",
    seoDescription: "Laser pointer injury evaluation in Orange County. Expert care for laser-damaged retina. Call (949) 364-0008."
  },

  // ADDITIONAL PEDIATRIC CONDITIONS (15 conditions)
  {
    name: "Congenital Nystagmus",
    slug: "congenital-nystagmus",
    category: "Pediatric Eye Disorder",
    description: "Congenital nystagmus is involuntary rhythmic eye movement present from birth or early infancy. It can be idiopathic or associated with other eye conditions affecting vision development.",
    symptoms: ["Rhythmic eye movements", "Head nodding or tilting", "Decreased vision", "Usually present from birth"],
    treatments: ["Glasses if Refractive Error", "Contact Lenses", "Eye Muscle Surgery", "Medications (Limited Benefit)"],
    seoTitle: "Congenital Nystagmus Treatment Orange County | Pediatric Eye Care",
    seoDescription: "Congenital nystagmus treatment in Orange County. Expert pediatric eye movement disorder care. Call (949) 364-0008."
  },
  {
    name: "Duane Syndrome",
    slug: "duane-syndrome",
    category: "Pediatric Eye Disorder",
    description: "Duane syndrome is a congenital eye movement disorder causing limited eye movement, particularly outward movement. The affected eye may retract into the socket when looking inward.",
    symptoms: ["Limited eye movement", "Eye retraction when looking in", "Head turn to avoid double vision", "May have facial abnormalities"],
    treatments: ["Observation if Mild", "Eye Muscle Surgery for Significant Cases", "Prism Glasses", "Managing Head Posture"],
    seoTitle: "Duane Syndrome Treatment Orange County | Eye Movement Disorder",
    seoDescription: "Duane syndrome treatment in Orange County. Expert congenital eye movement disorder care. Call (949) 364-0008."
  },
  {
    name: "Brown Syndrome",
    slug: "brown-syndrome",
    category: "Pediatric Eye Disorder",
    description: "Brown syndrome is limited upward eye movement when looking inward, caused by dysfunction of the superior oblique tendon. It can be congenital or acquired from inflammation or trauma.",
    symptoms: ["Limited upward gaze when looking in", "Abnormal head posture", "Possible double vision", "Downshoot on adduction"],
    treatments: ["Observation if Mild", "Eye Muscle Surgery", "Anti-inflammatory Treatment if Acquired", "Prism Glasses"],
    seoTitle: "Brown Syndrome Treatment Orange County | Superior Oblique Care",
    seoDescription: "Brown syndrome treatment in Orange County. Eye movement restriction surgical correction. Call (949) 364-0008."
  },
  {
    name: "Fourth Nerve Palsy",
    slug: "fourth-nerve-palsy",
    category: "Neurological Vision Disorder",
    description: "Fourth nerve (trochlear nerve) palsy causes weakness of the superior oblique muscle, resulting in vertical double vision and head tilt. It can be congenital or acquired from trauma or vascular disease.",
    symptoms: ["Vertical double vision", "Head tilt to compensate", "Difficulty reading or going down stairs", "Eye deviation"],
    treatments: ["Prism Glasses", "Eye Muscle Surgery", "Treating Underlying Cause", "Observation if Mild"],
    seoTitle: "Fourth Nerve Palsy Treatment Orange County | Double Vision Care",
    seoDescription: "Fourth nerve palsy treatment in Orange County. Superior oblique palsy and diplopia management. Call (949) 364-0008."
  },
  {
    name: "Sixth Nerve Palsy",
    slug: "sixth-nerve-palsy",
    category: "Neurological Vision Disorder",
    description: "Sixth nerve (abducens nerve) palsy causes weakness of the lateral rectus muscle, preventing outward eye movement. It can result from increased intracranial pressure, diabetes, or trauma.",
    symptoms: ["Horizontal double vision", "Inability to move eye outward", "Eye turning inward", "Head turn to avoid double vision"],
    treatments: ["Treating Underlying Cause", "Observation (Often Resolves)", "Prism Glasses", "Botox or Surgery if Persistent"],
    seoTitle: "Sixth Nerve Palsy Treatment Orange County | Abducens Palsy Care",
    seoDescription: "Sixth nerve palsy treatment in Orange County. Lateral rectus weakness and diplopia care. Call (949) 364-0008."
  },
  {
    name: "Third Nerve Palsy",
    slug: "third-nerve-palsy",
    category: "Neurological Vision Disorder",
    description: "Third nerve (oculomotor nerve) palsy affects multiple eye muscles, causing ptosis, pupil dilation, and inability to move the eye in most directions. It requires urgent evaluation to rule out aneurysm.",
    symptoms: ["Drooping eyelid", "Dilated pupil", "Eye turned down and out", "Double vision", "Inability to move eye in multiple directions"],
    treatments: ["Emergency Neuroimaging", "Treating Underlying Cause", "Eye Muscle Surgery", "Ptosis Repair"],
    seoTitle: "Third Nerve Palsy Emergency Orange County | Oculomotor Palsy",
    seoDescription: "Emergency third nerve palsy evaluation in Orange County. Urgent aneurysm screening and care. Call (949) 364-0008."
  },
  {
    name: "Infantile Esotropia",
    slug: "infantile-esotropia",
    category: "Pediatric Eye Disorder",
    description: "Infantile esotropia is inward eye turning developing before age 6 months, with large constant deviation. Early surgery provides best outcomes for binocular vision development.",
    symptoms: ["Large inward eye turn before 6 months", "Constant deviation", "Often alternate fixation", "No amblyopia if alternating"],
    treatments: ["Early Eye Muscle Surgery", "Glasses if Refractive Error", "Treating Amblyopia if Present", "Long-term Follow-up"],
    seoTitle: "Infantile Esotropia Surgery Orange County | Pediatric Strabismus",
    seoDescription: "Infantile esotropia surgery in Orange County. Early surgical correction for crossed eyes. Call (949) 364-0008."
  },
  {
    name: "Accommodative Esotropia",
    slug: "accommodative-esotropia",
    category: "Pediatric Eye Disorder",
    description: "Accommodative esotropia is inward eye turning related to focusing effort, typically in farsighted children age 2-3. It's often successfully treated with glasses alone.",
    symptoms: ["Inward eye turn when focusing", "Farsightedness", "Crossing more for near tasks", "Usually starts age 2-3"],
    treatments: ["Prescription Glasses", "Bifocals if Needed", "Patching for Amblyopia", "Surgery if Residual Crossing"],
    seoTitle: "Accommodative Esotropia Orange County | Farsighted Eye Crossing",
    seoDescription: "Accommodative esotropia treatment in Orange County. Glasses for farsighted eye turning. Call (949) 364-0008."
  },
  {
    name: "Intermittent Exotropia",
    slug: "intermittent-exotropia",
    category: "Pediatric Eye Disorder",
    description: "Intermittent exotropia is outward eye drifting that comes and goes, typically when tired or daydreaming. It's the most common type of childhood strabismus and may require surgery.",
    symptoms: ["Outward eye drift", "Eye closes in bright sunlight", "Usually when tired or ill", "May progress over time"],
    treatments: ["Observation if Mild", "Eye Muscle Surgery", "Vision Therapy", "Over-minus Glasses"],
    seoTitle: "Intermittent Exotropia Surgery Orange County | Eye Drift Care",
    seoDescription: "Intermittent exotropia treatment in Orange County. Surgical correction for outward eye drift. Call (949) 364-0008."
  },
  {
    name: "Congenital Glaucoma",
    slug: "congenital-glaucoma",
    category: "Pediatric Glaucoma",
    description: "Congenital glaucoma is elevated eye pressure present at birth due to abnormal drainage system development. It requires urgent surgical treatment to prevent blindness.",
    symptoms: ["Enlarged eyes", "Cloudy corneas", "Light sensitivity", "Tearing", "Decreased vision"],
    treatments: ["Emergency Surgery (Goniotomy/Trabeculotomy)", "Glaucoma Medications", "Multiple Surgeries Often Needed", "Lifelong Monitoring"],
    seoTitle: "Congenital Glaucoma Emergency Orange County | Pediatric Eye Pressure",
    seoDescription: "Emergency congenital glaucoma surgery in Orange County. Urgent treatment to save infant vision. Call (949) 364-0008."
  },

  // ADDITIONAL EYELID & ORBITAL CONDITIONS (20 conditions)
  {
    name: "Dermatochalasis",
    slug: "dermatochalasis",
    category: "Eyelid Disorder",
    description: "Dermatochalasis is excess, loose eyelid skin that develops with aging. Severe cases can hang over the eyelashes and obstruct vision, requiring surgical removal.",
    symptoms: ["Excess drooping eyelid skin", "Heaviness of eyelids", "Obstruction of upper vision", "Tired appearance"],
    treatments: ["Blepharoplasty Surgery", "Functional Assessment", "Insurance Coverage if Vision Impaired", "Cosmetic Improvement"],
    seoTitle: "Dermatochalasis Surgery Orange County | Eyelid Lift Blepharoplasty",
    seoDescription: "Dermatochalasis surgery in Orange County. Functional and cosmetic eyelid lift surgery. Call (949) 364-0008."
  },
  {
    name: "Floppy Eyelid Syndrome",
    slug: "floppy-eyelid-syndrome",
    category: "Eyelid Disorder",
    description: "Floppy eyelid syndrome involves extremely loose upper eyelids that easily evert during sleep, causing chronic irritation. It's associated with obesity and sleep apnea.",
    symptoms: ["Chronic eye redness", "Mucous discharge", "Worse upon waking", "Eyelids easily evert", "Often in obese patients"],
    treatments: ["Eye Shields at Night", "Taping Lids", "Weight Loss", "Treating Sleep Apnea", "Eyelid Tightening Surgery"],
    seoTitle: "Floppy Eyelid Syndrome Orange County | Eyelid Eversion Treatment",
    seoDescription: "Floppy eyelid syndrome treatment in Orange County. Surgical and non-surgical eyelid stabilization. Call (949) 364-0008."
  },
  {
    name: "Blepharoptosis Congenital",
    slug: "congenital-blepharoptosis",
    category: "Pediatric Eyelid Disorder",
    description: "Congenital ptosis is drooping eyelid present from birth due to poor levator muscle development. Severe cases require early surgery to prevent amblyopia from vision obstruction.",
    symptoms: ["Drooping eyelid from birth", "Head tilt or chin elevation", "Eyebrow elevation to compensate", "Possible amblyopia"],
    treatments: ["Early Surgery if Vision Threatened", "Levator Resection", "Frontalis Sling", "Amblyopia Treatment"],
    seoTitle: "Congenital Ptosis Surgery Orange County | Pediatric Droopy Eyelid",
    seoDescription: "Congenital ptosis surgery in Orange County. Early treatment to prevent lazy eye development. Call (949) 364-0008."
  },
  {
    name: "Marcus Gunn Jaw-Winking",
    slug: "marcus-gunn-jaw-winking",
    category: "Pediatric Eyelid Disorder",
    description: "Marcus Gunn jaw-winking is a congenital condition where the droopy eyelid elevates when the jaw moves, particularly when chewing or sucking. It results from aberrant nerve connections.",
    symptoms: ["Eyelid elevation with jaw movement", "Ptosis when jaw relaxed", "Winking with chewing", "Usually one-sided"],
    treatments: ["Observation if Mild", "Ptosis Surgery", "Levator Excision and Frontalis Sling", "Cosmetic Improvement"],
    seoTitle: "Marcus Gunn Jaw-Winking Orange County | Synkinetic Ptosis",
    seoDescription: "Marcus Gunn jaw-winking treatment in Orange County. Congenital eyelid-jaw synkinesis care. Call (949) 364-0008."
  },
  {
    name: "Trichiasis",
    slug: "trichiasis",
    category: "Eyelid Disorder",
    description: "Trichiasis is misdirected eyelashes that grow inward and rub against the cornea, causing irritation and potential corneal damage. It can result from chronic inflammation or scarring.",
    symptoms: ["Eye irritation and pain", "Foreign body sensation", "Tearing", "Corneal abrasion", "Visible lashes touching eye"],
    treatments: ["Epilating (Plucking) Lashes", "Electrolysis", "Cryotherapy", "Eyelid Surgery for Extensive Cases"],
    seoTitle: "Trichiasis Treatment Orange County | Misdirected Eyelash Removal",
    seoDescription: "Trichiasis treatment in Orange County. Permanent eyelash removal and eyelid surgery. Call (949) 364-0008."
  },
  {
    name: "Distichiasis",
    slug: "distichiasis",
    category: "Eyelid Disorder",
    description: "Distichiasis is an extra row of eyelashes growing from the meibomian gland openings, rubbing against the cornea. It can be congenital or acquired from chronic inflammation.",
    symptoms: ["Eye irritation", "Foreign body sensation", "Extra row of lashes", "Corneal damage", "Chronic discomfort"],
    treatments: ["Epilating Lashes", "Electrolysis", "Cryotherapy", "Surgical Eyelid Split and Removal"],
    seoTitle: "Distichiasis Treatment Orange County | Extra Eyelash Row Removal",
    seoDescription: "Distichiasis treatment in Orange County. Surgical removal of extra eyelash row. Call (949) 364-0008."
  },
  {
    name: "Lagophthalmos",
    slug: "lagophthalmos",
    category: "Eyelid Disorder",
    description: "Lagophthalmos is incomplete eyelid closure, leaving part of the cornea exposed. It can result from facial nerve palsy, thyroid eye disease, or scarring, causing exposure keratopathy.",
    symptoms: ["Unable to close eye completely", "Corneal dryness", "Eye irritation", "Worse upon waking", "Visible lagophthalmos"],
    treatments: ["Aggressive Lubrication", "Taping Lid Closed at Night", "Gold Weight Implant", "Lateral Tarsorrhaphy", "Eyelid Surgery"],
    seoTitle: "Lagophthalmos Treatment Orange County | Eyelid Closure Surgery",
    seoDescription: "Lagophthalmos treatment in Orange County. Surgical correction for incomplete eyelid closure. Call (949) 364-0008."
  },
  {
    name: "Eyelid Retraction",
    slug: "eyelid-retraction",
    category: "Eyelid Disorder",
    description: "Eyelid retraction is abnormal elevation of the upper lid or lowering of the lower lid, exposing more of the eye than normal. It's most commonly associated with thyroid eye disease.",
    symptoms: ["Widened eye appearance", "Excessive eye white showing", "Dry eyes", "Difficulty closing eyes", "Staring appearance"],
    treatments: ["Treating Thyroid Disease", "Lubricating Drops", "Eyelid Lengthening Surgery", "Lateral Tarsorrhaphy"],
    seoTitle: "Eyelid Retraction Surgery Orange County | Thyroid Eye Disease",
    seoDescription: "Eyelid retraction surgery in Orange County. Correction for thyroid eye disease and exposure. Call (949) 364-0008."
  },
  {
    name: "Eyelid Coloboma",
    slug: "eyelid-coloboma",
    category: "Congenital Eyelid Disorder",
    description: "Eyelid coloboma is a congenital notch or gap in the eyelid, usually upper lid medially. It can expose the cornea and requires surgical repair to protect the eye.",
    symptoms: ["Visible notch in eyelid", "Corneal exposure", "Dry eyes", "May have other facial anomalies", "Present from birth"],
    treatments: ["Early Surgical Repair", "Corneal Protection", "Eyelid Reconstruction", "Managing Associated Conditions"],
    seoTitle: "Eyelid Coloboma Surgery Orange County | Congenital Eyelid Defect",
    seoDescription: "Eyelid coloboma surgical repair in Orange County. Congenital eyelid notch reconstruction. Call (949) 364-0008."
  },
  {
    name: "Eyelid Eczema",
    slug: "eyelid-eczema",
    category: "Eyelid Dermatitis",
    description: "Eyelid eczema is inflammation of the eyelid skin causing redness, itching, and scaling. It can be atopic dermatitis, contact dermatitis from cosmetics, or irritant dermatitis.",
    symptoms: ["Red, scaly eyelids", "Itching", "Swelling", "Dry, cracked skin", "May have weeping"],
    treatments: ["Identifying and Avoiding Triggers", "Mild Steroid Ointment", "Tacrolimus or Pimecrolimus", "Moisturizers", "Allergy Testing"],
    seoTitle: "Eyelid Eczema Treatment Orange County | Eyelid Dermatitis Care",
    seoDescription: "Eyelid eczema treatment in Orange County. Dermatitis management and allergy identification. Call (949) 364-0008."
  },

  // ADDITIONAL GLAUCOMA & RELATED CONDITIONS (10 conditions)
  {
    name: "Plateau Iris Syndrome",
    slug: "plateau-iris-syndrome",
    category: "Glaucoma",
    description: "Plateau iris syndrome is a form of angle-closure glaucoma caused by abnormal iris configuration despite patent iridotomy. The peripheral iris is pushed forward by anteriorly positioned ciliary processes.",
    symptoms: ["Narrow angles despite iridotomy", "Intermittent angle closure", "Elevated pressure", "May be asymptomatic until closure"],
    treatments: ["Laser Peripheral Iridoplasty", "Pilocarpine Eye Drops", "Cataract Surgery", "Glaucoma Surgery if Needed"],
    seoTitle: "Plateau Iris Syndrome Orange County | Angle-Closure Specialist",
    seoDescription: "Plateau iris syndrome treatment in Orange County. Laser iridoplasty for narrow angle glaucoma. Call (949) 364-0008."
  },
  {
    name: "Neovascular Glaucoma",
    slug: "neovascular-glaucoma",
    category: "Glaucoma",
    description: "Neovascular glaucoma is aggressive glaucoma from abnormal blood vessel growth in the drainage angle, usually from diabetic retinopathy, retinal vein occlusion, or ocular ischemia. It's difficult to treat.",
    symptoms: ["Severe eye pain", "Very high eye pressure", "Decreased vision", "Red eye", "Hazy cornea"],
    treatments: ["Anti-VEGF Injections", "Panretinal Photocoagulation", "Aggressive Glaucoma Medications", "Glaucoma Surgery", "Treating Underlying Cause"],
    seoTitle: "Neovascular Glaucoma Emergency Orange County | NVG Treatment",
    seoDescription: "Emergency neovascular glaucoma treatment in Orange County. Aggressive pressure control and anti-VEGF. Call (949) 364-0008."
  },
  {
    name: "Uveitic Glaucoma",
    slug: "uveitic-glaucoma",
    category: "Glaucoma",
    description: "Uveitic glaucoma develops as a complication of chronic uveitis, either from inflammation blocking drainage or from steroid treatment. It requires careful management of both conditions.",
    symptoms: ["Elevated eye pressure with uveitis", "History of eye inflammation", "Often on steroids", "Vision loss if untreated"],
    treatments: ["Controlling Uveitis", "Pressure-Lowering Medications", "Minimizing Steroid Use", "Glaucoma Surgery if Needed"],
    seoTitle: "Uveitic Glaucoma Treatment Orange County | Inflammatory Glaucoma",
    seoDescription: "Uveitic glaucoma treatment in Orange County. Managing pressure with chronic eye inflammation. Call (949) 364-0008."
  },
  {
    name: "Steroid-Induced Glaucoma",
    slug: "steroid-induced-glaucoma",
    category: "Glaucoma",
    description: "Steroid-induced glaucoma develops from prolonged steroid use (eye drops, injections, oral, or inhaled), causing elevated eye pressure. Some individuals are steroid responders with pressure elevation from any steroid exposure.",
    symptoms: ["Elevated pressure after steroid use", "Usually no symptoms initially", "Vision loss if prolonged", "May be steroid responder"],
    treatments: ["Discontinuing or Reducing Steroids", "Pressure-Lowering Medications", "Non-Steroid Alternatives", "Glaucoma Surgery if Damage Present"],
    seoTitle: "Steroid-Induced Glaucoma Orange County | Steroid Responder Care",
    seoDescription: "Steroid-induced glaucoma treatment in Orange County. Managing pressure from steroid medication. Call (949) 364-0008."
  },
  {
    name: "Traumatic Glaucoma",
    slug: "traumatic-glaucoma",
    category: "Glaucoma",
    description: "Traumatic glaucoma develops after eye injury, either immediately from angle damage and bleeding or years later from scarring. Blunt trauma can cause angle recession and chronic glaucoma.",
    symptoms: ["Elevated pressure after eye injury", "History of trauma", "Angle damage on exam", "May develop years later"],
    treatments: ["Pressure-Lowering Medications", "Treating Hyphema if Present", "Surgery for Severe Cases", "Long-term Monitoring"],
    seoTitle: "Traumatic Glaucoma Treatment Orange County | Post-Injury Eye Pressure",
    seoDescription: "Traumatic glaucoma treatment in Orange County. Managing pressure after eye injury. Call (949) 364-0008."
  },

  // Systemic Disease Effects (10 conditions)
  {
    name: "Hypertensive Retinopathy",
    slug: "hypertensive-retinopathy",
    category: "Systemic Disease Effect",
    description: "Hypertensive retinopathy is damage to the retinal blood vessels caused by chronic high blood pressure. Blood pressure control is essential to prevent progressive damage. Findings include narrowed arterioles, hemorrhages, and cotton-wool spots.",
    symptoms: ["Usually asymptomatic until advanced", "Blurred vision if severe", "Headaches", "Associated high blood pressure"],
    treatments: ["Blood Pressure Management", "Systemic Medical Care", "Regular Eye Monitoring", "Treatment of Complications"],
    seoTitle: "Hypertensive Retinopathy Treatment Orange County | High Blood Pressure Eyes",
    seoDescription: "Hypertensive retinopathy care in Orange County. Managing eye effects of high blood pressure. Call (949) 364-0008."
  },
  {
    name: "Thyroid Eye Disease",
    slug: "thyroid-eye-disease",
    category: "Systemic Disease Effect",
    description: "Thyroid eye disease (Graves ophthalmopathy) is an autoimmune condition causing inflammation of eye muscles and tissues. It's associated with hyperthyroidism and can cause bulging eyes, double vision, and vision loss from optic nerve compression.",
    symptoms: ["Bulging eyes (proptosis)", "Double vision", "Eye discomfort or pain", "Light sensitivity", "Eyelid retraction"],
    treatments: ["Thyroid Hormone Control", "Steroids for Inflammation", "Orbital Decompression Surgery", "Eye Muscle Surgery"],
    seoTitle: "Thyroid Eye Disease Treatment Orange County | Graves Ophthalmopathy",
    seoDescription: "Thyroid eye disease treatment in Orange County. Expert Graves ophthalmopathy care. Call (949) 364-0008."
  },
  {
    name: "Lupus Retinopathy",
    slug: "lupus-retinopathy",
    category: "Systemic Disease Effect",
    description: "Lupus retinopathy occurs when systemic lupus erythematosus affects the retinal blood vessels, causing cotton-wool spots, hemorrhages, and vascular occlusions. Systemic disease control is critical.",
    symptoms: ["Vision loss", "Cotton-wool spots on exam", "Retinal hemorrhages", "Vascular occlusions"],
    treatments: ["Systemic Lupus Treatment", "Immunosuppressive Therapy", "Monitoring for Complications", "Laser Treatment if Needed"],
    seoTitle: "Lupus Retinopathy Treatment Orange County | SLE Eye Care",
    seoDescription: "Lupus retinopathy care in Orange County. Managing eye effects of systemic lupus. Call (949) 364-0008."
  },
  {
    name: "Rheumatoid Arthritis Eye Effects",
    slug: "rheumatoid-arthritis-eye-effects",
    category: "Systemic Disease Effect",
    description: "Rheumatoid arthritis can affect multiple eye structures including the sclera (scleritis), cornea (peripheral ulcerative keratitis), and tear production (secondary Sjögren's). Systemic treatment is important.",
    symptoms: ["Eye redness and pain", "Dry eyes", "Light sensitivity", "Vision changes", "Scleral thinning"],
    treatments: ["Systemic RA Treatment", "Anti-inflammatory Medications", "Artificial Tears", "Surgical Repair if Needed"],
    seoTitle: "Rheumatoid Arthritis Eye Treatment Orange County | RA Ocular Care",
    seoDescription: "Rheumatoid arthritis eye care in Orange County. Managing ocular manifestations of RA. Call (949) 364-0008."
  },
  {
    name: "Multiple Sclerosis Optic Neuritis",
    slug: "multiple-sclerosis-optic-neuritis",
    category: "Systemic Disease Effect",
    description: "Optic neuritis is inflammation of the optic nerve, often the first sign of multiple sclerosis. It causes sudden vision loss, eye pain with movement, and color vision changes. Most recover vision but may have recurrences.",
    symptoms: ["Sudden vision loss in one eye", "Pain with eye movement", "Color vision loss", "Visual field defects"],
    treatments: ["Intravenous Steroids", "MRI Brain Imaging", "Neurological Evaluation", "MS Disease Management"],
    seoTitle: "MS Optic Neuritis Treatment Orange County | Multiple Sclerosis Eye Care",
    seoDescription: "MS optic neuritis care in Orange County. Expert treatment for multiple sclerosis eye effects. Call (949) 364-0008."
  },
  {
    name: "Sickle Cell Retinopathy",
    slug: "sickle-cell-retinopathy",
    category: "Systemic Disease Effect",
    description: "Sickle cell retinopathy occurs when sickled red blood cells block retinal blood vessels, causing ischemia and abnormal blood vessel growth (sea fans). It can lead to vitreous hemorrhage and retinal detachment.",
    symptoms: ["Often asymptomatic", "Sudden vision loss if bleeding", "Peripheral vision loss", "Floaters"],
    treatments: ["Regular Screening", "Laser Photocoagulation", "Anti-VEGF Injections", "Vitrectomy for Complications"],
    seoTitle: "Sickle Cell Retinopathy Treatment Orange County | Sea Fan Retinopathy",
    seoDescription: "Sickle cell retinopathy care in Orange County. Expert treatment for proliferative sickle retinopathy. Call (949) 364-0008."
  },
  {
    name: "HIV Retinopathy",
    slug: "hiv-retinopathy",
    category: "Systemic Disease Effect",
    description: "HIV retinopathy includes cotton-wool spots from immune suppression and opportunistic infections like CMV retinitis. Modern antiretroviral therapy has reduced but not eliminated these complications.",
    symptoms: ["Cotton-wool spots", "Retinal hemorrhages", "Vision loss from infections", "Floaters"],
    treatments: ["Antiretroviral Therapy (ART)", "Treatment of CMV if Present", "Immune Reconstitution", "Regular Monitoring"],
    seoTitle: "HIV Retinopathy Treatment Orange County | CMV Retinitis Care",
    seoDescription: "HIV retinopathy care in Orange County. Managing opportunistic eye infections. Call (949) 364-0008."
  },
  {
    name: "Sarcoidosis Uveitis",
    slug: "sarcoidosis-uveitis",
    category: "Systemic Disease Effect",
    description: "Sarcoidosis is a systemic inflammatory disease that can cause chronic granulomatous uveitis, affecting both anterior and posterior segments. It requires systemic workup and treatment.",
    symptoms: ["Eye redness and pain", "Blurred vision", "Light sensitivity", "Floaters", "Vision loss"],
    treatments: ["Corticosteroid Drops", "Systemic Immunosuppression", "Treatment of Systemic Sarcoidosis", "Monitoring for Complications"],
    seoTitle: "Sarcoidosis Uveitis Treatment Orange County | Granulomatous Uveitis",
    seoDescription: "Sarcoidosis uveitis care in Orange County. Expert treatment for granulomatous inflammation. Call (949) 364-0008."
  },
  {
    name: "Giant Cell Arteritis Vision Loss",
    slug: "giant-cell-arteritis-vision-loss",
    category: "Systemic Disease Effect",
    description: "Giant cell arteritis (GCA) is a medical emergency causing sudden vision loss from optic nerve ischemia. Patients over 50 with new headache, jaw pain, and vision loss need immediate high-dose steroids to prevent bilateral blindness.",
    symptoms: ["Sudden vision loss", "Severe headache", "Jaw pain with chewing", "Scalp tenderness", "Temporal artery tenderness"],
    treatments: ["Immediate High-Dose Steroids", "ESR and CRP Blood Tests", "Temporal Artery Biopsy", "Long-term Steroid Taper"],
    seoTitle: "Giant Cell Arteritis Treatment Orange County | GCA Vision Emergency",
    seoDescription: "Emergency giant cell arteritis care in Orange County. Preventing vision loss from GCA. Call (949) 364-0008."
  },
  {
    name: "Vitamin A Deficiency Night Blindness",
    slug: "vitamin-a-deficiency-night-blindness",
    category: "Systemic Disease Effect",
    description: "Vitamin A deficiency causes night blindness (nyctalopia), dry eyes, and Bitot's spots on the conjunctiva. Severe cases lead to corneal ulceration (keratomalacia) and blindness. Supplementation reverses early stages.",
    symptoms: ["Difficulty seeing at night", "Dry eyes", "Bitot's spots on conjunctiva", "Corneal ulceration if severe"],
    treatments: ["Vitamin A Supplementation", "Nutritional Counseling", "Treating Underlying Malabsorption", "Corneal Protection"],
    seoTitle: "Vitamin A Deficiency Treatment Orange County | Night Blindness Care",
    seoDescription: "Vitamin A deficiency eye care in Orange County. Treating night blindness and xerophthalmia. Call (949) 364-0008."
  },

  // Trauma and Eye Injuries (10 conditions)
  {
    name: "Hyphema",
    slug: "hyphema",
    category: "Eye Trauma",
    description: "Hyphema is bleeding in the anterior chamber, typically from blunt trauma. Blood settles in a visible layer. Complications include rebleeding, glaucoma, and corneal blood staining. Requires careful monitoring and head elevation.",
    symptoms: ["Visible blood in front of iris", "Eye pain", "Blurred vision", "Light sensitivity", "History of trauma"],
    treatments: ["Head Elevation", "Cycloplegic Drops", "Pressure Monitoring", "Surgical Washout if Severe"],
    seoTitle: "Hyphema Treatment Orange County | Eye Bleeding After Trauma",
    seoDescription: "Hyphema treatment in Orange County. Expert care for eye bleeding after injury. Call (949) 364-0008."
  },
  {
    name: "Corneal Abrasion",
    slug: "corneal-abrasion",
    category: "Eye Trauma",
    description: "Corneal abrasion is a scratch on the corneal surface, often from foreign bodies, fingernails, or contact lens trauma. Very painful but usually heals in 24-48 hours with proper treatment.",
    symptoms: ["Severe eye pain", "Foreign body sensation", "Tearing", "Light sensitivity", "Blurred vision"],
    treatments: ["Antibiotic Drops or Ointment", "Pain Control", "Patching (Controversial)", "Follow-up in 24 Hours"],
    seoTitle: "Corneal Abrasion Treatment Orange County | Scratched Eye Emergency",
    seoDescription: "Corneal abrasion emergency care in Orange County. Fast treatment for scratched cornea. Call (949) 364-0008."
  },
  {
    name: "Chemical Burn",
    slug: "chemical-burn",
    category: "Eye Trauma",
    description: "Chemical burns, especially alkali, are ocular emergencies requiring immediate copious irrigation. Alkali penetrates deeply causing severe damage. Prognosis depends on rapid treatment and extent of injury.",
    symptoms: ["Severe pain", "Vision loss", "Eyelid spasm", "Corneal cloudiness", "Chemical exposure history"],
    treatments: ["Immediate Copious Irrigation", "pH Testing", "Pressure Control", "Amniotic Membrane or Surgery"],
    seoTitle: "Chemical Eye Burn Treatment Orange County | Emergency Eye Irrigation",
    seoDescription: "Emergency chemical burn treatment in Orange County. Immediate eye irrigation and care. Call (949) 364-0008."
  },
  {
    name: "Globe Rupture",
    slug: "globe-rupture",
    category: "Eye Trauma",
    description: "Globe rupture is full-thickness break in the eye wall from severe trauma. It's a surgical emergency. Signs include irregular pupil, shallow chamber, and positive Seidel test. Shield the eye and avoid pressure.",
    symptoms: ["Severe trauma history", "Very poor vision", "Irregular pupil", "Soft eye", "Uveal tissue prolapse"],
    treatments: ["Protective Eye Shield", "NO Pressure on Eye", "Immediate Surgical Repair", "Antibiotics and Tetanus"],
    seoTitle: "Globe Rupture Emergency Orange County | Ruptured Eye Surgery",
    seoDescription: "Emergency globe rupture repair in Orange County. Immediate surgical care for eye rupture. Call (949) 364-0008."
  },
  {
    name: "Orbital Blowout Fracture",
    slug: "orbital-blowout-fracture",
    category: "Eye Trauma",
    description: "Orbital blowout fracture occurs when blunt trauma causes the orbital floor or medial wall to break, trapping eye muscles. Causes double vision, sunken eye, and numbness. May require surgery.",
    symptoms: ["Double vision", "Enophthalmos (sunken eye)", "Numbness of cheek", "Restricted eye movement", "Facial trauma"],
    treatments: ["Observation for Minor Cases", "Antibiotics", "Avoid Nose Blowing", "Surgery for Persistent Diplopia"],
    seoTitle: "Orbital Fracture Treatment Orange County | Blowout Fracture Surgery",
    seoDescription: "Orbital blowout fracture care in Orange County. Expert treatment for eye socket fractures. Call (949) 364-0008."
  },
  {
    name: "Corneal Foreign Body",
    slug: "corneal-foreign-body",
    category: "Eye Trauma",
    description: "Corneal foreign bodies, often metal or wood, embed in the corneal surface causing pain and tearing. Metal can leave rust rings. Removal requires magnification and proper technique to avoid deeper injury.",
    symptoms: ["Foreign body sensation", "Eye pain", "Tearing", "Difficulty opening eye", "Visible foreign material"],
    treatments: ["Foreign Body Removal", "Rust Ring Removal", "Antibiotic Drops", "Follow-up Exam"],
    seoTitle: "Corneal Foreign Body Removal Orange County | Metal in Eye Treatment",
    seoDescription: "Corneal foreign body removal in Orange County. Expert extraction of eye foreign objects. Call (949) 364-0008."
  },
  {
    name: "Traumatic Iritis",
    slug: "traumatic-iritis",
    category: "Eye Trauma",
    description: "Traumatic iritis is inflammation of the iris following blunt trauma. The eye becomes red, painful, and light-sensitive. Treated with steroid and cycloplegic drops. Monitor for complications like glaucoma.",
    symptoms: ["Eye pain after trauma", "Redness", "Light sensitivity", "Blurred vision", "Small or irregular pupil"],
    treatments: ["Steroid Eye Drops", "Cycloplegic Drops", "Pressure Monitoring", "Treatment of Complications"],
    seoTitle: "Traumatic Iritis Treatment Orange County | Post-Trauma Eye Inflammation",
    seoDescription: "Traumatic iritis care in Orange County. Treating eye inflammation after injury. Call (949) 364-0008."
  },
  {
    name: "Commotio Retinae",
    slug: "commotio-retinae",
    category: "Eye Trauma",
    description: "Commotio retinae (Berlin's edema) is retinal whitening from blunt trauma disrupting photoreceptors. Vision usually recovers but can be permanently reduced if the macula is involved. No specific treatment, just observation.",
    symptoms: ["Vision loss after trauma", "Retinal whitening on exam", "May have other trauma findings", "Gradual improvement"],
    treatments: ["Observation", "Treat Associated Injuries", "Monitor for Complications", "Visual Rehabilitation"],
    seoTitle: "Commotio Retinae Treatment Orange County | Berlin's Edema Care",
    seoDescription: "Commotio retinae management in Orange County. Treating retinal trauma complications. Call (949) 364-0008."
  },
  {
    name: "Traumatic Optic Neuropathy",
    slug: "traumatic-optic-neuropathy",
    category: "Eye Trauma",
    description: "Traumatic optic neuropathy is optic nerve damage from head or orbital trauma. Causes sudden severe vision loss. Treatment is controversial; options include observation, steroids, or optic canal decompression.",
    symptoms: ["Sudden vision loss after trauma", "Afferent pupillary defect", "Normal initial appearance", "Head or orbital trauma"],
    treatments: ["Observation", "High-Dose Steroids (Controversial)", "Optic Canal Decompression (Controversial)", "Supportive Care"],
    seoTitle: "Traumatic Optic Neuropathy Treatment Orange County | Optic Nerve Injury",
    seoDescription: "Traumatic optic neuropathy care in Orange County. Expert treatment for optic nerve trauma. Call (949) 364-0008."
  },
  {
    name: "Eyelid Laceration",
    slug: "eyelid-laceration",
    category: "Eye Trauma",
    description: "Eyelid lacerations require careful repair to maintain function and cosmesis. Lacerations involving the lid margin, canaliculus, or levator muscle need specialist repair. Always check for globe injury.",
    symptoms: ["Cut or torn eyelid", "Bleeding", "May have globe injury", "Difficulty closing eye if deep"],
    treatments: ["Wound Cleaning", "Layered Surgical Repair", "Canalicular Stenting if Needed", "Antibiotics and Tetanus"],
    seoTitle: "Eyelid Laceration Repair Orange County | Eye Lid Injury Surgery",
    seoDescription: "Expert eyelid laceration repair in Orange County. Specialized eye lid injury care. Call (949) 364-0008."
  },

  // Rare Genetic and Metabolic (10 conditions)
  {
    name: "Albinism",
    slug: "albinism",
    category: "Genetic Condition",
    description: "Albinism is a genetic lack of melanin causing very light skin, hair, and eyes. Eye features include nystagmus, foveal hypoplasia, reduced visual acuity, and iris transillumination. Sun protection is critical.",
    symptoms: ["Very light eye color", "Nystagmus", "Poor vision", "Light sensitivity", "Iris transillumination"],
    treatments: ["Sunglasses and UV Protection", "Low Vision Aids", "Treatment of Nystagmus", "Genetic Counseling"],
    seoTitle: "Albinism Eye Care Orange County | Ocular Albinism Treatment",
    seoDescription: "Albinism eye care in Orange County. Low vision management for ocular albinism. Call (949) 364-0008."
  },
  {
    name: "Aniridia",
    slug: "aniridia",
    category: "Genetic Condition",
    description: "Aniridia is absence of the iris, usually genetic (PAX6 mutation). Associated with glaucoma, cataracts, corneal disease, and nystagmus. Requires lifelong monitoring for complications.",
    symptoms: ["Visible absence of iris", "Glare and light sensitivity", "Reduced vision", "Nystagmus", "Risk of glaucoma"],
    treatments: ["Glaucoma Monitoring", "Cataract Surgery When Needed", "Corneal Care", "Tinted Contact Lenses"],
    seoTitle: "Aniridia Treatment Orange County | Absent Iris Management",
    seoDescription: "Aniridia management in Orange County. Comprehensive care for absent iris. Call (949) 364-0008."
  },
  {
    name: "Coloboma",
    slug: "coloboma",
    category: "Genetic Condition",
    description: "Coloboma is a congenital gap in ocular structures (iris, retina, optic nerve) from incomplete closure during development. Causes range from isolated to part of syndromes. Vision depends on location.",
    symptoms: ["Keyhole-shaped pupil if iris", "Vision loss if retina/nerve", "May be asymptomatic", "Associated anomalies possible"],
    treatments: ["Glasses or Contact Lenses", "Amblyopia Treatment", "Surgical Repair of Iris Defect", "Low Vision Services"],
    seoTitle: "Coloboma Treatment Orange County | Eye Gap Condition Care",
    seoDescription: "Coloboma management in Orange County. Treating congenital eye defects. Call (949) 364-0008."
  },
  {
    name: "Achromatopsia",
    slug: "achromatopsia",
    category: "Genetic Condition",
    description: "Achromatopsia is complete color blindness from cone dysfunction. Patients see only in shades of gray, have poor central vision, light sensitivity, and nystagmus. No cure but aids help.",
    symptoms: ["Complete color blindness", "Very poor vision", "Severe light sensitivity", "Nystagmus", "Present from birth"],
    treatments: ["Dark Tinted Glasses", "Low Vision Aids", "Educational Support", "Genetic Counseling"],
    seoTitle: "Achromatopsia Treatment Orange County | Complete Color Blindness Care",
    seoDescription: "Achromatopsia management in Orange County. Complete color blindness support. Call (949) 364-0008."
  },
  {
    name: "Leber Congenital Amaurosis",
    slug: "leber-congenital-amaurosis",
    category: "Genetic Condition",
    description: "Leber congenital amaurosis (LCA) is severe inherited retinal dystrophy causing blindness or near-blindness from birth. Some forms now treatable with gene therapy (RPE65 mutation). Genetic testing important.",
    symptoms: ["Poor vision from birth", "Nystagmus", "Oculodigital sign (eye pressing)", "Severely abnormal ERG"],
    treatments: ["Gene Therapy for RPE65 Type", "Low Vision Services", "Educational Support", "Genetic Counseling"],
    seoTitle: "Leber Congenital Amaurosis Treatment Orange County | LCA Gene Therapy",
    seoDescription: "LCA treatment in Orange County. Gene therapy for congenital blindness. Call (949) 364-0008."
  },
  {
    name: "Marfan Syndrome Ectopia Lentis",
    slug: "marfan-syndrome-ectopia-lentis",
    category: "Genetic Condition",
    description: "Marfan syndrome is a connective tissue disorder causing lens dislocation (ectopia lentis), typically superiorly. Also at risk for retinal detachment. Systemic features include tall stature and cardiovascular issues.",
    symptoms: ["Lens dislocation visible on exam", "Vision fluctuation", "High myopia", "Retinal detachment risk", "Systemic features"],
    treatments: ["Glasses or Contact Lenses", "Lens Removal if Needed", "Retinal Monitoring", "Cardiology Follow-up"],
    seoTitle: "Marfan Syndrome Eye Care Orange County | Ectopia Lentis Treatment",
    seoDescription: "Marfan syndrome eye care in Orange County. Managing dislocated lens and retinal risks. Call (949) 364-0008."
  },
  {
    name: "Homocystinuria Lens Dislocation",
    slug: "homocystinuria-lens-dislocation",
    category: "Genetic Condition",
    description: "Homocystinuria is a metabolic disorder causing lens dislocation (usually inferiorly), distinguishing it from Marfan's. Also causes intellectual disability and thrombosis risk. Dietary treatment can help.",
    symptoms: ["Downward lens dislocation", "High myopia", "Retinal detachment", "Glaucoma risk", "Systemic features"],
    treatments: ["Dietary Management", "Vitamin B6/B12 Supplementation", "Lens Removal if Needed", "Monitor for Complications"],
    seoTitle: "Homocystinuria Eye Treatment Orange County | Metabolic Lens Disease",
    seoDescription: "Homocystinuria eye care in Orange County. Managing metabolic lens dislocation. Call (949) 364-0008."
  },
  {
    name: "Oculocutaneous Albinism",
    slug: "oculocutaneous-albinism",
    category: "Genetic Condition",
    description: "Oculocutaneous albinism affects skin, hair, and eyes with reduced melanin. Causes nystagmus, foveal hypoplasia, reduced vision, and high skin cancer risk. Different genetic types exist with varying severity.",
    symptoms: ["Light skin and hair", "Light-colored eyes", "Nystagmus", "Poor vision", "High photosensitivity"],
    treatments: ["Sun Protection", "Skin Cancer Screening", "Low Vision Aids", "Treatment of Nystagmus"],
    seoTitle: "Oculocutaneous Albinism Care Orange County | OCA Vision Treatment",
    seoDescription: "Oculocutaneous albinism care in Orange County. Comprehensive vision and skin management. Call (949) 364-0008."
  },
  {
    name: "Gyrate Atrophy",
    slug: "gyrate-atrophy",
    category: "Genetic Condition",
    description: "Gyrate atrophy is a rare inherited retinal dystrophy causing progressive chorioretinal atrophy in scalloped patterns. Caused by ornithine aminotransferase deficiency. Night blindness progresses to tunnel vision.",
    symptoms: ["Night blindness", "Progressive peripheral vision loss", "Myopia", "Posterior subcapsular cataract", "Elevated ornithine"],
    treatments: ["Arginine-Restricted Diet", "Vitamin B6 (Sometimes Effective)", "Low Vision Services", "Cataract Surgery"],
    seoTitle: "Gyrate Atrophy Treatment Orange County | Rare Retinal Dystrophy Care",
    seoDescription: "Gyrate atrophy management in Orange County. Dietary treatment for inherited retinal disease. Call (949) 364-0008."
  },
  {
    name: "X-Linked Retinoschisis",
    slug: "x-linked-retinoschisis",
    category: "Genetic Condition",
    description: "X-linked retinoschisis is splitting of retinal layers in young males, causing reduced vision. Characteristic spoke-wheel pattern in macula on OCT. May have peripheral retinoschisis and vitreous hemorrhage.",
    symptoms: ["Reduced vision in young males", "Spoke-wheel macular pattern", "Reading difficulty", "May have complications"],
    treatments: ["Observation for Mild Cases", "Carbonic Anhydrase Inhibitors", "Vitrectomy for Complications", "Low Vision Support"],
    seoTitle: "X-Linked Retinoschisis Treatment Orange County | RS1 Gene Care",
    seoDescription: "X-linked retinoschisis management in Orange County. Expert care for juvenile retinoschisis. Call (949) 364-0008."
  },

  // Inflammatory and Autoimmune (10 conditions)
  {
    name: "Anterior Uveitis",
    slug: "anterior-uveitis",
    category: "Inflammatory Disorder",
    description: "Anterior uveitis is inflammation of the iris and ciliary body (iritis/iridocyclitis). Causes red, painful eye with light sensitivity. Can be idiopathic or associated with systemic diseases like HLA-B27.",
    symptoms: ["Eye pain", "Redness", "Light sensitivity", "Blurred vision", "Small pupil"],
    treatments: ["Steroid Eye Drops", "Cycloplegic Drops", "Treatment of Underlying Cause", "Monitor for Glaucoma"],
    seoTitle: "Anterior Uveitis Treatment Orange County | Iritis Care",
    seoDescription: "Anterior uveitis treatment in Orange County. Expert iritis and eye inflammation care. Call (949) 364-0008."
  },
  {
    name: "Posterior Uveitis",
    slug: "posterior-uveitis",
    category: "Inflammatory Disorder",
    description: "Posterior uveitis is inflammation of the choroid (choroiditis) and retina. Causes include infections (toxoplasmosis, CMV) and autoimmune diseases (sarcoidosis, Vogt-Koyanagi-Harada). Threatens vision.",
    symptoms: ["Blurred vision", "Floaters", "Vision loss", "May have minimal pain", "White blood cells in vitreous"],
    treatments: ["Systemic Steroids", "Immunosuppressive Therapy", "Treatment of Infection", "Anti-VEGF if Needed"],
    seoTitle: "Posterior Uveitis Treatment Orange County | Choroiditis Care",
    seoDescription: "Posterior uveitis treatment in Orange County. Expert choroiditis and retinitis care. Call (949) 364-0008."
  },
  {
    name: "Scleritis",
    slug: "scleritis",
    category: "Inflammatory Disorder",
    description: "Scleritis is severe painful inflammation of the sclera, often associated with systemic autoimmune diseases like rheumatoid arthritis. Deep boring pain worsens at night. Necrotizing scleritis can perforate the eye.",
    symptoms: ["Severe deep eye pain", "Redness", "Pain radiates to face", "Worsens at night", "Vision may decrease"],
    treatments: ["Systemic NSAIDs or Steroids", "Immunosuppressive Therapy", "Systemic Workup", "Treat Underlying Disease"],
    seoTitle: "Scleritis Treatment Orange County | Severe Eye Inflammation Care",
    seoDescription: "Scleritis treatment in Orange County. Managing severe eye wall inflammation. Call (949) 364-0008."
  },
  {
    name: "Episcleritis",
    slug: "episcleritis",
    category: "Inflammatory Disorder",
    description: "Episcleritis is inflammation of the episclera, the layer between conjunctiva and sclera. Causes bright red eye but milder pain than scleritis. Usually self-limited and benign.",
    symptoms: ["Bright red eye patch", "Mild discomfort", "Watering", "Light sensitivity", "Usually painless"],
    treatments: ["Artificial Tears", "NSAIDTopical Drops", "Cold Compresses", "Usually Resolves Spontaneously"],
    seoTitle: "Episcleritis Treatment Orange County | Red Eye Inflammation Care",
    seoDescription: "Episcleritis treatment in Orange County. Managing benign eye redness. Call (949) 364-0008."
  },
  {
    name: "Vogt-Koyanagi-Harada Disease",
    slug: "vogt-koyanagi-harada-disease",
    category: "Inflammatory Disorder",
    description: "VKH disease is a systemic autoimmune disorder affecting melanocytes, causing bilateral granulomatous panuveitis, hearing loss, vitiligo, and meningitis. Requires aggressive immunosuppression.",
    symptoms: ["Bilateral vision loss", "Headache", "Hearing changes", "Vitiligo develops later", "Retinal detachments"],
    treatments: ["High-Dose Systemic Steroids", "Immunosuppressive Agents", "Long-term Maintenance Therapy", "Monitor for Recurrence"],
    seoTitle: "VKH Disease Treatment Orange County | Vogt-Koyanagi-Harada Care",
    seoDescription: "VKH disease treatment in Orange County. Comprehensive autoimmune uveitis care. Call (949) 364-0008."
  },
  {
    name: "Behçet Disease Uveitis",
    slug: "behcet-disease-uveitis",
    category: "Inflammatory Disorder",
    description: "Behçet disease is a systemic vasculitis causing recurrent oral/genital ulcers and severe sight-threatening uveitis with retinal vasculitis. More common in Middle Eastern and Asian populations.",
    symptoms: ["Recurrent mouth/genital sores", "Eye pain and redness", "Severe vision loss", "Retinal vasculitis", "Hypopyon"],
    treatments: ["Systemic Immunosuppression", "Biologic Agents (Anti-TNF)", "Colchicine", "Treat Systemic Disease"],
    seoTitle: "Behçet Disease Eye Treatment Orange County | Behçet Uveitis Care",
    seoDescription: "Behçet disease uveitis in Orange County. Expert treatment for vasculitic eye disease. Call (949) 364-0008."
  },
  {
    name: "Sympathetic Ophthalmia",
    slug: "sympathetic-ophthalmia",
    category: "Inflammatory Disorder",
    description: "Sympathetic ophthalmia is rare bilateral granulomatous uveitis developing weeks to years after penetrating eye trauma or surgery. The uninjured eye becomes inflamed. Preventable by early enucleation of severely damaged eyes.",
    symptoms: ["Bilateral uveitis after trauma", "Onset weeks to years later", "Vision loss in both eyes", "Granulomatous inflammation"],
    treatments: ["High-Dose Steroids", "Immunosuppressive Therapy", "Early Enucleation of Blind Painful Eye", "Lifelong Treatment"],
    seoTitle: "Sympathetic Ophthalmia Treatment Orange County | Post-Trauma Uveitis",
    seoDescription: "Sympathetic ophthalmia care in Orange County. Preventing bilateral vision loss after trauma. Call (949) 364-0008."
  },
  {
    name: "Intermediate Uveitis",
    slug: "intermediate-uveitis",
    category: "Inflammatory Disorder",
    description: "Intermediate uveitis (pars planitis) is inflammation of the vitreous and peripheral retina. Causes floaters and blurred vision. Often idiopathic but can be associated with multiple sclerosis or sarcoidosis.",
    symptoms: ["Floaters", "Blurred vision", "Usually painless", "Minimal redness", "Snowball opacities in vitreous"],
    treatments: ["Observation for Mild Cases", "Periocular Steroid Injection", "Systemic Immunosuppression", "Vitrectomy if Severe"],
    seoTitle: "Intermediate Uveitis Treatment Orange County | Pars Planitis Care",
    seoDescription: "Intermediate uveitis treatment in Orange County. Expert pars planitis management. Call (949) 364-0008."
  },
  {
    name: "Multifocal Choroiditis",
    slug: "multifocal-choroiditis",
    category: "Inflammatory Disorder",
    description: "Multifocal choroiditis is idiopathic inflammatory disorder causing multiple choroidal lesions, primarily in myopic women. Can cause choroidal neovascularization and vision loss.",
    symptoms: ["Blurred vision", "Scotomas (blind spots)", "Metamorphopsia", "Floaters", "Multiple chorioretinal scars"],
    treatments: ["Steroids for Active Lesions", "Immunosuppression for Severe Cases", "Anti-VEGF for CNV", "Monitor for Recurrence"],
    seoTitle: "Multifocal Choroiditis Treatment Orange County | MFC Eye Care",
    seoDescription: "Multifocal choroiditis treatment in Orange County. Expert inflammatory eye disease care. Call (949) 364-0008."
  },
  {
    name: "Serpiginous Choroiditis",
    slug: "serpiginous-choroiditis",
    category: "Inflammatory Disorder",
    description: "Serpiginous choroiditis is progressive geographic choroidal inflammation starting at the optic nerve and spreading outward in serpiginous (snake-like) pattern. Causes vision loss when macula involved.",
    symptoms: ["Vision loss", "Scotomas", "Geographic areas of atrophy", "Peripapillary involvement", "Recurrent episodes"],
    treatments: ["Immunosuppressive Therapy", "Corticosteroids", "Anti-VEGF for CNV", "Long-term Monitoring"],
    seoTitle: "Serpiginous Choroiditis Treatment Orange County | Progressive Eye Inflammation",
    seoDescription: "Serpiginous choroiditis care in Orange County. Managing progressive choroidal disease. Call (949) 364-0008."
  },

  // Optic Nerve Disorders (10 conditions)
  {
    name: "Papilledema",
    slug: "papilledema",
    category: "Optic Nerve Disorder",
    description: "Papilledema is optic disc swelling from increased intracranial pressure (brain tumor, hydrocephalus, idiopathic intracranial hypertension). Medical emergency requiring neuroimaging and treatment of cause.",
    symptoms: ["Transient vision loss", "Headaches", "Nausea", "Swollen optic nerves", "May be asymptomatic initially"],
    treatments: ["Neuroimaging (MRI/CT)", "Lumbar Puncture", "Treat Underlying Cause", "Weight Loss for IIH"],
    seoTitle: "Papilledema Treatment Orange County | Optic Nerve Swelling Emergency",
    seoDescription: "Papilledema emergency care in Orange County. Expert treatment for optic nerve swelling. Call (949) 364-0008."
  },
  {
    name: "Anterior Ischemic Optic Neuropathy",
    slug: "anterior-ischemic-optic-neuropathy",
    category: "Optic Nerve Disorder",
    description: "AION is sudden optic nerve infarction from inadequate blood flow. Arteritic type (from GCA) is emergency requiring steroids. Non-arteritic type (from small vessel disease) has no proven treatment.",
    symptoms: ["Sudden painless vision loss", "Altitudinal visual field defect", "Swollen optic disc", "Afferent pupillary defect"],
    treatments: ["Rule Out Giant Cell Arteritis", "Aspirin for Non-Arteritic Type", "Risk Factor Modification", "No Proven Treatment"],
    seoTitle: "AION Treatment Orange County | Optic Nerve Stroke Care",
    seoDescription: "AION treatment in Orange County. Managing optic nerve infarction. Call (949) 364-0008."
  },
  {
    name: "Optic Disc Drusen",
    slug: "optic-disc-drusen",
    category: "Optic Nerve Disorder",
    description: "Optic disc drusen are calcified deposits in the optic nerve head, often familial. Can mimic papilledema but no increased intracranial pressure. May cause gradual visual field loss.",
    symptoms: ["Often asymptomatic", "Gradual visual field loss", "Visible or buried drusen", "May have transient vision loss"],
    treatments: ["Observation", "Visual Field Monitoring", "B-scan Ultrasound or OCT", "No Treatment Available"],
    seoTitle: "Optic Disc Drusen Treatment Orange County | Optic Nerve Deposits",
    seoDescription: "Optic disc drusen management in Orange County. Monitoring optic nerve changes. Call (949) 364-0008."
  },
  {
    name: "Leber Hereditary Optic Neuropathy",
    slug: "leber-hereditary-optic-neuropathy",
    category: "Optic Nerve Disorder",
    description: "LHON is mitochondrial genetic disease causing bilateral sequential vision loss in young adults, especially males. Central vision loss is usually permanent. Some recovery possible, especially with treatment.",
    symptoms: ["Painless central vision loss", "Usually young adult males", "Sequential bilateral involvement", "Red-green color defect"],
    treatments: ["Idebenone (May Help)", "Avoid Smoking and Alcohol", "Genetic Counseling", "Low Vision Services"],
    seoTitle: "LHON Treatment Orange County | Leber Hereditary Optic Neuropathy Care",
    seoDescription: "LHON treatment in Orange County. Managing hereditary optic nerve disease. Call (949) 364-0008."
  },
  {
    name: "Toxic Optic Neuropathy",
    slug: "toxic-optic-neuropathy",
    category: "Optic Nerve Disorder",
    description: "Toxic optic neuropathy is optic nerve damage from medications (ethambutol, methanol, amiodarone) or toxins. Causes bilateral vision loss. Treatment is stopping the offending agent.",
    symptoms: ["Bilateral vision loss", "Central scotomas", "Color vision loss", "Usually painless", "Medication history"],
    treatments: ["Discontinue Offending Agent", "Vitamin B12 for Some Types", "Supportive Care", "Monitor for Recovery"],
    seoTitle: "Toxic Optic Neuropathy Treatment Orange County | Medication Eye Damage",
    seoDescription: "Toxic optic neuropathy care in Orange County. Managing medication-induced vision loss. Call (949) 364-0008."
  },
  {
    name: "Optic Nerve Hypoplasia",
    slug: "optic-nerve-hypoplasia",
    category: "Optic Nerve Disorder",
    description: "Optic nerve hypoplasia is underdeveloped optic nerve from birth, causing poor vision. May be part of septo-optic dysplasia with pituitary and brain abnormalities.",
    symptoms: ["Poor vision from birth", "Nystagmus", "Small optic nerve on exam", "Possible hormone deficiencies"],
    treatments: ["Low Vision Services", "Endocrine Evaluation", "Educational Support", "Treatment of Associated Conditions"],
    seoTitle: "Optic Nerve Hypoplasia Treatment Orange County | ONH Care",
    seoDescription: "Optic nerve hypoplasia management in Orange County. Comprehensive care for underdeveloped optic nerve. Call (949) 364-0008."
  },
  {
    name: "Optic Neuritis",
    slug: "optic-neuritis-general",
    category: "Optic Nerve Disorder",
    description: "Optic neuritis is inflammation of the optic nerve causing sudden vision loss, pain with eye movement, and color vision loss. Often first sign of multiple sclerosis but can be isolated.",
    symptoms: ["Sudden vision loss", "Pain with eye movement", "Color vision loss", "Central scotoma", "Usually one eye"],
    treatments: ["Intravenous Methylprednisolone", "MRI Brain Imaging", "Neurological Evaluation", "MS Workup"],
    seoTitle: "Optic Neuritis Treatment Orange County | Eye Nerve Inflammation Care",
    seoDescription: "Optic neuritis treatment in Orange County. Expert care for optic nerve inflammation. Call (949) 364-0008."
  },
  {
    name: "Compressive Optic Neuropathy",
    slug: "compressive-optic-neuropathy",
    category: "Optic Nerve Disorder",
    description: "Compressive optic neuropathy is vision loss from mass lesion (tumor, aneurysm, thyroid eye disease) pressing on optic nerve. Requires neuroimaging and treatment of underlying cause.",
    symptoms: ["Gradual vision loss", "Visual field defect", "Color vision loss", "Possible proptosis", "Optic atrophy"],
    treatments: ["Neuroimaging (MRI/CT)", "Treat Underlying Cause", "Surgery or Radiation", "Monitor Vision"],
    seoTitle: "Compressive Optic Neuropathy Treatment Orange County | Optic Nerve Compression",
    seoDescription: "Compressive optic neuropathy care in Orange County. Treating optic nerve compression. Call (949) 364-0008."
  },
  {
    name: "Optic Nerve Glioma",
    slug: "optic-nerve-glioma",
    category: "Optic Nerve Disorder",
    description: "Optic nerve glioma is a slow-growing tumor of the optic nerve, usually in children. Associated with neurofibromatosis type 1. Causes proptosis and vision loss. Treatment depends on growth and vision.",
    symptoms: ["Gradual vision loss", "Proptosis", "Optic nerve enlargement", "Often in children", "Associated with NF1"],
    treatments: ["Observation if Stable", "Chemotherapy for Progression", "Radiation (Rarely)", "Surgery if Compressive"],
    seoTitle: "Optic Nerve Glioma Treatment Orange County | Optic Pathway Tumor Care",
    seoDescription: "Optic nerve glioma treatment in Orange County. Expert pediatric optic nerve tumor care. Call (949) 364-0008."
  },
  {
    name: "Optic Nerve Coloboma",
    slug: "optic-nerve-coloboma",
    category: "Optic Nerve Disorder",
    description: "Optic nerve coloboma is congenital excavation of optic disc from incomplete closure of embryonic fissure. Causes large disc cupping that can mimic glaucoma. Vision ranges from normal to severely reduced.",
    symptoms: ["Large optic disc excavation", "Variable vision", "Visual field defects", "Present from birth"],
    treatments: ["Glasses if Refractive Error", "Monitor for Complications", "Low Vision Services if Needed", "Differentiate from Glaucoma"],
    seoTitle: "Optic Nerve Coloboma Care Orange County | Congenital Optic Disc Defect",
    seoDescription: "Optic nerve coloboma management in Orange County. Expert congenital optic nerve care. Call (949) 364-0008."
  },

  // Additional Common Conditions (15 conditions)
  {
    name: "Pinguecula",
    slug: "pinguecula",
    category: "Conjunctival Condition",
    description: "Pinguecula is a yellowish, slightly raised growth on the conjunctiva, usually on the nasal side. Caused by UV exposure and aging. Benign and common. Rarely requires treatment unless inflamed.",
    symptoms: ["Yellow bump on white of eye", "Usually asymptomatic", "May become red if inflamed", "Dry eye sensation"],
    treatments: ["Observation", "Artificial Tears", "Steroid Drops if Inflamed", "Surgical Removal if Problematic"],
    seoTitle: "Pinguecula Treatment Orange County | Yellow Eye Bump Care",
    seoDescription: "Pinguecula treatment in Orange County. Managing benign conjunctival growths. Call (949) 364-0008."
  },
  {
    name: "Pterygium",
    slug: "pterygium",
    category: "Conjunctival Condition",
    description: "Pterygium is a fleshy, triangular growth extending from the conjunctiva onto the cornea, typically from nasal side. Caused by UV exposure. Can cause astigmatism and rarely vision loss if grows over pupil.",
    symptoms: ["Fleshy growth on cornea", "Redness", "Irritation", "May cause astigmatism", "Vision loss if advanced"],
    treatments: ["UV Protection", "Artificial Tears", "Surgical Excision with Graft", "Recurrence Possible"],
    seoTitle: "Pterygium Surgery Orange County | Surfer's Eye Treatment",
    seoDescription: "Pterygium surgery in Orange County. Expert removal of surfer's eye. Call (949) 364-0008."
  },
  {
    name: "Subconjunctival Hemorrhage",
    slug: "subconjunctival-hemorrhage",
    category: "Conjunctival Condition",
    description: "Subconjunctival hemorrhage is bleeding under the conjunctiva causing bright red patch on white of eye. Usually spontaneous from coughing, straining, or blood thinners. Benign and resolves in 1-2 weeks.",
    symptoms: ["Bright red patch on eye", "Painless", "No vision changes", "May follow trauma or straining"],
    treatments: ["Observation", "Artificial Tears for Comfort", "Check Blood Pressure", "Resolves Spontaneously"],
    seoTitle: "Subconjunctival Hemorrhage Treatment Orange County | Eye Bleeding Care",
    seoDescription: "Subconjunctival hemorrhage care in Orange County. Expert treatment for eye bleeding. Call (949) 364-0008."
  },
  {
    name: "Corneal Arcus",
    slug: "corneal-arcus",
    category: "Corneal Condition",
    description: "Corneal arcus (arcus senilis) is a white or gray ring around the cornea from lipid deposits. Common in elderly and benign. In young people, may indicate high cholesterol requiring medical evaluation.",
    symptoms: ["White ring around cornea", "Usually asymptomatic", "Bilateral", "No vision effect"],
    treatments: ["Observation", "Cholesterol Testing if Young", "Treat Hyperlipidemia if Present", "No Eye Treatment Needed"],
    seoTitle: "Corneal Arcus Evaluation Orange County | Arcus Senilis Care",
    seoDescription: "Corneal arcus evaluation in Orange County. Assessing cholesterol ring around cornea. Call (949) 364-0008."
  },
  {
    name: "Corneal Edema",
    slug: "corneal-edema",
    category: "Corneal Condition",
    description: "Corneal edema is swelling of the cornea from endothelial dysfunction (Fuchs, after cataract surgery, trauma). Causes cloudy vision and halos around lights. Severe cases may need transplant.",
    symptoms: ["Blurred vision", "Halos around lights", "Worse in morning", "Cloudy cornea", "Pain if severe"],
    treatments: ["Hypertonic Saline Drops", "Hair Dryer on Cool Setting", "Endothelial Keratoplasty", "Full Thickness Transplant"],
    seoTitle: "Corneal Edema Treatment Orange County | Corneal Swelling Care",
    seoDescription: "Corneal edema treatment in Orange County. Managing corneal swelling and transplant. Call (949) 364-0008."
  },
  {
    name: "Photophobia",
    slug: "photophobia",
    category: "Symptom Disorder",
    description: "Photophobia is abnormal light sensitivity, a symptom of many conditions (uveitis, corneal disease, migraine, meningitis). Not a disease itself but warrants eye exam to find cause.",
    symptoms: ["Discomfort in bright light", "Squinting", "Tearing", "Eye pain", "May have underlying disease"],
    treatments: ["Treat Underlying Cause", "Tinted Glasses", "Avoid Bright Lights", "Underlying Disease Management"],
    seoTitle: "Photophobia Treatment Orange County | Light Sensitivity Eye Care",
    seoDescription: "Photophobia evaluation in Orange County. Finding cause of light sensitivity. Call (949) 364-0008."
  },
  {
    name: "Visual Snow Syndrome",
    slug: "visual-snow-syndrome",
    category: "Visual Processing Disorder",
    description: "Visual snow syndrome is seeing static or snow across entire visual field, like old TV. Neurological condition, not eye disease. Associated with migraine, tinnitus, and afterimages. No proven treatment.",
    symptoms: ["Constant visual static", "Afterimages", "Light sensitivity", "Night vision problems", "Tinnitus often present"],
    treatments: ["Symptom Management", "Tinted Lenses", "Migraine Treatment", "Neurological Evaluation"],
    seoTitle: "Visual Snow Syndrome Treatment Orange County | Neurological Vision Care",
    seoDescription: "Visual snow syndrome evaluation in Orange County. Neurological vision disorder care. Call (949) 364-0008."
  },
  {
    name: "Eye Floaters",
    slug: "eye-floaters",
    category: "Vitreous Condition",
    description: "Eye floaters are tiny spots or strands floating in vision from vitreous gel changes. Common with aging and myopia. Usually benign but sudden onset with flashes warrants urgent exam for retinal tear.",
    symptoms: ["Spots or strands in vision", "More visible in bright light", "Move with eye movement", "May have flashes"],
    treatments: ["Observation for Benign Cases", "Dilated Eye Exam", "YAG Laser Vitreolysis", "Vitrectomy for Severe Cases"],
    seoTitle: "Eye Floaters Treatment Orange County | Vitreous Floaters Care",
    seoDescription: "Eye floaters evaluation in Orange County. Expert vitreous floater management. Call (949) 364-0008."
  },
  {
    name: "Recurrent Corneal Erosion",
    slug: "recurrent-corneal-erosion",
    category: "Corneal Condition",
    description: "Recurrent corneal erosion is repeated spontaneous breakdown of corneal epithelium, often after previous injury. Causes sudden severe pain, especially upon waking. Underlying basement membrane abnormality.",
    symptoms: ["Sudden severe eye pain", "Often upon waking", "History of corneal injury", "Tearing and redness", "Recurrent episodes"],
    treatments: ["Lubricating Ointment at Bedtime", "Bandage Contact Lens", "Anterior Stromal Puncture", "Phototherapeutic Keratectomy"],
    seoTitle: "Recurrent Corneal Erosion Treatment Orange County | RCE Care",
    seoDescription: "Recurrent corneal erosion treatment in Orange County. Preventing painful erosion episodes. Call (949) 364-0008."
  },
  {
    name: "Myopia Control",
    slug: "myopia-control",
    category: "Refractive Management",
    description: "Myopia control aims to slow childhood myopia progression using low-dose atropine, orthokeratology, or multifocal contact lenses. Important to reduce high myopia complications like retinal detachment.",
    symptoms: ["Progressive nearsightedness", "Increasing glasses prescription", "Usually in school-age children"],
    treatments: ["Low-Dose Atropine Drops", "Orthokeratology Lenses", "Multifocal Contact Lenses", "Time Outdoors"],
    seoTitle: "Myopia Control Treatment Orange County | Childhood Nearsightedness Management",
    seoDescription: "Myopia control in Orange County. Slowing childhood nearsightedness progression. Call (949) 364-0008."
  },
  {
    name: "Computer Vision Syndrome",
    slug: "computer-vision-syndrome",
    category: "Digital Eye Strain",
    description: "Computer vision syndrome is eye strain from prolonged digital device use. Causes tired eyes, headaches, blurred vision, and dry eyes. Prevented by 20-20-20 rule and proper workstation ergonomics.",
    symptoms: ["Eye fatigue", "Headaches", "Blurred vision", "Dry eyes", "Neck and shoulder pain"],
    treatments: ["20-20-20 Rule", "Proper Screen Position", "Blue Light Glasses", "Artificial Tears", "Regular Breaks"],
    seoTitle: "Computer Vision Syndrome Treatment Orange County | Digital Eye Strain Care",
    seoDescription: "Computer vision syndrome treatment in Orange County. Relief from digital eye strain. Call (949) 364-0008."
  },
  {
    name: "Eyestrain",
    slug: "eyestrain",
    category: "Eye Fatigue",
    description: "Eyestrain (asthenopia) is tired, uncomfortable eyes from prolonged visual tasks like reading, computer use, or driving. Not dangerous but annoying. Relieved by rest and proper vision correction.",
    symptoms: ["Tired eyes", "Difficulty focusing", "Headache", "Burning sensation", "Increased blinking"],
    treatments: ["Rest Breaks", "Proper Lighting", "Update Glasses Prescription", "Artificial Tears", "Reduce Screen Time"],
    seoTitle: "Eyestrain Treatment Orange County | Eye Fatigue Relief",
    seoDescription: "Eyestrain treatment in Orange County. Relief from tired, overworked eyes. Call (949) 364-0008."
  },
  {
    name: "Fuchs Endothelial Dystrophy",
    slug: "fuchs-endothelial-dystrophy",
    category: "Corneal Dystrophy",
    description: "Fuchs dystrophy is progressive corneal endothelial cell loss causing corneal edema. Typically affects women over 40. Vision worse in morning. Advanced cases need endothelial keratoplasty (DSEK/DMEK).",
    symptoms: ["Blurred vision worse in morning", "Halos around lights", "Light sensitivity", "Progresses with age", "Guttae on exam"],
    treatments: ["Hypertonic Saline Drops", "Hair Dryer Technique", "DSEK or DMEK Surgery", "Full Thickness Transplant"],
    seoTitle: "Fuchs Dystrophy Treatment Orange County | Corneal Endothelial Transplant",
    seoDescription: "Fuchs dystrophy treatment in Orange County. Expert DSEK/DMEK corneal transplant. Call (949) 364-0008."
  },
  {
    name: "Color Vision Deficiency",
    slug: "color-vision-deficiency",
    category: "Vision Disorder",
    description: "Color vision deficiency (color blindness) is inherited inability to distinguish certain colors, usually red-green. Affects mostly males. No cure but special lenses may help contrast.",
    symptoms: ["Difficulty distinguishing colors", "Usually red-green", "Present from birth", "Mostly males affected"],
    treatments: ["Color Vision Testing", "Special Tinted Lenses", "Occupational Counseling", "No Cure Available"],
    seoTitle: "Color Blindness Testing Orange County | Color Vision Deficiency Care",
    seoDescription: "Color blindness testing in Orange County. Color vision deficiency evaluation. Call (949) 364-0008."
  },
  {
    name: "Amblyopia",
    slug: "amblyopia-lazy-eye",
    category: "Pediatric Vision",
    description: "Amblyopia (lazy eye) is reduced vision in one eye from abnormal visual development. Causes include strabismus, high refractive error, or obstruction. Must be treated before age 7-9 for best results.",
    symptoms: ["Poor vision in one eye", "May have eye turn", "Fails vision screening", "Squinting or closing one eye"],
    treatments: ["Glasses for Refractive Error", "Patching Good Eye", "Atropine Drops", "Treat Underlying Cause"],
    seoTitle: "Amblyopia Treatment Orange County | Lazy Eye Therapy",
    seoDescription: "Amblyopia treatment in Orange County. Expert lazy eye therapy for children. Call (949) 364-0008."
  }
];

export function getConditionBySlug(slug: string): Condition | undefined {
  return conditions.find(c => c.slug === slug);
}

export function getConditionsByCategory(category: string): Condition[] {
  return conditions.filter(c => c.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(conditions.map(c => c.category)));
}
