/**
 * FILE: data/services-enhanced.ts
 * PURPOSE: Enhanced service data with full SEO content, FAQs, and schema support
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: Comprehensive service data for high-converting, SEO-optimized service pages.
 * Each service includes FAQs (for schema), process steps, and cost information.
 */

import { ServiceData } from '@/lib/schema/types';

export const enhancedServices: ServiceData[] = [
  {
    slug: 'keratoconus-treatment',
    name: 'Keratoconus Treatment',
    shortName: 'Keratoconus',
    description: 'Advanced diagnosis and treatment of keratoconus using scleral contact lenses, corneal cross-linking, and other specialized therapies.',
    metaDescription: 'Expert keratoconus treatment in Orange County. Scleral lenses, corneal cross-linking & specialty care from a leading keratoconus specialist. 35+ years experience.',
    keywords: ['keratoconus treatment', 'keratoconus specialist', 'scleral lenses keratoconus', 'corneal cross-linking', 'keratoconus Orange County'],
    heroImage: '/images/services/keratoconus-treatment-orange-county.jpg',
    icon: '/images/icons/keratoconus-icon.svg',
    overview: `Keratoconus is a progressive eye condition where the cornea thins and bulges into a cone-like shape, causing blurred vision, light sensitivity, and difficulty with everyday activities. At EyeCare Center of Orange County, we specialize in comprehensive keratoconus management, helping patients at every stage of the condition achieve clear, comfortable vision.

Our keratoconus specialist, Dr. Alexander Bonakdar, has over 35 years of experience fitting scleral contact lenses and managing complex corneal conditions. We've helped thousands of patients who were told they had no options achieve remarkable improvements in their vision and quality of life.`,
    benefits: [
      'Clear vision restoration with specialized contact lenses',
      'Non-surgical treatment options available',
      'Same-day consultations for new patients',
      'Advanced diagnostic imaging for precise treatment planning',
      'Coordinated care with top corneal surgeons for cross-linking',
      'Flexible payment options and insurance accepted'
    ],
    candidateCriteria: [
      'Diagnosed with keratoconus or suspected corneal ectasia',
      'Experiencing blurred or distorted vision',
      'Difficulty wearing traditional contact lenses',
      'Multiple prescription changes in a short period',
      'Light sensitivity or glare issues'
    ],
    notCandidates: [
      'Active eye infections (treatment available after resolution)',
      'Severe corneal scarring may require additional evaluation'
    ],
    process: [
      {
        step: 1,
        title: 'Comprehensive Evaluation',
        description: 'Advanced corneal imaging and detailed eye examination to assess your keratoconus severity and determine the best treatment approach.',
        duration: '60-90 minutes'
      },
      {
        step: 2,
        title: 'Treatment Planning',
        description: 'Review your options including scleral lenses, hybrid lenses, or referral for corneal cross-linking. We create a personalized treatment plan based on your lifestyle and visual needs.',
        duration: '30 minutes'
      },
      {
        step: 3,
        title: 'Lens Fitting & Trial',
        description: 'Custom scleral lens fitting with multiple trial lenses to ensure optimal comfort and vision. Most patients see dramatic improvement immediately.',
        duration: '60-90 minutes'
      },
      {
        step: 4,
        title: 'Follow-Up Care',
        description: 'Regular monitoring appointments to track your keratoconus progression and adjust treatment as needed. We provide ongoing support throughout your journey.',
        duration: '30 minutes per visit'
      }
    ],
    recovery: {
      timeline: 'Immediate vision improvement with scleral lenses',
      expectations: [
        'Clear vision typically achieved on first fitting visit',
        '1-2 week adaptation period for lens comfort',
        'Some patients require lens adjustments over first month'
      ],
      restrictions: [
        'Avoid rubbing eyes with lenses inserted',
        'Follow cleaning protocol precisely',
        'Keep follow-up appointments for optimal results'
      ],
      followUp: 'Follow-up visits at 1 week, 1 month, and then every 3-6 months'
    },
    cost: {
      rangeMin: 1500,
      rangeMax: 3500,
      insuranceCoverage: 'Many vision and medical insurance plans cover keratoconus treatment. We accept most major plans and can verify your benefits before your appointment.',
      financingAvailable: true,
      financingDetails: 'CareCredit and in-house payment plans available with 0% interest options'
    },
    faqs: [
      {
        question: 'What is keratoconus and how does it affect vision?',
        answer: 'Keratoconus is a progressive eye condition where the cornea thins and bulges into a cone shape. This irregular shape causes blurred and distorted vision, light sensitivity, and difficulty with night driving. Early detection and treatment can help preserve vision and prevent progression.'
      },
      {
        question: 'Can keratoconus be cured?',
        answer: 'While keratoconus cannot be cured, it can be effectively managed. Scleral contact lenses provide clear vision for most patients, and corneal cross-linking can halt progression. With proper treatment, most patients maintain excellent functional vision throughout their lives.'
      },
      {
        question: 'What are scleral lenses and how do they help keratoconus?',
        answer: 'Scleral lenses are large-diameter contact lenses that vault over the entire cornea and rest on the white part of the eye (sclera). They create a smooth optical surface over the irregular cornea, providing clear vision and exceptional comfort for keratoconus patients.'
      },
      {
        question: 'How long does a keratoconus evaluation take?',
        answer: 'A comprehensive keratoconus evaluation takes approximately 60-90 minutes. This includes advanced corneal imaging, a complete eye health assessment, and discussion of treatment options tailored to your specific condition.'
      },
      {
        question: 'Does insurance cover keratoconus treatment?',
        answer: 'Many medical and vision insurance plans cover keratoconus treatment, including diagnostic testing and medically necessary contact lenses. We verify your benefits before your appointment and can discuss coverage and payment options.'
      }
    ],
    relatedServices: ['scleral-lens-fitting', 'corneal-cross-linking', 'dry-eye-specialist'],
    lastUpdated: '2025-11-21'
  },
  {
    slug: 'dry-eye-specialist',
    name: 'Dry Eye Treatment & IPL Therapy',
    shortName: 'Dry Eye',
    description: 'Comprehensive dry eye evaluation and treatment including IPL therapy, meibomian gland expression, and personalized treatment plans.',
    metaDescription: 'Advanced dry eye treatment in Orange County. IPL therapy, meibomian gland treatment & customized care from an experienced dry eye specialist. Relief starts here.',
    keywords: ['dry eye treatment', 'dry eye specialist', 'IPL therapy dry eye', 'meibomian gland dysfunction', 'dry eye Orange County'],
    heroImage: '/images/services/dry-eye-ipl-treatment-orange-county.jpg',
    icon: '/images/icons/dry-eye-icon.svg',
    overview: `Dry eye disease affects millions of Americans, causing discomfort, blurred vision, and reduced quality of life. At EyeCare Center of Orange County, we go beyond basic dry eye treatment to address the root cause of your symptoms.

Our dry eye specialist offers advanced treatments including IPL (Intense Pulsed Light) therapy, one of the most effective treatments for meibomian gland dysfunction—the leading cause of dry eye. Whether your dry eye is caused by environmental factors, screen use, or underlying medical conditions, we create a personalized treatment plan to provide lasting relief.`,
    benefits: [
      'IPL therapy for long-lasting dry eye relief',
      'Comprehensive diagnostic testing to identify root causes',
      'Personalized treatment plans tailored to your needs',
      'In-office treatments for immediate symptom relief',
      'Home care guidance and product recommendations',
      'Ongoing monitoring and treatment adjustments'
    ],
    candidateCriteria: [
      'Chronic dry, burning, or gritty eyes',
      'Excessive tearing or watery eyes',
      'Blurred vision that improves with blinking',
      'Contact lens discomfort',
      'Eye fatigue during screen use',
      'Sensitivity to light or wind'
    ],
    notCandidates: [
      'IPL not recommended for very dark skin tones',
      'Active eye infections (treatment after resolution)'
    ],
    process: [
      {
        step: 1,
        title: 'Dry Eye Evaluation',
        description: 'Comprehensive testing including tear film analysis, meibomian gland imaging, and inflammation assessment to determine the exact cause of your symptoms.',
        duration: '45-60 minutes'
      },
      {
        step: 2,
        title: 'Treatment Plan',
        description: 'Customized treatment plan based on your specific dry eye type, severity, and lifestyle factors. Options may include IPL, gland expression, prescription medications, or combination therapy.',
        duration: '15-30 minutes'
      },
      {
        step: 3,
        title: 'IPL Treatment Series',
        description: 'For eligible patients, a series of 3-4 IPL treatments spaced 2-4 weeks apart. Each session takes about 15 minutes with no downtime.',
        duration: '15 minutes per session'
      },
      {
        step: 4,
        title: 'Maintenance & Follow-Up',
        description: 'Ongoing care with periodic treatments as needed and home care optimization to maintain your results.',
        duration: 'Varies'
      }
    ],
    recovery: {
      timeline: 'Many patients notice improvement within 2-4 weeks',
      expectations: [
        'Gradual improvement over treatment series',
        'Most patients achieve significant relief by 4th IPL session',
        'Results typically last 6-12 months'
      ],
      restrictions: [
        'Avoid sun exposure on treatment day',
        'No makeup for 24 hours after IPL',
        'Continue home care routine as directed'
      ],
      followUp: 'Progress check after each IPL session, then every 3-6 months'
    },
    cost: {
      rangeMin: 400,
      rangeMax: 1500,
      insuranceCoverage: 'Dry eye evaluation is typically covered by medical insurance. IPL therapy may be partially covered depending on your plan. We provide detailed cost estimates before treatment.',
      financingAvailable: true,
      financingDetails: 'CareCredit accepted. Package pricing available for IPL series.'
    },
    faqs: [
      {
        question: 'What causes dry eye disease?',
        answer: 'Dry eye has multiple causes including meibomian gland dysfunction (blocked oil glands in eyelids), reduced tear production, environmental factors like air conditioning and screens, certain medications, and underlying health conditions. A comprehensive evaluation identifies your specific cause for targeted treatment.'
      },
      {
        question: 'How does IPL therapy treat dry eye?',
        answer: 'IPL (Intense Pulsed Light) therapy treats dry eye by reducing inflammation around the eyelids and improving meibomian gland function. The light energy helps liquefy blocked oil secretions, allowing your natural oils to flow and stabilize your tear film for lasting relief.'
      },
      {
        question: 'How many IPL treatments will I need?',
        answer: 'Most patients require 3-4 IPL treatments spaced 2-4 weeks apart for optimal results. Many notice improvement after the first treatment, with continued improvement through the series. Maintenance treatments every 6-12 months help sustain results.'
      },
      {
        question: 'Is IPL treatment painful?',
        answer: 'IPL treatment is generally well-tolerated. Most patients describe feeling a warm sensation and slight snapping feeling during treatment. The procedure takes only about 15 minutes with no downtime—you can return to normal activities immediately.'
      },
      {
        question: 'Can dry eye damage my vision?',
        answer: 'Chronic dry eye can affect vision quality and, if severe, may damage the corneal surface. However, with proper treatment, most patients achieve significant symptom relief and prevent any long-term complications. Early treatment leads to better outcomes.'
      }
    ],
    relatedServices: ['comprehensive-eye-exam', 'scleral-lens-fitting', 'keratoconus-treatment'],
    lastUpdated: '2025-11-21'
  },
  {
    slug: 'scleral-lens-fitting',
    name: 'Scleral Contact Lens Fitting',
    shortName: 'Scleral Lenses',
    description: 'Custom-designed scleral lenses for irregular corneas, dry eye, and complex vision needs. Expert fitting from an experienced specialist.',
    metaDescription: 'Expert scleral lens fitting in Orange County. Custom scleral contacts for keratoconus, dry eye & irregular corneas. 35+ years experience. Schedule your fitting.',
    keywords: ['scleral lens fitting', 'scleral contact lenses', 'custom scleral lenses', 'scleral lenses dry eye', 'scleral lenses Orange County'],
    heroImage: '/images/services/scleral-lens-fitting-orange-county.jpg',
    icon: '/images/icons/scleral-lens-icon.svg',
    overview: `Scleral contact lenses are large-diameter gas permeable lenses that vault over the entire cornea, providing exceptional vision and comfort for patients who cannot achieve good results with traditional contact lenses or glasses.

At EyeCare Center of Orange County, Dr. Bonakdar has over 35 years of experience fitting scleral lenses for keratoconus, post-surgical complications, severe dry eye, and other complex corneal conditions. Our advanced fitting technology and extensive lens inventory allow us to achieve optimal fits for even the most challenging cases.`,
    benefits: [
      'Clear, stable vision for irregular corneas',
      'All-day comfort with moisture reservoir',
      'Excellent option for dry eye sufferers',
      'Custom-designed for your unique eye shape',
      'Can be worn 12-16 hours daily',
      'Alternative when glasses and regular contacts fail'
    ],
    candidateCriteria: [
      'Keratoconus or other corneal ectasias',
      'Post-LASIK complications',
      'Severe dry eye syndrome',
      'Corneal scarring or irregularity',
      'Failed soft or RGP contact lens wearers',
      'High astigmatism or irregular astigmatism'
    ],
    notCandidates: [
      'Active corneal infections',
      'Inability to handle lenses (alternatives available)'
    ],
    process: [
      {
        step: 1,
        title: 'Consultation & Mapping',
        description: 'Advanced corneal topography and scleral mapping to design your custom lenses. We assess your vision needs, eye health, and lifestyle requirements.',
        duration: '60 minutes'
      },
      {
        step: 2,
        title: 'Diagnostic Fitting',
        description: 'Trial fitting with multiple diagnostic lenses to determine optimal vault, landing zone, and vision correction. Most patients see clearly immediately.',
        duration: '90 minutes'
      },
      {
        step: 3,
        title: 'Lens Delivery & Training',
        description: 'Delivery of your custom lenses with comprehensive insertion, removal, and care training. We ensure you are comfortable and confident before leaving.',
        duration: '60 minutes'
      },
      {
        step: 4,
        title: 'Follow-Up Optimization',
        description: 'Fine-tuning appointments to optimize fit and vision. Most patients achieve their best results within 2-3 visits.',
        duration: '30 minutes per visit'
      }
    ],
    recovery: {
      timeline: 'Clear vision achieved immediately; comfort improves over 1-2 weeks',
      expectations: [
        'Immediate improvement in vision quality',
        'Adaptation to insertion/removal takes 1-2 weeks',
        'Full-day comfortable wear within 2-4 weeks'
      ],
      restrictions: [
        'Build up wear time gradually as directed',
        'Follow specific cleaning regimen',
        'Avoid sleeping in lenses unless approved'
      ],
      followUp: 'Follow-up at 1 week, 1 month, 3 months, then annually'
    },
    cost: {
      rangeMin: 1800,
      rangeMax: 4000,
      insuranceCoverage: 'Vision insurance medical necessity provisions may cover scleral lenses for qualifying conditions. Medical insurance may cover fitting fees when medically necessary. We verify benefits for you.',
      financingAvailable: true,
      financingDetails: 'CareCredit accepted. Payment plans available for lens costs.'
    },
    faqs: [
      {
        question: 'What are scleral contact lenses?',
        answer: 'Scleral lenses are large-diameter gas permeable contact lenses that rest on the white part of the eye (sclera) and vault over the entire cornea. This design creates a smooth optical surface and a fluid reservoir that provides clear vision and comfort for irregular corneas and dry eyes.'
      },
      {
        question: 'How long can I wear scleral lenses each day?',
        answer: 'Most scleral lens wearers can comfortably wear their lenses 12-16 hours per day. The fluid reservoir helps maintain hydration and comfort throughout the day. We customize wearing recommendations based on your specific needs.'
      },
      {
        question: 'Are scleral lenses difficult to insert and remove?',
        answer: 'While scleral lenses require a different technique than soft contacts, most patients master insertion and removal within 1-2 weeks of practice. We provide thorough training and ongoing support until you are completely comfortable.'
      },
      {
        question: 'How long do scleral lenses last?',
        answer: 'With proper care, scleral lenses typically last 2-3 years. The lenses are made from durable gas permeable material. Regular cleaning and annual check-ups help maximize lens life and ensure optimal vision.'
      },
      {
        question: 'Can scleral lenses help with dry eye?',
        answer: 'Yes! Scleral lenses are one of the best treatment options for severe dry eye. The fluid reservoir between the lens and cornea keeps the eye continuously hydrated throughout the day, providing relief when other treatments have failed.'
      }
    ],
    relatedServices: ['keratoconus-treatment', 'dry-eye-specialist', 'comprehensive-eye-exam'],
    lastUpdated: '2025-11-21'
  },
  {
    slug: 'comprehensive-eye-exam',
    name: 'Comprehensive Eye Exam',
    shortName: 'Eye Exam',
    description: 'Complete vision and eye health evaluation using advanced diagnostic technology for patients of all ages.',
    metaDescription: 'Comprehensive eye exams in Orange County. Advanced diagnostic technology, thorough vision testing & eye disease screening. Schedule your exam today.',
    keywords: ['comprehensive eye exam', 'eye exam near me', 'eye doctor Orange County', 'vision test', 'eye health screening'],
    heroImage: '/images/services/comprehensive-eye-exam-orange-county.jpg',
    icon: '/images/icons/eye-exam-icon.svg',
    overview: `A comprehensive eye exam is much more than checking if you need glasses. At EyeCare Center of Orange County, our thorough examinations evaluate your complete eye health, screen for diseases like glaucoma and macular degeneration, and ensure your vision is optimized for your daily activities.

Using advanced diagnostic equipment, we can detect eye conditions early—often before you notice any symptoms. Early detection leads to better treatment outcomes and can prevent vision loss. Whether you need a routine check-up or have specific concerns, our comprehensive exams provide the foundation for healthy vision.`,
    benefits: [
      'Complete vision assessment and prescription update',
      'Advanced eye disease screening',
      'Digital retinal imaging for detailed documentation',
      'Glaucoma, cataract, and macular degeneration screening',
      'Personalized vision recommendations',
      'Contact lens evaluation if desired'
    ],
    candidateCriteria: [
      'Adults due for annual eye exam',
      'Children and teens (vision development)',
      'Contact lens wearers',
      'Diabetics requiring regular eye monitoring',
      'Anyone with vision changes or eye symptoms',
      'Individuals with family history of eye disease'
    ],
    notCandidates: [],
    process: [
      {
        step: 1,
        title: 'History & Symptoms Review',
        description: 'Discussion of your vision concerns, medical history, medications, and family eye health history.',
        duration: '10 minutes'
      },
      {
        step: 2,
        title: 'Vision Testing',
        description: 'Precise measurement of your visual acuity, refraction for glasses/contacts prescription, and binocular vision assessment.',
        duration: '15-20 minutes'
      },
      {
        step: 3,
        title: 'Eye Health Examination',
        description: 'Comprehensive evaluation of eye structures including cornea, lens, retina, and optic nerve using advanced imaging technology.',
        duration: '20-30 minutes'
      },
      {
        step: 4,
        title: 'Results & Recommendations',
        description: 'Review of findings, prescription discussion, and personalized recommendations for maintaining or improving your eye health.',
        duration: '10-15 minutes'
      }
    ],
    cost: {
      rangeMin: 150,
      rangeMax: 350,
      insuranceCoverage: 'Most vision insurance plans cover annual comprehensive eye exams. Medical insurance may cover exams when a medical diagnosis is involved. We accept most major plans.',
      financingAvailable: false
    },
    faqs: [
      {
        question: 'How often should I have an eye exam?',
        answer: 'Adults should have a comprehensive eye exam every 1-2 years, or annually if you wear glasses/contacts, have diabetes, or are over 60. Children should have exams at 6 months, 3 years, before starting school, and every 1-2 years thereafter.'
      },
      {
        question: 'What is the difference between a vision screening and a comprehensive eye exam?',
        answer: 'A vision screening only checks visual acuity (how well you see). A comprehensive eye exam includes full eye health evaluation, disease screening, and detailed refraction. Many serious eye conditions are only detected through comprehensive exams.'
      },
      {
        question: 'Will my eyes be dilated during the exam?',
        answer: 'Dilation is often recommended for the most thorough retinal examination. It temporarily blurs near vision for a few hours. We can discuss alternatives if dilation is not preferred, though some conditions are best detected with dilation.'
      },
      {
        question: 'Can I drive after my eye exam?',
        answer: 'If your eyes are dilated, you may experience light sensitivity and blurred near vision for 2-4 hours. We recommend bringing sunglasses. Some patients prefer having someone drive them home after dilation.'
      },
      {
        question: 'Do you provide same-day glasses or contacts?',
        answer: 'We have a selection of glasses frames and can order lenses with typical delivery in 7-10 days. Contact lenses can often be dispensed same-day or ordered for quick delivery depending on your prescription.'
      }
    ],
    relatedServices: ['glaucoma-management', 'diabetic-retinopathy-treatment', 'macular-degeneration-care'],
    lastUpdated: '2025-11-21'
  },
  {
    slug: 'ortho-k',
    name: 'Orthokeratology (Ortho-K)',
    shortName: 'Ortho-K',
    description: 'Overnight contact lenses that reshape your cornea while you sleep, providing clear vision all day without glasses or daytime contacts.',
    metaDescription: 'Ortho-K lenses in Orange County. Wake up with clear vision—no glasses or contacts during the day. Myopia control for children. Expert fitting.',
    keywords: ['ortho-k', 'orthokeratology', 'overnight contacts', 'myopia control', 'ortho-k Orange County'],
    heroImage: '/images/services/ortho-k-orange-county.jpg',
    icon: '/images/icons/ortho-k-icon.svg',
    overview: `Orthokeratology (Ortho-K) uses specially designed gas permeable contact lenses worn overnight to gently reshape your cornea while you sleep. When you remove the lenses in the morning, you can see clearly all day without glasses or daytime contacts.

Ortho-K is also one of the most effective methods for myopia (nearsightedness) control in children. By wearing Ortho-K lenses, children can slow the progression of their myopia, reducing their risk of high myopia and associated eye diseases later in life. At EyeCare Center of Orange County, we specialize in Ortho-K fitting for both vision correction and myopia management.`,
    benefits: [
      'Clear vision all day without glasses or contacts',
      'Non-surgical alternative to LASIK',
      'Slows myopia progression in children',
      'Reversible—stop wearing and eyes return to original state',
      'Great for athletes and active lifestyles',
      'No dry eye issues from daytime contact wear'
    ],
    candidateCriteria: [
      'Nearsightedness (myopia) up to -6.00D',
      'Low to moderate astigmatism',
      'Children with progressive myopia',
      'Adults seeking glasses-free daytime vision',
      'Those not suitable for or wanting to avoid LASIK',
      'Athletes, swimmers, or those in dusty environments'
    ],
    notCandidates: [
      'Very high myopia (>-6.00D)',
      'Certain corneal conditions',
      'Chronic eye infections'
    ],
    process: [
      {
        step: 1,
        title: 'Consultation & Evaluation',
        description: 'Comprehensive eye exam with corneal topography to determine if you are a good Ortho-K candidate. We discuss expectations and answer your questions.',
        duration: '60 minutes'
      },
      {
        step: 2,
        title: 'Lens Design & Fitting',
        description: 'Custom lens design based on your corneal shape. Initial fitting to verify proper lens performance.',
        duration: '60 minutes'
      },
      {
        step: 3,
        title: 'Overnight Trial',
        description: 'Wear your lenses overnight and return in the morning to check results. Most patients see significant improvement after first night.',
        duration: '30 minutes follow-up'
      },
      {
        step: 4,
        title: 'Optimization & Training',
        description: 'Lens adjustments if needed and comprehensive care training. Regular monitoring to ensure optimal results.',
        duration: 'Varies'
      }
    ],
    recovery: {
      timeline: 'Vision improvement begins after first night; stable results in 1-2 weeks',
      expectations: [
        'Noticeable improvement after first night',
        'Full correction typically achieved within 1-2 weeks',
        'Must wear lenses every night to maintain effect'
      ],
      restrictions: [
        'Wear lenses minimum 6-8 hours nightly',
        'Follow strict cleaning protocol',
        'Regular follow-up appointments required'
      ],
      followUp: 'Follow-up at 1 day, 1 week, 1 month, then every 3-6 months'
    },
    cost: {
      rangeMin: 1200,
      rangeMax: 2500,
      insuranceCoverage: 'Some vision plans include Ortho-K benefits. Coverage varies by plan. We can verify your specific benefits before beginning treatment.',
      financingAvailable: true,
      financingDetails: 'CareCredit accepted. Package pricing typically includes fitting, lenses, and first year of follow-up care.'
    },
    faqs: [
      {
        question: 'How does Ortho-K work?',
        answer: 'Ortho-K lenses gently reshape your cornea while you sleep using hydraulic forces under the lens. The corneal reshaping temporarily corrects your refractive error, allowing clear vision when you remove the lenses in the morning.'
      },
      {
        question: 'Is Ortho-K safe for children?',
        answer: 'Yes, Ortho-K is very safe for children when properly fitted and monitored. It is FDA-approved and has been used worldwide for decades. For children with progressive myopia, Ortho-K provides the added benefit of slowing myopia progression.'
      },
      {
        question: 'How long do Ortho-K results last?',
        answer: 'Clear vision typically lasts throughout the day. Some patients with higher prescriptions may notice slight vision reduction by evening. Consistent nightly wear maintains optimal results.'
      },
      {
        question: 'What happens if I stop wearing Ortho-K lenses?',
        answer: 'Ortho-K is fully reversible. If you stop wearing the lenses, your cornea gradually returns to its original shape over several days to weeks, and your original prescription returns.'
      },
      {
        question: 'Can Ortho-K correct astigmatism?',
        answer: 'Yes, Ortho-K can correct low to moderate amounts of astigmatism (typically up to -1.75D). Modern lens designs can address both myopia and astigmatism simultaneously.'
      }
    ],
    relatedServices: ['comprehensive-eye-exam', 'lasik-consultation', 'myopia-control'],
    lastUpdated: '2025-11-21'
  },
  {
    slug: 'lasik-consultation',
    name: 'LASIK Consultation & Co-Management',
    shortName: 'LASIK',
    description: 'Comprehensive LASIK candidacy evaluation and post-operative co-management with top Orange County refractive surgeons.',
    metaDescription: 'LASIK consultations in Orange County. Expert evaluation, candidacy assessment & post-op care. Work with top surgeons. Schedule your LASIK consultation.',
    keywords: ['LASIK consultation', 'LASIK evaluation', 'LASIK Orange County', 'laser eye surgery', 'LASIK co-management'],
    heroImage: '/images/services/lasik-consultation-orange-county.jpg',
    icon: '/images/icons/lasik-icon.svg',
    overview: `LASIK can be life-changing for the right candidates, providing freedom from glasses and contacts. At EyeCare Center of Orange County, we provide comprehensive LASIK consultations to determine if you are a good candidate and which procedure is best for your eyes.

We partner with the top refractive surgeons in Orange County and provide complete co-management care—from your initial evaluation through your post-operative recovery. Our thorough pre-operative assessment ensures you make an informed decision, and our post-operative care ensures the best possible outcome.`,
    benefits: [
      'Thorough candidacy evaluation',
      'Unbiased recommendation—we refer only when appropriate',
      'Partnership with top refractive surgeons',
      'Convenient local pre-op and post-op care',
      'Alternative recommendations if LASIK isn\'t right for you',
      'Long-term follow-up and support'
    ],
    candidateCriteria: [
      'Adults 18 years or older',
      'Stable prescription for at least 1 year',
      'Healthy corneas without keratoconus',
      'Good general eye health',
      'Realistic expectations about outcomes',
      'Not pregnant or nursing'
    ],
    notCandidates: [
      'Unstable prescriptions',
      'Thin corneas or keratoconus',
      'Certain autoimmune conditions',
      'Severe dry eye (may require treatment first)'
    ],
    process: [
      {
        step: 1,
        title: 'LASIK Candidacy Evaluation',
        description: 'Comprehensive eye exam with corneal mapping, pupil measurement, and tear film assessment to determine your suitability for LASIK.',
        duration: '60-90 minutes'
      },
      {
        step: 2,
        title: 'Consultation & Education',
        description: 'Detailed discussion of your results, procedure options (LASIK, PRK, etc.), risks, benefits, and realistic expectations.',
        duration: '30 minutes'
      },
      {
        step: 3,
        title: 'Surgeon Referral',
        description: 'If you are a good candidate, we refer you to one of our trusted refractive surgeon partners and coordinate your care.',
        duration: 'Varies'
      },
      {
        step: 4,
        title: 'Post-Operative Care',
        description: 'We provide your post-operative follow-up visits locally, monitoring your healing and vision at 1 day, 1 week, 1 month, and 3 months.',
        duration: '15-30 minutes per visit'
      }
    ],
    cost: {
      rangeMin: 150,
      rangeMax: 300,
      insuranceCoverage: 'LASIK consultations may be covered by vision or medical insurance. The LASIK procedure itself is typically not covered by insurance. Surgeon fees are separate from our consultation fees.',
      financingAvailable: true,
      financingDetails: 'CareCredit and other financing options available through our surgeon partners for the procedure itself.'
    },
    faqs: [
      {
        question: 'How do I know if I\'m a good LASIK candidate?',
        answer: 'Good candidates have stable vision, healthy corneas of adequate thickness, no eye diseases, and realistic expectations. A comprehensive evaluation is the only way to determine your suitability. Factors like corneal shape, pupil size, and tear quality all matter.'
      },
      {
        question: 'What is the difference between LASIK and PRK?',
        answer: 'LASIK creates a corneal flap before reshaping the cornea, while PRK removes the outer corneal layer entirely. PRK has a longer recovery but may be better for thin corneas or certain occupations. We help you understand which is right for you.'
      },
      {
        question: 'What are the risks of LASIK?',
        answer: 'While LASIK has an excellent safety record, potential risks include dry eyes, glare/halos, under/over-correction, and rarely, vision-threatening complications. We discuss all risks during your consultation so you can make an informed decision.'
      },
      {
        question: 'Will I still need reading glasses after LASIK?',
        answer: 'If you are over 40, you may still need reading glasses due to presbyopia (age-related focusing loss). Some patients choose monovision LASIK to reduce reading glass dependence. We discuss all options during your consultation.'
      },
      {
        question: 'How long does LASIK recovery take?',
        answer: 'Most patients see well within 24-48 hours after LASIK, though vision continues improving over weeks to months. Full healing takes 3-6 months. We monitor your recovery at regular post-operative visits.'
      }
    ],
    relatedServices: ['comprehensive-eye-exam', 'dry-eye-specialist', 'ortho-k'],
    lastUpdated: '2025-11-21'
  },
  {
    slug: 'glaucoma-management',
    name: 'Glaucoma Screening & Management',
    shortName: 'Glaucoma',
    description: 'Advanced glaucoma screening, diagnosis, and ongoing management to protect your vision from this silent sight-stealer.',
    metaDescription: 'Glaucoma screening & treatment in Orange County. Advanced diagnostics, early detection & ongoing management. Protect your vision. Schedule your screening.',
    keywords: ['glaucoma screening', 'glaucoma treatment', 'glaucoma specialist', 'glaucoma management', 'glaucoma Orange County'],
    heroImage: '/images/services/glaucoma-management-orange-county.jpg',
    icon: '/images/icons/glaucoma-icon.svg',
    overview: `Glaucoma is called the "silent thief of sight" because it often has no symptoms until significant, irreversible vision loss has occurred. At EyeCare Center of Orange County, we use advanced diagnostic technology to detect glaucoma at its earliest stages when treatment is most effective.

Our comprehensive glaucoma services include screening, diagnosis, and ongoing management with the latest treatments. Early detection and proper management can prevent vision loss and maintain your quality of life. If you have risk factors for glaucoma or haven't been screened recently, we encourage you to schedule an evaluation.`,
    benefits: [
      'Advanced OCT imaging for early detection',
      'Visual field testing to monitor peripheral vision',
      'Intraocular pressure monitoring',
      'Multiple treatment options available',
      'Coordination with glaucoma surgeons when needed',
      'Ongoing monitoring and management'
    ],
    candidateCriteria: [
      'Adults over 40 (risk increases with age)',
      'Family history of glaucoma',
      'African American, Hispanic, or Asian heritage',
      'High eye pressure',
      'Previous eye injury',
      'Long-term corticosteroid use'
    ],
    notCandidates: [],
    process: [
      {
        step: 1,
        title: 'Comprehensive Screening',
        description: 'Intraocular pressure measurement, optic nerve evaluation, and peripheral vision testing to assess your glaucoma risk.',
        duration: '30-45 minutes'
      },
      {
        step: 2,
        title: 'Advanced Diagnostics',
        description: 'If indicated, OCT imaging of the optic nerve and retinal nerve fiber layer, plus detailed visual field testing.',
        duration: '30-45 minutes'
      },
      {
        step: 3,
        title: 'Treatment Planning',
        description: 'If glaucoma is detected, we develop a treatment plan including eye drops, laser options, or surgical referral as appropriate.',
        duration: '20 minutes'
      },
      {
        step: 4,
        title: 'Ongoing Management',
        description: 'Regular monitoring visits to ensure treatment is working and adjust as needed. Frequency depends on disease severity.',
        duration: '20-30 minutes per visit'
      }
    ],
    cost: {
      rangeMin: 150,
      rangeMax: 400,
      insuranceCoverage: 'Glaucoma screening and management is typically covered by medical insurance when a diagnosis or risk factors are present. We can verify your specific coverage.',
      financingAvailable: false
    },
    faqs: [
      {
        question: 'What is glaucoma?',
        answer: 'Glaucoma is a group of eye diseases that damage the optic nerve, usually due to elevated eye pressure. This damage causes gradual, irreversible vision loss starting with peripheral vision. Early detection and treatment can prevent or slow progression.'
      },
      {
        question: 'Who is at risk for glaucoma?',
        answer: 'Risk factors include age over 40, family history, African American/Hispanic/Asian heritage, high eye pressure, thin corneas, previous eye injuries, and long-term steroid use. Regular screening is important for anyone with risk factors.'
      },
      {
        question: 'Can glaucoma be cured?',
        answer: 'Glaucoma cannot be cured, but it can be effectively controlled. Treatment focuses on lowering eye pressure to prevent further optic nerve damage. With proper treatment, most patients maintain useful vision throughout their lives.'
      },
      {
        question: 'What treatments are available for glaucoma?',
        answer: 'Treatment typically starts with medicated eye drops to lower eye pressure. If drops are insufficient, laser treatments (SLT) or surgical options may be recommended. We coordinate with glaucoma surgeons for advanced cases.'
      },
      {
        question: 'How often should I be screened for glaucoma?',
        answer: 'Adults over 40 should have a comprehensive eye exam every 1-2 years that includes glaucoma screening. Those with risk factors or diagnosed glaucoma need more frequent monitoring—typically every 3-6 months.'
      }
    ],
    relatedServices: ['comprehensive-eye-exam', 'macular-degeneration-care', 'diabetic-retinopathy-treatment'],
    lastUpdated: '2025-11-21'
  }
];

import { services as basicServices } from './services';

/**
 * Get enhanced service by slug
 */
export function getEnhancedServiceBySlug(slug: string): ServiceData | undefined {
  return enhancedServices.find(s => s.slug === slug);
}

/**
 * Get all enhanced services
 */
export function getAllEnhancedServices(): ServiceData[] {
  return enhancedServices;
}

/**
 * Smart getter that returns enhanced data if available, or hydrates basic data if not.
 */
export function getSmartServiceBySlug(slug: string): ServiceData | undefined {
  // 1. Try enhanced first
  const enhanced = enhancedServices.find(s => s.slug === slug);
  if (enhanced) return enhanced;

  // 2. Fallback to basic
  const basic = basicServices.find(s => s.slug === slug);
  if (!basic) return undefined;

  // 3. Hydrate basic service
  return {
    slug: basic.slug,
    name: basic.name,
    shortName: basic.name,
    description: basic.description,
    metaDescription: `Expert ${basic.name} in Orange County. Comprehensive care and personalized treatment from Dr. Bonakdar. Schedule your consultation today.`,
    keywords: [basic.name.toLowerCase(), `${basic.name.toLowerCase()} orange county`, 'eye doctor near me'],
    heroImage: '/images/hero-background.png', // Default
    icon: '/images/icons/eye-exam-icon.svg', // Default
    overview: `${basic.name} is a specialized service offered at EyeCare Center of Orange County. Dr. Bonakdar has over 35 years of experience providing ${basic.name.toLowerCase()} to patients throughout Orange County. We use the latest technology and techniques to ensure the best possible outcomes for your vision and eye health.`,
    benefits: [
      'Expert diagnosis and treatment',
      'Personalized care plan',
      'State-of-the-art technology',
      'Experienced specialist',
      'Convenient Orange County location'
    ],
    candidateCriteria: [
      'Patients experiencing relevant symptoms',
      'Referrals from other doctors',
      'Those seeking a second opinion'
    ],
    notCandidates: [],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'Comprehensive evaluation to assess your needs and determine the best course of action.',
        duration: '45-60 minutes'
      },
      {
        step: 2,
        title: 'Treatment Planning',
        description: 'Developing a customized plan tailored to your specific condition and lifestyle.',
        duration: '15-30 minutes'
      },
      {
        step: 3,
        title: 'Treatment/Procedure',
        description: 'Expert delivery of care using advanced techniques and equipment.',
        duration: 'Varies'
      },
      {
        step: 4,
        title: 'Follow-Up',
        description: 'Ongoing monitoring to ensure optimal results and eye health.',
        duration: '15-30 minutes'
      }
    ],
    cost: {
      rangeMin: 150,
      rangeMax: 500,
      insuranceCoverage: 'Coverage varies by plan. We accept most major insurance and can verify your benefits.',
      financingAvailable: true
    },
    faqs: [
      {
        question: `What is included in ${basic.name}?`,
        answer: `${basic.name} includes a comprehensive evaluation, diagnosis, and personalized treatment plan. Dr. Bonakdar will explain every step of the process.`
      },
      {
        question: 'Do I need a referral?',
        answer: 'In most cases, a referral is not required. You can schedule an appointment directly with our office.'
      },
      {
        question: 'Is this covered by insurance?',
        answer: 'Many services are covered by medical or vision insurance. We recommend calling our office so we can verify your specific coverage details.'
      }
    ],
    relatedServices: ['comprehensive-eye-exam'],
    lastUpdated: '2025-11-21'
  };
}

export const allSmartServices = [
  ...enhancedServices,
  ...basicServices
    .filter(bs => !enhancedServices.find(es => es.slug === bs.slug))
    .map(bs => getSmartServiceBySlug(bs.slug)!)
];
