import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Calendar, MapPin, CheckCircle, Star, Users } from 'lucide-react';
import { getSmartServiceBySlug, allSmartServices } from '@/data/services-enhanced';
import { cities, getCityBySlug, City } from '@/data/cities';
import { CONTACT_INFO } from '@/lib/contact-info';
import ExitIntentPopup from '@/components/ExitIntentPopup';

// Helper to get image for service
const getServiceImage = (slug: string) => {
  if (slug.includes('keratoconus')) return '/images/Keratoconus_eye.avif';
  if (slug.includes('dry-eye')) return '/images/Dryeye_01.avif';
  if (slug.includes('scleral')) return '/images/Scleral_lens_01.avif';
  if (slug.includes('ortho-k')) return '/images/Orthokeratology_topgraphy.avif';
  return '/images/hero-background.png';
};

interface Props {
  params: Promise<{ 'service-slug': string; 'city-slug': string }>;
}

// Orange County as a special region entry
const orangeCountyRegion: City = {
  name: "Orange County",
  slug: "orange-county",
  county: "Orange County",
  population: "3.2 Million+",
  zipCodes: [],
  description: "Orange County is a vibrant region in Southern California, home to over 3 million residents across 34 cities. EyeCare Center of Orange County proudly serves patients throughout the entire county with comprehensive eye care services.",
  neighborhoods: ["North OC", "South OC", "Central OC", "Coastal OC"],
  seoTitle: "Eye Care Orange County | Top Eye Specialist OC",
  seoDescription: "Comprehensive eye care serving all of Orange County. Expert specialists in keratoconus, dry eye, LASIK, and more. Call (949) 364-0008."
};

// Helper to get city or Orange County region
const getCityOrRegion = (slug: string): City | null => {
  if (slug === 'orange-county') {
    return orangeCountyRegion;
  }
  return getCityBySlug(slug) || null;
};

export async function generateStaticParams() {
  // Generate paths for all services × all cities + orange-county
  const allCitySlugs = [...cities.map(c => c.slug), 'orange-county'];

  const paths = allSmartServices.flatMap(service =>
    allCitySlugs.map(citySlug => ({
      'service-slug': service.slug,
      'city-slug': citySlug,
    }))
  );

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { 'service-slug': serviceSlug, 'city-slug': citySlug } = resolvedParams;
  const service = getSmartServiceBySlug(serviceSlug);
  const city = getCityOrRegion(citySlug);

  if (!service || !city) {
    return { title: 'Service Not Found' };
  }

  const isRegion = citySlug === 'orange-county';
  const locationName = isRegion ? 'Orange County' : `${city.name}, CA`;

  const title = `${service.name} in ${locationName} | Top Specialist`;
  const description = `Expert ${service.name.toLowerCase()} treatment in ${locationName}. EyeCare Center of Orange County offers advanced solutions with 35+ years experience. Schedule a consultation today.`;

  return {
    title,
    description,
    keywords: [
      `${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
      `${service.slug} specialist ${city.name.toLowerCase()}`,
      `eye doctor ${city.name.toLowerCase()}`,
      `${service.name.toLowerCase()} near me`,
    ],
    openGraph: { title, description, type: 'website' },
  };
}

export default async function LocalServicePage({ params }: Props) {
  const resolvedParams = await params;
  const { 'service-slug': serviceSlug, 'city-slug': citySlug } = resolvedParams;
  const service = getSmartServiceBySlug(serviceSlug);
  const city = getCityOrRegion(citySlug);

  if (!service || !city) {
    notFound();
  }

  const isRegion = citySlug === 'orange-county';
  const locationName = isRegion ? 'Orange County' : city.name;
  const locationSuffix = isRegion ? '' : ', CA';

  const serviceImage = getServiceImage(service.slug);
  const popupTitle = `Expert ${service.shortName || service.name} Care`;
  const popupDescription = `Looking for the best ${service.name.toLowerCase()} in ${locationName}? Dr. Bonakdar offers personalized treatment plans with over 35 years of experience.`;

  // Use enhanced benefits if available, otherwise fallback
  const serviceBenefits = service.benefits || [
    `Expert ${service.name.toLowerCase()} diagnosis and treatment`,
    '35+ years of specialized experience',
    'State-of-the-art diagnostic equipment',
    'Personalized treatment plans',
    'Convenient location for ' + locationName + ' residents',
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Top {service.name} Specialist in {locationName}{locationSuffix}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                EyeCare Center of Orange County provides expert diagnosis and treatment for {service.name.toLowerCase()} for residents of {locationName} and the surrounding communities. With over 35 years of experience, Dr. Bonakdar has helped thousands of patients achieve better vision.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-eyecare-blue">35+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-3xl font-bold text-eyecare-blue">
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />4.9
                  </div>
                  <div className="text-sm text-gray-600">Patient Rating</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-3xl font-bold text-eyecare-blue">
                    <Users className="w-5 h-5 mr-1" />1000s
                  </div>
                  <div className="text-sm text-gray-600">Patients Helped</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={CONTACT_INFO.primaryPhone.href}
                  className="callrail-phone inline-flex items-center justify-center bg-eyecare-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-eyecare-dark-blue transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {CONTACT_INFO.primaryPhone.display}
                </a>
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center bg-white text-eyecare-blue border-2 border-eyecare-blue px-6 py-3 rounded-lg font-semibold hover:bg-eyecare-blue hover:text-white transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Your Local {service.name} Experts
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                  <p>
                    {service.description}
                  </p>
                  {service.overview && (
                    <div className="mt-4 whitespace-pre-line">
                      {service.overview}
                    </div>
                  )}
                  <p className="mt-4">
                    At EyeCare Center of Orange County, we understand that residents of {locationName} deserve access to world-class eye care close to home. Our practice, conveniently located in Santa Ana, serves patients from throughout {isRegion ? 'the county' : city.name + ' and surrounding areas'}, providing comprehensive {service.name.toLowerCase()} services with a patient-first approach.
                  </p>
                  <p>
                    Dr. Bonakdar has over 35 years of experience specializing in complex eye conditions. Whether you&apos;re seeking a second opinion, struggling with symptoms, or looking for the latest treatment options, we&apos;re here to help you see better and live better.
                  </p>
                </div>

                {/* Benefits List */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Us for {service.name}?
                </h3>
                <ul className="space-y-3 mb-8">
                  {serviceBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Service Link */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Learn More About {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Visit our comprehensive {service.name.toLowerCase()} page for detailed information about treatments, what to expect, and frequently asked questions.
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-eyecare-blue font-semibold hover:underline"
                  >
                    View Full {service.name} Information →
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Quick Contact Card */}
                <div className="bg-eyecare-blue text-white rounded-lg p-6 sticky top-4">
                  <h3 className="text-xl font-bold mb-4">
                    Schedule Your {service.name} Consultation
                  </h3>
                  <p className="text-eyecare-lighter-blue mb-4">
                    Get expert care close to {locationName}. Our Santa Ana office is easily accessible with ample parking.
                  </p>
                  <a
                    href={CONTACT_INFO.primaryPhone.href}
                    className="callrail-phone block w-full bg-white text-eyecare-blue text-center px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all mb-3"
                  >
                    <Phone className="w-5 h-5 inline mr-2" />
                    {CONTACT_INFO.primaryPhone.display}
                  </a>
                  <Link
                    href="/book-appointment"
                    className="block w-full bg-eyecare-light-blue text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-eyecare-lighter-blue transition-all"
                  >
                    Book Online
                  </Link>
                </div>

                {/* Location Card */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Serving {locationName}
                  </h3>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{city.name}{!isRegion && ', California'}</p>
                      <p className="text-gray-600 text-sm">
                        {isRegion
                          ? 'Serving all 34 cities in Orange County'
                          : `Part of our ${city.county} service area`}
                      </p>
                    </div>
                  </div>
                  {!isRegion && city.population && (
                    <p className="text-sm text-gray-600">
                      <strong>Population:</strong> {city.population}
                    </p>
                  )}
                  {city.neighborhoods.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        {isRegion ? 'Areas We Serve:' : 'Neighborhoods:'}
                      </p>
                      <p className="text-sm text-gray-600">
                        {city.neighborhoods.join(', ')}
                      </p>
                    </div>
                  )}
                </div>

                {/* Other Services */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Other Services in {locationName}
                  </h3>
                  <ul className="space-y-2">
                    {allSmartServices.filter(s => s.slug !== service.slug).slice(0, 5).map(s => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}/${citySlug}`}
                          className="text-eyecare-blue hover:underline text-sm"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 bg-gradient-to-r from-eyecare-blue to-eyecare-dark-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-eyecare-lighter-blue mb-8">
              Don&apos;t wait to address your {service.name.toLowerCase()} needs. Schedule your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CONTACT_INFO.primaryPhone.href}
                className="callrail-phone inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {CONTACT_INFO.primaryPhone.display}
              </a>
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-eyecare-blue transition-all"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Online
              </Link>
            </div>
          </div>
        </section>
        {/* Dynamic Exit Intent Popup */}
        <ExitIntentPopup
          title={popupTitle}
          description={popupDescription}
          imageSrc={serviceImage}
          benefits={[
            `Expert ${service.shortName || service.name} Specialist`,
            'Advanced Technology',
            'Personalized Care',
            'Insurance Accepted'
          ]}
          ctaText="Book Consultation"
        />
      </main>
      <Footer />
    </>
  );
}
