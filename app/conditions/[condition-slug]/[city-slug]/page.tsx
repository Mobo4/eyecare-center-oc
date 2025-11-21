import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Calendar, MapPin, CheckCircle, Eye, AlertCircle } from 'lucide-react';
import { conditions, getConditionBySlug } from '@/data/conditions';
import { cities, getCityBySlug } from '@/data/cities';
import { generateBreadcrumbSchema, generateMedicalConditionSchema } from '@/lib/schema';
import Script from 'next/script';
import { CONTACT_INFO } from '@/lib/contact-info';

interface Props {
  params: { 'condition-slug': string; 'city-slug': string };
}

export async function generateStaticParams() {
  // Generate all condition + city combinations
  // 15 conditions × 64 cities = 960 pages
  const paths = conditions.flatMap(condition =>
    cities.map(city => ({
      'condition-slug': condition.slug,
      'city-slug': city.slug,
    }))
  );

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { 'condition-slug': conditionSlug, 'city-slug': citySlug } = await params;
  const condition = getConditionBySlug(conditionSlug);
  const city = getCityBySlug(citySlug);

  if (!condition || !city) {
    return { title: 'Page Not Found' };
  }
  
  const title = `${condition.name} Treatment in ${city.name}, CA | Eye Doctor Near You`;
  const description = `Expert ${condition.name.toLowerCase()} treatment in ${city.name}, ${city.county}. Serving ${city.neighborhoods.slice(0, 3).join(', ')} and surrounding areas. ${condition.treatments.slice(0, 2).join(', ')}. Call ${CONTACT_INFO.primaryPhone.display}.`;
  const canonicalUrl = `https://eyecarecenteroc.com/conditions/${conditionSlug}/${citySlug}`;

  return {
    title,
    description,
    keywords: [
      `${condition.name.toLowerCase()} ${city.name}`,
      `${condition.name.toLowerCase()} treatment ${city.name}`,
      `eye doctor ${city.name}`,
      `${condition.category.toLowerCase()} ${city.name}`,
      ...city.neighborhoods.map(n => `${condition.name.toLowerCase()} ${n}`),
    ],
    openGraph: { 
      title, 
      description, 
      type: 'website',
      url: canonicalUrl,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function LocalConditionPage({ params }: Props) {
  const { 'condition-slug': conditionSlug, 'city-slug': citySlug } = await params;
  const condition = getConditionBySlug(conditionSlug);
  const city = getCityBySlug(citySlug);

  if (!condition || !city) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://eyecarecenteroc.com' },
    { name: 'Conditions', url: 'https://eyecarecenteroc.com/conditions' },
    { name: condition.name, url: `https://eyecarecenteroc.com/conditions/${conditionSlug}` },
    { name: city.name, url: `https://eyecarecenteroc.com/conditions/${conditionSlug}/${citySlug}` },
  ]);

  const medicalConditionSchema = generateMedicalConditionSchema(
    condition.name,
    `${condition.description} Expert treatment available for ${city.name} residents and surrounding ${city.county} communities.`,
    `https://eyecarecenteroc.com/conditions/${conditionSlug}/${citySlug}`
  );

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
                {condition.name} Treatment in {city.name}, California
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                EyeCare Center of Orange County provides expert diagnosis and treatment for {condition.name.toLowerCase()} for residents of {city.name} and surrounding communities including {city.neighborhoods.slice(0, 3).join(', ')}.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Serving {city.county}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{CONTACT_INFO.primaryPhone.display}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-eyecare-blue text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Schedule Your {condition.name} Consultation in {city.name}</h2>
                <p className="text-eyecare-lighter-blue">Expert care convenient to {city.name} residents.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={CONTACT_INFO.primaryPhone.href}
                  className="callrail-phone inline-flex items-center justify-center bg-white text-eyecare-blue px-6 py-3 rounded-md font-semibold hover:shadow-lg transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {CONTACT_INFO.primaryPhone.display}
                </a>
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center bg-eyecare-light-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-eyecare-lighter-blue transition-all"
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
                {/* About the Condition */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert {condition.name} Care for {city.name} Residents</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {condition.description}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At EyeCare Center of Orange County, we serve patients from {city.name} and throughout {city.county}. 
                    Our practice is conveniently located to serve residents from {city.neighborhoods.slice(0, 4).join(', ')}, 
                    and all surrounding areas with zip codes including {city.zipCodes.slice(0, 5).join(', ')}.
                  </p>
                </div>

                {/* Symptoms Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Symptoms of {condition.name}</h2>
                  <p className="text-gray-700 mb-4">
                    If you're experiencing any of these symptoms in {city.name}, it's important to schedule a comprehensive eye examination:
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Options Available in {city.name}</h2>
                  <p className="text-gray-700 mb-6">
                    We offer comprehensive treatment options for {condition.name.toLowerCase()} to patients from {city.name} and surrounding {city.county} communities:
                  </p>
                  <div className="space-y-4">
                    {condition.treatments.map((treatment, index) => (
                      <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-200">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-gray-800 font-semibold">{treatment}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-12 bg-gradient-to-br from-eyecare-blue/5 to-eyecare-light-blue/5 p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why {city.name} Residents Choose Us for {condition.name} Treatment</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Over 30 Years of Experience</h3>
                        <p className="text-gray-700">Dr. Bonakdar has been serving Orange County since 1995 with specialized expertise in {condition.category.toLowerCase()}.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Convenient to {city.name}</h3>
                        <p className="text-gray-700">Easily accessible from all {city.name} neighborhoods and surrounding areas, making quality eye care convenient for local residents.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Advanced Treatment Options</h3>
                        <p className="text-gray-700">We utilize the latest diagnostic technology and treatment methods for comprehensive {condition.name.toLowerCase()} care.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Insurance Accepted</h3>
                        <p className="text-gray-700">We accept most major vision and medical insurance plans to make care affordable for {city.name} families.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Eye Care for {city.name}</h2>
                  <p className="text-gray-700 mb-4">
                    Whether you've been recently diagnosed with {condition.name.toLowerCase()} or have been managing this condition for years, 
                    our team is dedicated to providing personalized care tailored to your specific needs. We understand that {city.name} residents 
                    value quality, convenience, and compassionate care.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our practice serves patients throughout {city.county}, with many of our patients coming from {city.name} neighborhoods 
                    such as {city.neighborhoods.slice(0, 4).join(', ')}, and more. We're committed to providing accessible, 
                    high-quality eye care to all members of the {city.name} community.
                  </p>
                  <p className="text-gray-700">
                    Don't let {condition.name.toLowerCase()} impact your quality of life. Schedule a comprehensive eye examination today
                    and take the first step toward better vision and eye health. Call us at {CONTACT_INFO.primaryPhone.display} or book your appointment online.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Local Service Area */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Serving {city.name}</h3>
                    <div className="flex items-start gap-4 mb-4">
                      <MapPin className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">{city.name}, California</p>
                        <p className="text-gray-600 text-sm">{city.county}</p>
                        <p className="text-gray-600 text-sm mt-1">Population: {city.population}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Neighborhoods We Serve:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {city.neighborhoods.slice(0, 6).map((neighborhood, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full"></span>
                            {neighborhood}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Zip Codes:</h4>
                      <p className="text-sm text-gray-600">{city.zipCodes.slice(0, 6).join(', ')}</p>
                    </div>
                  </div>

                  {/* CTA Box */}
                  <div className="bg-eyecare-blue text-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Ready to Schedule?</h3>
                    <p className="text-eyecare-lighter-blue mb-4 text-sm">
                      Get expert {condition.name.toLowerCase()} treatment convenient to {city.name}.
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

                  {/* Related Conditions */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Related Conditions</h3>
                    <div className="space-y-2">
                      {conditions
                        .filter(c => c.category === condition.category && c.slug !== condition.slug)
                        .slice(0, 3)
                        .map((relatedCondition) => (
                          <Link
                            key={relatedCondition.slug}
                            href={`/conditions/${relatedCondition.slug}/${citySlug}`}
                            className="block text-eyecare-blue hover:text-eyecare-dark-blue text-sm hover:underline"
                          >
                            {relatedCondition.name} in {city.name}
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
              Schedule Your {condition.name} Appointment in {city.name}
            </h2>
            <p className="text-xl text-eyecare-lighter-blue mb-8">
              Expert diagnosis and treatment from experienced optometrists serving {city.county}.
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

