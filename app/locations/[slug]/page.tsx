import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCityBySlug, cities } from '@/data/cities';
import { MapPin, Phone, Calendar, Users, Eye } from 'lucide-react';
import { conditions } from '@/data/conditions';

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

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  return (
    <>
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
                  href="tel:+19493640008"
                  className="inline-flex items-center justify-center bg-white text-eyecare-blue px-6 py-3 rounded-md font-semibold hover:shadow-lg transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (949) 364-0008
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Eye Exams</h3>
                <p className="text-gray-600 mb-4">
                  Thorough vision assessments and eye health evaluations for adults and children.
                </p>
                <Link href="/conditions" className="text-eyecare-blue font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Lens Fitting</h3>
                <p className="text-gray-600 mb-4">
                  Expert fitting for all types of contact lenses including specialty lenses.
                </p>
                <Link href="/conditions" className="text-eyecare-blue font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Eye Disease Management</h3>
                <p className="text-gray-600 mb-4">
                  Treatment for glaucoma, cataracts, macular degeneration, and more.
                </p>
                <Link href="/conditions" className="text-eyecare-blue font-semibold hover:underline">
                  Learn More →
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
                href="tel:+19493640008"
                className="bg-white text-eyecare-blue px-8 py-4 rounded-md font-semibold text-lg hover:shadow-xl transition-all"
              >
                Call (949) 364-0008
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
