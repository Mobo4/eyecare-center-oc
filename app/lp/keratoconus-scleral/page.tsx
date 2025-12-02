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
import { Eye, Shield, CheckCircle, Activity, Star, MapPin } from 'lucide-react';
import { SERVICE_AREAS } from '@/lib/schema';

export const metadata: Metadata = {
    title: 'Keratoconus & Scleral Lenses',
    description: 'Restore clear vision with custom scleral lenses for keratoconus. Dr. Bonakdar is a leading specialist in irregular cornea management in Orange County.',
};

export default function KeratoconusLandingPage() {
    return (
        <LandingPageLayout>
            {/* Hero Section */}
            <LandingHero
                headline="Restore Your Vision. Reclaim Your Life."
                subheadline="Experience vision clearer than you thought possible with custom-designed scleral lenses that offer superior comfort and stability."
                imageSrc="/images/Scleral_lens_01.avif"
                ctaText="Get Fitted for Scleral Lenses"
                benefits={[
                    "Custom-fit for your unique eye shape",
                    "Superior comfort & stability",
                    "High-definition vision correction",
                    "Non-surgical solution"
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
                            Is Keratoconus Stealing Your Vision?
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            We understand the frustration. You've been told your vision is "difficult" or "impossible" to correct. You may feel like you're losing your independence. But there is hope.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-eyecare-navy mb-4 flex items-center gap-3">
                                <Activity className="text-eyecare-blue w-6 h-6" />
                                The Reality of Keratoconus
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                Your cornea is losing its natural shape, bulging outward. This irregularity scatters light before it enters your eye, causing:
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-gray-700">
                                    <span className="w-2 h-2 bg-eyecare-blue rounded-full" />
                                    Severe ghosting and halos
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <span className="w-2 h-2 bg-eyecare-blue rounded-full" />
                                    Distorted, blurry vision
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <span className="w-2 h-2 bg-eyecare-blue rounded-full" />
                                    Sensitivity to light
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <img
                                src="/images/Keratoconus_eye.avif"
                                alt="Advanced Keratoconus Eye Condition"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                                <p className="text-white font-medium">Advanced Keratoconus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/images/keratoconus-main.webp"
                                alt="Scleral Lens Fitting"
                                className="rounded-2xl shadow-xl w-full"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-eyecare-blue font-bold tracking-wider uppercase text-sm mb-2 block">The Gold Standard</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy mb-6">
                                Scleral Lenses: A Life-Changing Solution
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Scleral lenses are large-diameter gas permeable lenses that vault over the entire cornea and rest gently on the white part of the eye (the sclera).
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                This creates a smooth optical surface that masks irregularities, providing <strong>high-definition vision</strong> that glasses simply cannot match.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-eyecare-blue shadow-sm shrink-0">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">Superior Comfort</h4>
                                        <p className="text-sm text-gray-600">They don't touch the sensitive cornea, making them comfortable for all-day wear.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-eyecare-blue shadow-sm shrink-0">
                                        <Eye className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">Stable Vision</h4>
                                        <p className="text-sm text-gray-600">The lens stays centered and doesn't rotate, providing consistent clarity.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-eyecare-blue shadow-sm shrink-0">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">Continuous Hydration</h4>
                                        <p className="text-sm text-gray-600">A reservoir of fluid keeps your eye moist and healthy throughout the day.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <AnimatedSection>
                <BenefitsSection
                    title="Why Choose Scleral Lenses?"
                    benefits={[
                        {
                            title: "Superior Vision",
                            description: "Scleral lenses mask corneal irregularities, providing sharper vision than glasses or standard contacts.",
                            icon: <Eye className="w-8 h-8" />
                        },
                        {
                            title: "Unmatched Comfort",
                            description: "The lenses vault over the cornea and rest on the sclera (white of the eye), avoiding sensitive tissue.",
                            icon: <Shield className="w-8 h-8" />
                        },
                        {
                            title: "Stable Fit",
                            description: "Large diameter lenses stay centered and don't pop out, even during active lifestyles.",
                            icon: <CheckCircle className="w-8 h-8" />
                        },
                        {
                            title: "Dry Eye Relief",
                            description: "A fluid reservoir between the lens and eye keeps the cornea hydrated all day long.",
                            icon: <Activity className="w-8 h-8" />
                        },
                        {
                            title: "Custom Designed",
                            description: "Each lens is precision-engineered based on a 3D map of your unique eye shape.",
                            icon: <MapPin className="w-8 h-8" />
                        },
                        {
                            title: "Expert Fitting",
                            description: "Dr. Bonakdar is a recognized specialist with years of experience in complex contact lens fittings.",
                            icon: <Star className="w-8 h-8" />
                        }
                    ]}
                />
            </AnimatedSection>

            {/* Testimonial */}
            <AnimatedSection className="bg-blue-50">
                <Testimonials
                    quote="I was told I would never see clearly again. Scleral lenses changed my life. I can drive at night and work on my computer without strain. Thank you, Dr. Bonakdar!"
                    author="Michael R."
                    role="Keratoconus Patient"
                />
            </AnimatedSection>

            <AnimatedSection>
                <FAQSection
                    items={[
                        {
                            question: "Are scleral lenses hard to put in?",
                            answer: "There is a learning curve, but most patients master the technique within a week. We provide comprehensive training and support."
                        },
                        {
                            question: "How long do they last?",
                            answer: "With proper care, a pair of scleral lenses can last 1-2 years. We recommend annual checks to ensure the fit remains optimal."
                        },
                        {
                            question: "Does insurance cover them?",
                            answer: "Many vision plans classify scleral lenses as 'medically necessary' for keratoconus, which may provide significant coverage. We can help verify your benefits."
                        },
                        {
                            question: "Do they help with dry eyes?",
                            answer: "Absolutely. The fluid reservoir between the lens and your eye provides constant hydration, making them an excellent option for severe dry eye."
                        }
                    ]}
                />
            </AnimatedSection>

            {/* Service Area / Local SEO Section */}
            <section className="py-12 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-xl font-bold text-eyecare-navy mb-4 flex items-center justify-center gap-2">
                        <MapPin className="text-eyecare-blue w-5 h-5" />
                        Expert Keratoconus Care in Orange County
                    </h3>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Conveniently located in Santa Ana, we are proud to serve keratoconus patients from across Orange County, including
                        <span className="font-semibold text-eyecare-blue"> Irvine, Newport Beach, Tustin, Costa Mesa, Orange, Huntington Beach, and Mission Viejo</span>.
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
                        "name": "Scleral Lens Fitting for Keratoconus",
                        "description": "Custom scleral contact lens fitting for the management of keratoconus and irregular corneas.",
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
                            "telephone": "+1-949-364-0008",
                            "areaServed": SERVICE_AREAS
                        }
                    })
                }}
            />

            <StickyCTA />
        </LandingPageLayout>
    );
}
