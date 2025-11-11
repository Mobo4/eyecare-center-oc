import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getConditionBySlug, conditions } from '@/data/conditions-full';
import { CheckCircle, Phone, Calendar } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
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

  return {
    title: condition.seoTitle,
    description: condition.seoDescription,
    openGraph: {
      title: condition.seoTitle,
      description: condition.seoDescription,
      type: 'website',
    },
  };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
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
