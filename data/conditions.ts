import { allConditions } from './conditions-search';

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
  recoveryTimeline?: string; // Description of recovery process
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
    seoDescription: "Comprehensive glaucoma treatment in Orange County. Early detection, pressure management, and vision preservation. Call (949) 364-0008.",
    localKeywords: ["glaucoma specialist", "eye pressure treatment", "glaucoma doctor near me", "optic nerve damage", "glaucoma screening"],
    faqs: [
      { question: "Can glaucoma be cured?", answer: "Glaucoma cannot be cured, but it can be controlled. Early detection and treatment can prevent further vision loss and preserve your remaining sight." },
      { question: "How often should I be screened for glaucoma?", answer: "Adults over 40 should have a comprehensive eye exam every 2-4 years. Those over 60 or with risk factors should be screened annually." },
      { question: "Does glaucoma run in families?", answer: "Yes, glaucoma has a strong genetic component. If you have a family history of glaucoma, your risk is 4-9 times higher than average." }
    ],
    relatedServices: ["Comprehensive Eye Exam", "Glaucoma Management"]
  },
  {
    name: "Macular Degeneration",
    slug: "macular-degeneration",
    category: "Retinal Disease",
    description: "Age-related macular degeneration (AMD) is a common condition that affects the central vision. It occurs when the macula, the part of the retina responsible for sharp central vision, deteriorates.",
    symptoms: ["Blurred central vision", "Dark spots in vision", "Difficulty recognizing faces", "Straight lines appear wavy"],
    treatments: ["Anti-VEGF Injections", "Photodynamic Therapy", "Low Vision Aids", "Nutritional Supplements"],
    seoTitle: "Macular Degeneration Treatment Orange County | AMD Specialist",
    seoDescription: "Expert macular degeneration treatment in Orange County. Anti-VEGF therapy, low vision aids, and AMD management. Call (949) 364-0008.",
    localKeywords: ["macular degeneration specialist", "AMD treatment", "wet AMD injections", "dry AMD supplements", "retina doctor"],
    faqs: [
      { question: "What is the difference between wet and dry AMD?", answer: "Dry AMD is the more common form where the macula thins over time. Wet AMD is more severe, involving abnormal blood vessel growth that can leak fluid and cause rapid vision loss." },
      { question: "Can macular degeneration be prevented?", answer: "While you can't completely prevent AMD, you can reduce your risk by not smoking, eating leafy greens, taking AREDS2 supplements, and protecting your eyes from UV light." },
      { question: "Will I go blind from macular degeneration?", answer: "AMD affects central vision but does not cause total blindness. Most patients retain peripheral vision. Early treatment and monitoring can help preserve as much vision as possible." }
    ],
    relatedServices: ["Comprehensive Eye Exam", "Retinal Imaging"]
  },
  {
    name: "Diabetic Retinopathy",
    slug: "diabetic-retinopathy",
    category: "Retinal Disease",
    description: "Diabetic retinopathy is a diabetes complication that affects the eyes. It's caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina).",
    symptoms: ["Floaters", "Blurred vision", "Dark areas in vision", "Difficulty seeing colors"],
    treatments: ["Laser Treatment", "Anti-VEGF Injections", "Vitrectomy Surgery", "Blood Sugar Management"],
    seoTitle: "Diabetic Retinopathy Treatment Orange County | Diabetes Eye Care",
    seoDescription: "Specialized diabetic retinopathy treatment in Orange County. Laser therapy, injections, and comprehensive diabetes eye care. Call (949) 364-0008.",
    localKeywords: ["diabetic retinopathy specialist", "diabetes eye exam", "diabetic eye care", "retina doctor for diabetes", "laser treatment for diabetic eyes"],
    faqs: [
      { question: "How often should diabetics have eye exams?", answer: "People with diabetes should have a comprehensive dilated eye exam at least once a year. If you already have diabetic retinopathy, more frequent exams may be recommended." },
      { question: "Can diabetic retinopathy be reversed?", answer: "Early diabetic retinopathy can be slowed or even improved with good blood sugar control. However, advanced retinopathy may cause permanent damage, making early detection crucial." },
      { question: "Does controlling blood sugar help my eyes?", answer: "Yes, maintaining good blood sugar, blood pressure, and cholesterol levels can significantly reduce your risk of developing diabetic retinopathy or slow its progression." }
    ],
    relatedServices: ["Comprehensive Eye Exam", "Retinal Imaging", "Diabetic Eye Screening"]
  },
  {
    name: "Astigmatism",
    slug: "astigmatism",
    category: "Refractive Error",
    description: "Astigmatism is a common vision condition caused by an error in the shape of the cornea. This can cause images to look blurry and stretched out.",
    symptoms: ["Blurred or distorted vision", "Eye strain", "Headaches", "Difficulty seeing at night"],
    treatments: ["Prescription Glasses", "Contact Lenses", "LASIK Surgery", "Toric IOLs"],
    seoTitle: "Astigmatism Treatment Orange County | Vision Correction",
    seoDescription: "Expert astigmatism treatment in Orange County. Glasses, contacts, LASIK, and advanced vision correction options. Call (949) 364-0008.",
    localKeywords: ["astigmatism correction", "astigmatism glasses", "toric contacts", "astigmatism LASIK", "blurry vision treatment"],
    faqs: [
      { question: "Can astigmatism get worse over time?", answer: "Astigmatism can change gradually over time, but it doesn't always get worse. Regular eye exams help monitor any changes and update your prescription as needed." },
      { question: "Can I wear contact lenses with astigmatism?", answer: "Yes, toric contact lenses are specifically designed for astigmatism. They have different powers in different parts of the lens to correct the irregular corneal shape." },
      { question: "Is LASIK effective for astigmatism?", answer: "Yes, LASIK is very effective for treating astigmatism. It reshapes the cornea to correct the irregular curvature that causes blurred vision." }
    ],
    relatedServices: ["Comprehensive Eye Exam", "Contact Lens Fitting", "LASIK Consultation"]
  },
  {
    name: "Myopia (Nearsightedness)",
    slug: "myopia",
    category: "Refractive Error",
    description: "Myopia (nearsightedness) is a common vision condition in which you can see objects near to you clearly, but objects farther away are blurry. Myopia control options available for children.",
    symptoms: ["Difficulty seeing distant objects", "Squinting", "Eye strain", "Headaches"],
    treatments: ["Prescription Glasses", "Contact Lenses", "Orthokeratology", "Myopia Control Therapy"],
    seoTitle: "Myopia Treatment Orange County | Nearsightedness Control",
    seoDescription: "Comprehensive myopia treatment in Orange County. Myopia control for children, ortho-k, and vision correction. Call (949) 364-0008.",
    localKeywords: ["myopia control", "nearsightedness treatment", "ortho-k lenses", "children's eye care", "myopia management"],
    faqs: [
      { question: "Can myopia be prevented in children?", answer: "While myopia cannot always be prevented, it can be slowed. Studies show increased outdoor time, reducing close-up screen time, and myopia control treatments like ortho-k or atropine drops can slow progression." },
      { question: "What is ortho-k?", answer: "Orthokeratology (ortho-k) uses specially designed rigid contact lenses worn overnight to temporarily reshape the cornea, providing clear vision during the day without glasses or contacts." },
      { question: "Why is myopia becoming more common?", answer: "Myopia rates are increasing worldwide, likely due to increased near work (screens, reading), less time outdoors, and genetic factors. Early intervention is key to slowing progression in children." }
    ],
    relatedServices: ["Comprehensive Eye Exam", "Ortho-K Fitting", "Myopia Control Program"]
  },
  {
    name: "Hyperopia (Farsightedness)",
    slug: "hyperopia",
    category: "Refractive Error",
    description: "Hyperopia (farsightedness) is a common vision condition in which you can see distant objects clearly, but objects nearby may be blurry.",
    symptoms: ["Blurred vision of close objects", "Eye strain", "Headaches", "Difficulty focusing"],
    treatments: ["Prescription Glasses", "Contact Lenses", "LASIK Surgery", "Refractive Lens Exchange"],
    seoTitle: "Hyperopia Treatment Orange County | Farsightedness Correction",
    seoDescription: "Expert hyperopia treatment in Orange County. Glasses, contacts, LASIK, and vision correction for farsightedness. Call (949) 364-0008.",
    localKeywords: ["farsightedness treatment", "hyperopia correction", "reading glasses", "farsighted LASIK", "blurry near vision"],
    faqs: [
      { question: "Is farsightedness the same as needing reading glasses?", answer: "Not exactly. Hyperopia (farsightedness) is a refractive error present from birth, while presbyopia (needing reading glasses) is age-related loss of near focus that typically starts after age 40." },
      { question: "Can children have hyperopia?", answer: "Yes, many children are naturally slightly farsighted. Most outgrow mild hyperopia, but moderate to severe cases need correction to prevent eye strain, headaches, or amblyopia." },
      { question: "Can LASIK correct farsightedness?", answer: "Yes, LASIK can correct hyperopia by steepening the cornea. However, results depend on the degree of farsightedness, and some patients may need enhancement procedures." }
    ],
    relatedServices: ["Comprehensive Eye Exam", "LASIK Consultation", "Pediatric Eye Exam"]
  },
  {
    name: "Presbyopia",
    slug: "presbyopia",
    category: "Age-Related Condition",
    description: "Presbyopia is the gradual loss of your eyes' ability to focus on nearby objects. It's a natural part of the aging process that typically becomes noticeable in your early to mid-40s.",
    symptoms: ["Difficulty reading small print", "Need to hold reading material farther away", "Eye strain", "Headaches after reading"],
    treatments: ["Reading Glasses", "Progressive Lenses", "Multifocal Contact Lenses", "Monovision LASIK"],
    seoTitle: "Presbyopia Treatment Orange County | Reading Vision Solutions",
    seoDescription: "Presbyopia treatment options in Orange County. Reading glasses, progressive lenses, and advanced solutions. Call (949) 364-0008.",
    localKeywords: ["presbyopia treatment", "reading glasses", "progressive lenses", "multifocal contacts", "age-related vision loss"],
    faqs: [
      { question: "Can presbyopia be prevented?", answer: "No, presbyopia is a natural part of aging that affects nearly everyone, usually starting in the early to mid-40s. It cannot be prevented, but there are many effective treatment options." },
      { question: "What's the difference between progressive lenses and bifocals?", answer: "Progressive lenses provide a seamless transition between distance and near vision without visible lines. Bifocals have a visible line and only two focal points without intermediate vision." },
      { question: "Are there surgical options for presbyopia?", answer: "Yes, options include monovision LASIK (one eye for distance, one for near), multifocal lens implants during cataract surgery, and corneal inlays that improve near vision." }
    ],
    relatedServices: ["Comprehensive Eye Exam", "Contact Lens Fitting", "LASIK Consultation"]
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
    seoDescription: "Effective blepharitis treatment in Orange County. Eyelid hygiene, medications, and inflammation management. Call (949) 364-0008.",
    localKeywords: ["blepharitis treatment", "eyelid inflammation", "crusty eyelids", "eyelid hygiene", "chronic blepharitis"],
    faqs: [
      { question: "Is blepharitis contagious?", answer: "No, blepharitis is not contagious. It's an inflammatory condition usually caused by bacteria that normally live on the skin or by skin conditions like rosacea or seborrheic dermatitis." },
      { question: "Can blepharitis be cured?", answer: "Blepharitis is typically a chronic condition that can be controlled but not cured. Consistent daily eyelid hygiene is essential for managing symptoms and preventing flare-ups." },
      { question: "What is the best way to clean my eyelids?", answer: "Use a warm compress for 5-10 minutes, then gently scrub the eyelid margins with diluted baby shampoo or over-the-counter eyelid cleansing wipes to remove debris and crusting." }
    ],
    relatedServices: ["Comprehensive Eye Exam", "Dry Eye Treatment", "Eyelid Care"]
  },
  {
    name: "Conjunctivitis (Pink Eye)",
    slug: "conjunctivitis",
    category: "Eye Infection",
    description: "Conjunctivitis, commonly known as pink eye, is an inflammation of the conjunctiva causing redness, itching, and discharge.",
    symptoms: ["Redness in one or both eyes", "Itchiness", "Discharge that forms a crust", "Tearing"],
    treatments: ["Antibiotic Eye Drops", "Antiviral Medications", "Cold Compresses", "Artificial Tears"],
    seoTitle: "Pink Eye Treatment Orange County | Conjunctivitis Care",
    seoDescription: "Fast pink eye treatment in Orange County. Antibiotic drops, antiviral therapy, and quick relief. Call (949) 364-0008.",
    localKeywords: ["pink eye treatment", "conjunctivitis doctor", "eye infection treatment", "red eye care", "pink eye drops"],
    faqs: [
      { question: "How long is pink eye contagious?", answer: "Viral conjunctivitis is contagious for about 10-14 days. Bacterial conjunctivitis is contagious until 24-48 hours after starting antibiotic treatment. Allergic conjunctivitis is not contagious." },
      { question: "Should I see a doctor for pink eye?", answer: "Yes, you should see a doctor to determine the cause (viral, bacterial, or allergic) and get appropriate treatment. Bacterial pink eye requires prescription antibiotic drops." },
      { question: "Can I wear contacts with pink eye?", answer: "No, you should stop wearing contact lenses until your pink eye is completely resolved. You may need to replace your lenses and case to prevent reinfection." }
    ],
    relatedServices: ["Comprehensive Eye Exam", "Urgent Eye Care", "Contact Lens Evaluation"]
  },
  {
    name: "Stye (Hordeolum)",
    slug: "stye",
    category: "Eyelid Condition",
    description: "A stye is a red, painful lump near the edge of your eyelid that may look like a boil or a pimple.",
    symptoms: ["Red, painful bump on eyelid", "Swelling", "Tenderness", "Watery eye"],
    treatments: ["Warm Compresses", "Antibiotic Ointments", "Steroid Injections", "Surgical Drainage"],
    seoTitle: "Stye Treatment Orange County | Eyelid Infection Care",
    seoDescription: "Quick stye treatment in Orange County. Warm compresses, antibiotics, and professional care. Call (949) 364-0008.",
    localKeywords: ["stye treatment", "eyelid bump", "hordeolum treatment", "painful eyelid", "stye removal"],
    faqs: [
      { question: "Should I pop a stye?", answer: "No, never squeeze or pop a stye. This can spread the infection and make it worse. Allow it to drain naturally with warm compress treatment, or see a doctor if it doesn't improve." },
      { question: "How long does a stye last?", answer: "Most styes heal on their own within 1-2 weeks with proper warm compress treatment. If a stye persists longer than 2 weeks, see an eye doctor for evaluation." },
      { question: "Are styes contagious?", answer: "Styes themselves aren't highly contagious, but the bacteria that cause them can spread. Avoid touching your eyes, wash hands frequently, and don't share towels or makeup." }
    ],
    relatedServices: ["Comprehensive Eye Exam", "Eyelid Care", "Urgent Eye Care"]
  },
  {
    name: "Chalazion",
    slug: "chalazion",
    category: "Eyelid Condition",
    description: "A chalazion is a small, usually painless lump or swelling that appears on your eyelid caused by a blocked oil gland.",
    symptoms: ["Painless bump on eyelid", "Swelling", "Mild irritation", "Blurred vision if large"],
    treatments: ["Warm Compresses", "Eyelid Massage", "Steroid Injections", "Surgical Removal"],
    seoTitle: "Chalazion Treatment Orange County | Eyelid Bump Removal",
    seoDescription: "Expert chalazion treatment in Orange County. Non-surgical and surgical options available. Call (949) 364-0008.",
    localKeywords: ["chalazion removal", "eyelid cyst", "blocked oil gland eye", "eyelid lump treatment", "meibomian gland blockage"],
    faqs: [
      { question: "What's the difference between a stye and a chalazion?", answer: "A stye is an acute, painful infection at the eyelid margin, while a chalazion is a chronic, usually painless blockage of an oil gland deeper in the eyelid. A stye can sometimes turn into a chalazion." },
      { question: "How long does a chalazion take to go away?", answer: "Chalazions can take weeks to months to resolve with conservative treatment. If warm compresses don't work after 4-6 weeks, steroid injection or minor surgery may be needed." },
      { question: "Can chalazions come back?", answer: "Yes, chalazions can recur, especially in people with blepharitis, rosacea, or meibomian gland dysfunction. Good eyelid hygiene and treating underlying conditions helps prevent recurrence." }
    ],
    relatedServices: ["Comprehensive Eye Exam", "Eyelid Care", "Blepharitis Treatment"]
  },
  {
    name: "Computer Vision Syndrome",
    slug: "computer-vision-syndrome",
    category: "Digital Eye Strain",
    description: "Computer vision syndrome is a group of eye and vision problems that result from prolonged computer, tablet, and cell phone use.",
    symptoms: ["Eye strain", "Headaches", "Blurred vision", "Dry eyes", "Neck and shoulder pain"],
    treatments: ["Computer Glasses", "Blue Light Filters", "Vision Therapy", "Ergonomic Adjustments"],
    seoTitle: "Computer Vision Syndrome Treatment Orange County | Digital Eye Strain",
    seoDescription: "Relief for computer vision syndrome in Orange County. Blue light protection, specialized glasses, and eye strain solutions. Call (949) 364-0008.",
    localKeywords: ["computer eye strain", "digital eye strain", "blue light glasses", "screen time eye problems", "work from home eye care"],
    faqs: [
      { question: "What is the 20-20-20 rule?", answer: "Every 20 minutes, take a 20-second break and look at something 20 feet away. This simple practice helps reduce eye strain and encourages blinking, which keeps your eyes lubricated." },
      { question: "Do blue light glasses really work?", answer: "Blue light glasses may help reduce eye strain for some people, though studies are mixed. More important are proper ergonomics, appropriate lighting, regular breaks, and treating underlying dry eye or vision issues." },
      { question: "Can too much screen time permanently damage my eyes?", answer: "There's no evidence that screen use causes permanent eye damage in adults. However, increased near work in children is linked to myopia development. Symptoms like eye strain and dry eye are typically temporary and treatable." }
    ],
    relatedServices: ["Comprehensive Eye Exam", "Dry Eye Treatment", "Computer Glasses Prescription"]
  },

  // High-Volume Search Conditions (Added based on SEMrush competitor analysis)
  {
    name: "Eye Twitching (Myokymia)",
    slug: "eye-twitching",
    category: "Neurological",
    description: "Eye twitching, medically known as myokymia, is an involuntary, repetitive spasm of the eyelid muscles. While usually harmless and temporary, persistent twitching can be annoying and may occasionally indicate an underlying condition requiring evaluation.",
    symptoms: ["Involuntary eyelid movement", "Repetitive spasms", "Usually affects one eye", "May come and go for days or weeks", "Worsens with fatigue or stress"],
    treatments: ["Stress Reduction", "Adequate Sleep", "Reduced Caffeine Intake", "Warm Compresses", "Botox Injections (severe cases)", "Treatment of Underlying Dry Eye"],
    seoTitle: "Eye Twitching Treatment Orange County | Eyelid Spasm Specialist",
    seoDescription: "Expert evaluation and treatment for eye twitching in Orange County. Find relief from persistent eyelid spasms. Most cases resolve with simple lifestyle changes. Call (949) 364-0008.",
    localKeywords: ["eye twitching causes", "eyelid spasm treatment", "why is my eye twitching", "myokymia treatment", "stop eye twitching"],
    faqs: [
      { question: "Why is my eye twitching?", answer: "Most eye twitching is caused by stress, fatigue, caffeine, alcohol, dry eyes, or eye strain. These benign twitches usually resolve on their own within days to weeks. Rarely, persistent twitching may indicate a neurological condition." },
      { question: "When should I see a doctor for eye twitching?", answer: "See a doctor if twitching lasts more than 3 weeks, affects other parts of your face, causes your eyelid to completely close, is accompanied by redness or swelling, or if you have drooping eyelids." },
      { question: "Can eye twitching be a sign of something serious?", answer: "Rarely. While most twitching is benign myokymia, persistent or severe cases could indicate blepharospasm, hemifacial spasm, or other neurological conditions. An eye exam can rule out concerning causes." },
      { question: "Does caffeine cause eye twitching?", answer: "Yes, caffeine is a common trigger for eye twitching. Reducing coffee, tea, energy drinks, and chocolate intake often helps resolve the twitching within a few days." }
    ],
    recoveryTimeline: "Most benign eye twitching resolves within 2-4 weeks with lifestyle modifications. Severe cases treated with Botox may need repeat injections every 3-4 months.",
    relatedServices: ["Comprehensive Eye Exam", "Dry Eye Treatment", "Neuro-Ophthalmology Evaluation"]
  },
  {
    name: "Yellow Eyes (Jaundice)",
    slug: "yellow-eyes",
    category: "Systemic Condition",
    description: "Yellow discoloration of the whites of the eyes (scleral icterus) is often a sign of jaundice, indicating elevated bilirubin levels in the blood. This can be caused by liver disease, gallbladder problems, or blood disorders. Yellow eyes require prompt medical evaluation to identify the underlying cause.",
    symptoms: ["Yellow coloring of the whites of eyes", "May accompany yellowing of skin", "Dark urine", "Pale stools", "Fatigue", "Abdominal pain"],
    treatments: ["Treatment of Underlying Cause", "Liver Function Testing", "Ultrasound Imaging", "Referral to Gastroenterologist/Hepatologist"],
    seoTitle: "Yellow Eyes Evaluation Orange County | Jaundice Eye Symptoms",
    seoDescription: "Expert evaluation for yellow eyes and scleral icterus in Orange County. Identify underlying liver, gallbladder, or blood disorders. Call (949) 364-0008 for prompt assessment.",
    localKeywords: ["yellow eyes causes", "jaundice eyes", "scleral icterus", "yellowing of eyes", "liver disease eyes"],
    faqs: [
      { question: "What causes yellow eyes?", answer: "Yellow eyes are caused by elevated bilirubin, a yellow pigment from red blood cell breakdown. This can result from liver disease (hepatitis, cirrhosis), gallbladder problems (gallstones, cholangitis), or blood disorders (hemolytic anemia). It requires medical evaluation." },
      { question: "Is yellowing of eyes serious?", answer: "Yes, yellow eyes (scleral icterus) is a medical sign that warrants prompt evaluation. While some causes are treatable, others may indicate serious liver disease or require urgent intervention." },
      { question: "Can yellow eyes go away on their own?", answer: "Yellow eyes will only resolve when the underlying condition is treated. Self-resolution without treatment is uncommon and the underlying cause must be identified and addressed." },
      { question: "Should I see an eye doctor or my regular doctor for yellow eyes?", answer: "Start with your primary care doctor or urgent care for initial evaluation and blood tests. An eye doctor can help distinguish scleral icterus from other causes of eye discoloration like pinguecula." }
    ],
    recoveryTimeline: "Depends entirely on the underlying cause. Some conditions resolve within weeks with treatment; others require ongoing management.",
    relatedServices: ["Comprehensive Eye Exam", "Medical Eye Evaluation"]
  },
  {
    name: "Subconjunctival Hemorrhage",
    slug: "subconjunctival-hemorrhage",
    category: "Eye Injury",
    description: "A subconjunctival hemorrhage is a bright red patch on the white of your eye caused by a broken blood vessel. Despite its alarming appearance, it's usually harmless and painless, often occurring from sneezing, coughing, straining, or minor trauma.",
    symptoms: ["Bright red patch on white of eye", "No pain", "No vision changes", "No discharge", "May notice upon waking"],
    treatments: ["No Treatment Needed (self-resolving)", "Artificial Tears for Comfort", "Avoid Blood Thinners if possible", "Monitor for Recurrence"],
    seoTitle: "Subconjunctival Hemorrhage Orange County | Red Spot in Eye",
    seoDescription: "Evaluation for subconjunctival hemorrhage (red spot in eye) in Orange County. Usually harmless but worth checking if recurrent. Call (949) 364-0008.",
    localKeywords: ["red spot in eye", "broken blood vessel eye", "subconjunctival hemorrhage causes", "blood in white of eye", "red eye no pain"],
    faqs: [
      { question: "Is a subconjunctival hemorrhage serious?", answer: "No, a single subconjunctival hemorrhage is almost always harmless. The blood is trapped under the clear conjunctiva and will absorb on its own, typically within 1-2 weeks." },
      { question: "What causes a broken blood vessel in the eye?", answer: "Common triggers include sneezing, coughing, vomiting, straining, rubbing your eye, or minor trauma. Blood thinners, high blood pressure, and bleeding disorders can increase risk." },
      { question: "Should I see a doctor for a red spot in my eye?", answer: "A single occurrence usually doesn't require a visit. However, see a doctor if you have frequent hemorrhages, take blood thinners, have a bleeding disorder, or experience any pain or vision changes." },
      { question: "How long does it take to heal?", answer: "Most subconjunctival hemorrhages clear within 1-2 weeks. The red blood gradually changes to yellow/brown before disappearing completely, similar to a bruise." }
    ],
    recoveryTimeline: "Self-resolves within 1-2 weeks without treatment. The red color fades through yellow before clearing completely.",
    relatedServices: ["Comprehensive Eye Exam", "Urgent Eye Care"]
  },
  {
    name: "Corneal Abrasion",
    slug: "corneal-abrasion",
    category: "Eye Injury",
    description: "A corneal abrasion is a scratch on the cornea, the clear front surface of the eye. It's one of the most common eye injuries, causing significant pain, tearing, and light sensitivity. Prompt treatment helps prevent infection and promotes proper healing.",
    symptoms: ["Intense eye pain", "Feeling of something in the eye", "Excessive tearing", "Redness", "Light sensitivity", "Blurred vision", "Headache"],
    treatments: ["Antibiotic Eye Drops/Ointment", "Lubricating Drops", "Pain Management", "Patching (sometimes)", "Follow-up to Ensure Healing"],
    seoTitle: "Corneal Abrasion Treatment Orange County | Scratched Eye Emergency",
    seoDescription: "Urgent treatment for corneal abrasions in Orange County. Fast relief for scratched cornea pain. Prevent infection and scarring. Call (949) 364-0008 immediately.",
    localKeywords: ["scratched cornea treatment", "corneal abrasion healing", "something scratched my eye", "eye scratch treatment", "corneal abrasion pain"],
    faqs: [
      { question: "How long does a corneal abrasion take to heal?", answer: "Most minor corneal abrasions heal within 24-72 hours. Larger or deeper scratches may take up to a week. Proper antibiotic treatment prevents infection during healing." },
      { question: "Should I go to the ER for a scratched cornea?", answer: "For significant pain, see an eye doctor or urgent care same-day. Go to the ER if the injury involved chemicals, metal, glass, or high-velocity objects, or if you can't open your eye." },
      { question: "Why does a corneal abrasion hurt so much?", answer: "The cornea has more nerve endings per square millimeter than almost any other part of the body. Even a tiny scratch causes intense pain because the cornea is extremely sensitive." },
      { question: "Can I wear contacts after a corneal abrasion?", answer: "No, avoid contact lenses until the abrasion is completely healed and your doctor clears you. Contacts can delay healing and increase infection risk." }
    ],
    recoveryTimeline: "Minor abrasions heal in 24-72 hours. Larger abrasions may take 5-7 days. Complete epithelial stability takes 6-8 weeks.",
    relatedServices: ["Emergency Eye Care", "Comprehensive Eye Exam", "Contact Lens Evaluation"]
  },
  {
    name: "Photophobia (Light Sensitivity)",
    slug: "photophobia",
    category: "Symptom",
    description: "Photophobia is an abnormal sensitivity to light that causes discomfort or pain. It's not a disease itself but a symptom that can indicate various underlying conditions including dry eye, migraines, corneal problems, or inflammation inside the eye.",
    symptoms: ["Eye pain in bright light", "Squinting", "Need for sunglasses indoors", "Headaches triggered by light", "Excessive tearing", "Difficulty with screens or fluorescent lights"],
    treatments: ["Treatment of Underlying Cause", "Tinted Lenses (FL-41)", "Dry Eye Treatment", "Migraine Management", "Anti-inflammatory Eye Drops"],
    seoTitle: "Photophobia Treatment Orange County | Light Sensitivity Specialist",
    seoDescription: "Expert diagnosis and treatment for photophobia in Orange County. Find relief from light sensitivity. Identify and treat the underlying cause. Call (949) 364-0008.",
    localKeywords: ["light sensitivity eyes", "photophobia treatment", "eyes hurt in light", "light sensitive after concussion", "fl-41 glasses"],
    faqs: [
      { question: "What causes photophobia?", answer: "Common causes include dry eye syndrome, migraines, corneal abrasions, uveitis (eye inflammation), concussion, certain medications, and light-colored eyes. Identifying the underlying cause is essential for effective treatment." },
      { question: "Can dry eyes cause light sensitivity?", answer: "Yes, dry eye is one of the most common causes of photophobia. When the tear film is unstable, light scatters irregularly on the cornea, causing discomfort. Treating dry eye often significantly improves light sensitivity." },
      { question: "Do FL-41 tinted lenses help with photophobia?", answer: "Yes, FL-41 rose-tinted lenses filter specific wavelengths of light that trigger photophobia and migraines. Studies show they reduce migraine frequency and light sensitivity better than gray tints." },
      { question: "When is photophobia an emergency?", answer: "Seek immediate care if light sensitivity comes with severe eye pain, vision loss, eye redness, or after head injury. These could indicate serious conditions like acute glaucoma, iritis, or meningitis." }
    ],
    recoveryTimeline: "Depends on underlying cause. Dry eye-related photophobia often improves within weeks of treatment. Migraine-related sensitivity may require ongoing management.",
    relatedServices: ["Comprehensive Eye Exam", "Dry Eye Treatment", "Specialty Lens Fitting"]
  },
  {
    name: "Pinguecula",
    slug: "pinguecula",
    category: "Conjunctival Lesion",
    description: "A pinguecula is a yellowish, slightly raised growth on the conjunctiva (the clear coating over the white of the eye), usually near the cornea on the nose side. It's caused by UV exposure and environmental irritation. While benign, it can cause discomfort and cosmetic concerns.",
    symptoms: ["Yellowish bump on white of eye", "Dryness or irritation", "Foreign body sensation", "Redness around the growth", "Usually on nasal side of eye"],
    treatments: ["Lubricating Eye Drops", "UV-Blocking Sunglasses", "Anti-inflammatory Drops (if inflamed)", "Surgical Removal (rare, for severe cases)"],
    seoTitle: "Pinguecula Treatment Orange County | Yellow Bump on Eye",
    seoDescription: "Expert pinguecula evaluation and treatment in Orange County. Relief from yellow bump irritation. UV protection and management. Call (949) 364-0008.",
    localKeywords: ["pinguecula treatment", "yellow spot on eye", "yellow bump on white of eye", "surfer's eye", "pinguecula removal"],
    faqs: [
      { question: "Is a pinguecula dangerous?", answer: "No, pingueculae are benign growths and do not turn into cancer. They are primarily a cosmetic concern and may cause mild irritation or dryness. They don't affect vision unless they grow very large." },
      { question: "Can a pinguecula be removed?", answer: "Surgical removal is possible but rarely recommended because pingueculae often recur after surgery. Treatment usually focuses on managing symptoms with lubricating drops and preventing growth with UV protection." },
      { question: "What's the difference between pinguecula and pterygium?", answer: "A pinguecula stays on the white of the eye, while a pterygium grows onto the cornea. A pinguecula can potentially develop into a pterygium if UV exposure continues." },
      { question: "How do I prevent pingueculae from getting worse?", answer: "Wear UV-blocking sunglasses and a hat outdoors, use lubricating drops regularly, and avoid dry, dusty, or windy environments when possible." }
    ],
    recoveryTimeline: "Pingueculae are permanent but symptoms can be managed. Inflamed pingueculitis typically resolves within 1-2 weeks with treatment.",
    relatedServices: ["Comprehensive Eye Exam", "Dry Eye Treatment"]
  },
  {
    name: "Anisocoria (Unequal Pupils)",
    slug: "anisocoria",
    category: "Neurological",
    description: "Anisocoria is a condition where the pupils are different sizes. While mild anisocoria is normal in up to 20% of the population, new or significant pupil asymmetry can indicate serious neurological conditions and requires prompt evaluation.",
    symptoms: ["One pupil larger than the other", "May be more noticeable in certain lighting", "Possible droopy eyelid", "Possible double vision", "Usually no pain (pain is concerning)"],
    treatments: ["Observation (physiological anisocoria)", "Treatment of Underlying Cause", "Neuroimaging (if concerning)", "Urgent Neurology Referral (if acute)"],
    seoTitle: "Anisocoria Evaluation Orange County | Unequal Pupil Specialist",
    seoDescription: "Expert evaluation for unequal pupils in Orange County. Distinguish benign from serious causes of anisocoria. Same-day appointments available. Call (949) 364-0008.",
    localKeywords: ["unequal pupils causes", "one pupil bigger than other", "anisocoria treatment", "pupil size different", "horner syndrome"],
    faqs: [
      { question: "Is having different-sized pupils serious?", answer: "It depends. Physiological anisocoria (present since birth, stable, <1mm difference) is harmless and affects 20% of people. New-onset anisocoria, especially with other symptoms, can indicate serious conditions like Horner syndrome, third nerve palsy, or brain aneurysm." },
      { question: "When should I worry about unequal pupils?", answer: "Seek immediate evaluation if anisocoria is new, greater than 1mm difference, accompanied by headache, droopy eyelid, double vision, eye pain, or occurs after head injury." },
      { question: "What tests are done for anisocoria?", answer: "We'll examine pupil reactions in light and dark, check for ptosis, and may use special eye drops to help diagnose the cause. Brain imaging (MRI/MRA) may be needed to rule out serious neurological causes." },
      { question: "Can medications cause unequal pupils?", answer: "Yes, certain medications, eye drops (especially those for glaucoma), scopolamine patches, and even touching plants like jimsonweed can cause one pupil to dilate." }
    ],
    recoveryTimeline: "Depends on cause. Physiological anisocoria requires no treatment. Pathological causes require treatment of the underlying condition.",
    relatedServices: ["Comprehensive Eye Exam", "Neuro-Ophthalmology Evaluation"]
  },
  {
    name: "Periorbital Cellulitis",
    slug: "periorbital-cellulitis",
    category: "Eye Infection",
    description: "Periorbital cellulitis (preseptal cellulitis) is a bacterial infection of the eyelid and skin around the eye, in front of the orbital septum. It's more common in children and usually follows an insect bite, skin wound, or sinus infection. Requires prompt antibiotic treatment.",
    symptoms: ["Swelling of eyelid and surrounding skin", "Redness and warmth", "Tenderness", "Possible fever", "Eye itself is typically NOT affected (normal vision, eye movement)"],
    treatments: ["Oral Antibiotics", "IV Antibiotics (severe cases)", "Warm Compresses", "Close Monitoring", "CT Scan (to rule out orbital cellulitis)"],
    seoTitle: "Periorbital Cellulitis Treatment Orange County | Eyelid Infection",
    seoDescription: "Urgent treatment for periorbital cellulitis in Orange County. Fast antibiotic therapy for eyelid infections. Distinguish from serious orbital cellulitis. Call (949) 364-0008.",
    localKeywords: ["periorbital cellulitis treatment", "swollen eyelid infection", "preseptal cellulitis", "eyelid cellulitis child", "eye infection swelling"],
    faqs: [
      { question: "How serious is periorbital cellulitis?", answer: "Periorbital cellulitis is a bacterial infection requiring antibiotics but is generally not vision-threatening when treated promptly. It's important to distinguish it from orbital cellulitis, which is more serious." },
      { question: "What's the difference between periorbital and orbital cellulitis?", answer: "Periorbital cellulitis affects the eyelid and skin AROUND the eye with normal eye movement and vision. Orbital cellulitis affects the eye socket itself, causing pain with eye movement, bulging eye, and vision changes—this is an emergency." },
      { question: "How did I get periorbital cellulitis?", answer: "Common causes include insect bites, minor skin injuries, sinus infections, styes that spread, or upper respiratory infections. Children are more susceptible, especially from sinus infections." },
      { question: "Will I need to be hospitalized?", answer: "Most cases can be treated with oral antibiotics at home. Hospitalization with IV antibiotics is needed for severe cases, young children, diabetics, or if orbital cellulitis is suspected." }
    ],
    recoveryTimeline: "Improvement typically begins within 24-48 hours of starting antibiotics. Complete resolution usually takes 7-10 days of treatment.",
    relatedServices: ["Emergency Eye Care", "Comprehensive Eye Exam"]
  },
  {
    name: "Eye Pain",
    slug: "eye-pain",
    category: "Symptom",
    description: "Eye pain can range from a dull ache to sharp, severe pain and may indicate various conditions from minor eye strain to serious emergencies like acute glaucoma or uveitis. The location, type, and accompanying symptoms help determine the cause.",
    symptoms: ["Aching or throbbing pain", "Sharp or stabbing pain", "Burning sensation", "Pain with eye movement", "Pain with light exposure", "Headache around eye"],
    treatments: ["Treatment Depends on Cause", "Lubricating Drops (dry eye)", "Anti-inflammatory Drops (uveitis)", "Pressure-lowering Drops (glaucoma)", "Antibiotics (infection)", "Rest (eye strain)"],
    seoTitle: "Eye Pain Evaluation Orange County | Eye Ache Specialist",
    seoDescription: "Expert diagnosis for eye pain in Orange County. Identify the cause of your eye discomfort. From dry eye to emergencies—same-day appointments. Call (949) 364-0008.",
    localKeywords: ["eye pain causes", "sharp pain in eye", "aching eye", "pain behind eye", "eye hurts to move"],
    faqs: [
      { question: "What causes sharp pain in the eye?", answer: "Sharp eye pain can be caused by corneal abrasion, foreign body, acute angle-closure glaucoma, or uveitis. If severe or sudden, seek immediate evaluation as some causes are emergencies." },
      { question: "Why does my eye hurt when I move it?", answer: "Pain with eye movement can indicate optic neuritis, orbital inflammation, sinusitis, muscle strain, or thyroid eye disease. If accompanied by vision changes, seek prompt evaluation." },
      { question: "When is eye pain an emergency?", answer: "Seek immediate care for sudden severe eye pain, especially with vision loss, halos around lights, nausea/vomiting, eye redness, or after trauma. These could indicate acute glaucoma, uveitis, or other emergencies." },
      { question: "Can dry eyes cause pain?", answer: "Yes, severe dry eye can cause significant discomfort including burning, stinging, and aching. Pain that worsens by end of day or with screen use often suggests dry eye as the cause." }
    ],
    recoveryTimeline: "Depends entirely on the underlying cause. Simple eye strain may resolve in hours; other conditions may require weeks of treatment.",
    relatedServices: ["Comprehensive Eye Exam", "Emergency Eye Care", "Dry Eye Treatment"]
  },

  // New Detailed Conditions (Batch 1)
  {
    name: "Retinal Detachment",
    slug: "retinal-detachment",
    category: "Retinal Disease",
    description: "Retinal detachment is an emergency situation in which the retina pulls away from the layer of blood vessels that provides it with oxygen and nourishment. Immediate treatment is necessary to prevent permanent vision loss.",
    symptoms: ["Sudden appearance of many floaters", "Flashes of light", "Shadow or curtain over vision", "Blurred vision"],
    treatments: ["Laser Surgery (Photocoagulation)", "Cryopexy (Freezing)", "Pneumatic Retinopexy", "Scleral Buckle", "Vitrectomy"],
    seoTitle: "Retinal Detachment Treatment Orange County | Emergency Eye Care",
    seoDescription: "Emergency retinal detachment treatment in Orange County. Laser surgery, vitrectomy, and urgent care to save your vision. Call (949) 364-0008 immediately.",
    localKeywords: ["retinal detachment surgery", "emergency eye doctor", "flashes and floaters", "retina specialist", "torn retina treatment"],
    faqs: [
      { question: "Is a retinal detachment painful?", answer: "No, retinal detachment itself is painless. Warning signs like flashes and floaters are visual, not physical pain." },
      { question: "How quickly must I be treated?", answer: "Retinal detachment is a medical emergency. You should seek treatment within 24 hours to have the best chance of preserving your vision." },
      { question: "Can vision be restored after detachment?", answer: "Success depends on how much of the retina detached and how quickly it was repaired. Early treatment offers the best prognosis." }
    ],
    recoveryTimeline: "Recovery varies by procedure. Laser treatment has little downtime. Vitrectomy or scleral buckle may require 2-4 weeks of recovery, sometimes with specific head positioning requirements.",
    relatedServices: ["Emergency Eye Care", "Dilated Eye Exam", "Retinal Imaging"]
  },
  {
    name: "Eye Floaters",
    slug: "floaters",
    category: "Vitreous Condition",
    description: "Eye floaters are small spots that drift through your field of vision. They may stand out when you look at something bright, like white paper or a blue sky. While usually harmless, a sudden increase can signal retinal issues.",
    symptoms: ["Small shapes in vision", "Spots that move when you move your eyes", "Cobwebs or strings in vision"],
    treatments: ["Observation (Benign cases)", "Vitrectomy (Severe cases)", "Laser Vitreolysis"],
    seoTitle: "Eye Floaters Treatment Orange County | Flashes & Floaters",
    seoDescription: "Evaluation and treatment for eye floaters in Orange County. Rule out retinal tears and manage bothersome floaters. Call (949) 364-0008.",
    localKeywords: ["eye floaters treatment", "flashes in vision", "vitreous detachment", "laser vitreolysis", "eye doctor for floaters"],
    faqs: [
      { question: "When should I worry about floaters?", answer: "See a doctor immediately if you notice a sudden increase in floaters, flashes of light, or a shadow in your peripheral vision." },
      { question: "Do floaters go away?", answer: "Most floaters do not go away completely, but they often settle at the bottom of the eye and become less noticeable over time." },
      { question: "Can floaters be removed?", answer: "In severe cases where vision is significantly impaired, a vitrectomy or laser procedure can remove them, but these carry risks and are reserved for extreme cases." }
    ],
    recoveryTimeline: "For benign floaters, no recovery is needed. If surgery is performed, recovery typically takes 2-4 weeks.",
    relatedServices: ["Dilated Eye Exam", "Retinal Imaging"]
  },
  {
    name: "Ocular Migraine",
    slug: "ocular-migraine",
    category: "Neurological",
    description: "An ocular migraine is a temporary visual disturbance that can affect one or both eyes. It may or may not be accompanied by a headache. Episodes are usually brief and harmless but can be alarming.",
    symptoms: ["Flashing lights", "Zig-zag lines", "Blind spots (scotoma)", "Shimmering spots or stars"],
    treatments: ["Rest in a dark room", "Pain relievers", "Identifying and avoiding triggers", "Hydration"],
    seoTitle: "Ocular Migraine Specialist Orange County | Visual Migraine Relief",
    seoDescription: "Diagnosis and management of ocular migraines in Orange County. Understand your triggers and rule out other conditions. Call (949) 364-0008.",
    localKeywords: ["ocular migraine symptoms", "visual migraine treatment", "eye migraine", "migraine with aura", "scintillating scotoma"],
    faqs: [
      { question: "What triggers ocular migraines?", answer: "Common triggers include stress, bright lights, caffeine, chocolate, red wine, and hormonal changes." },
      { question: "How long do ocular migraines last?", answer: "Visual symptoms typically last 20 to 30 minutes and resolve on their own." },
      { question: "Is an ocular migraine a stroke?", answer: "No, but symptoms can be similar. If visual loss is permanent or accompanied by weakness/slurred speech, seek emergency care immediately." }
    ],
    recoveryTimeline: "Recovery is immediate once the episode passes. Some patients may feel tired or have a mild headache afterwards.",
    relatedServices: ["Comprehensive Eye Exam", "Neuro-Ophthalmology Evaluation"]
  },
  {
    name: "Strabismus (Crossed Eyes)",
    slug: "strabismus",
    category: "Binocular Vision",
    description: "Strabismus is a condition in which the eyes do not properly align with each other when looking at an object. One eye may look straight ahead while the other turns in, out, up, or down.",
    symptoms: ["Eyes that look in different directions", "Double vision", "Head tilting", "Depth perception problems"],
    treatments: ["Glasses or Prism Lenses", "Vision Therapy", "Eye Muscle Surgery", "Botox Injections"],
    seoTitle: "Strabismus Treatment Orange County | Crossed Eyes Specialist",
    seoDescription: "Expert strabismus treatment for children and adults in Orange County. Vision therapy, prisms, and surgical co-management. Call (949) 364-0008.",
    localKeywords: ["strabismus surgery", "crossed eyes treatment", "lazy eye doctor", "adult strabismus", "pediatric ophthalmologist"],
    faqs: [
      { question: "Can strabismus be fixed in adults?", answer: "Yes, adults can be treated for strabismus. It is never too late to improve eye alignment and binocular vision." },
      { question: "Will my child outgrow crossed eyes?", answer: "No. Strabismus requires treatment. Ignoring it can lead to permanent vision loss (amblyopia) in the turned eye." },
      { question: "How does vision therapy help?", answer: "Vision therapy retrains the brain and eyes to work together, improving coordination and alignment without surgery in many cases." }
    ],
    recoveryTimeline: "Vision therapy is an ongoing process lasting months. Surgery recovery typically takes a few weeks for redness to subside.",
    relatedServices: ["Pediatric Eye Exam", "Vision Therapy", "Binocular Vision Assessment"]
  },
  {
    name: "Amblyopia (Lazy Eye)",
    slug: "amblyopia",
    category: "Pediatric Eye Condition",
    description: "Amblyopia, or lazy eye, is reduced vision in one eye caused by abnormal visual development early in life. The weaker eye often wanders inward or outward.",
    symptoms: ["Poor depth perception", "Squinting or shutting one eye", "Head tilting", "Wandering eye"],
    treatments: ["Corrective Glasses", "Eye Patching", "Atropine Drops", "Vision Therapy"],
    seoTitle: "Amblyopia Treatment Orange County | Lazy Eye Specialist",
    seoDescription: "Effective lazy eye treatment in Orange County. Patching, drops, and vision therapy for amblyopia. Early detection is key. Call (949) 364-0008.",
    localKeywords: ["lazy eye treatment", "amblyopia therapy", "eye patching for kids", "pediatric eye doctor", "vision therapy for lazy eye"],
    faqs: [
      { question: "At what age can lazy eye be treated?", answer: "Treatment is most effective before age 7, but recent research shows improvements are possible in older children and even adults." },
      { question: "How long does patching take?", answer: "Patching duration varies from a few hours a day to all day, often for weeks or months, depending on severity." },
      { question: "Is lazy eye genetic?", answer: "Yes, a family history of amblyopia or strabismus increases a child's risk." }
    ],
    recoveryTimeline: "Improvement is gradual. Significant vision gains can take months of consistent treatment compliance.",
    relatedServices: ["Pediatric Eye Exam", "Vision Therapy"]
  },
// Batch 7
{
  name: "Retinitis Pigmentosa",
    slug: "retinitis-pigmentosa",
      category: "Genetic Retinal Disease",
        description: "Retinitis Pigmentosa (RP) is a group of rare, genetic disorders that involve a breakdown and loss of cells in the retina. It causes progressive vision loss.",
          symptoms: ["Night blindness (nyctalopia)", "Tunnel vision (loss of peripheral vision)", "Difficulty seeing colors", "Photophobia"],
            treatments: ["Vitamin A Palmitate", "Low Vision Aids", "Argus II Retinal Implant", "Gene Therapy (Luxturna for RPE65)"],
              seoTitle: "Retinitis Pigmentosa Specialist Orange County | RP Treatment",
                seoDescription: "Expert care for Retinitis Pigmentosa in Orange County. Genetic testing, low vision aids, and management of progressive vision loss. Call (949) 364-0008.",
                  localKeywords: ["retinitis pigmentosa doctor", "rp eye disease", "tunnel vision treatment", "night blindness genetic", "low vision specialist"],
                    faqs: [
                      { question: "Will I go completely blind?", answer: "Most people with RP retain some central vision well into middle age, but many eventually become legally blind." },
                      { question: "Is there a cure?", answer: "There is no cure yet, but gene therapies like Luxturna are now available for specific types of RP." },
                      { question: "Should I take vitamins?", answer: "High doses of Vitamin A palmitate may slow progression in some patients, but should only be taken under doctor supervision." }
                    ],
                      recoveryTimeline: "N/A - This is a progressive degenerative condition.",
                        relatedServices: ["Low Vision Exam", "Genetic Testing Referral"]
},
{
  name: "Central Serous Chorioretinopathy (CSR)",
    slug: "central-serous-retinopathy",
      category: "Retinal Disease",
        description: "CSR happens when fluid accumulates under the retina, causing a small detachment and visual distortion. It is often associated with stress and steroid use.",
          symptoms: ["Central blind spot", "Distorted vision (metamorphopsia)", "Objects appear smaller", "Dim vision"],
            treatments: ["Observation (often resolves on its own)", "Stopping Steroids", "Laser Photocoagulation", "PDT (Photodynamic Therapy)"],
              seoTitle: "CSR Eye Treatment Orange County | Central Serous Retinopathy",
                seoDescription: "Treatment for Central Serous Chorioretinopathy (CSR) in Orange County. Management of stress-related retinal fluid. Call (949) 364-0008.",
                  localKeywords: ["csr eye condition", "stress eye problem", "fluid under retina", "central serous retinopathy", "retina specialist"],
                    faqs: [
                      { question: "Does stress cause this?", answer: "Yes, CSR is strongly linked to high stress levels and 'Type A' personalities." },
                      { question: "Will it go away?", answer: "Most cases resolve spontaneously in 3-4 months without treatment." },
                      { question: "Can I keep taking my steroids?", answer: "You should consult your prescribing doctor. Discontinuing steroids (creams, inhalers, pills) often helps the fluid absorb." }
                    ],
                      recoveryTimeline: "Visual recovery usually takes 3-6 months. Some mild distortion may persist.",
                        relatedServices: ["Retinal Imaging", "OCT Scan"]
},
{
  name: "Optic Neuritis",
    slug: "optic-neuritis",
      category: "Neurological",
        description: "Optic neuritis is inflammation of the optic nerve. It can cause sudden vision loss and pain with eye movement. It is often the first sign of Multiple Sclerosis (MS).",
          symptoms: ["Pain with eye movement", "Temporary vision loss in one eye", "Loss of color vision", "Flashing lights"],
            treatments: ["IV Steroids (Solu-Medrol)", "Oral Steroids (taper)", "MRI Imaging", "Neurology Referral"],
              seoTitle: "Optic Neuritis Evaluation Orange County | Eye Pain & Vision Loss",
                seoDescription: "Urgent evaluation for optic neuritis in Orange County. Diagnosis of optic nerve inflammation and MS screening. Call (949) 364-0008.",
                  localKeywords: ["optic neuritis symptoms", "pain moving eye", "sudden vision loss one eye", "ms eye symptoms", "neuro-ophthalmology"],
                    faqs: [
                      { question: "Does optic neuritis mean I have MS?", answer: "Not always. While it is a common early sign of MS, it can also be caused by infections or immune diseases." },
                      { question: "Will my vision come back?", answer: "Yes, most patients recover significant vision within 3-5 weeks, even without treatment." },
                      { question: "Why do I need an MRI?", answer: "An MRI of the brain helps determine your risk of developing Multiple Sclerosis." }
                    ],
                      recoveryTimeline: "Vision typically begins to improve after 2 weeks and stabilizes by 3-6 months.",
                        relatedServices: ["Neuro-Ophthalmology", "Visual Field Testing"]
},
{
  name: "Nystagmus (Dancing Eyes)",
    slug: "nystagmus",
      category: "Neurological",
        description: "Nystagmus is a vision condition in which the eyes make repetitive, uncontrolled movements. These movements can be side to side, up and down, or circular.",
          symptoms: ["Involuntary eye movements", "Head tilting (null point)", "Blurred vision", "Balance problems"],
            treatments: ["Glasses/Contacts", "Prisms", "Tenotomy Surgery", "Medications (Baclofen/Gabapentin)"],
              seoTitle: "Nystagmus Treatment Orange County | Dancing Eyes Doctor",
                seoDescription: "Evaluation and management of nystagmus in Orange County. Help for uncontrolled eye movements and shaking eyes. Call (949) 364-0008.",
                  localKeywords: ["nystagmus doctor", "shaking eyes treatment", "dancing eyes", "congenital nystagmus", "null point"],
                    faqs: [
                      { question: "Can nystagmus be cured?", answer: "It usually cannot be cured, but it can be managed. Surgery can sometimes reduce the amount of head turn needed to see clearly." },
                      { question: "Can people with nystagmus drive?", answer: "It depends on their visual acuity. Many can drive with special restrictions or bioptic telescopes." },
                      { question: "Is it genetic?", answer: "Yes, congenital nystagmus is often inherited." }
                    ],
                      recoveryTimeline: "N/A - Chronic condition.",
                        relatedServices: ["Low Vision Exam", "Pediatric Eye Exam"]
},
{
  name: "Ocular Rosacea",
    slug: "ocular-rosacea",
      category: "Inflammatory",
        description: "Ocular rosacea is inflammation of the eyes that often affects people who have rosacea of the skin. It causes red, itchy, and irritated eyes.",
          symptoms: ["Red, burning eyes", "Swollen eyelids", "Styes/Chalazia", "Crusty eyelashes"],
            treatments: ["Oral Doxycycline", "Warm Compresses", "Eyelid Hygiene", "Omega-3 Supplements"],
              seoTitle: "Ocular Rosacea Treatment Orange County | Red Burning Eyes",
                seoDescription: "Relief for ocular rosacea in Orange County. Treat chronic red, burning eyes and eyelid inflammation. Call (949) 364-0008.",
                  localKeywords: ["ocular rosacea treatment", "rosacea eyes", "burning eyes doctor", "doxycycline for eyes", "eyelid inflammation"],
                    faqs: [
                      { question: "Can I have ocular rosacea without skin rosacea?", answer: "Yes. In about 20% of cases, eye symptoms appear before skin symptoms." },
                      { question: "What triggers it?", answer: "Spicy foods, alcohol, sunlight, stress, and hot beverages can trigger flare-ups." },
                      { question: "Is it contagious?", answer: "No, it is an inflammatory condition, not an infection." }
                    ],
                      recoveryTimeline: "Symptoms often improve within weeks of starting oral antibiotics, but long-term maintenance is required.",
                        relatedServices: ["Dry Eye Treatment", "Blepharitis Management"]
},
// Batch 8
{
  name: "Convergence Insufficiency",
    slug: "convergence-insufficiency",
      category: "Binocular Vision",
        description: "Convergence insufficiency (CI) is a common condition where your eyes are unable to work together when looking at nearby objects. One eye drifts outward when reading.",
          symptoms: ["Eyestrain when reading", "Double vision at near", "Words moving on page", "Headaches", "Sleepiness when reading"],
            treatments: ["Vision Therapy (Pencil Push-ups)", "Prism Glasses", "Office-Based Vision Therapy"],
              seoTitle: "Convergence Insufficiency Treatment Orange County | Reading Eye Strain",
                seoDescription: "Vision therapy for convergence insufficiency in Orange County. Solve reading difficulties and eye strain. Call (949) 364-0008.",
                  localKeywords: ["convergence insufficiency exercises", "vision therapy for reading", "eye strain reading", "double vision near", "ci treatment"],
                    faqs: [
                      { question: "Is this dyslexia?", answer: "No, but it is often misdiagnosed as dyslexia or ADHD because it makes reading difficult." },
                      { question: "Can glasses fix it?", answer: "Reading glasses with prisms can help symptoms, but they don't cure the underlying muscle coordination problem like therapy does." },
                      { question: "Does it affect adults?", answer: "Yes, it can persist into adulthood or develop after a concussion/TBI." }
                    ],
                      recoveryTimeline: "With office-based vision therapy, 75% of patients achieve a cure in 12-24 weeks.",
                        relatedServices: ["Vision Therapy", "Binocular Vision Assessment"]
},
{
    name: "Meibomian Gland Dysfunction (MGD)",
    slug: "meibomian-gland-dysfunction",
    category: "Dry Eye",
    description: "Meibomian Gland Dysfunction (MGD) is the leading cause of evaporative dry eye disease, affecting up to 86% of dry eye patients. The meibomian glands in your eyelids produce the essential oil layer of your tear film. When these glands become blocked or dysfunctional, tears evaporate too quickly, causing chronic dryness, irritation, and vision fluctuations. Early diagnosis with meibography imaging and treatment with advanced therapies like IPL (Intense Pulsed Light) can restore gland function before permanent damage occurs.",
    symptoms: ["Chronic dryness that worsens throughout the day", "Burning and stinging sensation", "Gritty or sandy feeling", "Red, irritated eyes", "Fluctuating or blurred vision", "Eye fatigue", "Sensitivity to light", "Crusty or sticky eyelids in the morning"],
    treatments: ["IPL (Intense Pulsed Light) Therapy", "LipiFlow Thermal Pulsation", "Meibomian Gland Expression", "BlephEx Lid Debridement", "Omega-3 Supplements", "Warm Compresses (adjunct therapy)", "Low-dose Doxycycline"],
    seoTitle: "MGD Treatment Orange County | IPL & LipiFlow Specialists",
    seoDescription: "Advanced Meibomian Gland Dysfunction treatment in Orange County. IPL therapy, LipiFlow, and meibography diagnosis. 87% improvement rates vs 30% with traditional methods. Call (949) 364-0008.",
    localKeywords: ["mgd treatment", "meibomian gland dysfunction specialist", "ipl dry eye treatment", "lipiflow orange county", "meibography near me", "evaporative dry eye", "blocked oil glands treatment"],
    faqs: [
      { question: "Why don't warm compresses work well for MGD?", answer: "Traditional warm compress therapy shows only 20-40% improvement rates in clinical studies. The heat often doesn't penetrate deeply enough or maintain consistent temperature to effectively melt the hardened meibum blocking the glands. Modern treatments like IPL and LipiFlow deliver controlled, sustained therapeutic heat directly to the glands." },
      { question: "What is IPL treatment for MGD and how effective is it?", answer: "IPL (Intense Pulsed Light) therapy uses calibrated light pulses to reduce inflammation, decrease abnormal blood vessels around the eyelids, and liquefy hardened meibum. A 2017 study by Dell et al. showed 87% of patients experienced significant improvement after IPL treatment. It also reduces Demodex mites and bacterial load on the eyelids." },
      { question: "How is MGD diagnosed?", answer: "We use meibography imaging to directly visualize your meibomian glands and assess gland dropout or atrophy. This non-invasive imaging shows the actual structure of your glands, allowing us to determine disease severity and track treatment progress. Early detection is crucial because gland loss is often irreversible." },
      { question: "What is the success rate of LipiFlow vs traditional treatments?", answer: "The SPEED study showed LipiFlow thermal pulsation achieves 76-86% improvement in MGD signs and symptoms at one month. In contrast, traditional warm compress and lid hygiene protocols show only 20-40% improvement rates. The key difference is that LipiFlow delivers consistent, controlled heat while simultaneously expressing the glands." },
      { question: "Can MGD glands regenerate once they're gone?", answer: "Unfortunately, meibomian glands cannot regenerate once they atrophy. This is why early diagnosis and treatment are critical. Meibography imaging allows us to detect gland dropout before you experience severe symptoms, giving us the best chance to preserve your remaining gland function." }
    ],
    recoveryTimeline: "IPL treatment typically requires 4 sessions spaced 2-4 weeks apart. Most patients notice improvement after the second session. LipiFlow provides results within 2-4 weeks after a single treatment. Ongoing maintenance with proper lid hygiene and omega-3 supplementation helps sustain results.",
    relatedServices: ["Dry Eye Treatment", "IPL Therapy", "LipiFlow", "Comprehensive Eye Exam"]
  },
{
  name: "Hypertensive Retinopathy",
    slug: "hypertensive-retinopathy",
      category: "Retinal Disease",
        description: "Hypertensive retinopathy is retinal damage caused by high blood pressure. The force of blood against artery walls damages the delicate vessels in the eye.",
          symptoms: ["Often no symptoms initially", "Blurred vision", "Double vision", "Vision loss (severe cases)"],
            treatments: ["Controlling Blood Pressure", "Lifestyle Changes", "Laser Treatment (for complications)"],
              seoTitle: "Hypertensive Retinopathy Screening Orange County | High Blood Pressure Eye",
                seoDescription: "Eye exams for high blood pressure in Orange County. Detect and monitor hypertensive retinopathy. Call (949) 364-0008.",
                  localKeywords: ["high blood pressure eyes", "hypertensive retinopathy stages", "eye stroke risk", "retinal vessel damage", "medical eye exam"],
                    faqs: [
                      { question: "Can high blood pressure cause blindness?", answer: "Yes, if severe and untreated, it can lead to retinal vein occlusions or optic neuropathy." },
                      { question: "Can the damage be reversed?", answer: "Grade 1 and 2 changes (narrowing vessels) can improve if blood pressure is controlled. Advanced damage is often permanent." },
                      { question: "Why does my eye doctor check my BP?", answer: "The eye is the only place in the body where we can see blood vessels directly without surgery." }
                    ],
                      recoveryTimeline: "Depends on systemic blood pressure control.",
                        relatedServices: ["Dilated Eye Exam", "Retinal Imaging"]
},
{
  name: "Pseudoexfoliation Syndrome",
    slug: "pseudoexfoliation-syndrome",
      category: "Systemic/Glaucoma",
        description: "Pseudoexfoliation (PEX) is a systemic condition where dandruff-like flakes deposit on organs, including the eye. It is a major cause of secondary glaucoma.",
          symptoms: ["White flakes on lens/iris (seen by doctor)", "High eye pressure", "No early symptoms"],
            treatments: ["Glaucoma Drops", "Laser Trabeculoplasty (SLT)", "Glaucoma Surgery"],
              seoTitle: "Pseudoexfoliation Glaucoma Specialist Orange County",
                seoDescription: "Management of Pseudoexfoliation Syndrome in Orange County. Prevent secondary glaucoma and vision loss. Call (949) 364-0008.",
                  localKeywords: ["pseudoexfoliation glaucoma", "pex eye disease", "white flakes in eye", "secondary glaucoma", "glaucoma specialist"],
                    faqs: [
                      { question: "Is it dangerous?", answer: "Yes, it makes glaucoma harder to control and increases the risk of complications during cataract surgery." },
                      { question: "Can the flakes be removed?", answer: "No, they are produced continuously by the body. We treat the high pressure they cause." },
                      { question: "Is it genetic?", answer: "Yes, the LOXL1 gene is strongly associated with PEX." }
                    ],
                      recoveryTimeline: "N/A - Chronic condition requiring lifelong monitoring.",
                        relatedServices: ["Glaucoma Management", "Cataract Surgery"]
},
{
  name: "Posterior Vitreous Detachment (PVD)",
    slug: "posterior-vitreous-detachment",
      category: "Vitreous Condition",
        description: "PVD is a natural aging process where the vitreous gel shrinks and separates from the retina. It is the most common cause of floaters.",
          symptoms: ["Sudden single large floater (Weiss ring)", "Flashes of light", "Cobwebs"],
            treatments: ["Observation", "Retinal Exam (to rule out tear)"],
              seoTitle: "PVD Diagnosis Orange County | Posterior Vitreous Detachment",
                seoDescription: "Evaluation for Posterior Vitreous Detachment (PVD) in Orange County. Rule out retinal tears from flashes and floaters. Call (949) 364-0008.",
                  localKeywords: ["pvd eye symptoms", "vitreous detachment vs retinal detachment", "weiss ring floater", "flashes of light aging", "retina check"],
                    faqs: [
                      { question: "Is PVD the same as retinal detachment?", answer: "No. PVD is harmless separation of the gel. Retinal detachment is sight-threatening separation of the retina." },
                      { question: "Can PVD cause a tear?", answer: "Yes, in about 10-15% of cases, the pulling gel tears the retina. This is why a dilated exam is mandatory." },
                      { question: "How long do the flashes last?", answer: "Flashes usually subside in a few weeks as the separation completes." }
                    ],
                      recoveryTimeline: "Symptoms (flashes) resolve in weeks. Floaters persist but become less bothersome over months.",
                        relatedServices: ["Dilated Eye Exam", "Retinal Imaging"]
},

// Batch 9
{
  name: "Corneal Ulcer",
    slug: "corneal-ulcer",
      category: "Corneal Disease",
        description: "A corneal ulcer is an open sore on the cornea, usually caused by an infection. It is a serious condition that can cause permanent blindness if not treated.",
          symptoms: ["Severe pain", "Redness", "White spot on eye", "Discharge", "Blurred vision"],
            treatments: ["Antibiotic Drops (hourly)", "Antifungal/Antiviral Drops", "Stopping Contacts", "Corneal Transplant (for scarring)"],
              seoTitle: "Corneal Ulcer Specialist Orange County | Eye Infection Emergency",
                seoDescription: "Emergency treatment for corneal ulcers in Orange County. Save your vision from severe infection. Call (949) 364-0008 immediately.",
                  localKeywords: ["corneal ulcer treatment", "white spot on cornea", "contact lens ulcer", "eye infection emergency", "keratitis specialist"],
                    faqs: [
                      { question: "How fast does it heal?", answer: "With intensive treatment, the infection may clear in days, but healing the surface can take weeks." },
                      { question: "Will I have a scar?", answer: "Ulcers often leave a scar. If the scar is in the center of your vision, you may need a corneal transplant." },
                      { question: "Can I wear contacts again?", answer: "You must wait until the eye is completely healed and your doctor gives approval, which may take months." }
                    ],
                      recoveryTimeline: "Weeks to months. Visual recovery depends on scarring.",
                        relatedServices: ["Emergency Eye Care", "Corneal Disease Management"]
},
{
  name: "Choroidal Hemangioma",
    slug: "choroidal-hemangioma",
      category: "Tumor",
        description: "A choroidal hemangioma is a benign vascular tumor in the back of the eye. It is a clump of abnormal blood vessels that can leak fluid and affect vision.",
          symptoms: ["Blurred vision", "Flashes of light", "Metamorphopsia (distortion)"],
            treatments: ["Observation", "PDT (Photodynamic Therapy)", "Laser Photocoagulation", "Radiation Therapy"],
              seoTitle: "Choroidal Hemangioma Specialist Orange County | Eye Tumor",
                seoDescription: "Diagnosis and treatment of choroidal hemangioma in Orange County. Management of benign eye tumors. Call (949) 364-0008.",
                  localKeywords: ["eye tumor specialist", "choroidal hemangioma", "benign eye growth", "retinal tumor", "ocular oncology"],
                    faqs: [
                      { question: "Is it cancer?", answer: "No, a hemangioma is benign (non-cancerous). However, it can threaten vision by leaking fluid." },
                      { question: "Does it grow?", answer: "They can grow slowly over time. We monitor them closely with ultrasound and photography." },
                      { question: "Can it be removed?", answer: "We don't surgically remove them. We use lasers or radiation to shrink them and stop leakage." }
                    ],
                      recoveryTimeline: "Fluid absorption after laser treatment takes 3-6 months.",
                        relatedServices: ["Retinal Imaging", "Ultrasound B-Scan"]
},
{
  name: "Choroidal Melanoma",
    slug: "choroidal-melanoma",
      category: "Tumor",
        description: "Choroidal melanoma is the most common primary cancer of the eye in adults. It arises from the pigment cells in the choroid layer.",
          symptoms: ["None (early stages)", "Flashes and floaters", "Growing dark spot on iris", "Vision loss"],
            treatments: ["Plaque Brachytherapy (Radiation)", "Enucleation (Removal of eye)", "Laser Therapy"],
              seoTitle: "Ocular Melanoma Specialist Orange County | Eye Cancer",
                seoDescription: "Referral and co-management for ocular melanoma in Orange County. Early detection of eye cancer. Call (949) 364-0008.",
                  localKeywords: ["eye cancer symptoms", "choroidal melanoma treatment", "ocular oncology", "melanoma in eye", "enucleation"],
                    faqs: [
                      { question: "Is eye cancer fatal?", answer: "It can be. Choroidal melanoma can spread (metastasize) to the liver. Early detection and treatment are life-saving." },
                      { question: "How is it found?", answer: "It is often found during a routine dilated eye exam before symptoms appear." },
                      { question: "Do I lose my eye?", answer: "Not always. Radiation plaque therapy can often save the eye and some vision." }
                    ],
                      recoveryTimeline: "Radiation treatment takes about a week. Systemic monitoring continues for life.",
                        relatedServices: ["Dilated Eye Exam", "Retinal Imaging"]
},
{
  name: "Retinoblastoma",
    slug: "retinoblastoma",
      category: "Pediatric Tumor",
        description: "Retinoblastoma is a rare eye cancer that affects young children. It develops in the retina.",
          symptoms: ["White pupil (Leukocoria) in photos", "Crossed eyes", "Redness", "Poor vision"],
            treatments: ["Chemotherapy", "Laser Therapy", "Cryotherapy", "Enucleation"],
              seoTitle: "Retinoblastoma Screening Orange County | Pediatric Eye Cancer",
                seoDescription: "Screening for retinoblastoma in Orange County. Detect white pupil and eye cancer in children. Call (949) 364-0008.",
                  localKeywords: ["white pupil in photos", "retinoblastoma symptoms", "child eye cancer", "leukocoria", "pediatric ophthalmologist"],
                    faqs: [
                      { question: "What is the white glow?", answer: "A white reflection in the pupil (instead of red eye) in flash photography is a classic sign of retinoblastoma." },
                      { question: "Is it hereditary?", answer: "About 40% of cases are hereditary. Genetic counseling is recommended." },
                      { question: "Can the child see?", answer: "Vision depends on the tumor size and location. Saving life is the priority, then saving the eye, then saving vision." }
                    ],
                      recoveryTimeline: "Long-term follow-up is required to monitor for new tumors or recurrence.",
                        relatedServices: ["Pediatric Eye Exam", "Red Reflex Test"]
},
{
  name: "Coats' Disease",
    slug: "coats-disease",
      category: "Retinal Disease",
        description: "Coats' disease is a rare condition where blood vessels in the retina develop abnormally and leak fluid. It mostly affects young boys and can cause blindness.",
          symptoms: ["Vision loss", "Strabismus", "White pupil (Leukocoria)"],
            treatments: ["Laser Photocoagulation", "Cryotherapy", "Anti-VEGF Injections"],
              seoTitle: "Coats' Disease Specialist Orange County | Pediatric Retina",
                seoDescription: "Diagnosis and treatment of Coats' Disease in Orange County. Management of retinal vascular anomalies. Call (949) 364-0008.",
                  localKeywords: ["coats disease treatment", "leaking blood vessels eye", "pediatric retina specialist", "exudative retinopathy", "yellow exudates retina"],
                    faqs: [
                      { question: "Is it genetic?", answer: "No, Coats' disease is not hereditary." },
                      { question: "Does it affect both eyes?", answer: "It usually affects only one eye (unilateral)." },
                      { question: "Can vision be saved?", answer: "Early treatment to stop leakage can preserve vision. Advanced cases may lead to retinal detachment." }
                    ],
                      recoveryTimeline: "Multiple treatments are often needed over months or years to stabilize the vessels.",
                        relatedServices: ["Pediatric Eye Exam", "Retinal Imaging"]
},
// Batch 10
{
  name: "Coloboma",
    slug: "coloboma",
      category: "Congenital",
        description: "A coloboma is a missing piece of tissue in the eye structure (iris, retina, choroid, or optic nerve) present at birth. It looks like a keyhole pupil.",
          symptoms: ["Keyhole-shaped pupil", "Light sensitivity", "Vision loss (if retina/nerve involved)"],
            treatments: ["Sunglasses/Colored Contacts (for glare)", "Low Vision Aids", "Surgery (rarely)"],
              seoTitle: "Coloboma Specialist Orange County | Keyhole Pupil",
                seoDescription: "Evaluation of eye coloboma in Orange County. Management of congenital eye defects and light sensitivity. Call (949) 364-0008.",
                  localKeywords: ["coloboma eye", "keyhole pupil", "cat eye syndrome", "iris coloboma", "congenital eye defect"],
                    faqs: [
                      { question: "Does it affect vision?", answer: "Iris coloboma may only cause glare. Retinal or optic nerve colobomas can cause significant blind spots." },
                      { question: "Can it be fixed?", answer: "The missing tissue cannot be replaced. We manage the symptoms (like glare) and maximize remaining vision." },
                      { question: "Is it genetic?", answer: "It can be genetic or sporadic. It is sometimes associated with other syndromes (CHARGE syndrome)." }
                    ],
                      recoveryTimeline: "N/A - Congenital structural defect.",
                        relatedServices: ["Pediatric Eye Exam", "Low Vision Exam"]
},
{
  name: "Microphthalmia",
    slug: "microphthalmia",
      category: "Congenital",
        description: "Microphthalmia is a birth defect where one or both eyes are abnormally small. It can range from mild to severe.",
          symptoms: ["Small eye(s)", "Vision impairment", "Anophthalmia (missing eye)"],
            treatments: ["Prosthetic Eyes (Shells)", "Expanders (to grow the socket)", "Low Vision Aids"],
              seoTitle: "Microphthalmia Specialist Orange County | Small Eye Syndrome",
                seoDescription: "Care for microphthalmia in Orange County. Prosthetic shells and vision support for small eyes. Call (949) 364-0008.",
                  localKeywords: ["microphthalmia treatment", "small eye baby", "prosthetic eye specialist", "anophthalmia", "socket expander"],
                    faqs: [
                      { question: "Can the eye see?", answer: "Some microphthalmic eyes have useful vision; others do not. It depends on the development of the internal structures." },
                      { question: "Why use a prosthetic?", answer: "A painted shell covers the small eye to improve appearance and stimulate the growth of the eye socket bones and eyelids." },
                      { question: "Is it inherited?", answer: "It can be caused by genetic mutations or environmental factors during pregnancy." }
                    ],
                      recoveryTimeline: "Long-term management with ocularists (prosthetic specialists) is needed as the child grows.",
                        relatedServices: ["Pediatric Eye Exam", "Oculoplastics"]
},
{
  name: "Aniridia",
    slug: "aniridia",
      category: "Congenital",
        description: "Aniridia is the complete or partial absence of the iris (the colored part of the eye). These eyes appear completely black (large pupil).",
          symptoms: ["Missing iris", "Severe light sensitivity", "Poor vision (nystagmus/foveal hypoplasia)", "Glaucoma risk"],
            treatments: ["Painted Contact Lenses", "Sunglasses", "Glaucoma Drops", "Artificial Iris Implant"],
              seoTitle: "Aniridia Specialist Orange County | Missing Iris",
                seoDescription: "Management of aniridia in Orange County. Glare control, glaucoma monitoring, and artificial iris options. Call (949) 364-0008.",
                  localKeywords: ["aniridia treatment", "missing iris eye", "artificial iris implant", "wags syndrome", "congenital glaucoma"],
                    faqs: [
                      { question: "Can they see?", answer: "Vision is usually reduced (20/100 to 20/200) due to underdevelopment of the retina (foveal hypoplasia)." },
                      { question: "Is there a cancer risk?", answer: "Yes, sporadic aniridia is associated with Wilms' tumor (kidney cancer). Regular kidney ultrasounds are required." },
                      { question: "What helps with the light?", answer: "Special contact lenses with an artificial iris painted on them can block light and improve appearance." }
                    ],
                      recoveryTimeline: "N/A - Lifelong condition.",
                        relatedServices: ["Pediatric Eye Exam", "Glaucoma Management"]
},
{
  name: "Ocular Albinism",
    slug: "ocular-albinism",
      category: "Genetic",
        description: "Ocular albinism is a genetic condition that reduces the pigmentation of the iris and retina. Unlike oculocutaneous albinism, skin and hair color may be normal.",
          symptoms: ["Very light blue eyes", "Light sensitivity", "Nystagmus", "Reduced visual acuity"],
            treatments: ["Sunglasses", "Prescription Glasses", "Low Vision Aids", "Strabismus Surgery"],
              seoTitle: "Ocular Albinism Specialist Orange County | Albinism Eye Care",
                seoDescription: "Eye care for ocular albinism in Orange County. Management of photophobia and nystagmus. Call (949) 364-0008.",
                  localKeywords: ["ocular albinism doctor", "albinism eye problems", "nystagmus albinism", "transillumination defects", "low vision albinism"],
                    faqs: [
                      { question: "Why is vision poor?", answer: "Lack of pigment disrupts the development of the macula (foveal hypoplasia) and the connection from eye to brain." },
                      { question: "Will vision get worse?", answer: "No, albinism is not progressive. Vision remains stable throughout life." },
                      { question: "Can glasses fix it?", answer: "Glasses correct nearsightedness/astigmatism but cannot fix the retinal underdevelopment. Vision usually remains below 20/20." }
                    ],
                      recoveryTimeline: "N/A - Stable condition.",
                        relatedServices: ["Low Vision Exam", "Genetic Testing"]
},
{
  name: "Usher Syndrome",
    slug: "usher-syndrome",
      category: "Genetic",
        description: "Usher syndrome is a rare genetic disorder that causes both hearing loss and vision loss (from Retinitis Pigmentosa). It is the leading cause of deaf-blindness.",
          symptoms: ["Hearing loss (congenital or progressive)", "Night blindness", "Tunnel vision", "Balance issues"],
            treatments: ["Cochlear Implants", "Hearing Aids", "Low Vision Rehabilitation", "Vitamin A"],
              seoTitle: "Usher Syndrome Specialist Orange County | Deaf-Blindness",
                seoDescription: "Comprehensive care for Usher Syndrome in Orange County. Co-management of hearing and vision loss. Call (949) 364-0008.",
                  localKeywords: ["usher syndrome doctor", "deaf blindness causes", "retinitis pigmentosa hearing loss", "usher type 1 2 3", "genetic eye disease"],
                    faqs: [
                      { question: "How is it diagnosed?", answer: "Genetic testing confirms the diagnosis. ERG testing detects the retinal changes." },
                      { question: "Is there a cure?", answer: "Not yet, but gene therapy trials are underway. Early diagnosis helps in planning for educational and communication needs." },
                      { question: "What is the prognosis?", answer: "Vision loss is progressive. Most patients retain some central vision for reading until later in life." }
                    ],
                      recoveryTimeline: "N/A - Progressive condition.",
                        relatedServices: ["Low Vision Exam", "Genetic Testing"]
},
];

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
