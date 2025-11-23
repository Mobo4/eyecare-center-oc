export interface Condition {
  name: string;
  slug: string;
  category: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  seoTitle: string;
  seoDescription: string;
  // Local SEO enhancement fields
  localKeywords?: string[];  // City-specific search terms
  faqs?: Array<{ question: string; answer: string }>;  // Local FAQ schema
  relatedServices?: string[];  // Related services for cross-linking
}

export const conditions: Condition[] = [
  // Corneal Conditions
  {
    name: "Keratoconus",
    slug: "keratoconus",
    category: "Corneal Disease",
    description: "Keratoconus is a progressive eye condition where the cornea thins and gradually bulges outward into a cone shape. This abnormal shape deflects light as it enters the eye, causing distorted vision. Expert treatment including corneal cross-linking, specialty contact lenses, and advanced surgical options.",
    symptoms: ["Blurred or distorted vision", "Increased sensitivity to light", "Frequent prescription changes", "Difficulty seeing at night"],
    treatments: ["Corneal Cross-Linking (CXL)", "Scleral Contact Lenses", "Intacs Corneal Implants", "Corneal Transplant"],
    seoTitle: "Keratoconus Treatment Orange County | Corneal Cross-Linking Specialist",
    seoDescription: "Expert keratoconus treatment in Orange County. Corneal cross-linking, scleral lenses, and advanced care for progressive corneal disease. Call (949) 364-0008.",
    localKeywords: ["keratoconus specialist", "corneal cross-linking", "scleral lenses", "keratoconus treatment near me", "corneal disease doctor"],
    faqs: [
      { question: "How is keratoconus diagnosed?", answer: "Keratoconus is diagnosed through comprehensive eye examination including corneal topography, which maps the surface of your cornea to detect irregular shape and thinning." },
      { question: "Can keratoconus be treated without surgery?", answer: "Yes, many keratoconus patients can be successfully treated with specialty contact lenses, particularly scleral lenses, which vault over the irregular cornea to provide clear vision." },
      { question: "What is corneal cross-linking?", answer: "Corneal cross-linking (CXL) is a minimally invasive procedure that strengthens the cornea to slow or stop the progression of keratoconus." }
    ],
    relatedServices: ["Scleral Lens Fitting", "Comprehensive Eye Exam", "Corneal Disease Management"]
  },
  {
    name: "Dry Eye Syndrome",
    slug: "dry-eye",
    category: "Chronic Condition",
    description: "Dry eye syndrome occurs when your tears aren't able to provide adequate lubrication for your eyes. This can happen due to reduced tear production or increased tear evaporation. Comprehensive treatment options including prescription medications, punctal plugs, and advanced therapies.",
    symptoms: ["Stinging or burning sensation", "Redness", "Light sensitivity", "Blurred vision"],
    treatments: ["Prescription Eye Drops", "Punctal Plugs", "LipiFlow Thermal Pulsation", "IPL Therapy"],
    seoTitle: "Dry Eye Treatment Orange County | Chronic Dry Eye Specialist",
    seoDescription: "Advanced dry eye treatment in Orange County. LipiFlow, IPL therapy, and prescription treatments for chronic dry eye syndrome. Call (949) 364-0008.",
    localKeywords: ["dry eye specialist", "dry eye treatment", "chronic dry eye", "eye drops for dry eyes", "dry eye syndrome doctor"],
    faqs: [
      { question: "What causes dry eye syndrome?", answer: "Dry eye syndrome can be caused by decreased tear production, increased tear evaporation, environmental factors, medications, aging, or underlying health conditions." },
      { question: "How long does dry eye treatment take?", answer: "Treatment duration varies by individual, but many patients experience relief within a few weeks of starting treatment. Chronic dry eye may require ongoing management." },
      { question: "Is dry eye permanent?", answer: "While some forms of dry eye are chronic and require ongoing management, many cases can be successfully treated and symptoms significantly reduced with proper care." }
    ],
    relatedServices: ["Comprehensive Eye Exam", "Contact Lens Evaluation"]
  },
  {
    name: "Cataracts",
    slug: "cataracts",
    category: "Vision Impairment",
    description: "A cataract is a clouding of the normally clear lens of your eye. Cataracts develop slowly and eventually interfere with your vision. Advanced cataract surgery with premium lens implants available.",
    symptoms: ["Clouded or blurred vision", "Difficulty seeing at night", "Sensitivity to light", "Fading of colors"],
    treatments: ["Cataract Surgery", "Premium IOL Implants", "Laser-Assisted Surgery", "Multifocal Lenses"],
    seoTitle: "Cataract Surgery Orange County | Advanced Lens Implants",
    seoDescription: "Expert cataract surgery in Orange County. Premium IOL implants, laser-assisted procedures, and advanced vision correction. Call (949) 364-0008.",
    localKeywords: ["cataract surgery", "cataract specialist", "IOL implants", "cataract doctor", "cataract evaluation"],
    faqs: [
      { question: "When should I have cataract surgery?", answer: "Cataract surgery is typically recommended when cataracts begin to interfere with daily activities like reading, driving, or other normal tasks." },
      { question: "Is cataract surgery painful?", answer: "No, cataract surgery is performed under local anesthesia and most patients experience little to no discomfort during or after the procedure." },
      { question: "How long is cataract surgery recovery?", answer: "Most patients recover quickly, with improved vision within a few days. Full recovery typically takes 4-6 weeks." }
    ],
    relatedServices: ["Cataract Surgery", "Comprehensive Eye Exam"]
  },
  {
    name: "Glaucoma",
    slug: "glaucoma",
    category: "Vision Threat",
    description: "Glaucoma is a group of eye conditions that damage the optic nerve, often due to abnormally high pressure in your eye. Early detection and treatment are crucial to prevent vision loss.",
    symptoms: ["Gradual loss of peripheral vision", "Tunnel vision", "Eye pain", "Halos around lights"],
    treatments: ["Prescription Eye Drops", "Laser Trabeculoplasty", "Surgical Options", "Regular Monitoring"],
    seoTitle: "Glaucoma Treatment Orange County | Eye Pressure Management",
    seoDescription: "Comprehensive glaucoma treatment in Orange County. Early detection, pressure management, and vision preservation. Call (949) 364-0008."
  },
  {
    name: "Macular Degeneration",
    slug: "macular-degeneration",
    category: "Retinal Disease",
    description: "Age-related macular degeneration (AMD) is a common condition that affects the central vision. It occurs when the macula, the part of the retina responsible for sharp central vision, deteriorates.",
    symptoms: ["Blurred central vision", "Dark spots in vision", "Difficulty recognizing faces", "Straight lines appear wavy"],
    treatments: ["Anti-VEGF Injections", "Photodynamic Therapy", "Low Vision Aids", "Nutritional Supplements"],
    seoTitle: "Macular Degeneration Treatment Orange County | AMD Specialist",
    seoDescription: "Expert macular degeneration treatment in Orange County. Anti-VEGF therapy, low vision aids, and AMD management. Call (949) 364-0008."
  },
  {
    name: "Diabetic Retinopathy",
    slug: "diabetic-retinopathy",
    category: "Retinal Disease",
    description: "Diabetic retinopathy is a diabetes complication that affects the eyes. It's caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina).",
    symptoms: ["Floaters", "Blurred vision", "Dark areas in vision", "Difficulty seeing colors"],
    treatments: ["Laser Treatment", "Anti-VEGF Injections", "Vitrectomy Surgery", "Blood Sugar Management"],
    seoTitle: "Diabetic Retinopathy Treatment Orange County | Diabetes Eye Care",
    seoDescription: "Specialized diabetic retinopathy treatment in Orange County. Laser therapy, injections, and comprehensive diabetes eye care. Call (949) 364-0008."
  },
  {
    name: "Astigmatism",
    slug: "astigmatism",
    category: "Refractive Error",
    description: "Astigmatism is a common vision condition caused by an error in the shape of the cornea. This can cause images to look blurry and stretched out.",
    symptoms: ["Blurred or distorted vision", "Eye strain", "Headaches", "Difficulty seeing at night"],
    treatments: ["Prescription Glasses", "Contact Lenses", "LASIK Surgery", "Toric IOLs"],
    seoTitle: "Astigmatism Treatment Orange County | Vision Correction",
    seoDescription: "Expert astigmatism treatment in Orange County. Glasses, contacts, LASIK, and advanced vision correction options. Call (949) 364-0008."
  },
  {
    name: "Myopia (Nearsightedness)",
    slug: "myopia",
    category: "Refractive Error",
    description: "Myopia (nearsightedness) is a common vision condition in which you can see objects near to you clearly, but objects farther away are blurry. Myopia control options available for children.",
    symptoms: ["Difficulty seeing distant objects", "Squinting", "Eye strain", "Headaches"],
    treatments: ["Prescription Glasses", "Contact Lenses", "Orthokeratology", "Myopia Control Therapy"],
    seoTitle: "Myopia Treatment Orange County | Nearsightedness Control",
    seoDescription: "Comprehensive myopia treatment in Orange County. Myopia control for children, ortho-k, and vision correction. Call (949) 364-0008."
  },
  {
    name: "Hyperopia (Farsightedness)",
    slug: "hyperopia",
    category: "Refractive Error",
    description: "Hyperopia (farsightedness) is a common vision condition in which you can see distant objects clearly, but objects nearby may be blurry.",
    symptoms: ["Blurred vision of close objects", "Eye strain", "Headaches", "Difficulty focusing"],
    treatments: ["Prescription Glasses", "Contact Lenses", "LASIK Surgery", "Refractive Lens Exchange"],
    seoTitle: "Hyperopia Treatment Orange County | Farsightedness Correction",
    seoDescription: "Expert hyperopia treatment in Orange County. Glasses, contacts, LASIK, and vision correction for farsightedness. Call (949) 364-0008."
  },
  {
    name: "Presbyopia",
    slug: "presbyopia",
    category: "Age-Related Condition",
    description: "Presbyopia is the gradual loss of your eyes' ability to focus on nearby objects. It's a natural part of the aging process that typically becomes noticeable in your early to mid-40s.",
    symptoms: ["Difficulty reading small print", "Need to hold reading material farther away", "Eye strain", "Headaches after reading"],
    treatments: ["Reading Glasses", "Progressive Lenses", "Multifocal Contact Lenses", "Monovision LASIK"],
    seoTitle: "Presbyopia Treatment Orange County | Reading Vision Solutions",
    seoDescription: "Presbyopia treatment options in Orange County. Reading glasses, progressive lenses, and advanced solutions. Call (949) 364-0008."
  },
  // Additional conditions (shortened for brevity - you can expand this)
  {
    name: "Blepharitis",
    slug: "blepharitis",
    category: "Eyelid Condition",
    description: "Blepharitis is inflammation of the eyelids causing red, irritated, itchy eyelids and the formation of dandruff-like scales on eyelashes.",
    symptoms: ["Red, swollen eyelids", "Itchy eyes", "Crusting around eyelashes", "Watery eyes"],
    treatments: ["Eyelid Hygiene", "Warm Compresses", "Antibiotic Ointments", "Omega-3 Supplements"],
    seoTitle: "Blepharitis Treatment Orange County | Eyelid Inflammation Care",
    seoDescription: "Effective blepharitis treatment in Orange County. Eyelid hygiene, medications, and inflammation management. Call (949) 364-0008."
  },
  {
    name: "Conjunctivitis (Pink Eye)",
    slug: "conjunctivitis",
    category: "Eye Infection",
    description: "Conjunctivitis, commonly known as pink eye, is an inflammation of the conjunctiva causing redness, itching, and discharge.",
    symptoms: ["Redness in one or both eyes", "Itchiness", "Discharge that forms a crust", "Tearing"],
    treatments: ["Antibiotic Eye Drops", "Antiviral Medications", "Cold Compresses", "Artificial Tears"],
    seoTitle: "Pink Eye Treatment Orange County | Conjunctivitis Care",
    seoDescription: "Fast pink eye treatment in Orange County. Antibiotic drops, antiviral therapy, and quick relief. Call (949) 364-0008."
  },
  {
    name: "Stye (Hordeolum)",
    slug: "stye",
    category: "Eyelid Condition",
    description: "A stye is a red, painful lump near the edge of your eyelid that may look like a boil or a pimple.",
    symptoms: ["Red, painful bump on eyelid", "Swelling", "Tenderness", "Watery eye"],
    treatments: ["Warm Compresses", "Antibiotic Ointments", "Steroid Injections", "Surgical Drainage"],
    seoTitle: "Stye Treatment Orange County | Eyelid Infection Care",
    seoDescription: "Quick stye treatment in Orange County. Warm compresses, antibiotics, and professional care. Call (949) 364-0008."
  },
  {
    name: "Chalazion",
    slug: "chalazion",
    category: "Eyelid Condition",
    description: "A chalazion is a small, usually painless lump or swelling that appears on your eyelid caused by a blocked oil gland.",
    symptoms: ["Painless bump on eyelid", "Swelling", "Mild irritation", "Blurred vision if large"],
    treatments: ["Warm Compresses", "Eyelid Massage", "Steroid Injections", "Surgical Removal"],
    seoTitle: "Chalazion Treatment Orange County | Eyelid Bump Removal",
    seoDescription: "Expert chalazion treatment in Orange County. Non-surgical and surgical options available. Call (949) 364-0008."
  },
  {
    name: "Computer Vision Syndrome",
    slug: "computer-vision-syndrome",
    category: "Digital Eye Strain",
    description: "Computer vision syndrome is a group of eye and vision problems that result from prolonged computer, tablet, and cell phone use.",
    symptoms: ["Eye strain", "Headaches", "Blurred vision", "Dry eyes", "Neck and shoulder pain"],
    treatments: ["Computer Glasses", "Blue Light Filters", "Vision Therapy", "Ergonomic Adjustments"],
    seoTitle: "Computer Vision Syndrome Treatment Orange County | Digital Eye Strain",
    seoDescription: "Relief for computer vision syndrome in Orange County. Blue light protection, specialized glasses, and eye strain solutions. Call (949) 364-0008."
  },
  // Continue adding more conditions to reach 191...
];

import { allConditions } from './conditions-search';

export function getConditionBySlug(slug: string): Condition | undefined {
  return conditions.find(c => c.slug === slug);
}

export function getConditionsByCategory(category: string): Condition[] {
  return conditions.filter(c => c.category === category);
}

/**
 * Retrieves a condition by slug, enhancing it with template data if it only exists in the search list.
 * This allows us to generate 300+ condition pages without manually writing content for each one.
 */
export function getEnhancedConditionBySlug(slug: string): Condition | undefined {
  // 1. Try to find in detailed conditions first
  const detailedCondition = conditions.find(c => c.slug === slug);
  if (detailedCondition) {
    return detailedCondition;
  }

  // 2. If not found, look in the search conditions (comprehensive list)
  const searchCondition = allConditions.find(c => c.slug === slug);

  if (!searchCondition) {
    return undefined;
  }

  // 3. Hydrate the simple search condition into a full Condition object using templates
  return {
    name: searchCondition.name,
    slug: searchCondition.slug,
    category: searchCondition.category,
    description: `Expert diagnosis and treatment for ${searchCondition.name} is available at EyeCare Center of Orange County. ${searchCondition.name} is a condition classified under ${searchCondition.category}. Our experienced team provides comprehensive care to manage symptoms and protect your vision.`,
    symptoms: searchCondition.symptoms || [
      "Changes in vision",
      "Eye discomfort or irritation",
      "Redness or inflammation",
      "Sensitivity to light"
    ],
    treatments: [
      "Comprehensive Eye Examination",
      "Personalized Treatment Plan",
      "Prescription Medication (if applicable)",
      "Regular Monitoring and Follow-up"
    ],
    seoTitle: `${searchCondition.name} Treatment Orange County | ${searchCondition.category} Specialist`,
    seoDescription: `Expert ${searchCondition.name} treatment in Orange County. Specialized care for ${searchCondition.category.toLowerCase()} and comprehensive eye exams. Call (949) 364-0008.`,
    localKeywords: [
      `${searchCondition.name.toLowerCase()} specialist`,
      `${searchCondition.name.toLowerCase()} doctor`,
      `${searchCondition.name.toLowerCase()} treatment`,
      "eye doctor near me",
      "ophthalmologist orange county"
    ],
    faqs: [
      {
        question: `What is ${searchCondition.name}?`,
        answer: `${searchCondition.name} is a condition affecting the eyes, categorized as ${searchCondition.category}. Early diagnosis and treatment are important for maintaining optimal eye health.`
      },
      {
        question: `How is ${searchCondition.name} treated?`,
        answer: `Treatment for ${searchCondition.name} depends on the severity and specific symptoms. We offer comprehensive evaluations to determine the best course of action for your specific needs.`
      },
      {
        question: `Do I need to see a specialist for ${searchCondition.name}?`,
        answer: `Yes, seeing an eye care professional is recommended if you suspect you have ${searchCondition.name} or are experiencing symptoms affecting your vision.`
      }
    ],
    relatedServices: ["Comprehensive Eye Exam", "Diagnostic Testing"]
  };
}
