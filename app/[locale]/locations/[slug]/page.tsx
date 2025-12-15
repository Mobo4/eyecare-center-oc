import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCityBySlug, cities } from '@/data/cities';
import { MapPin, Phone, Calendar, Users, Eye, ArrowRight, Shield } from 'lucide-react';
import { conditions } from '@/data/conditions';
import { CONTACT_INFO } from '@/lib/contact-info';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: city.seoTitle,
    description: city.seoDescription,
    openGraph: {
      title: city.seoTitle,
      description: city.seoDescription,
      type: 'website',
    },
  };
}

import BreadcrumbSchema from '@/components/Schema/BreadcrumbSchema';
import LocalBusinessSchema from '@/components/Schema/LocalBusinessSchema';

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  return (
    <>
      <LocalBusinessSchema city={city} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://eyecarecenteroc.com' },
        { name: 'Locations', url: 'https://eyecarecenteroc.com/locations' },
        { name: city.name, url: `https://eyecarecenteroc.com/locations/${city.slug}` }
      ]} />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-eyecare-blue" />
                <span className="text-lg font-semibold text-eyecare-blue">{city.county}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Eye Doctor in {city.name}, CA
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                {city.description}
              </p>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">{city.population} residents</span>
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
                <h2 className="text-2xl font-bold mb-2">Serving {city.name} Residents</h2>
                <p className="text-eyecare-lighter-blue">Comprehensive eye care for your whole family</p>
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
                  href="/contact"
                  className="inline-flex items-center justify-center bg-eyecare-light-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-eyecare-lighter-blue transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Eye Care Services in {city.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert vision care for patients of all ages
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/conditions" className="group relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-eyecare-blue transition-all duration-300 overflow-hidden block">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-eyecare-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eyecare-blue transition-colors">Comprehensive Eye Exams</h3>
                  <p className="text-gray-600 mb-4">
                    Thorough vision assessments and eye health evaluations for adults and children.
                  </p>
                  <span className="text-eyecare-blue font-semibold hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link href="/conditions" className="group relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-eyecare-blue transition-all duration-300 overflow-hidden block">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-eyecare-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eyecare-blue transition-colors">Contact Lens Fitting</h3>
                  <p className="text-gray-600 mb-4">
                    Expert fitting for all types of contact lenses including specialty lenses.
                  </p>
                  <span className="text-eyecare-blue font-semibold hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link href="/conditions" className="group relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-eyecare-blue transition-all duration-300 overflow-hidden block">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-eyecare-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eyecare-blue transition-colors">Eye Disease Management</h3>
                  <p className="text-gray-600 mb-4">
                    Treatment for glaucoma, cataracts, macular degeneration, and more.
                  </p>
                  <span className="text-eyecare-blue font-semibold hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link href="/services/optical-lenses" className="group relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-eyecare-blue transition-all duration-300 overflow-hidden block">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-eyecare-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eyecare-blue transition-colors">Advanced Optical Lenses</h3>
                  <p className="text-gray-600 mb-4">
                    Premium lens technology including <strong>Progressives</strong>, <strong>AR Coatings</strong>, and <strong>Prism</strong> correction.
                  </p>
                  <span className="text-eyecare-blue font-semibold hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Lens Options <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Insurance Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Insurances Accepted in {city.name}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  We accept most major vision and medical insurance plans including <strong>VSP</strong>, <strong>Medicare</strong>, <strong>EyeMed</strong>, and many more.
                </p>
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <img src="/images/logos/vsp.svg" alt="VSP" className="h-8 w-auto" />
                  <img src="/images/logos/medicare.svg" alt="Medicare" className="h-8 w-auto" />
                  <img src="/images/logos/eyemed.svg" alt="EyeMed" className="h-8 w-auto" />
                  <img src="/images/logos/blue-shield.svg" alt="Blue Shield" className="h-8 w-auto" />
                  <img src="/images/logos/united-healthcare.svg" alt="UnitedHealthcare" className="h-8 w-auto" />
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                    + Many More
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href={`/locations/${slug}/insurance`}
                  className="inline-flex items-center justify-center bg-white text-eyecare-blue border-2 border-eyecare-blue px-6 py-3 rounded-lg font-bold hover:bg-eyecare-blue hover:text-white transition-all"
                >
                  View All Insurances <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        {city.neighborhoods.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Serving All {city.name} Neighborhoods
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {city.neighborhoods.map((neighborhood, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <p className="font-semibold text-gray-900">{neighborhood}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Zip Codes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {city.name} Zip Codes We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {city.zipCodes.map((zip, index) => (
                <span
                  key={index}
                  className="inline-block px-4 py-2 bg-eyecare-blue/10 text-eyecare-blue rounded-md font-semibold"
                >
                  {zip}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions We Treat Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Eye Conditions We Treat in {city.name}
              </h2>
              <p className="text-xl text-gray-600">
                Expert diagnosis and treatment for a wide range of eye conditions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditions.map((condition) => (
                <Link
                  key={condition.slug}
                  href={`/conditions/${condition.slug}/${slug}`}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-eyecare-blue hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <Eye className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-eyecare-blue mb-2">
                        {condition.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {condition.description.substring(0, 100)}...
                      </p>
                      <span className="text-sm text-eyecare-blue font-medium mt-2 inline-block">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/conditions"
                className="inline-flex items-center text-eyecare-blue hover:text-eyecare-dark-blue font-semibold"
              >
                View All Conditions We Treat →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Schedule Your Eye Exam in {city.name}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Conveniently located and serving {city.name} residents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CONTACT_INFO.primaryPhone.href}
                className="callrail-phone bg-white text-eyecare-blue px-8 py-4 rounded-md font-semibold text-lg hover:shadow-xl transition-all"
              >
                Call {CONTACT_INFO.primaryPhone.display}
              </a>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-eyecare-blue transition-all"
              >
                Book Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
