import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cities } from '@/data/cities';
import { MapPin, Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
  title: 'Locations We Serve | Orange County Eye Care',
  description: 'Serving 65+ cities across Orange County including Irvine, Newport Beach, Costa Mesa, Huntington Beach, Santa Ana, and more. Expert eye care near you.',
  keywords: [
    'eye doctor irvine',
    'eye doctor newport beach',
    'eye doctor santa ana',
    'eye doctor costa mesa',
    'eye doctor huntington beach',
    'eye doctor anaheim',
    'orange county eye care locations',
    'eye care near me',
    'local eye doctor',
  ],
  robots: {
    index: false,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: 'Locations We Serve | Orange County Eye Care',
    description: `Expert eye care serving 65+ Orange County cities. Call ${CONTACT_INFO.primaryPhone.display} to schedule your appointment.`,
    type: 'website',
  },
};

export default function LocationsPage() {
  // Sort cities alphabetically
  const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-8 h-8 text-eyecare-blue" />
                <span className="text-lg font-semibold text-eyecare-blue">Orange County</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Serving Orange County Communities
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                We proudly serve patients across 65+ Orange County cities. Find your city below to learn more about the eye care services we provide in your community.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={CONTACT_INFO.primaryPhone.href}
                  className="callrail-phone inline-flex items-center justify-center bg-eyecare-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-eyecare-dark-blue transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {CONTACT_INFO.primaryPhone.display}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-eyecare-blue border-2 border-eyecare-blue px-6 py-3 rounded-lg font-semibold hover:bg-eyecare-blue hover:text-white transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Cities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Major Orange County cities we serve
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.slice(0, 6).map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="bg-gradient-to-br from-blue-50 to-eyecare-lighter-blue/20 rounded-xl p-8 hover:shadow-2xl transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-eyecare-blue transition">
                        {city.name}
                      </h3>
                      <p className="text-gray-600">{city.population} residents</p>
                    </div>
                    <MapPin className="w-6 h-6 text-eyecare-blue" />
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {city.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {city.zipCodes.slice(0, 3).map((zip) => (
                      <span
                        key={zip}
                        className="inline-block px-3 py-1 bg-white text-eyecare-blue rounded-md text-sm font-medium"
                      >
                        {zip}
                      </span>
                    ))}
                    {city.zipCodes.length > 3 && (
                      <span className="inline-block px-3 py-1 bg-white text-gray-600 rounded-md text-sm font-medium">
                        +{city.zipCodes.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform inline-block">
                    View City Info →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Cities Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                All Orange County Cities We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Click on your city to see specific information about services, neighborhoods, and zip codes
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {sortedCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-all group border-2 border-transparent hover:border-eyecare-blue"
                >
                  <MapPin className="w-8 h-8 text-eyecare-blue mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-eyecare-blue transition">
                    {city.name}
                  </h3>
                  <p className="text-sm text-gray-600">{city.population}</p>
                </Link>
              ))}
            </div>

            {/* Expanding Notice */}
            <div className="mt-12 text-center bg-white rounded-xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Don't See Your City?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We serve patients throughout Orange County and surrounding areas. Even if your city isn't listed, we'd love to help with your eye care needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CONTACT_INFO.primaryPhone.href}
                  className="callrail-phone inline-flex items-center justify-center bg-eyecare-blue text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {CONTACT_INFO.primaryPhone.display}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-eyecare-blue border-2 border-eyecare-blue px-8 py-3 rounded-lg font-semibold hover:bg-eyecare-blue hover:text-white transition-all"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Coverage Across Orange County
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With coverage across 65+ cities, we're committed to bringing expert eye care to every corner of Orange County
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-eyecare-blue to-eyecare-light-blue text-white p-8 rounded-xl">
                <div className="text-5xl font-bold mb-3">65+</div>
                <div className="text-xl font-semibold">Cities Served</div>
              </div>
              <div className="bg-gradient-to-br from-eyecare-light-blue to-eyecare-lighter-blue text-white p-8 rounded-xl">
                <div className="text-5xl font-bold mb-3">200+</div>
                <div className="text-xl font-semibold">Zip Codes</div>
              </div>
              <div className="bg-gradient-to-br from-eyecare-lighter-blue to-eyecare-blue text-white p-8 rounded-xl">
                <div className="text-5xl font-bold mb-3">3M+</div>
                <div className="text-xl font-semibold">Residents Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Schedule Your Eye Exam?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              No matter which Orange County city you call home, we're here to provide expert eye care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CONTACT_INFO.primaryPhone.href}
                className="callrail-phone inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {CONTACT_INFO.primaryPhone.display}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-eyecare-blue transition-all"
              >
                <Calendar className="w-5 h-5 mr-2" />
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
