import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getConditionBySlug, conditions } from '@/data/conditions-full';
import { CheckCircle, Phone, Calendar } from 'lucide-react';
import Image from 'next/image';
import { generateBreadcrumbSchema, generateMedicalConditionSchema } from '@/lib/schema';
import Script from 'next/script';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return conditions.map((condition) => ({
    slug: condition.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    return {
      title: 'Condition Not Found',
    };
  }

  const canonicalUrl = `/conditions/${slug}`;

  return {
    title: condition.seoTitle,
    description: condition.seoDescription,
    keywords: condition.keywords || [],
    openGraph: {
      title: condition.seoTitle,
      description: condition.seoDescription,
      url: canonicalUrl,
      type: 'website',
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://eyecarecenteroc.com' },
    { name: 'Conditions', url: 'https://eyecarecenteroc.com/conditions' },
    { name: condition.name, url: `https://eyecarecenteroc.com/conditions/${slug}` },
  ]);

  const medicalConditionSchema = generateMedicalConditionSchema(
    condition.name,
    condition.description,
    `https://eyecarecenteroc.com/conditions/${slug}`
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
              <div className="inline-block px-4 py-2 bg-eyecare-blue/10 text-eyecare-blue rounded-full text-sm font-semibold mb-4">
                {condition.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {condition.name} Treatment in Orange County
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {condition.description}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-eyecare-blue text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Expert {condition.name} Care</h2>
                <p className="text-eyecare-lighter-blue">Schedule your comprehensive eye exam today</p>
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
                  Book Online
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms & Treatments */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Symptoms */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Symptoms</h2>
                <div className="space-y-4">
                  {condition.symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-1" />
                      <p className="ml-3 text-lg text-gray-700">{symptom}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatments */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Options</h2>
                <div className="space-y-4">
                  {condition.treatments.map((treatment, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-eyecare-light-blue flex-shrink-0 mt-1" />
                      <p className="ml-3 text-lg text-gray-700">{treatment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Section for Keratoconus */}
        {condition.slug === 'keratoconus' && (
          <section className="py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Advanced Keratoconus Treatment
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We utilize cutting-edge technology for precise diagnosis and management of Keratoconus.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Eaglet Eye Surface Profiler</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Our practice is equipped with the Eaglet Eye Surface Profiler, a state-of-the-art diagnostic tool that provides a highly detailed 3D map of the cornea and sclera. This allows for an unparalleled level of precision in fitting custom lenses.
                  </p>
                </div>
                <div>
                  <Image
                    src="/images/eaglet-eye-profiler.jpg"
                    alt="Eaglet Eye Surface Profiler in use"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
                <div>
                   <Image
                    src="/images/scleral-lens-diagram.jpg" // Placeholder for diagram
                    alt="Diagram of a scleral lens on an eye"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Scleral Lenses</h3>
                  <p className="text-lg text-gray-700">
                    Based on the precise measurements from the Eaglet Eye, we design custom-fit scleral lenses. These lenses vault over the irregular cornea, creating a new, smooth optical surface that dramatically improves vision and comfort for Keratoconus patients.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose EyeCare Center of Orange County
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert care, advanced technology, and compassionate service for {condition.name.toLowerCase()}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Specialists</h3>
                <p className="text-gray-600">
                  Board-certified eye care specialists with extensive experience treating {condition.name.toLowerCase()}.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Technology</h3>
                <p className="text-gray-600">
                  State-of-the-art diagnostic equipment and treatment options for optimal outcomes.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Care</h3>
                <p className="text-gray-600">
                  Customized treatment plans tailored to your unique needs and vision goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Treatment for {condition.name}?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule your comprehensive eye exam and consultation today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17145581182"
                className="bg-white text-eyecare-blue px-8 py-4 rounded-md font-semibold text-lg hover:shadow-xl transition-all"
              >
                Call (714) 558-1182
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
