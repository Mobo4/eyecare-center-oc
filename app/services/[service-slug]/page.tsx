/**
 * FILE: app/services/[service-slug]/page.tsx
 * PURPOSE: Enhanced service page with full SEO, schema, and E-E-A-T compliance
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: High-converting service pages with MedicalProcedure and FAQPage schema,
 * comprehensive content, and E-E-A-T compliance elements.
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ServiceProcess, ServiceBenefits, ServiceCandidates, ServiceCost } from '@/components/services';
import FAQAccordion from '@/components/faq/FAQAccordion';
import { BookAppointmentCTA, MedicalDisclaimer, AuthorByline, LastUpdated } from '@/components/shared';
import { getEnhancedServiceBySlug, getAllEnhancedServices } from '@/data/services-enhanced';
import { getPrimaryDoctor } from '@/data/doctors';
import { getMedicalProcedureJsonLd } from '@/lib/schema/medical-procedure';
import { getLocalBusinessJsonLd } from '@/lib/schema/local-business';
import { Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';
import Link from 'next/link';

interface Props {
  params: Promise<{ 'service-slug': string }>;
}

export async function generateStaticParams() {
  const services = getAllEnhancedServices();
  return services.map(service => ({
    'service-slug': service.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getEnhancedServiceBySlug(resolvedParams['service-slug']);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.name} | Orange County Eye Care Specialist`,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} | EyeCare Center of Orange County`,
      description: service.metaDescription,
      type: 'website',
      images: service.heroImage ? [{ url: service.heroImage }] : undefined
    }
  };
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const service = getEnhancedServiceBySlug(resolvedParams['service-slug']);

  if (!service) {
    notFound();
  }

  const doctor = getPrimaryDoctor();
  const procedureSchema = getMedicalProcedureJsonLd(service);
  const businessSchema = getLocalBusinessJsonLd(undefined, 4.9, 847);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: procedureSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: businessSchema }}
      />

      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {service.name} in Orange County
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Author Byline */}
              <AuthorByline
                author={{
                  name: doctor.name,
                  credentials: doctor.credentials,
                  title: doctor.title,
                  slug: doctor.slug,
                  photo: doctor.photo
                }}
                datePublished={service.lastUpdated}
                dateModified={service.lastUpdated}
                variant="compact"
                showPhoto={false}
                className="mb-6"
              />

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
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Column */}
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Understanding {service.shortName}
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    {service.overview.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <ServiceBenefits
                  benefits={service.benefits}
                  title={`Benefits of ${service.shortName} Treatment`}
                />

                {/* Process */}
                <ServiceProcess
                  steps={service.process}
                  title={`The ${service.shortName} Process`}
                />

                {/* Candidates */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Is {service.shortName} Right for You?
                  </h2>
                  <ServiceCandidates
                    goodCandidates={service.candidateCriteria}
                    notCandidates={service.notCandidates}
                  />
                </div>

                {/* FAQ Section */}
                <FAQAccordion
                  faqs={service.faqs}
                  title={`Common Questions About ${service.shortName}`}
                />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Quick Contact */}
                <div className="bg-eyecare-blue text-white rounded-lg p-6 sticky top-4">
                  <h3 className="text-xl font-bold mb-4">Schedule Your Consultation</h3>
                  <p className="text-eyecare-lighter-blue mb-4">
                    Get expert {service.shortName.toLowerCase()} care from Dr. {doctor.name}
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

                {/* Cost Info */}
                <ServiceCost cost={service.cost} serviceName={service.name} />

                {/* Related Services */}
                {service.relatedServices.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                    <ul className="space-y-2">
                      {service.relatedServices.map(slug => {
                        const related = getEnhancedServiceBySlug(slug);
                        return related ? (
                          <li key={slug}>
                            <Link
                              href={`/services/${slug}`}
                              className="text-eyecare-blue hover:underline"
                            >
                              {related.name}
                            </Link>
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                )}

                {/* Last Updated */}
                <LastUpdated
                  datePublished={service.lastUpdated}
                  dateModified={service.lastUpdated}
                  variant="detailed"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BookAppointmentCTA serviceName={service.name} />
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <MedicalDisclaimer />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
