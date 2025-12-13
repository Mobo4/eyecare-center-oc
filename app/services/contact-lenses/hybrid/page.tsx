import { Metadata } from 'next';
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Eye, Shield, Zap, CheckCircle, XCircle, Layers, Focus, Sun } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
    title: 'Hybrid Contact Lenses | SynergEyes | Orange County',
    description: 'Advanced hybrid contact lenses combining RGP clarity with soft lens comfort. Perfect for keratoconus, astigmatism. Expert fitting in OC.',
    keywords: [
        'hybrid contact lenses orange county',
        'SynergEyes hybrid lenses',
        'SynergEyes Duette fitting',
        'SynergEyes UltraHealth',
        'SynergEyes ClearKone keratoconus',
        'hybrid lenses keratoconus',
        'hybrid lenses astigmatism',
        'RGP soft lens hybrid',
        'best of both worlds contact lenses',
        'hybrid lens fitting irvine',
        'hybrid contact lenses newport beach',
        'keratoconus hybrid lenses',
        'irregular cornea hybrid lenses',
        'SynergEyes KC lenses',
        'hybrid lens specialist orange county',
        'comfortable RGP alternative',
        'hybrid multifocal lenses',
        'SynergEyes Duette progressive',
        'post-LASIK hybrid lenses',
        'hybrid contact lens fitting santa ana'
    ],
    openGraph: {
        title: 'Hybrid Contact Lenses | SynergEyes | EyeCare Center OC',
        description: 'Get the clarity of RGP lenses with the comfort of soft lenses. Expert SynergEyes hybrid lens fitting for keratoconus and irregular corneas.',
        type: 'website',
    }
,
  alternates: {
    canonical: 'https://eyecarecenteroc.com/services/contact-lenses/hybrid',
  }
};

import { generateMedicalBusinessSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export default function HybridContactLensesPage() {
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
                        alt="Hybrid Contact Lenses"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                </div>
                <div className="relative h-full container mx-auto px-4 flex items-center">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Hybrid Contact Lenses
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            The best of both worlds: <strong className="text-white">RGP clarity meets soft lens comfort.</strong> Hybrid lenses combine a rigid center for sharp vision with a soft outer skirt for all-day comfort.
                        </p>
                    </div>
                </div>
            </section>

            {/* What Are Hybrid Lenses? */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2">
                            <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Revolutionary Design</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-6">
                                What Are Hybrid Contact Lenses?
                            </h2>
                            <p className="text-eyecare-light-navy text-lg mb-6 leading-relaxed">
                                Hybrid contact lenses feature a unique dual-material design: a rigid gas permeable (RGP) center surrounded by a soft silicone hydrogel skirt. This innovative combination delivers the crisp, high-definition vision of RGP lenses with the comfort and stability of soft lenses.
                            </p>
                            <p className="text-eyecare-light-navy text-lg mb-6 leading-relaxed">
                                The rigid center maintains its shape on the eye, providing exceptional visual clarity for conditions like keratoconus and high astigmatism. Meanwhile, the soft outer portion ensures all-day comfort and keeps the lens centered and stable.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-xl border border-eyecare-blue/20">
                                <h3 className="font-bold text-eyecare-navy mb-3 flex items-center gap-2">
                                    <Layers className="w-5 h-5 text-eyecare-blue" />
                                    Perfect For:
                                </h3>
                                <ul className="space-y-2 text-eyecare-light-navy">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full mt-2"></span>
                                        <span>Patients who need RGP clarity but find them uncomfortable</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full mt-2"></span>
                                        <span>Keratoconus and irregular corneas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full mt-2"></span>
                                        <span>High or irregular astigmatism</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full mt-2"></span>
                                        <span>Post-refractive surgery (LASIK, PRK, RK)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="bg-eyecare-warm rounded-3xl p-8 border border-eyecare-blue/10">
                                <h3 className="text-2xl font-bold text-eyecare-navy mb-6">Key Advantages</h3>
                                <div className="space-y-4">
                                    <AdvantageCard
                                        icon={Eye}
                                        title="Superior Visual Clarity"
                                        description="The rigid center provides crisp, high-definition vision comparable to traditional RGP lenses."
                                    />
                                    <AdvantageCard
                                        icon={Shield}
                                        title="Enhanced Comfort"
                                        description="Soft outer skirt eliminates the foreign body sensation of RGP lenses for all-day wear."
                                    />
                                    <AdvantageCard
                                        icon={Focus}
                                        title="Stable Vision"
                                        description="Lens stays centered and stable, preventing movement and maintaining consistent vision."
                                    />
                                    <AdvantageCard
                                        icon={Sun}
                                        title="UV Protection"
                                        description="Rigid center includes UVA and UVB blocking for added eye protection."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SynergEyes Brand Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Premium Brand</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            SynergEyes Hybrid Lenses
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            We fit the complete line of SynergEyes hybrid contact lenses, the industry leader in hybrid lens technology.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <LensCard
                            title="Duette"
                            subtitle="For Everyday Wear"
                            description="The original hybrid lens for patients with astigmatism or those seeking superior comfort and vision. Available in multifocal designs for presbyopia."
                            features={[
                                "Corrects astigmatism",
                                "Multifocal option available",
                                "All-day comfort",
                                "Stable vision"
                            ]}
                        />
                        <LensCard
                            title="UltraHealth"
                            subtitle="For Irregular Corneas"
                            description="Designed for keratoconus, pellucid marginal degeneration, post-surgical corneas, and other irregular corneal conditions."
                            features={[
                                "Vaults over irregular corneas",
                                "Custom fitting available",
                                "Tangible Hydra-PEG coating option",
                                "Post-LASIK/PRK option (UltraHealth FC)"
                            ]}
                            highlight
                        />
                        <LensCard
                            title="ClearKone"
                            subtitle="For Advanced Keratoconus"
                            description="Specifically engineered for moderate to advanced keratoconus with a unique vaulting design for maximum comfort and vision."
                            features={[
                                "Advanced keratoconus design",
                                "Prevents debris under lens",
                                "Enhanced comfort",
                                "Stable centration"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Hybrid vs. Other Lenses */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Compare Options</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            How Hybrid Lenses Compare
                        </h2>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Hybrid Column */}
                            <div className="bg-gradient-to-br from-eyecare-blue to-blue-600 rounded-3xl p-8 shadow-xl text-white">
                                <div className="text-center mb-6">
                                    <Layers className="w-12 h-12 mx-auto mb-3" />
                                    <h3 className="text-2xl font-bold">Hybrid Lenses</h3>
                                    <p className="text-white/80 text-sm mt-1">Best of Both Worlds</p>
                                </div>
                                <ul className="space-y-3">
                                    <ComparisonItem positive={true} text="RGP-level clarity" light />
                                    <ComparisonItem positive={true} text="Soft lens comfort" light />
                                    <ComparisonItem positive={true} text="Stable on the eye" light />
                                    <ComparisonItem positive={true} text="Great for keratoconus" light />
                                    <ComparisonItem positive={true} text="High oxygen flow" light />
                                    <ComparisonItem positive={false} text="Requires expert fitting" light />
                                    <ComparisonItem positive={false} text="Higher cost" light />
                                </ul>
                            </div>

                            {/* RGP Column */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                                <div className="text-center mb-6">
                                    <Eye className="w-12 h-12 mx-auto mb-3 text-eyecare-blue" />
                                    <h3 className="text-2xl font-bold text-eyecare-navy">RGP Lenses</h3>
                                    <p className="text-gray-600 text-sm mt-1">Maximum Clarity</p>
                                </div>
                                <ul className="space-y-3">
                                    <ComparisonItem positive={true} text="Sharpest vision" />
                                    <ComparisonItem positive={true} text="Durable" />
                                    <ComparisonItem positive={true} text="Cost-effective long-term" />
                                    <ComparisonItem positive={false} text="Adaptation period needed" />
                                    <ComparisonItem positive={false} text="Can feel uncomfortable" />
                                    <ComparisonItem positive={false} text="Can move on eye" />
                                </ul>
                            </div>

                            {/* Soft Column */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                                <div className="text-center mb-6">
                                    <Shield className="w-12 h-12 mx-auto mb-3 text-eyecare-blue" />
                                    <h3 className="text-2xl font-bold text-eyecare-navy">Soft Lenses</h3>
                                    <p className="text-gray-600 text-sm mt-1">Maximum Comfort</p>
                                </div>
                                <ul className="space-y-3">
                                    <ComparisonItem positive={true} text="Immediately comfortable" />
                                    <ComparisonItem positive={true} text="Easy to adapt" />
                                    <ComparisonItem positive={true} text="Wide availability" />
                                    <ComparisonItem positive={false} text="Less sharp for astigmatism" />
                                    <ComparisonItem positive={false} text="Can rotate on eye" />
                                    <ComparisonItem positive={false} text="Not ideal for keratoconus" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fitting Process */}
            <section className="py-20 bg-eyecare-warm">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy text-center mb-12">
                            The Hybrid Lens Fitting Process
                        </h2>

                        <div className="space-y-6">
                            <ProcessStep
                                number={1}
                                title="Comprehensive Evaluation"
                                description="We perform detailed corneal topography and measurements to map your eye's unique shape and determine if hybrid lenses are right for you."
                            />
                            <ProcessStep
                                number={2}
                                title="Diagnostic Fitting"
                                description="We use diagnostic lenses to find the perfect fit, ensuring proper vault over the cornea and comfortable skirt alignment."
                            />
                            <ProcessStep
                                number={3}
                                title="Custom Ordering"
                                description="Your lenses are custom-made to your exact specifications, including prescription, base curve, and diameter."
                            />
                            <ProcessStep
                                number={4}
                                title="Training & Adaptation"
                                description="We teach you proper insertion, removal, and care techniques. Most patients adapt within a few days to a week."
                            />
                            <ProcessStep
                                number={5}
                                title="Follow-Up Care"
                                description="Regular check-ups ensure optimal fit, comfort, and vision. We make adjustments as needed for perfect results."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-eyecare-blue text-white text-center">
                <div className="container mx-auto px-4">
                    <Layers className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                        Experience the Hybrid Lens Difference
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Get the clarity you need with the comfort you deserve. Schedule your hybrid lens consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Book Consultation
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

function AdvantageCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
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

function LensCard({ title, subtitle, description, features, highlight = false }: { title: string, subtitle: string, description: string, features: string[], highlight?: boolean }) {
    return (
        <div className={`p-8 rounded-2xl transition-all duration-300 hover:shadow-xl ${highlight ? 'border-2 border-eyecare-blue bg-blue-50/50 shadow-lg' : 'border border-gray-100 bg-white hover:border-eyecare-blue/30'}`}>
            {highlight && (
                <div className="inline-block px-3 py-1 bg-eyecare-blue text-white rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                    Most Popular
                </div>
            )}
            <h3 className="text-2xl font-bold text-eyecare-navy mb-1">{title}</h3>
            <p className="text-sm text-eyecare-blue font-semibold mb-4">{subtitle}</p>
            <p className="text-eyecare-light-navy mb-6 leading-relaxed">{description}</p>
            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-eyecare-navy">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ComparisonItem({ positive, text, light = false }: { positive: boolean, text: string, light?: boolean }) {
    return (
        <li className="flex items-center gap-3 text-sm">
            {positive ? (
                <CheckCircle className={`w-5 h-5 shrink-0 ${light ? 'text-white' : 'text-green-500'}`} />
            ) : (
                <XCircle className={`w-5 h-5 shrink-0 ${light ? 'text-white/60' : 'text-red-400'}`} />
            )}
            <span className={light ? 'text-white' : 'text-eyecare-light-navy'}>{text}</span>
        </li>
    );
}

function ProcessStep({ number, title, description }: { number: number, title: string, description: string }) {
    return (
        <div className="flex gap-6 bg-white p-6 rounded-xl shadow-sm">
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
