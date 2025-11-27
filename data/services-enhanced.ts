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
import { services as basicServices } from './services';

export const enhancedServices: ServiceData[] = [
  {
    slug: 'keratoconus-treatment',
    name: 'Keratoconus Treatment',
    shortName: 'Keratoconus',
    description: 'Advanced diagnosis and treatment of keratoconus using scleral contact lenses, corneal cross-linking, and other specialized therapies.',
    metaDescription: 'Expert keratoconus treatment in Orange County. Scleral lenses, corneal cross-linking & specialty care from a leading keratoconus specialist. 35+ years experience.',
    keywords: ['keratoconus treatment', 'keratoconus specialist', 'scleral lenses keratoconus', 'corneal cross-linking', 'keratoconus Orange County'],
    heroImage: '/images/services/keratoconus-specialist-treatment-oc.webp',
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
    heroImage: '/images/services/dry-eye-treatment-therapy-orange-county.webp',
    icon: '/images/icons/dry-eye-icon.svg',
    overview: `Dry eye disease affects millions of Americans, causing discomfort, blurred vision, and reduced quality of life. At EyeCare Center of Orange County, we go beyond basic dry eye treatment to address the root cause of your symptoms.

Our dry eye specialist offers advanced treatments including IPL (Intense Pulsed Light) therapy, one of the most effective treatments for meibomian gland dysfunction—the leading cause of dry eye. Whether your dry eye is caused by environmental factors, screen use, or underlying medical conditions, we create a personalized treatment plan to provide lasting relief. For severe cases, we also offer specialized scleral lenses that bathe the eye in moisture for all-day comfort.`,
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
    heroImage: '/images/services/scleral-contact-lenses-keratoconus.webp',
    icon: '/images/icons/scleral-lens-icon.svg',
    overview: `Scleral contact lenses are large-diameter gas permeable lenses that vault over the entire cornea, providing exceptional vision and comfort for patients who cannot achieve good results with traditional contact lenses or glasses.

At EyeCare Center of Orange County, Dr. Bonakdar has over 35 years of experience fitting scleral lenses for keratoconus, post-surgical complications, severe dry eye, and other complex corneal conditions. We utilize the latest lens technologies including Multifocal, Toric, and HOA (Higher Order Aberration) correction to provide not just fit, but superior visual quality. Our advanced fitting technology and extensive lens inventory allow us to achieve optimal fits for even the most challenging cases.`,
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
    heroImage: '/images/services/optometry-patient-care-ai-generated.webp',
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
    heroImage: '/images/services/orthokeratology-overnight-vision-correction.webp',
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
    heroImage: '/images/services/lasik-laser-eye-surgery-orange-county.webp',
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
    heroImage: '/images/services/glaucoma-management-orange-county.webp',
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
  },
  {
    slug: 'stellest-lenses',
    name: 'Essilor Stellest™ Lenses',
    shortName: 'Stellest Lenses',
    description: 'Revolutionary myopia management lenses that slow down nearsightedness in children.',
    metaDescription: 'Essilor Stellest lenses for myopia control in children. Slow down nearsightedness by 67% with H.A.L.T. technology. Expert fitting in Orange County.',
    keywords: ['stellest', 'myopia control', 'essilor', 'halt technology', 'nearsightedness'],
    overview: 'Essilor Stellest™ lenses are a game-changer in the fight against myopia (nearsightedness) in children. Using exclusive H.A.L.T. technology (Highly Aspherical Lenslet Target), these lenses create a volume of signal in the eye that slows down eye elongation. Clinical trials show that Stellest lenses slow down myopia progression by 67% on average compared to single vision lenses when worn 12 hours a day.',
    benefits: [
      'Slows down myopia progression by 67% on average',
      'Corrects vision as effectively as single vision lenses',
      'Aesthetic, safe, and simple solution for children',
      'High-impact resistance polycarbonate material',
      'Full UV protection'
    ],
    candidateCriteria: [
      'Children with myopia (nearsightedness)',
      'Children whose myopia is progressing rapidly',
      'Parents concerned about their child\'s long-term eye health'
    ],
    notCandidates: [
      'Children with stable vision (preventive use discussed)',
      'Adults (designed specifically for growing eyes)'
    ],
    process: [
      {
        step: 1,
        title: 'Comprehensive Exam',
        description: 'Detailed assessment of your child\'s vision and myopia progression risk.',
        duration: '45-60 minutes'
      },
      {
        step: 2,
        title: 'Lens Fitting',
        description: 'Precise measurements to ensure the H.A.L.T. technology is perfectly aligned.',
        duration: '30 minutes'
      },
      {
        step: 3,
        title: 'Follow-up Care',
        description: 'Regular monitoring to track the effectiveness of the treatment.',
        duration: '15-30 minutes'
      }
    ],
    cost: {
      insuranceCoverage: 'Insurance may cover a portion of the frame and exam. These are premium specialty lenses.',
      financingAvailable: true,
      financingDetails: 'CareCredit available'
    },
    faqs: [
      {
        question: 'How do Stellest lenses work?',
        answer: 'They use a constellation of 1021 invisible lenslets to create a signal that slows down eye growth while providing sharp vision through the center.'
      },
      {
        question: 'Are they comfortable for children?',
        answer: 'Yes, they look and feel like regular glasses and adaptation is very quick, usually within a few days.'
      }
    ],
    relatedServices: ['myopia-management', 'comprehensive-eye-exams'],
    lastUpdated: '2025-11-24'
  },
  {
    slug: 'varilux-xr',
    name: 'Varilux® XR series™',
    shortName: 'Varilux XR',
    description: 'The first eye-responsive progressive lens powered by behavioral artificial intelligence.',
    metaDescription: 'Varilux XR series progressive lenses. AI-powered eye-responsive lenses for instant sharpness in motion. Premium progressive lenses in Orange County.',
    keywords: ['varilux xr', 'progressive lenses', 'essilor', 'behavioral ai', 'presbyopia'],
    overview: 'Varilux® XR series™ is the latest innovation in progressive lenses, designed to respond to the way your eyes actually move. Using behavioral AI and data from over 1 million wearers, these lenses predict your visual behavior to provide instant sharpness even in motion. They offer a 49% increase in volume of vision compared to the previous generation.',
    benefits: [
      'Instant sharpness even in motion',
      'Seamless transitions from near to far',
      'Expanded field of vision',
      'Reduced "swim" effect',
      'Personalized to your visual behavior'
    ],
    candidateCriteria: [
      'Presbyopes seeking the best possible vision',
      'Active individuals who need sharp vision while moving',
      'Those who have struggled with adapting to progressives in the past'
    ],
    notCandidates: [
      'Individuals who require single vision correction only',
      'Those with specific binocular vision disorders (case by case)'
    ],
    process: [
      {
        step: 1,
        title: 'Digital Measurements',
        description: 'We use advanced digital tools to measure your eye anatomy and visual behavior.',
        duration: '15-20 minutes'
      },
      {
        step: 2,
        title: 'AI Optimization',
        description: 'Your lenses are digitally surfaced using a digital twin of your visual profile.',
        duration: 'Lab processing time'
      },
      {
        step: 3,
        title: 'Professional Fitting',
        description: 'Expert adjustment to ensure optimal performance.',
        duration: '15-30 minutes'
      }
    ],
    cost: {
      insuranceCoverage: 'VSP and EyeMed accepted. Premium lens copays may apply.',
      financingAvailable: true
    },
    faqs: [
      {
        question: 'What makes Varilux XR different?',
        answer: 'It is the first lens to use behavioral AI to predict how you look at things, ensuring your vision is sharp instantly as you move your eyes.'
      }
    ],
    relatedServices: ['comprehensive-eye-exams', 'optical-lenses'],
    lastUpdated: '2025-11-24'
  },
  {
    slug: 'zeiss-smartlife',
    name: 'ZEISS SmartLife Lenses',
    shortName: 'ZEISS SmartLife',
    description: 'Lenses designed for a connected, on-the-move lifestyle.',
    metaDescription: 'ZEISS SmartLife lenses optimized for digital lifestyles. Clear vision for smartphones and dynamic activities. German engineering in Orange County.',
    keywords: ['zeiss', 'smartlife', 'digital lenses', 'german engineering', 'optics'],
    overview: 'ZEISS SmartLife lenses are designed for modern, dynamic visual behavior. We are constantly connected, looking at smartphones, laptops, and the world around us. SmartLife lenses account for this by optimizing the lens design for frequent gaze changes and a wider range of viewing distances.',
    benefits: [
      'Optimized for digital device use',
      'Smoother transitions between distances',
      'Wider fields of view',
      'Adaptable to your age and visual needs',
      'Available in Single Vision, Digital, and Progressive designs'
    ],
    candidateCriteria: [
      'Anyone who uses digital devices frequently',
      'People with an active, on-the-go lifestyle',
      'Those looking for premium German optical engineering'
    ],
    notCandidates: [
      'None specifically; suitable for most patients'
    ],
    process: [
      {
        step: 1,
        title: 'Lifestyle Analysis',
        description: 'We discuss your daily activities and digital device usage.',
        duration: '10-15 minutes'
      },
      {
        step: 2,
        title: 'Precision Fitting',
        description: 'Exact measurements to align the lens optics with your eyes.',
        duration: '15-20 minutes'
      }
    ],
    cost: {
      insuranceCoverage: 'Insurance accepted. Premium lens options available.',
      financingAvailable: true
    },
    faqs: [
      {
        question: 'Is SmartLife only for progressives?',
        answer: 'No, ZEISS SmartLife is available for single vision wearers (younger patients) and digital lens wearers (pre-presbyopes) as well.'
      }
    ],
    relatedServices: ['comprehensive-eye-exams', 'optical-lenses'],
    lastUpdated: '2025-11-24'
  },
  {
    slug: 'shamir-autograph',
    name: 'Shamir Autograph Intelligence™',
    shortName: 'Shamir Autograph',
    description: 'AI-driven progressive lenses that adapt to your "Visual Age".',
    metaDescription: 'Shamir Autograph Intelligence progressive lenses. AI-driven design matching your Visual Age. Premium optics in Orange County.',
    keywords: ['shamir', 'autograph intelligence', 'visual age', 'ai lenses', 'progressive'],
    overview: 'Shamir Autograph Intelligence™ uses Big Data and Artificial Intelligence to provide a lens design that matches your "Visual Age". It recognizes that a 45-year-old uses their eyes differently than a 65-year-old (e.g., more smartphone use vs. more reading). This lens adapts the power distribution to match your specific lifestyle needs.',
    benefits: [
      'Matches your specific "Visual Age" profile',
      'Easier focus on digital devices',
      'Smooth, soft transitions',
      'High-tech personalization',
      'Great for first-time progressive wearers'
    ],
    candidateCriteria: [
      'Progressive lens wearers of all ages',
      'Those who want a lens tailored to their specific life stage',
      'Heavy digital device users'
    ],
    notCandidates: [
      'Single vision patients (unless needing anti-fatigue support)'
    ],
    process: [
      {
        step: 1,
        title: 'Visual Age Assessment',
        description: 'We determine your visual needs based on your age and lifestyle.',
        duration: '10-15 minutes'
      },
      {
        step: 2,
        title: 'Custom Fabrication',
        description: 'Lenses are digitally surfaced to your unique prescription.',
        duration: 'Lab processing time'
      }
    ],
    cost: {
      insuranceCoverage: 'Insurance accepted. Premium progressive lens.',
      financingAvailable: true
    },
    faqs: [
      {
        question: 'What is Visual Age?',
        answer: 'It refers to the physiological age of your eyes and how that correlates with your daily visual habits and focusing needs.'
      }
    ],
    relatedServices: ['comprehensive-eye-exams', 'optical-lenses'],
    lastUpdated: '2025-11-24'
  },
  {
    slug: 'eyezen',
    name: 'Essilor Eyezen® Lenses',
    shortName: 'Eyezen',
    description: 'Enhanced single vision lenses that relax your eyes and filter blue light.',
    metaDescription: 'Essilor Eyezen lenses for digital eye strain. Blue light filtering and accommodative support. Computer glasses in Orange County.',
    keywords: ['eyezen', 'computer glasses', 'blue light', 'digital eye strain', 'essilor'],
    overview: 'Eyezen® lenses are designed for the digital age. They are not just standard glasses; they are enhanced single vision lenses that help reduce eye strain caused by digital devices. They feature a small amount of accommodative relief at the bottom of the lens to help your eyes relax when focusing on screens, and they include built-in blue light filtering.',
    benefits: [
      'Reduces digital eye strain',
      'Filters harmful blue-violet light',
      'Helps eyes relax when reading or using screens',
      'Improves visual comfort throughout the day',
      'Available for non-prescription wearers too'
    ],
    candidateCriteria: [
      'Students and young professionals',
      'Gamers and heavy computer users',
      'Anyone experiencing digital eye strain',
      'Single vision wearers aged 18-50'
    ],
    notCandidates: [
      'Presbyopes requiring full progressive lenses'
    ],
    process: [
      {
        step: 1,
        title: 'Prescription Check',
        description: 'We verify your distance prescription.',
        duration: '15-20 minutes'
      },
      {
        step: 2,
        title: 'Relief Power Selection',
        description: 'We determine the appropriate amount of accommodative support (0.4, 0.6, 0.85, etc.).',
        duration: '5-10 minutes'
      }
    ],
    cost: {
      insuranceCoverage: 'Covered by most vision plans as single vision or computer lenses.',
      financingAvailable: true
    },
    faqs: [
      {
        question: 'Can I get Eyezen without a prescription?',
        answer: 'Yes, Eyezen lenses are great for people with 20/20 vision who want to protect their eyes from digital strain.'
      }
    ],
    relatedServices: ['comprehensive-eye-exams', 'optical-lenses'],
    lastUpdated: '2025-11-24'
  },
  {
    slug: 'orthokeratology',
    name: 'Orthokeratology (Ortho-K)',
    shortName: 'Orthokeratology',
    description: 'Overnight contact lenses that reshape your cornea while you sleep, providing clear vision all day without glasses or daytime contacts.',
    metaDescription: 'Orthokeratology (Ortho-K) lenses in Orange County. Wake up with clear vision—no glasses or contacts during the day. Myopia control for children. Expert fitting.',
    keywords: ['orthokeratology', 'ortho-k lenses', 'overnight contacts', 'myopia control', 'orthokeratology Orange County', 'corneal reshaping'],
    heroImage: '/images/services/orthokeratology-overnight-vision-correction.webp',
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
        description: 'Comprehensive eye exam with corneal topography to determine if you are a good Ortho-K candidate.',
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
        description: 'Wear your lenses overnight and return in the morning to check results.',
        duration: '30 minutes follow-up'
      },
      {
        step: 4,
        title: 'Optimization & Training',
        description: 'Lens adjustments if needed and comprehensive care training.',
        duration: 'Varies'
      }
    ],
    cost: {
      rangeMin: 1200,
      rangeMax: 2500,
      insuranceCoverage: 'Some vision plans include Ortho-K benefits. Coverage varies by plan.',
      financingAvailable: true,
      financingDetails: 'CareCredit accepted. Package pricing typically includes fitting, lenses, and first year of follow-up care.'
    },
    faqs: [
      {
        question: 'How does orthokeratology work?',
        answer: 'Ortho-K lenses gently reshape your cornea while you sleep using hydraulic forces under the lens. The corneal reshaping temporarily corrects your refractive error, allowing clear vision when you remove the lenses in the morning.'
      },
      {
        question: 'Is orthokeratology safe for children?',
        answer: 'Yes, Ortho-K is very safe for children when properly fitted and monitored. It is FDA-approved and provides the added benefit of slowing myopia progression.'
      }
    ],
    relatedServices: ['comprehensive-eye-exam', 'lasik-consultation', 'ortho-k'],
    lastUpdated: '2025-11-26'
  },
  {
    slug: 'scleral-lenses',
    name: 'Scleral Contact Lenses',
    shortName: 'Scleral Lenses',
    description: 'Custom-designed scleral lenses for irregular corneas, dry eye, and complex vision needs. Expert fitting from an experienced specialist.',
    metaDescription: 'Expert scleral lens fitting in Orange County. Custom scleral contacts for keratoconus, dry eye & irregular corneas. 35+ years experience.',
    keywords: ['scleral lenses', 'scleral contact lenses', 'scleral lenses keratoconus', 'scleral lenses dry eye', 'custom scleral lenses Orange County'],
    heroImage: '/images/services/scleral-contact-lenses-keratoconus.webp',
    icon: '/images/icons/scleral-lens-icon.svg',
    overview: `Scleral contact lenses are large-diameter gas permeable lenses that vault over the entire cornea, providing exceptional vision and comfort for patients who cannot achieve good results with traditional contact lenses or glasses.

At EyeCare Center of Orange County, Dr. Bonakdar has over 35 years of experience fitting scleral lenses for keratoconus, post-surgical complications, severe dry eye, and other complex corneal conditions.`,
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
        description: 'Advanced corneal topography and scleral mapping to design your custom lenses.',
        duration: '60 minutes'
      },
      {
        step: 2,
        title: 'Diagnostic Fitting',
        description: 'Trial fitting with multiple diagnostic lenses to determine optimal vault, landing zone, and vision correction.',
        duration: '90 minutes'
      },
      {
        step: 3,
        title: 'Lens Delivery & Training',
        description: 'Delivery of your custom lenses with comprehensive insertion, removal, and care training.',
        duration: '60 minutes'
      },
      {
        step: 4,
        title: 'Follow-Up Optimization',
        description: 'Fine-tuning appointments to optimize fit and vision.',
        duration: '30 minutes per visit'
      }
    ],
    cost: {
      rangeMin: 1800,
      rangeMax: 4000,
      insuranceCoverage: 'Vision insurance medical necessity provisions may cover scleral lenses for qualifying conditions.',
      financingAvailable: true,
      financingDetails: 'CareCredit accepted. Payment plans available for lens costs.'
    },
    faqs: [
      {
        question: 'What are scleral contact lenses?',
        answer: 'Scleral lenses are large-diameter gas permeable contact lenses that rest on the white part of the eye (sclera) and vault over the entire cornea, providing clear vision and comfort for irregular corneas and dry eyes.'
      },
      {
        question: 'How long can I wear scleral lenses each day?',
        answer: 'Most scleral lens wearers can comfortably wear their lenses 12-16 hours per day. The fluid reservoir helps maintain hydration and comfort throughout the day.'
      }
    ],
    relatedServices: ['keratoconus-treatment', 'dry-eye-specialist', 'scleral-lens-fitting'],
    lastUpdated: '2025-11-26'
  },
  {
    slug: 'corneal-cross-linking',
    name: 'Corneal Cross-Linking (CXL)',
    shortName: 'Cross-Linking',
    description: 'FDA-approved treatment to halt the progression of keratoconus by strengthening the cornea with riboflavin and UV light.',
    metaDescription: 'Corneal cross-linking (CXL) for keratoconus in Orange County. FDA-approved treatment to stop corneal progression. Expert evaluation and co-management.',
    keywords: ['corneal cross-linking', 'CXL treatment', 'keratoconus cross-linking', 'corneal collagen crosslinking', 'stop keratoconus progression', 'CXL Orange County'],
    heroImage: '/images/services/corneal-cross-linking-keratoconus.webp',
    icon: '/images/icons/cross-linking-icon.svg',
    overview: `Corneal cross-linking (CXL) is an FDA-approved treatment that strengthens the cornea to halt the progression of keratoconus. The procedure uses riboflavin (vitamin B2) eye drops and controlled UV light to create new bonds between collagen fibers in the cornea, making it stronger and more stable.

At EyeCare Center of Orange County, we provide comprehensive evaluation for cross-linking candidacy and coordinate care with top corneal surgeons who perform the procedure. We manage your pre-operative assessment and post-operative care locally for your convenience.`,
    benefits: [
      'FDA-approved to halt keratoconus progression',
      'Prevents need for corneal transplant in many cases',
      'Minimally invasive outpatient procedure',
      'One-time treatment with long-lasting results',
      'Can be combined with other treatments',
      'Preserves your natural cornea'
    ],
    candidateCriteria: [
      'Diagnosed progressive keratoconus',
      'Corneal ectasia after LASIK or PRK',
      'Adequate corneal thickness (>400 microns)',
      'No active corneal infections',
      'Age typically under 35-40 (when progression is common)'
    ],
    notCandidates: [
      'Very thin corneas (<400 microns)',
      'Severe corneal scarring',
      'Active eye infections or inflammation',
      'Pregnancy or nursing'
    ],
    process: [
      {
        step: 1,
        title: 'Comprehensive Evaluation',
        description: 'Advanced corneal imaging (Pentacam) to assess keratoconus severity, progression, and corneal thickness for CXL candidacy.',
        duration: '60-90 minutes'
      },
      {
        step: 2,
        title: 'Surgeon Referral',
        description: 'If you are a candidate, we refer you to one of our trusted corneal surgeons who specialize in cross-linking.',
        duration: 'Varies'
      },
      {
        step: 3,
        title: 'CXL Procedure',
        description: 'Outpatient procedure performed by the corneal surgeon. Riboflavin drops are applied, followed by controlled UV light exposure.',
        duration: '60-90 minutes'
      },
      {
        step: 4,
        title: 'Post-Operative Care',
        description: 'We provide your follow-up care locally, monitoring healing and visual recovery at regular intervals.',
        duration: '15-30 minutes per visit'
      }
    ],
    recovery: {
      timeline: 'Visual recovery over 1-3 months; full corneal stabilization over 6-12 months',
      expectations: [
        'Mild discomfort for first few days',
        'Vision may be blurry for several weeks',
        'Gradual improvement over 1-3 months',
        'Cornea continues strengthening for up to a year'
      ],
      restrictions: [
        'No eye rubbing',
        'Avoid water in eyes for one week',
        'Wear sunglasses outdoors',
        'Use prescribed eye drops as directed'
      ],
      followUp: 'Follow-up at 1 day, 1 week, 1 month, 3 months, 6 months, and 1 year'
    },
    cost: {
      rangeMin: 2500,
      rangeMax: 4000,
      insuranceCoverage: 'Many insurance plans now cover FDA-approved cross-linking. We can verify your benefits and provide documentation for prior authorization.',
      financingAvailable: true,
      financingDetails: 'CareCredit accepted. Surgeon financing options also available.'
    },
    faqs: [
      {
        question: 'What is corneal cross-linking?',
        answer: 'Corneal cross-linking is a minimally invasive procedure that strengthens the cornea using riboflavin drops and UV light. It creates new bonds between collagen fibers, halting the progression of keratoconus.'
      },
      {
        question: 'Does cross-linking cure keratoconus?',
        answer: 'Cross-linking does not cure keratoconus, but it halts progression in most patients. After CXL, you may still need glasses, contact lenses, or scleral lenses for optimal vision, but your prescription should remain more stable.'
      },
      {
        question: 'Is cross-linking painful?',
        answer: 'The procedure itself is not painful due to numbing drops. Some patients experience discomfort, light sensitivity, and tearing for 2-3 days after. Pain medication and lubricating drops help manage symptoms.'
      },
      {
        question: 'How long does cross-linking last?',
        answer: 'Cross-linking provides long-lasting results. Studies show the strengthening effect persists for many years. Most patients only need one treatment per eye.'
      },
      {
        question: 'Can I have cross-linking if I wear scleral lenses?',
        answer: 'Yes! Many of our scleral lens patients have also had cross-linking. CXL stabilizes the cornea while scleral lenses provide clear vision. The two treatments work well together.'
      }
    ],
    relatedServices: ['keratoconus-treatment', 'scleral-lens-fitting', 'scleral-lenses'],
    lastUpdated: '2025-11-26'
  }
];

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
      }
    ],
    relatedServices: ['comprehensive-eye-exams'],
    lastUpdated: '2025-11-21'
  };
}

export const allSmartServices = [
  ...enhancedServices,
  ...basicServices
    .filter(bs => !enhancedServices.find(es => es.slug === bs.slug))
    .map(bs => getSmartServiceBySlug(bs.slug)!)
];
