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
import { Eye, Zap, Brain, Shield, Heart, TrendingUp, Monitor, Sun, Frown, Users, CheckCircle } from 'lucide-react';
import { SERVICE_AREAS } from '@/lib/schema';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Headache & Computer Vision Relief | Orange County',
    description: 'Expert treatment for headaches and computer vision syndrome. Digital eye strain relief, specialized lenses. Orange County.',
    keywords: ['digital eye strain', 'headache relief', 'neurolens orange county', 'computer vision syndrome', 'scleral lenses', 'eye strain treatment'],
    openGraph: {
        title: 'Stop the Headaches. Fix the Strain.',
        description: 'Advanced relief for digital eye strain and chronic headaches in Orange County.',
        images: ['/images/services-main.webp']
    }
};

export default function HeadachesCVSLandingPage() {
    return (
        <LandingPageLayout>
            {/* Hero Section */}
            <LandingHero
                headline="Headaches at Work? It Might Be Your Eyes, Not Your Stress."
                subheadline="Relieve digital eye strain, neck pain, and chronic headaches with Neurolens®—a specialized vision solution designed for the modern digital lifestyle."
                imageSrc="/images/services-main.webp"
                ctaText="Relieve My Eye Strain"
                benefits={[
                    "Eliminate chronic headaches",
                    "Reduce neck and shoulder pain",
                    "Boost work productivity",
                    "Neurolens® Provider"
                ]}
                badgeText="New: Neurolens Technology"
            />

            <AnimatedSection className="bg-eyecare-navy">
                <SocialProof />
            </AnimatedSection>

            {/* Problem/Agitation Section with Glassmorphism */}
            <section className="py-24 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 font-bold text-xs uppercase tracking-wider mb-4 border border-red-200">
                            The Hidden Problem
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-eyecare-navy mb-6">
                            Do You Suffer from the "3 PM Slump"?
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                            You start the day fine, but by mid-afternoon, you're fighting a headache, dry eyes, or neck tension. You might think it's just stress or posture, but often, the culprit is <strong>Digital Eye Strain</strong> or a subtle misalignment in your vision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { text: "Chronic headaches or migraines", icon: <Brain className="w-6 h-6 text-red-500" /> },,
  alternates: {
    canonical: 'https://eyecarecenteroc.com/lp/headaches-cvs',
  }
                            { text: "Neck and shoulder stiffness", icon: <Frown className="w-6 h-6 text-orange-500" /> },
                            { text: "Eye fatigue & light sensitivity", icon: <Sun className="w-6 h-6 text-yellow-500" /> },
                            { text: "Dizziness or motion sickness", icon: <TrendingUp className="w-6 h-6 text-purple-500" /> },
                            { text: "Blurred vision after screen time", icon: <Monitor className="w-6 h-6 text-blue-500" /> },
                            { text: "Difficulty concentrating", icon: <Zap className="w-6 h-6 text-indigo-500" /> },
                            { text: "Dry, gritty, irritated eyes", icon: <Eye className="w-6 h-6 text-teal-500" /> },
                            { text: "Sensitivity to glare", icon: <Shield className="w-6 h-6 text-cyan-500" /> }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group">
                                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-white transition-colors">
                                    {item.icon}
                                </div>
                                <span className="font-medium text-eyecare-navy pt-2">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-eyecare-blue font-bold tracking-wider uppercase text-sm mb-3 block">The Solution</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-eyecare-navy mb-6">
                            Get to the Root Cause of Your Pain
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Standard eye exams check for 20/20 vision, but they often miss how your eyes <strong>work together</strong>. We test for <strong>Binocular Vision Dysfunction (BVD)</strong>—a misalignment that forces your brain to constantly overcompensate.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Card 1: Neurolens */}
                        <div className="bg-gradient-to-b from-blue-50 to-white p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                            <div className="bg-white rounded-[1.3rem] p-8 h-full relative z-10 group-hover:bg-blue-50/30 transition-colors">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-eyecare-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Brain className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-eyecare-navy mb-4">Neurolens® Technology</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    The first and only prescription lenses that add a <strong>contoured prism</strong> to bring the eyes into alignment. This relaxes the trigeminal nerve, directly targeting the source of your headaches and neck pain.
                                </p>
                                <ul className="space-y-2 mb-8">
                                    <li className="flex items-center text-sm text-gray-700">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 93% symptom relief rate
                                    </li>
                                    <li className="flex items-center text-sm text-gray-700">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Works with any prescription
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2: Blue Light */}
                        <div className="bg-white p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group border border-gray-100">
                            <div className="bg-white rounded-[1.3rem] p-8 h-full relative z-10">
                                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-eyecare-navy mb-4">Blue Light Defense</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Advanced lens coatings that selectively filter the high-energy blue light emitted by digital screens. This reduces glare, improves contrast, and protects your circadian rhythm for better sleep.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Vision Therapy */}
                        <div className="bg-white p-1 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group border border-gray-100">
                            <div className="bg-white rounded-[1.3rem] p-8 h-full relative z-10">
                                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-eyecare-navy mb-4">Vision Therapy</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Like physical therapy for your eyes. Custom exercises train your brain and eyes to work together more efficiently, strengthening your focusing power and convergence ability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AnimatedSection>
                <BenefitsSection
                    title="Why Patients Choose Our Digital Strain Protocol"
                    benefits={[
                        {
                            title: "Relief Without Medication",
                            description: "Treat the root cause of your headaches—visual misalignment—rather than just masking the pain with pills.",
                            icon: <Brain className="w-8 h-8" />
                        },
                        {
                            title: "Immediate Comfort Upgrade",
                            description: "Most patients feel the difference in their neck and shoulders within days of wearing their new lenses.",
                            icon: <Heart className="w-8 h-8" />
                        },
                        {
                            title: "Boosted Productivity",
                            description: "Work longer and focus better without the 'brain fog' and fatigue that sets in by mid-afternoon.",
                            icon: <Zap className="w-8 h-8" />
                        }
                    ]}
                />
            </AnimatedSection>

            <AnimatedSection className="bg-blue-50/50">
                <Testimonials
                    quote="I suffered from migraines every week. I didn't believe it was my eyes until I tried the Neurolens test. It's been 3 months and I haven't had a single migraine. It's life changing."
                    author="Sarah M."
                    role="Digital Marketing Manager"
                />
            </AnimatedSection>

            <AnimatedSection>
                <FAQSection
                    items={[
                        {
                            question: "How do I know if I have Binocular Vision Dysfunction (BVD)?",
                            answer: "Common signs include headaches centered in the forehead or temples, neck pain, dizziness, anxiety in large spaces, and drifting to one side when walking. We perform a specialized sensorimotor exam to diagnose it."
                        },
                        {
                            question: "Is Neurolens covered by insurance?",
                            answer: "Vision plans may cover the refraction and standard lens materials. The specialized Neurolens technology often has an out-of-pocket component, but you can use HSA/FSA funds. We also offer financing."
                        },
                        {
                            question: "Can I just use over-the-counter blue light glasses?",
                            answer: "Generic blue light glasses only filter light; they do not correct the visual misalignment (prism) that causes the actual muscle strain. For true relief, you need to address the alignment issue."
                        }
                    ]}
                />
            </AnimatedSection>

            {/* Service Area / Local SEO Section */}
            <section className="py-16 bg-gray-900 text-gray-300 border-t border-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-xl font-bold text-white mb-6">
                        Digital Eye Strain & Headache Relief in Orange County
                    </h3>
                    <p className="max-w-4xl mx-auto leading-relaxed mb-8">
                        Proudly serving patients from all over Orange County who are looking for a solution to chronic digital eye strain.
                        Conveniently located for patients in:
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Santa Ana", "Irvine", "Tustin", "Orange", "Costa Mesa", "Newport Beach", "Mission Viejo", "Lake Forest", "Garden Grove", "Anaheim"].map((city, i) => (
                            <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors cursor-default">
                                {city}
                            </span>
                        ))}
                    </div>
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
                        "signOrSymptom": [
                            { "@type": "MedicalSymptom", "name": "Headache" },
                            { "@type": "MedicalSymptom", "name": "Eye Strain" },
                            { "@type": "MedicalSymptom", "name": "Neck Pain" },
                            { "@type": "MedicalSymptom", "name": "Dry Eye" }
                        ],
                        "possibleTreatment": {
                            "@type": "MedicalTherapy",
                            "name": "Neurolens Therapy",
                            "provider": {
                                "@type": "MedicalClinic",
                                "name": "Optometric Eyecare Center of Orange County",
                                "telephone": "+1-714-558-1182",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Santa Ana",
                                    "addressRegion": "CA"
                                }
                            }
                        }
                    })
                }}
            />

            <StickyCTA />
        </LandingPageLayout>
    );
}
