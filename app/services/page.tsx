import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services } from '@/data/services';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eye Care Services in Orange County',
  description: 'Explore a full range of expert eye care services, from comprehensive exams to advanced surgical procedures like LASIK and cataract surgery. Serving all of Orange County.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Eye Care Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We offer a comprehensive range of services to meet all your vision needs. From routine eye exams to specialized surgical procedures, our team is equipped with the expertise and technology to provide the highest quality care in Orange County.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.slug} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    href={`/services/${service.slug}/orange-county`} // Example link, this could be more sophisticated
                    className="inline-flex items-center font-semibold text-eyecare-blue hover:underline"
                  >
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
