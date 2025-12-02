import { Metadata } from 'next';
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Eye, Shield, Wind, Maximize, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
    title: 'RGP & Scleral Lenses | Keratoconus Specialist | Orange County',
    description: 'Expert RGP and scleral lens fitting for keratoconus, high astigmatism & irregular corneas. Boston, Menicon, Rose K & custom designs. 35+ years experience in Orange County.',
    keywords: [
        'RGP lenses orange county',
        'rigid gas permeable contacts',
        'Boston XO lenses',
        'Boston ES lenses',
        'Boston EO lenses',
        'Boston Equalens II',
        'Hexafocon A material',
        'Enflufocon A material',
        'Menicon Z lenses',
        'Menicon Rose K keratoconus',
        'Menicon Rose K2 lenses',
        'Tisilfocon A material',
        'Paragon CRT ortho-k',
        'Paragon HDS 100',
        'Paflufocon D material',
        'Bausch Lomb RGP',
        'Polymer Technology lenses',
        'keratoconus contact lenses',
        'irregular cornea lenses',
        'post-LASIK ectasia lenses',
        'pellucid marginal degeneration',
        'corneal transplant contacts',
        'high astigmatism contacts',
        'custom RGP lenses irvine',
        'RGP specialist newport beach',
        'hard contact lenses santa ana',
        'gas permeable lenses orange county',
        'RGP fitting costa mesa',
        'oxygen permeable lenses'
    ],
    openGraph: {
        title: 'RGP & Scleral Lenses | Keratoconus Specialist | EyeCare Center OC',
        description: 'Expert fitting for keratoconus, irregular corneas & post-surgical vision. Boston, Menicon, Rose K brands. 35+ years experience.',
        type: 'website',
    }
};

export default function RGPLensesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/contact-lenses-main.webp"
                        alt="RGP Contact Lenses"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                </div>
                <div className="relative h-full container mx-auto px-4 flex items-center">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Rigid Gas Permeable (RGP) Lenses
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Superior visual clarity and eye health. RGP lenses offer sharper vision and higher oxygen permeability than traditional soft lenses.
                        </p>
                    </div>
                </div>
            </section>

            {/* What are RGP Lenses? */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2">
                            <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">The Gold Standard</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-6">
                                Why Choose RGP Lenses?
                            </h2>
                            <p className="text-eyecare-light-navy text-lg mb-6 leading-relaxed">
                                Rigid Gas Permeable lenses are made from durable plastics that allow oxygen to pass directly through the lens to your cornea. While they may take a little longer to get used to than soft lenses, the benefits are significant.
                            </p>

                            <div className="space-y-4">
                                <BenefitRow
                                    title="Sharper Vision"
                                    description="Because they maintain their shape on the eye, RGP lenses provide crisper, clearer vision than soft lenses, especially for astigmatism."
                                />
                                <BenefitRow
                                    title="High Oxygen Flow"
                                    description="Your eyes need to breathe. RGP materials allow more oxygen to reach the cornea, reducing the risk of eye problems."
                                />
                                <BenefitRow
                                    title="Durability & Value"
                                    description="A single pair can last for a year or more with proper care, making them a cost-effective long-term solution."
                                />
                                <BenefitRow
                                    title="Deposit Resistant"
                                    description="The smooth surface doesn't absorb tears or proteins as easily as soft lenses, keeping your vision clear all day."
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="bg-eyecare-warm rounded-3xl p-8 border border-eyecare-blue/10">
                                <h3 className="text-2xl font-bold text-eyecare-navy mb-6">Available Designs</h3>
                                <div className="grid gap-4">
                                    <DesignCard
                                        title="Single Vision"
                                        description="For myopia (nearsightedness) and hyperopia (farsightedness). Provides the sharpest possible vision correction."
                                    />
                                    <DesignCard
                                        title="Toric for Astigmatism"
                                        description="Custom-made to correct high levels of astigmatism more effectively than soft toric lenses."
                                    />
                                    <DesignCard
                                        title="Multifocal"
                                        description="Bifocal and progressive designs that provide excellent vision at all distances without the compromises of soft multifocals."
                                    />
                                    <DesignCard
                                        title="Orthokeratology (Ortho-K)"
                                        description="Special RGP lenses worn at night to reshape your cornea, allowing you to see clearly during the day without glasses or contacts."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Is RGP Right for You? */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-12">
                        Is RGP Right For You?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <CandidateCard
                            title="High Astigmatism"
                            description="If soft lenses fluctuate or don't provide clear vision due to astigmatism, RGP lenses offer a stable, crisp solution."
                            icon={Maximize}
                        />
                        <CandidateCard
                            title="Presbyopia"
                            description="For those over 40 needing reading help, RGP multifocals often provide better visual quality than soft alternatives."
                            icon={Eye}
                        />
                        <CandidateCard
                            title="Keratoconus"
                            description="For irregular corneas, RGP or Scleral lenses are often the only way to achieve functional vision."
                            icon={AlertCircle}
                        />
                    </div>

                    <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm inline-block max-w-3xl border border-gray-100">
                        <div className="flex items-start gap-4 text-left">
                            <div className="shrink-0 text-eyecare-blue mt-1">
                                <Wind className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-eyecare-navy mb-2">A Note on Adaptation</h4>
                                <p className="text-eyecare-light-navy">
                                    Unlike soft lenses which are comfortable immediately, RGP lenses require a short adaptation period (usually 1-2 weeks) as you build up wearing time. Once adapted, most patients find them very comfortable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-eyecare-blue text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                        Experience the Clarity of RGP Lenses
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Schedule a consultation to find out if Rigid Gas Permeable lenses are the best choice for your vision.
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

function BenefitRow({ title, description }: { title: string, description: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1 text-eyecare-blue">
                <CheckCircle className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-eyecare-navy mb-1">{title}</h3>
                <p className="text-eyecare-light-navy leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function DesignCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-eyecare-navy mb-2">{title}</h4>
            <p className="text-sm text-eyecare-light-navy">{description}</p>
        </div>
    );
}

function CandidateCard({ title, description, icon: Icon }: { title: string, description: string, icon: any }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-eyecare-blue/30 transition-all duration-300">
            <div className="w-12 h-12 bg-eyecare-warm rounded-full flex items-center justify-center text-eyecare-blue mx-auto mb-6">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-eyecare-navy mb-3">{title}</h3>
            <p className="text-eyecare-light-navy leading-relaxed">{description}</p>
        </div>
    );
}
