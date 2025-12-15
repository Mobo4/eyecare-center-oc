import { Metadata } from 'next';
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Eye, Shield, Droplets, CheckCircle, AlertCircle, Maximize, Focus } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
    title: 'Scleral Contact Lenses | Keratoconus Expert | OC',
    description: 'Custom scleral lenses for keratoconus, dry eye, post-LASIK. Life-changing comfort and vision. Expert fitting in Orange County.',
    keywords: [
        'scleral lenses orange county',
        'scleral contact lenses keratoconus',
        'scleral lens fitting irvine',
        'keratoconus scleral lenses',
        'irregular cornea scleral lenses',
        'post-LASIK scleral lenses',
        'dry eye scleral lenses',
        'corneal transplant lenses',
        'pellucid marginal degeneration lenses',
        'scleral lens specialist orange county',
        'custom scleral lenses newport beach',
        'mini scleral lenses',
        'full scleral lenses',
        'scleral lens fitting santa ana',
        'keratoconus treatment orange county',
        'scleral lenses post-surgery',
        'scleral lenses corneal ectasia',
        'large diameter contact lenses',
        'vault contact lenses',
        'scleral lens fitting costa mesa'
    ],
    openGraph: {
        title: 'Scleral Contact Lenses | Keratoconus Specialist | EyeCare Center OC',
        description: 'Expert scleral lens fitting for keratoconus and irregular corneas. Custom-designed lenses vault over cornea for superior comfort and vision.',
        type: 'website',
    }
,
  alternates: {
    canonical: 'https://eyecarecenteroc.com/services/contact-lenses/scleral',
  }
};

import { generateMedicalBusinessSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export default function ScleralLensesPage() {
    const businessSchema = generateMedicalBusinessSchema();

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={businessSchema} id="business-schema" />
            <Header />

            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/contact-lenses-main.webp"
                        alt="Scleral Contact Lenses"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                </div>
                <div className="relative h-full container mx-auto px-4 flex items-center">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Scleral Contact Lenses
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Life-changing vision for keratoconus and irregular corneas. <strong className="text-white">Large diameter lenses vault over the cornea</strong> for exceptional comfort and crystal-clear vision.
                        </p>
                    </div>
                </div>
            </section>

            {/* What Are Scleral Lenses? */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2">
                            <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Revolutionary Technology</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-6">
                                What Are Scleral Lenses?
                            </h2>
                            <p className="text-eyecare-light-navy text-lg mb-6 leading-relaxed">
                                Scleral contact lenses are large-diameter rigid gas permeable (RGP) lenses that vault over the entire corneal surface and rest on the white part of the eye (the sclera). Unlike traditional contact lenses that sit directly on the cornea, scleral lenses create a fluid-filled space between the lens and the cornea.
                            </p>
                            <p className="text-eyecare-light-navy text-lg mb-6 leading-relaxed">
                                This unique design makes them ideal for irregular corneas, keratoconus, severe dry eye, and post-surgical eyes where traditional lenses fail to provide adequate vision or comfort.
                            </p>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                                <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5" />
                                    Ideal For:
                                </h3>
                                <ul className="space-y-2 text-amber-700">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></span>
                                        <span><strong>Keratoconus</strong> (all stages)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></span>
                                        <span><strong>Pellucid marginal degeneration</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></span>
                                        <span><strong>Post-LASIK/PRK ectasia</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></span>
                                        <span><strong>Corneal transplant patients</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></span>
                                        <span><strong>Severe dry eye syndrome</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></span>
                                        <span><strong>Irregular astigmatism</strong></span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="bg-eyecare-warm rounded-3xl p-8 border border-eyecare-blue/10">
                                <h3 className="text-2xl font-bold text-eyecare-navy mb-6">Key Benefits</h3>
                                <div className="space-y-4">
                                    <BenefitCard
                                        icon={Eye}
                                        title="Exceptional Visual Clarity"
                                        description="Creates a smooth optical surface over irregular corneas, eliminating distortions and providing crisp, clear vision."
                                    />
                                    <BenefitCard
                                        icon={Shield}
                                        title="Superior Comfort"
                                        description="Rests on the less sensitive sclera, not the cornea. No irritation from lens movement or corneal touch."
                                    />
                                    <BenefitCard
                                        icon={Droplets}
                                        title="Continuous Hydration"
                                        description="Tear-filled reservoir keeps the cornea bathed in fluid all day, perfect for severe dry eye."
                                    />
                                    <BenefitCard
                                        icon={Focus}
                                        title="Exceptional Stability"
                                        description="Large diameter prevents lens movement. Won't fall out during sports or daily activities."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How They Work */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">The Science</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            How Scleral Lenses Work
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            <FeatureCard
                                number="1"
                                title="Vault Design"
                                description="The lens arches over the cornea without touching it, creating a protective fluid-filled space."
                                icon={Maximize}
                            />
                            <FeatureCard
                                number="2"
                                title="Fluid Reservoir"
                                description="Filled with preservative-free saline, this space keeps the cornea hydrated and protected all day."
                                icon={Droplets}
                            />
                            <FeatureCard
                                number="3"
                                title="Scleral Landing"
                                description="The lens rests gently on the white of the eye, distributing weight evenly for maximum comfort."
                                icon={Shield}
                            />
                        </div>

                        <div className="mt-12 bg-blue-50 p-8 rounded-2xl border border-eyecare-blue/20">
                            <h3 className="text-xl font-bold text-eyecare-navy mb-4">Size Matters</h3>
                            <p className="text-eyecare-light-navy mb-4">
                                Scleral lenses range from 15-24mm in diameter (compared to 8-14.5mm for standard contacts). This larger size is what allows them to vault over the cornea and rest on the sclera.
                            </p>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="font-bold text-eyecare-navy mb-1">Mini-Scleral</p>
                                    <p className="text-gray-600">15-18mm diameter</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="font-bold text-eyecare-navy mb-1">Semi-Scleral</p>
                                    <p className="text-gray-600">18-21mm diameter</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <p className="font-bold text-eyecare-navy mb-1">Full Scleral</p>
                                    <p className="text-gray-600">21-24mm diameter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fitting Process */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy text-center mb-12">
                            The Scleral Lens Fitting Process
                        </h2>

                        <div className="space-y-6">
                            <ProcessStep
                                number={1}
                                title="Comprehensive Evaluation"
                                description="Detailed corneal topography maps your eye's unique shape. We assess corneal health, tear film quality, and determine if scleral lenses are the right solution."
                            />
                            <ProcessStep
                                number={2}
                                title="Diagnostic Fitting"
                                description="We use trial lenses to evaluate vault height, edge alignment, and overall fit. Advanced imaging helps us see how the lens interacts with your eye."
                            />
                            <ProcessStep
                                number={3}
                                title="Custom Design"
                                description="Your lenses are custom-manufactured to your exact specifications, including diameter, vault depth, edge profile, and prescription power."
                            />
                            <ProcessStep
                                number={4}
                                title="Insertion & Care Training"
                                description="We teach you how to fill the lens with saline, insert and remove it safely, and maintain proper hygiene. Most patients master this quickly."
                            />
                            <ProcessStep
                                number={5}
                                title="Follow-Up & Fine-Tuning"
                                description="Regular visits ensure optimal fit and comfort. We make adjustments as needed and monitor your eye health closely."
                            />
                        </div>

                        <div className="mt-12 bg-eyecare-warm p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-eyecare-navy mb-4">What to Expect</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-eyecare-navy mb-2">Fitting Timeline:</h4>
                                    <ul className="space-y-2 text-eyecare-light-navy text-sm">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                            <span>Initial fitting: 1-2 hours</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                            <span>Lens fabrication: 1-4 weeks</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                            <span>Adaptation period: Few days to 2 weeks</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-eyecare-navy mb-2">Wear Schedule:</h4>
                                    <ul className="space-y-2 text-eyecare-light-navy text-sm">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                            <span>Daily wear: 12-16 hours comfortable</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                            <span>Remove nightly for cleaning</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                            <span>Lenses last 1-2 years with proper care</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-eyecare-blue text-white text-center">
                <div className="container mx-auto px-4">
                    <Eye className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                        See Clearly Again with Scleral Lenses
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        If you have keratoconus or an irregular cornea, scleral lenses can be life-changing. Schedule your consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Book Scleral Lens Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <a
                            href={CONTACT_INFO.primaryPhone.href}
                            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-eyecare-blue transition-all duration-300"
                        >
                            Call {CONTACT_INFO.primaryPhone.display}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function BenefitCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
            <div className="shrink-0 w-10 h-10 bg-eyecare-blue/10 rounded-full flex items-center justify-center text-eyecare-blue">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h4 className="font-bold text-eyecare-navy mb-1">{title}</h4>
                <p className="text-sm text-eyecare-light-navy">{description}</p>
            </div>
        </div>
    );
}

function FeatureCard({ number, title, description, icon: Icon }: { number: string, title: string, description: string, icon: any }) {
    return (
        <div className="text-center">
            <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-eyecare-warm rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-10 h-10 text-eyecare-blue" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-eyecare-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {number}
                </div>
            </div>
            <h3 className="text-xl font-bold text-eyecare-navy mb-2">{title}</h3>
            <p className="text-eyecare-light-navy">{description}</p>
        </div>
    );
}

function ProcessStep({ number, title, description }: { number: number, title: string, description: string }) {
    return (
        <div className="flex gap-6 bg-gray-50 p-6 rounded-xl">
            <div className="shrink-0">
                <div className="w-12 h-12 bg-eyecare-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {number}
                </div>
            </div>
            <div className="pt-2">
                <h3 className="text-xl font-bold text-eyecare-navy mb-2">{title}</h3>
                <p className="text-eyecare-light-navy leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
