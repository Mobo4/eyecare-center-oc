export const services = [
  {
    name: 'Keratoconus Treatment',
    slug: 'keratoconus-treatment',
    description: 'Advanced diagnosis and management of Keratoconus using Scleral Lenses and Corneal Cross-Linking.',
  },
  {
    name: 'Dry Eye Specialist',
    slug: 'dry-eye-specialist',
    description: 'Comprehensive evaluation and personalized treatment plans for chronic dry eye syndrome.',
  },
  {
    name: 'Scleral Lens Fitting',
    slug: 'scleral-lens-fitting',
    description: 'Custom-designed scleral lenses for irregular corneas, providing superior comfort and vision.',
  },
  {
    name: 'Comprehensive Eye Exam',
    slug: 'comprehensive-eye-exam',
    description: 'Thorough evaluation of your vision and eye health, including testing for common eye diseases.',
  },
  {
    name: 'LASIK Consultation',
    slug: 'lasik-consultation',
    description: 'Determine if you are a candidate for LASIK or other refractive surgery procedures.',
  },
  // Add 45+ more services to reach the 50+ goal
  {
    name: 'Cataract Surgery',
    slug: 'cataract-surgery',
    description: 'Advanced cataract removal and premium intraocular lens implantation.',
  },
  {
    name: 'Glaucoma Management',
    slug: 'glaucoma-management',
    description: 'Early detection and ongoing treatment to preserve vision for glaucoma patients.',
  },
  {
    name: 'Macular Degeneration Care',
    slug: 'macular-degeneration-care',
    description: 'Monitoring and treatment for both wet and dry age-related macular degeneration (AMD).',
  },
  {
    name: 'Diabetic Retinopathy Treatment',
    slug: 'diabetic-retinopathy-treatment',
    description: 'Managing diabetic eye disease to prevent vision loss.',
  },
  {
    name: 'Ortho-K',
    slug: 'ortho-k',
    description: 'Orthokeratology (Ortho-K) lenses to gently reshape the cornea and correct vision overnight.',
  },
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
