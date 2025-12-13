import React from 'react';
import { Metadata } from 'next';
import LandingPageLayout from '@/components/landing/LandingPageLayout';
import {
    LandingHero,
    SocialProof,
    BenefitsSection,
    Testimonials,
    FAQSection,
    StickyCTA,
    AnimatedSection
} from '@/components/landing/LandingComponents';
import { Eye, Shield, Users, Award, Heart, CheckCircle } from 'lucide-react';
import { SERVICE_AREAS } from '@/lib/schema';

export const metadata: Metadata = {
    title: 'Vision Correction Consultation',
    description: 'Get unbiased expert guidance for LASIK, cataract surgery, and ICL. Independent pre-op evaluation and post-op care. Serving Orange County.',
,
  alternates: {
    canonical: 'https://eyecarecenteroc.com/lp/surgical-consult',
  }
};

export default function SurgicalConsultLandingPage() {
    return (
        <LandingPageLayout>
            {/* Hero Section  */}
            <LandingHero
                headline="Thinking About Eye Surgery? Get an Unbiased Expert Opinion First."
                subheadline="Navigate your options for LASIK, Cataracts, and ICL with confidence. We provide independent guidance to connect you with the best surgeons for your eyes."
                imageSrc="/images/services-main.webp"
                ctaText="Book My Free Surgery Consultation"
                benefits={[
                    "Honest, unbiased recommendations",
                    "Access to top Orange County surgeons",
                    "Convenient local pre & post-op care",
                    "Free initial consultation"
                ]}
            />

            <AnimatedSection className="bg-eyecare-navy">
                <SocialProof />
            </AnimatedSection>

            {/* Problem/Agitation Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy mb-6">
                            Don't Navigate Your Surgery Alone
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Deciding to have eye surgery is a big life event. With so many options (LASIK, PRK, SMILE, ICL, Premium Cataract Lenses) and so many surgeons advertising "best prices," it's easy to feel overwhelmed.
                        </p>
                        <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl">
                            <h3 className="text-lg font-bold text-eyecare-navy mb-3">The Risk</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Going directly to a high-volume surgical center can sometimes feel like a sales pitch. You need to know: Is this procedure actually right for <em>me</em>? Is there a better option?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-eyecare-blue font-bold tracking-wider uppercase text-sm mb-2 block text-center">Independent Co-Management</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy mb-6 text-center">
                            Your Personal Advocate in Eye Care
                        </h2>
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
                            As an independent optometric practice, Dr. Bonakdar has <strong>no financial ties</strong> to any specific laser center or lens manufacturer. This means our only priority is your vision.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-md">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-eyecare-blue text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <h3 className="text-xl font-bold text-eyecare-navy">Pre-Surgical Evaluation</h3>
                                </div>
                                <p className="text-gray-600">
                                    We perform a thorough exam to determine if you are a good candidate and what procedure is best suited for your unique eyes.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-md">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-eyecare-blue text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <h3 className="text-xl font-bold text-eyecare-navy">Unbiased Recommendation</h3>
                                </div>
                                <p className="text-gray-600">
                                    We explain <em>all</em> your options, not just the ones a specific center sells. We'll tell you if you shouldn't have surgery.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-md">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-eyecare-blue text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <h3 className="text-xl font-bold text-eyecare-navy">Surgeon Selection</h3>
                                </div>
                                <p className="text-gray-600">
                                    We refer you to the specific surgeon best suited for your case—whether it's a top corneal specialist for LASIK or a cataract expert for multifocal lenses.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-md">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-eyecare-blue text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                                    <h3 className="text-xl font-bold text-eyecare-navy">Post-Op Care</h3>
                                </div>
                                <p className="text-gray-600">
                                    We handle all your follow-up visits right here in our office, saving you travel time and ensuring continuity of care.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AnimatedSection>
                <BenefitsSection
                    title="Why Choose Independent Co-Management?"
                    benefits={[
                        {
                            title: "Unbiased Advice",
                            description: "We don't work for a laser center. Our only loyalty is to you and your vision health.",
                            icon: <Shield className="w-8 h-8" />
                        },
                        {
                            title: "Top Surgeon Access",
                            description: "We refer you to the best specialists in Orange County, tailored to your specific needs.",
                            icon: <Users className="w-8 h-8" />
                        },
                        {
                            title: "Convenient Care",
                            description: "All your pre-op and post-op visits happen in our local office, saving you travel time.",
                            icon: <CheckCircle className="w-8 h-8" />
                        },
                        {
                            title: "Comprehensive Exams",
                            description: "We perform a deep-dive analysis of your eye health to ensure you're a safe candidate.",
                            icon: <Eye className="w-8 h-8" />
                        },
                        {
                            title: "Continuity of Care",
                            description: "Your primary eye doctor stays involved throughout the entire process.",
                            icon: <Heart className="w-8 h-8" />
                        },
                        {
                            title: "Peace of Mind",
                            description: "Navigate the complex world of eye surgery with a trusted expert by your side.",
                            icon: <Award className="w-8 h-8" />
                        }
                    ]}
                />
            </AnimatedSection>

            <AnimatedSection className="bg-blue-50">
                <Testimonials
                    quote="Dr. Bonakdar told me I wasn't a good candidate for LASIK and recommended ICL instead. I'm so glad I listened. My vision is perfect and I avoided potential complications."
                    author="Robert T."
                    role="ICL Patient"
                />
            </AnimatedSection>

            <AnimatedSection>
                <FAQSection
                    items={[
                        {
                            question: "Is the consultation really free?",
                            answer: "Yes. If you are considering surgery, we offer a complimentary consultation to discuss your options and determine if you are a candidate."
                        },
                        {
                            question: "Do you perform the surgery?",
                            answer: "No. Dr. Bonakdar is an optometrist who specializes in pre- and post-operative care. He works with a network of top ophthalmologists who perform the surgeries."
                        },
                        {
                            question: "How soon can I schedule?",
                            answer: "We typically have availability within a few days. Your consultation takes about 60-90 minutes to ensure we thoroughly evaluate your candidacy."
                        }
                    ]}
                />
            </AnimatedSection>

            {/* Service Area / Local SEO Section */}
            <section className="py-12 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-xl font-bold text-eyecare-navy mb-4">
                        Expert Surgical Guidance in Orange County
                    </h3>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Providing trusted surgical co-management for patients from across Orange County, including
                        <span className="font-semibold text-eyecare-blue"> Santa Ana, Irvine, Newport Beach, Tustin, Costa Mesa, Orange, and Mission Viejo</span>.
                    </p>
                </div>
            </section>

            {/* Medical Procedure Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalProcedure",
                        "name": "Vision Correction Surgery Consultation",
                        "description": "Independent pre-operative evaluation and post-operative care for LASIK, cataract surgery, ICL, and other refractive procedures.",
                        "procedureType": "Consultation",
                        "bodyLocation": "Eyes",
                        "status": "Available",
                        "provider": {
                            "@type": "Physician",
                            "name": "Dr. Alexander Bonakdar",
                            "medicalSpecialty": "Ophthalmology",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "801 N Tustin Ave # 404",
                                "addressLocality": "Santa Ana",
                                "addressRegion": "CA",
                                "postalCode": "92705",
                                "addressCountry": "US"
                            }
                        },
                        "location": {
                            "@type": "MedicalClinic",
                            "name": "Optometric Eyecare Center of Orange County",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "801 N Tustin Ave # 404",
                                "addressLocality": "Santa Ana",
                                "addressRegion": "CA",
                                "postalCode": "92705",
                                "addressCountry": "US"
                            },
                            "telephone": "+1-714-558-1182",
                            "areaServed": SERVICE_AREAS
                        }
                    })
                }}
            />

            <StickyCTA />
        </LandingPageLayout>
    );
}
