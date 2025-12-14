import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClinicalGallery from '@/components/ClinicalGallery';
import { ServiceProcess, ServiceBenefits, ServiceCandidates, ServiceCost } from '@/components/services';
import FAQAccordion from '@/components/faq/FAQAccordion';
import { BookAppointmentCTA, MedicalDisclaimer, AuthorByline, LastUpdated } from '@/components/shared';
import { getEnhancedServiceBySlug } from '@/data/services-enhanced';
import { getPrimaryDoctor } from '@/data/doctors';
import { getMedicalProcedureJsonLd } from '@/lib/schema/medical-procedure';
import { getLocalBusinessJsonLd } from '@/lib/schema/local-business';
import { getImagesForCondition } from '@/lib/get-condition-images';
import { getConditionsForService } from '@/lib/service-condition-map';
import { Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';
import Link from 'next/link';
import VisionSimulator from '@/components/VisionSimulator'; // Imported VisionSimulator

export const metadata: Metadata = {
    title: 'Keratoconus & Scleral Lenses | Orange County Expert',
    description: 'Restore clear vision with specific custom scleral lenses for keratoconus. Dr. Bonakdar is a leading specialist in irregular cornea management in Orange County.',
  alternates: {
    canonical: 'https://eyecarecenteroc.com/lp/keratoconus-scleral',
  }
};

export default function KeratoconusLandingPage() {
    // Hardcoded to keratoconus-treatment for this LP
    const service = getEnhancedServiceBySlug('keratoconus-treatment');

    if (!service) {
        notFound();
    }

    const doctor = getPrimaryDoctor();
    const procedureSchema = getMedicalProcedureJsonLd(service);
    const businessSchema = getLocalBusinessJsonLd(undefined, 4.9, 847);

    // Get clinical images for this service from mapped conditions
    const conditionSlugs = getConditionsForService(service.slug);
    const clinicalImages = conditionSlugs.flatMap(slug => getImagesForCondition(slug));
    // Deduplicate by filename
    const seenFilenames = new Set<string>();
    const uniqueImages = clinicalImages.filter(img => {
        if (seenFilenames.has(img.filename)) return false;
        seenFilenames.add(img.filename);
        return true;
    });

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
            {uniqueImages.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ImageGallery",
                            "name": `Clinical Images of ${service.name}`,
                            "description": `High-resolution clinical photographs showing various presentations of ${service.name.toLowerCase()}`,
                            "image": uniqueImages.slice(0, 10).map(img => ({
                                "@type": "ImageObject",
                                "name": img.title,
                                "description": img.description,
                                "contentUrl": `https://eyecarecenteroc.com${img.url}`,
                                "license": "https://eyecarecenteroc.com/contact",
                                "acquireLicensePage": "https://eyecarecenteroc.com/contact",
                                "copyrightNotice": "EyeCare Center of Orange County",
                                "caption": img.alt,
                                "creditText": "EyeCare Center of Orange County",
                                "creator": {
                                    "@type": "Organization",
                                    "name": "EyeCare Center of Orange County"
                                },
                                "associatedArticle": {
                                    "@type": "MedicalWebPage",
                                    "url": `https://eyecarecenteroc.com/lp/keratoconus-scleral`
                                }
                            }))
                        })
                    }}
                />
            )}

            <Header />
            <main className="min-h-screen pb-20 md:pb-0">
                {/* Hero Section - Custom PAS Copy */}
                <section className="relative min-h-[85vh] md:min-h-[600px] flex items-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="/images/keratoconus-main.webp" // Explicitly matching service page hero
                            alt="Keratoconus Treatment at EyeCare Center of Orange County"
                            className="w-full h-full object-cover object-[75%_center] md:object-center"
                        />
                        {/* Mobile: Stronger specific gradient for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent"></div>
                    </div>
                    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0">
                        <div className="max-w-4xl">
                            <div className="inline-block bg-eyecare-blue/90 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm border border-white/20">
                                Specialized Keratoconus Care
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                                Blurry Vision? Ghosting? <br className="hidden md:block" />
                                <span className="text-eyecare-light-blue">You Don't Have to Live With It.</span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed mb-8 max-w-2xl font-medium drop-shadow-md">
                                The Advanced Keratoconus Solution That Restores Clarity When Glasses & Standard Contacts Fail.
                            </p>

                            {/* Author Byline - Reduced size for mobile balance */}
                            <div className="mb-8 opacity-90 hover:opacity-100 transition-opacity">
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
                                    className="text-white [&_a]:text-white [&_a]:hover:text-blue-200"
                                />
                            </div>

                            {/* Desktop CTA Buttons (Hidden on mobile generally if using sticky, but good to keep for larger mobile screens) */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4">
                                <a
                                    href={CONTACT_INFO.primaryPhone.href}
                                    className="callrail-phone inline-flex items-center justify-center bg-eyecare-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-eyecare-dark-blue transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    <Phone className="w-6 h-6 mr-2" />
                                    {CONTACT_INFO.primaryPhone.display}
                                </a>
                                <Link
                                    href="/book-appointment"
                                    className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md text-white border-2 border-white/40 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-eyecare-blue transition-all"
                                >
                                    <Calendar className="w-6 h-6 mr-2" />
                                    Check Insurance & Book
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROBLEM / AGITATION SECTION - NEW */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Frustrated by Changing Prescriptions?
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                If you've been told you have "bad astigmatism," struggle with night driving, or find yourself squinting even with new glasses, you might be dealing with more than just poor vision.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Glare & Halos", desc: "Lights at night streak or burst, making driving dangerous or impossible.", icon: "🚫" },
                                { title: "Ghost Images", desc: "Seeing double or triple images, especially with high contrast text.", icon: "👻" },
                                { title: "Itchy, Rubbing Eyes", desc: "Chronic eye rubbing is often a sign—and a cause—of worsening progression.", icon: "👁️" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Vision Simulator Section */}
                <div id="vision-simulator" className="py-12 bg-white border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <span className="text-eyecare-blue font-bold tracking-wider uppercase text-sm">See The Difference</span>
                            <h2 className="text-3xl font-bold text-gray-900 mt-2">Simulate Your Vision</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                                Drag the slider to see how Scleral Lenses can correct the visual distortions caused by Keratoconus.
                            </p>
                        </div>
                        <VisionSimulator />
                    </div>
                </div>

                {/* Main Content */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Column */}
                            <div className="lg:col-span-2 space-y-12">
                                {/* Overview */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        The Scleral Lens Solution
                                    </h2>
                                    <div className="prose prose-lg max-w-none text-gray-700 bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                        <p className="font-medium text-blue-900 text-xl mb-4">
                                            Why standard contacts fail, but Scleral Lenses succeed.
                                        </p>
                                        <p>
                                            Unlike soft contacts that drape over your irregular cornea—transferring the distortion to the front of the lens—**Scleral Lenses** vault over the cornea entirely.
                                        </p>
                                        <p>
                                            They rest gently on the white part of your eye (the sclera) and create a fluid-filled reservoir that masks your corneal irregularity. This creates a perfectly smooth optical surface, often restoring vision to 20/20.
                                        </p>
                                    </div>
                                    <div className="mt-8 prose prose-lg max-w-none text-gray-700">
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

                                {/* Clinical Images Gallery */}
                                {uniqueImages.length > 0 && (
                                    <ClinicalGallery
                                        images={uniqueImages}
                                        conditionName={service.shortName}
                                    />
                                )}
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
                <section className="py-12 bg-gray-50 mb-16 md:mb-0">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <BookAppointmentCTA serviceName={service.name} />
                    </div>
                </section>

                {/* Sticky Mobile CTA */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-50 flex gap-3">
                    <a
                        href={CONTACT_INFO.primaryPhone.href}
                        className="callrail-phone flex-1 flex items-center justify-center bg-eyecare-blue text-white px-4 py-3 rounded-lg font-bold shadow-sm"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                    </a>
                    <Link
                        href="/book-appointment"
                        className="flex-1 flex items-center justify-center bg-eyecare-light-blue text-white px-4 py-3 rounded-lg font-bold shadow-sm"
                    >
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Now
                    </Link>
                </div>

                {/* Medical Disclaimer */}
                <section className="py-8 bg-white pb-24 md:pb-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <MedicalDisclaimer />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
