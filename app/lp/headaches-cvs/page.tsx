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
import { Eye, Zap, Brain, Shield, Heart, TrendingUp } from 'lucide-react';
import { SERVICE_AREAS } from '@/lib/schema';

export const metadata: Metadata = {
    title: 'Digital Eye Strain & Headaches',
    description: 'Relieve chronic headaches, neck pain, and digital eye strain with specialized Neurolens technology. Expert solutions for computer vision syndrome in Orange County.',
};

export default function HeadachesCVSLandingPage() {
    return (
        <LandingPageLayout>
            {/* Hero Section  */}
            <LandingHero
                headline="Headaches at Work? It Might Be Your Eyes, Not Your Stress."
                subheadline="Relieve digital eye strain, neck pain, and chronic headaches with a specialized vision solution designed for the modern lifestyle."
                imageSrc="/images/services-main.webp"
                ctaText="Relieve My Eye Strain Now"
                benefits={[
                    "Eliminate chronic headaches",
                    "Reduce neck and shoulder pain",
                    "Boost work productivity",
                    "Neurolens technology available"
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
                            Do You Suffer from the "3 PM Slump"?
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            You start the day fine, but by mid-afternoon, you're fighting a headache, dry eyes, or neck tension. You might think it's just stress or posture, but often, the culprit is <strong>Digital Eye Strain</strong> or a subtle misalignment in your vision.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            "Chronic headaches or migraines",
                            "Neck and shoulder stiffness",
                            "Eye fatigue and light sensitivity",
                            "Dizziness or motion sickness",
                            "Blurred vision after screen time",
                            "Difficulty concentrating",
                            "Dry, irritated eyes",
                            "Sensitivity to bright lights"
                        ].map((symptom, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center gap-3">
                                <div className="w-2 h-2 bg-eyecare-blue rounded-full shrink-0"></div>
                                <span className="font-medium text-eyecare-navy text-sm">{symptom}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-eyecare-blue font-bold tracking-wider uppercase text-sm mb-2 block text-center">The Solution</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy mb-6 text-center">
                            Get to the Root Cause of Your Pain
                        </h2>
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
                            Standard eye exams check for 20/20 vision, but they often miss how your eyes <strong>work together</strong>. We test for <strong>Binocular Vision Dysfunction (BVD)</strong> and digital strain.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-md">
                                <div className="w-14 h-14 bg-eyecare-blue/10 rounded-full flex items-center justify-center text-eyecare-blue mb-4">
                                    <Brain className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Neurolens® Technology</h3>
                                <p className="text-gray-600">
                                    Specialized lenses that correct misalignment, relaxing your eye muscles and preventing overstimulation of the trigeminal nerve (a major cause of headaches).
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-md">
                                <div className="w-14 h-14 bg-eyecare-blue/10 rounded-full flex items-center justify-center text-eyecare-blue mb-4">
                                    <Shield className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Blue Light Filtration</h3>
                                <p className="text-gray-600">
                                    Advanced coatings to reduce glare and high-energy light from screens, protecting your eyes during long work sessions.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-md">
                                <div className="w-14 h-14 bg-eyecare-blue/10 rounded-full flex items-center justify-center text-eyecare-blue mb-4">
                                    <Eye className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Vision Therapy</h3>
                                <p className="text-gray-600">
                                    Ergonomic exercises to strengthen your focusing system and improve eye coordination for long-term relief.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AnimatedSection>
                <BenefitsSection
                    title="Why Choose Neurolens?"
                    benefits={[
                        {
                            title: "Relieves Headaches",
                            description: "Clinically proven to reduce the frequency and intensity of chronic headaches and migraines.",
                            icon: <Brain className="w-8 h-8" />
                        },
                        {
                            title: "Reduces Neck Pain",
                            description: "By aligning your vision, Neurolens reduces the tension in your neck and shoulders.",
                            icon: <TrendingUp className="w-8 h-8" />
                        },
                        {
                            title: "Improves Comfort",
                            description: "Say goodbye to eye strain and fatigue, even after long hours on the computer.",
                            icon: <Heart className="w-8 h-8" />
                        },
                        {
                            title: "Boosts Productivity",
                            description: "With less pain and fatigue, you can focus better and get more done.",
                            icon: <Zap className="w-8 h-8" />
                        },
                        {
                            title: "Customized for You",
                            description: "Your lenses are prescribed based on precise measurements from the Neurolens Measurement Device.",
                            icon: <Shield className="w-8 h-8" />
                        },
                        {
                            title: "Works with Any Prescription",
                            description: "Neurolens technology can be added to almost any prescription, or even non-prescription lenses.",
                            icon: <Eye className="w-8 h-8" />
                        }
                    ]}
                />
            </AnimatedSection>

            <AnimatedSection className="bg-blue-50">
                <Testimonials
                    quote="I suffered from daily headaches for years. I thought it was just stress. After getting my Neurolenses, my headaches are gone. It's like a miracle."
                    author="David K."
                    role="Neurolens Patient"
                />
            </AnimatedSection>

            <AnimatedSection>
                <FAQSection
                    items={[
                        {
                            question: "How do I know if I need Neurolens?",
                            answer: "If you experience headaches, neck pain, eye strain, or dizziness when using digital devices, you may be a candidate. We can perform a quick screening test."
                        },
                        {
                            question: "Can I wear them all day?",
                            answer: "Yes! Neurolenses are designed to be worn as your primary pair of glasses for all-day comfort."
                        },
                        {
                            question: "Does insurance cover Neurolens?",
                            answer: "Some vision plans may cover a portion of the cost. We can check your benefits and offer financing options."
                        }
                    ]}
                />
            </AnimatedSection>

            {/* Service Area / Local SEO Section */}
            <section className="py-12 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-xl font-bold text-eyecare-navy mb-4">
                        Digital Eye Strain Solutions in Orange County
                    </h3>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Serving office workers, students, and digital professionals from across Orange County, including
                        <span className="font-semibold text-eyecare-blue"> Santa Ana, Irvine, Newport Beach, Tustin, Costa Mesa, Orange, and Mission Viejo</span>.
                    </p>
                </div>
            </section>

            {/* Medical Condition Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalCondition",
                        "name": "Computer Vision Syndrome",
                        "alternateName": "Digital Eye Strain",
                        "associatedAnatomy": {
                            "@type": "AnatomicalStructure",
                            "name": "Eye"
                        },
                        "possibleTreatment": {
                            "@type": "MedicalTherapy",
                            "name": "Neurolens Therapy for Digital Eye Strain",
                            "provider": {
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
                                "telephone": "+1-949-364-0008",
                                "areaServed": SERVICE_AREAS
                            }
                        }
                    })
                }}
            />

            <StickyCTA />
        </LandingPageLayout>
    );
}
