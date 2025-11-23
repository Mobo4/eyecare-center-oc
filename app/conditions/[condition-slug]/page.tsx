import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Calendar, Eye, AlertCircle, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import { conditions as fullConditions, getConditionBySlug as getFullConditionBySlug, Condition, ConditionSeverity } from '@/data/conditions-full';
import { allConditions, SearchCondition } from '@/data/conditions-search';
import { cities } from '@/data/cities';
import { generateBreadcrumbSchema, generateMedicalConditionSchema } from '@/lib/schema';
import Script from 'next/script';
import { CONTACT_INFO } from '@/lib/contact-info';

// Helper to create a full Condition from SearchCondition for pages not in conditions-full.ts
const createConditionFromSearch = (search: SearchCondition): Condition => ({
  name: search.name,
  slug: search.slug,
  category: search.category,
  severity: 'Moderate' as ConditionSeverity,
  description: `${search.name} is an eye condition that affects vision and overall eye health. Our board-certified specialists at EyeCare Center of Orange County provide comprehensive diagnosis and personalized treatment plans. Early detection and proper treatment can help manage symptoms and prevent progression.`,
  symptoms: [
    'Visual disturbances or changes in vision',
    'Eye discomfort or irritation',
    'Changes in eye appearance',
    'Difficulty with daily visual tasks',
    ...(search.aliases?.map(a => `Also known as: ${a}`) || [])
  ],
  treatments: [
    'Comprehensive eye examination and diagnosis',
    'Personalized treatment plan',
    'Medical management as appropriate',
    'Follow-up care and monitoring',
    'Lifestyle and preventive recommendations'
  ],
  seoTitle: `${search.name} Treatment | Orange County Eye Care`,
  seoDescription: `Expert ${search.name} diagnosis and treatment in Orange County. Comprehensive care from experienced eye specialists. Call (949) 364-0008.`,
  keywords: search.aliases || [],
});

// Combined function to find condition from full list or create from search
const getConditionBySlug = (slug: string): Condition | undefined => {
  // Try full conditions first (has detailed info)
  let condition = getFullConditionBySlug(slug);
  if (condition) return condition;

  // Try to find in search conditions and create a page
  const searchCondition = allConditions.find(c => c.slug === slug);
  if (searchCondition) {
    return createConditionFromSearch(searchCondition);
  }

  return undefined;
};

// Get all condition slugs for static generation
const getAllConditionSlugs = (): string[] => {
  const fullSlugs = fullConditions.map(c => c.slug);
  const searchSlugs = allConditions.map(c => c.slug);
  // Combine and deduplicate
  return [...new Set([...fullSlugs, ...searchSlugs])];
};

interface Props {
  params: Promise<{ 'condition-slug': string }>;
}

export async function generateStaticParams() {
  const allSlugs = getAllConditionSlugs();
  return allSlugs.map((slug) => ({
    'condition-slug': slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { 'condition-slug': conditionSlug } = await params;
  const condition = getConditionBySlug(conditionSlug);

  if (!condition) {
    return { title: 'Condition Not Found' };
  }

  const title = `${condition.name}: Symptoms, Causes & Treatment | EyeCare Center OC`;
  const description = `Comprehensive guide to ${condition.name.toLowerCase()}. Learn about symptoms, causes, and treatment options from Orange County's leading eye care specialists. Call ${CONTACT_INFO.primaryPhone.display}.`;
  const canonicalUrl = `https://eyecarecenteroc.com/conditions/${conditionSlug}`;

  return {
    title,
    description,
    keywords: [
      condition.name.toLowerCase(),
      `${condition.name.toLowerCase()} symptoms`,
      `${condition.name.toLowerCase()} treatment`,
      `${condition.name.toLowerCase()} causes`,
      `what is ${condition.name.toLowerCase()}`,
      condition.category.toLowerCase(),
      'eye doctor orange county',
      'ophthalmologist',
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonicalUrl,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ConditionPage({ params }: Props) {
  const { 'condition-slug': conditionSlug } = await params;
  const condition = getConditionBySlug(conditionSlug);

  if (!condition) {
    notFound();
  }

  // Get top 9 cities by population for quick selection
  const topCities = cities
    .sort((a, b) => parseInt(b.population.replace(/,/g, '')) - parseInt(a.population.replace(/,/g, '')))
    .slice(0, 9);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://eyecarecenteroc.com' },
    { name: 'Conditions', url: 'https://eyecarecenteroc.com/conditions' },
    { name: condition.name, url: `https://eyecarecenteroc.com/conditions/${conditionSlug}` },
  ]);

  const medicalConditionSchema = generateMedicalConditionSchema(
    condition.name,
    condition.description,
    `https://eyecarecenteroc.com/conditions/${conditionSlug}`
  );

  // FAQ Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is ${condition.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": condition.description
        }
      },
      {
        "@type": "Question",
        "name": `What are the symptoms of ${condition.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Common symptoms include: ${condition.symptoms.join(', ')}.`
        }
      },
      {
        "@type": "Question",
        "name": `How is ${condition.name} treated?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Treatment options include: ${condition.treatments.join(', ')}.`
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="medical-condition-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-6 h-6 text-eyecare-blue" />
                <span className="text-eyecare-blue font-semibold">{condition.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {condition.name}: Complete Guide to Symptoms, Causes & Treatment
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Expert information about {condition.name.toLowerCase()} from Orange County's leading eye care specialists.
                Learn about symptoms, causes, diagnosis, and the latest treatment options.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={CONTACT_INFO.primaryPhone.href}
                  className="callrail-phone inline-flex items-center justify-center bg-eyecare-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-eyecare-dark-blue transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {CONTACT_INFO.primaryPhone.display}
                </a>
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center bg-white text-eyecare-blue border-2 border-eyecare-blue px-6 py-3 rounded-md font-semibold hover:bg-eyecare-blue hover:text-white transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {/* What Is It */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is {condition.name}?</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {condition.description}
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      At EyeCare Center of Orange County, we specialize in the diagnosis and treatment of {condition.name.toLowerCase()}.
                      Our experienced optometrists use state-of-the-art technology to provide comprehensive care and help preserve your vision.
                    </p>
                  </div>
                </div>

                {/* Symptoms */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Symptoms of {condition.name}</h2>
                  <p className="text-gray-700 mb-6">
                    If you're experiencing any of these symptoms, schedule a comprehensive eye examination:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {condition.symptoms.map((symptom, index) => (
                      <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-eyecare-blue flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Treatment Options */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Options for {condition.name}</h2>
                  <p className="text-gray-700 mb-6">
                    We offer comprehensive treatment options tailored to your specific needs:
                  </p>
                  <div className="space-y-4">
                    {condition.treatments.map((treatment, index) => (
                      <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800 font-semibold">{treatment}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-12 bg-gradient-to-br from-eyecare-blue/5 to-eyecare-light-blue/5 p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose EyeCare Center of Orange County?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Over 30 Years of Experience</h3>
                        <p className="text-gray-700">Dr. Bonakdar has been serving Orange County since 1991 with specialized expertise in {condition.category.toLowerCase()}.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Advanced Diagnostic Technology</h3>
                        <p className="text-gray-700">We utilize the latest equipment for accurate diagnosis and effective treatment of {condition.name.toLowerCase()}.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Personalized Treatment Plans</h3>
                        <p className="text-gray-700">Every patient receives customized care based on their unique needs and condition severity.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Comprehensive Eye Care</h3>
                        <p className="text-gray-700">From diagnosis to treatment and follow-up care, we provide complete support throughout your treatment journey.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">What causes {condition.name}?</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {condition.name} can be caused by various factors including genetics, age, environmental conditions, and underlying health issues.
                        A comprehensive eye examination can help determine the specific cause in your case.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">How is {condition.name} diagnosed?</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Diagnosis involves a thorough eye examination including vision tests, imaging, and specialized diagnostic procedures.
                        Our advanced equipment allows for early detection and accurate diagnosis.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Is {condition.name} preventable?</h3>
                      <p className="text-gray-700 leading-relaxed">
                        While not all cases are preventable, regular eye exams, protective eyewear, proper nutrition, and managing underlying health conditions
                        can help reduce risk factors. Early detection through routine screenings is crucial.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Does insurance cover {condition.name} treatment?</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Most vision and medical insurance plans cover diagnostic exams and medically necessary treatments.
                        We accept most major insurance plans and can help verify your coverage before treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Quick Contact */}
                  <div className="bg-eyecare-blue text-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Schedule Your Consultation</h3>
                    <p className="text-eyecare-lighter-blue mb-4 text-sm">
                      Get expert diagnosis and treatment for {condition.name.toLowerCase()}.
                    </p>
                    <div className="space-y-3">
                      <a
                        href={CONTACT_INFO.primaryPhone.href}
                        className="callrail-phone block w-full bg-white text-eyecare-blue text-center px-4 py-3 rounded-md font-semibold hover:shadow-lg transition-all"
                      >
                        <Phone className="inline w-4 h-4 mr-2" />
                        Call {CONTACT_INFO.primaryPhone.display}
                      </a>
                      <Link
                        href="/book-appointment"
                        className="block w-full bg-eyecare-light-blue text-white text-center px-4 py-3 rounded-md font-semibold hover:bg-eyecare-lighter-blue transition-all"
                      >
                        <Calendar className="inline w-4 h-4 mr-2" />
                        Book Online
                      </Link>
                    </div>
                  </div>

                  {/* Find Treatment Near You */}
                  <div className="bg-gradient-to-br from-eyecare-purple/10 to-eyecare-light-purple/10 border-2 border-eyecare-purple/20 p-6 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-6 h-6 text-eyecare-purple" />
                      <h3 className="text-xl font-bold text-gray-900">Find Treatment Near You</h3>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm">
                      Get local {condition.name.toLowerCase()} treatment information for your city:
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {topCities.slice(0, 6).map((city) => (
                        <Link
                          key={city.slug}
                          href={`/conditions/${conditionSlug}/${city.slug}`}
                          className="flex items-center justify-between p-3 bg-white rounded-md hover:bg-eyecare-purple hover:text-white transition-all group"
                        >
                          <span className="font-semibold">{city.name}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/locations"
                      className="block text-center mt-4 text-eyecare-purple font-semibold hover:underline"
                    >
                      View All Locations →
                    </Link>
                  </div>

                  {/* Related Conditions */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Related Conditions</h3>
                    <div className="space-y-2">
                      {fullConditions
                        .filter(c => c.category === condition.category && c.slug !== condition.slug)
                        .slice(0, 5)
                        .map((relatedCondition) => (
                          <Link
                            key={relatedCondition.slug}
                            href={`/conditions/${relatedCondition.slug}`}
                            className="block text-eyecare-blue hover:text-eyecare-dark-blue text-sm hover:underline"
                          >
                            {relatedCondition.name}
                          </Link>
                        ))}
                      <Link
                        href="/conditions"
                        className="block text-eyecare-blue hover:text-eyecare-dark-blue text-sm font-semibold hover:underline mt-3"
                      >
                        View All Conditions →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-eyecare-blue to-eyecare-dark-blue text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Let {condition.name} Impact Your Vision
            </h2>
            <p className="text-xl text-eyecare-lighter-blue mb-8">
              Schedule your comprehensive eye examination today and get expert diagnosis and treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CONTACT_INFO.primaryPhone.href}
                className="callrail-phone inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-md font-bold text-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                {CONTACT_INFO.primaryPhone.display}
              </a>
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center bg-eyecare-light-blue text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-eyecare-lighter-blue transition-all"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment Online
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
