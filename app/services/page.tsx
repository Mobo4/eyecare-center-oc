import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services } from '@/data/services';
import { ChevronRight } from 'lucide-react';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Eye Care Services in Orange County',
  description: 'Comprehensive eye care services: keratoconus treatment, scleral lenses, LASIK, dry eye therapy, contact lenses. Expert care in Orange County.',
,
  alternates: {
    canonical: 'https://eyecarecenteroc.com/services',
  }
};

export default function ServicesPage() {
  const businessSchema = generateMedicalBusinessSchema(); // Use MedicalBusiness for services index
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://eyecarecenteroc.com' },
    { name: 'Services', url: 'https://eyecarecenteroc.com/services' },
  ]);

  return (
    <>
      <JsonLd data={businessSchema} id="business-schema" />
      <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/services-main.webp"
              alt="Eye Care Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Eye Care Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
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
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/orange-county`}
                  className="group block bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col h-full">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-eyecare-blue transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center font-semibold text-eyecare-blue group-hover:translate-x-2 transition-transform">
                      Learn More <ChevronRight className="w-5 h-5 ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
