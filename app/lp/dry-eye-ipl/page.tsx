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
import { Droplets, Shield, Sun, Zap, Clock, ThumbsUp, CheckCircle } from 'lucide-react';
import { SERVICE_AREAS } from '@/lib/schema';

export const metadata: Metadata = {
    title: 'Dry Eye Relief (IPL)',
    description: 'Stop suffering from dry, gritty eyes. FDA-approved IPL treatment targets the root cause of dry eye for long-lasting relief. Schedule your assessment today.',
};

export default function DryEyeIPLLandingPage() {
    return (
        <LandingPageLayout>
            {/* Hero Section */}
            <LandingHero
                headline="Stop Suffering from Dry, Gritty, Tired Eyes"
                subheadline="Experience long-lasting relief with FDA-approved IPL therapy that targets the root cause of dry eye, not just the symptoms."
                imageSrc="/images/Dryeye_01.avif"
                benefits={[
                    "Treats the root cause of inflammation",
                    "Drug-free, drop-free solution",
                    "Quick, comfortable sessions",
                    "Long-lasting results"
                ]}
            />

            <SocialProof />

            {/* Problem/Agitation Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy mb-6">
                            Are You Tired of Relying on Eye Drops?
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            Artificial tears only provide temporary relief. If you're experiencing these symptoms, you may have Meibomian Gland Dysfunction (MGD), the leading cause of dry eye:
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            "Gritty, sandy sensation",
                            "Burning or stinging",
                            "Redness and irritation",
                            "Blurry fluctuating vision",
                            "Watery eyes (reflex tearing)",
                            "Sensitivity to light",
                            "Eye fatigue",
                            "Difficulty wearing contacts"
                        ].map((symptom, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center gap-3">
                                <div className="w-2 h-2 bg-eyecare-blue rounded-full shrink-0"></div>
                                <span className="font-medium text-eyecare-navy">{symptom}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/images/IPL_01.avif"
                                alt="IPL Treatment Process for Dry Eye Relief"
                                className="rounded-2xl shadow-xl w-full"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-eyecare-blue font-bold tracking-wider uppercase text-sm mb-2 block">The Solution</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy mb-6">
                                OptiLight IPL: A Revolutionary Treatment
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Intense Pulsed Light (IPL) therapy is the first and only FDA-approved light-based treatment for the management of dry eye disease due to MGD.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Instead of just adding moisture, IPL treats the underlying inflammation and unblocks the oil glands in your eyelids, restoring your eye's natural tear film stability.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-eyecare-blue shadow-sm shrink-0">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">Reduces Inflammation</h4>
                                        <p className="text-sm text-gray-600">Eliminates abnormal blood vessels that release inflammatory markers.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-eyecare-blue shadow-sm shrink-0">
                                        <Droplets className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">Restores Oil Flow</h4>
                                        <p className="text-sm text-gray-600">Liquefies hardened oil in meibomian glands for better tear quality.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-eyecare-blue shadow-sm shrink-0">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">Eradicates Bacteria</h4>
                                        <p className="text-sm text-gray-600">Reduces the population of Demodex mites and bacteria on eyelids.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AnimatedSection>
                <BenefitsSection
                    title="Why Choose IPL Therapy?"
                    benefits={[
                        {
                            title: "Treats the Root Cause",
                            description: "Unlike drops that only provide temporary relief, IPL targets the inflammation causing your dry eye.",
                            icon: <Zap className="w-8 h-8" />
                        },
                        {
                            title: "Long-Lasting Relief",
                            description: "Most patients experience significant improvement after just 3-4 sessions, with results lasting 6-12 months.",
                            icon: <Clock className="w-8 h-8" />
                        },
                        {
                            title: "Safe & Comfortable",
                            description: "FDA-approved technology that is gentle on your skin and eyes. No downtime required.",
                            icon: <Shield className="w-8 h-8" />
                        },
                        {
                            title: "Improves Appearance",
                            description: "IPL also reduces redness and improves the skin texture around your eyes.",
                            icon: <Sun className="w-8 h-8" />
                        },
                        {
                            title: "Reduces Drop Dependency",
                            description: "Many patients can significantly reduce or eliminate their daily use of artificial tears.",
                            icon: <Droplets className="w-8 h-8" />
                        },
                        {
                            title: "Doctor Recommended",
                            description: "The preferred treatment for Meibomian Gland Dysfunction by leading ophthalmologists.",
                            icon: <ThumbsUp className="w-8 h-8" />
                        }
                    ]}
                />
            </AnimatedSection>

            <AnimatedSection className="bg-blue-50">
                <Testimonials
                    quote="I've tried every drop on the market, but nothing worked until I found Dr. Bonakdar. The IPL treatment was a game-changer. My eyes finally feel normal again!"
                    author="Sarah M."
                    role="Dry Eye Patient"
                />
            </AnimatedSection>

            <AnimatedSection>
                <FAQSection
                    items={[
                        {
                            question: "Is IPL painful?",
                            answer: "Most patients report little to no discomfort. You may feel a warm sensation and a light snap, similar to a rubber band, but it is generally very well tolerated."
                        },
                        {
                            question: "How many sessions do I need?",
                            answer: "We typically recommend a series of 4 treatments spaced 3-4 weeks apart for optimal results. Maintenance treatments may be needed once or twice a year."
                        },
                        {
                            question: "Is it covered by insurance?",
                            answer: "IPL is currently considered an elective procedure and is not covered by most insurance plans. However, we offer flexible financing options."
                        }
                    ]}
                />
            </AnimatedSection>

            {/* Service Area / Local SEO Section */}
            <section className="py-12 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-xl font-bold text-eyecare-navy mb-4">
                        Expert Dry Eye Care in Orange County
                    </h3>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Conveniently located in Santa Ana, we are proud to serve patients from across Orange County, including
                        <span className="font-semibold text-eyecare-blue"> Irvine, Newport Beach, Tustin, Costa Mesa, Orange, Huntington Beach, and Mission Viejo</span>.
                        Dr. Bonakdar is a leading specialist in treating Meibomian Gland Dysfunction (MGD) and dry eye syndrome using advanced IPL technology.
                    </p>
                </div>
            </section>

            {/* Local Business & Procedure Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalProcedure",
                        "name": "IPL Therapy for Dry Eye",
                        "description": "FDA-approved Intense Pulsed Light (IPL) therapy for the management of dry eye disease and Meibomian Gland Dysfunction (MGD).",
                        "procedureType": "Non-surgical",
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
                                "streetAddress": "301 South Harbor Blvd., Suite 100",
                                "addressLocality": "Santa Ana",
                                "addressRegion": "CA",
                                "postalCode": "92704",
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
