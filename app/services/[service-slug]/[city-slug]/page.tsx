import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Calendar, MapPin, CheckCircle, Star, Users } from 'lucide-react';
import { getSmartServiceBySlug, allSmartServices } from '@/data/services-enhanced';
import { cities, getCityBySlug, City } from '@/data/cities';
import { CONTACT_INFO } from '@/lib/contact-info';
import ExitIntentPopup from '@/components/ExitIntentPopup';

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
    alternates: {
      canonical: `https://eyecarecenteroc.com/services/${serviceSlug}/${citySlug}`,
    },
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Top {service.name} Specialist in {locationName}{locationSuffix}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  EyeCare Center of Orange County provides expert diagnosis and treatment for {service.name.toLowerCase()} for residents of {locationName} and the surrounding communities. With over 35 years of experience, Dr. Bonakdar has helped thousands of patients achieve better vision.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-blue-100">
                    <div className="text-3xl font-bold text-eyecare-blue">35+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Exp.</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-blue-100">
                    <div className="flex items-center justify-center text-3xl font-bold text-eyecare-blue">
                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />4.9
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Rating</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-blue-100">
                    <div className="flex items-center justify-center text-3xl font-bold text-eyecare-blue">
                      <Users className="w-5 h-5 mr-1" />10k+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Patients</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={CONTACT_INFO.primaryPhone.href}
                    className="callrail-phone inline-flex items-center justify-center bg-eyecare-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-eyecare-dark-blue hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {CONTACT_INFO.primaryPhone.display}
                  </a>
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center justify-center bg-white text-eyecare-blue border-2 border-eyecare-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={service.heroImage || '/images/hero-background.png'}
                  alt={`${service.name} treatment in ${locationName}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-eyecare-blue/10 rounded-full">
                      <CheckCircle className="w-6 h-6 text-eyecare-blue" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Advanced Technology</p>
                      <p className="text-xs text-gray-600">Latest diagnostic equipment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div>
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

            </div>
          </div>

          {/* Local Service Area & Related Services (SEO Footer) */}
          <div className="mt-16 py-12 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Local Service Area Card */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <MapPin className="w-6 h-6 text-eyecare-blue" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Serving {locationName}</h3>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold text-lg text-gray-900 mb-1">{city.name}{!isRegion && ', California'}</p>
                    <p className="text-gray-600">
                      {isRegion
                        ? 'Serving all 34 cities in Orange County'
                        : `Proudly serving our ${city.county} community`}
                    </p>
                    {!isRegion && city.population && (
                      <p className="text-sm text-gray-500 mt-2">
                        Population: {city.population}
                      </p>
                    )}
                  </div>

                  {city.neighborhoods.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                        {isRegion ? 'Key Areas Served' : 'Neighborhoods'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {city.neighborhoods.slice(0, 12).map((neighborhood, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                          >
                            {neighborhood}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Other Services Card */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-eyecare-blue" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Other Services in {locationName}
                    </h3>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {allSmartServices.filter(s => s.slug !== service.slug).slice(0, 5).map(s => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}/${citySlug}`}
                          className="flex items-center justify-between group p-3 rounded-lg hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                        >
                          <span className="font-medium text-gray-700 group-hover:text-eyecare-blue transition-colors">
                            {s.name}
                          </span>
                          <span className="text-gray-400 group-hover:text-eyecare-blue group-hover:translate-x-1 transition-all">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center w-full px-4 py-3 border border-eyecare-blue text-eyecare-blue font-semibold rounded-lg hover:bg-eyecare-blue hover:text-white transition-all"
                  >
                    View All Services
                  </Link>
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
          imageSrc={service.heroImage || '/images/hero-background.png'}
          benefits={[
            `Expert ${service.shortName || service.name} Specialist`,
            'Advanced Technology',
            'Personalized Care',
            'Insurance Accepted'
          ]}
          ctaText="Book Consultation"
        />
      </main >
      <Footer />
    </>
  );
}
