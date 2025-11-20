import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Calendar, MapPin } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { cities, getCityBySlug } from '@/data/cities';

interface Props {
  params: { 'service-slug': string; 'city-slug': string };
}

export async function generateStaticParams() {
  // This will be a large list, generate a few for now as an example
  const limitedServices = services.slice(0, 5);
  const limitedCities = cities.slice(0, 5);

  const paths = limitedServices.flatMap(service =>
    limitedCities.map(city => ({
      'service-slug': service.slug,
      'city-slug': city.slug,
    }))
  );

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { 'service-slug': serviceSlug, 'city-slug': citySlug } = params;
  const service = getServiceBySlug(serviceSlug);
  const city = getCityBySlug(citySlug);

  if (!service || !city) {
    return { title: 'Service Not Found' };
  }
  
  const title = `${service.name} in ${city.name}, CA | Top Specialist`;
  const description = `Expert ${service.name.toLowerCase()} treatment in ${city.name}, CA. EyeCare Center of Orange County offers advanced solutions. Schedule a consultation today.`;

  return {
    title,
    description,
    openGraph: { title, description, type: 'website' },
  };
}

export default async function LocalServicePage({ params }: Props) {
  const { 'service-slug': serviceSlug, 'city-slug': citySlug } = params;
  const service = getServiceBySlug(serviceSlug);
  const city = getCityBySlug(citySlug);

  if (!service || !city) {
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Top {service.name} Specialist in {city.name}, CA
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                EyeCare Center of Orange County provides expert diagnosis and treatment for {service.name.toLowerCase()} for residents of {city.name} and the surrounding communities.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-eyecare-blue text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Schedule Your Consultation in {city.name}</h2>
                <p className="text-eyecare-lighter-blue">Get expert care for {service.name.toLowerCase()} close to home.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+17145581182"
                  className="inline-flex items-center justify-center bg-white text-eyecare-blue px-6 py-3 rounded-md font-semibold hover:shadow-lg transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (714) 558-1182
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

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Local {service.name} Experts</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Content about {service.name} specifically tailored for {city.name} residents...
                </p>
                {/* More content here */}
              </div>
              <div className="md:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Serving {city.name}</h3>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">{city.name}, California</p>
                      <p className="text-gray-600">Part of our {city.county} service area.</p>
                    </div>
                  </div>
                  {/* Map Embed Placeholder */}
                  <div className="mt-4 w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
                    <p className="text-gray-500">Map of {city.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
