import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Eye, Shield, Baby, Activity, CheckCircle, Search } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
    title: 'Pediatric Keratoconus Detection | 1 in 37 Children Undiagnosed | Orange County',
    description: 'Early keratoconus detection in children is critical. Studies show 1 in 37 kids have undiagnosed keratoconus. Our Pentacam technology detects changes at the back of the cornea before symptoms appear.',
    keywords: [
        'pediatric keratoconus',
        'keratoconus in children',
        'early keratoconus detection',
        'childhood keratoconus screening',
        'Pentacam corneal screening',
        'posterior corneal changes',
        'myopia management keratoconus',
        'keratoconus screening orange county',
        'pediatric eye exam irvine',
        'children eye specialist',
        'keratoconus prevention',
        'corneal topography children',
        'ortho-k keratoconus risk',
        'progressive myopia keratoconus'
    ],
    openGraph: {
        title: 'Pediatric Keratoconus Detection | Early Screening Saves Vision',
        description: '1 in 37 children have undiagnosed keratoconus. Our advanced Pentacam screening detects changes before symptoms appear.',
        type: 'website',
    }
};

export default function PediatricKeratoconusPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[450px] md:h-[550px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/keratoconus-main.webp"
                        alt="Pediatric Keratoconus Detection"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                </div>
                <div className="relative h-full container mx-auto px-4 flex items-center">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-red-500/30 text-red-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <AlertTriangle className="w-4 h-4" />
                            Critical: Early Detection Saves Vision
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Pediatric Keratoconus Detection
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            <strong className="text-white">1 in 37 children</strong> have undiagnosed keratoconus. Our advanced screening technology
                            detects changes at the <strong className="text-white">back of the cornea</strong> before symptoms ever appear—when treatment is most effective.
                        </p>
                        <Link
                            href="/book-appointment"
                            className="inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Schedule Screening
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Hidden Epidemic */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-red-500 font-semibold tracking-wider uppercase text-sm">The Research</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                                The Hidden Epidemic in Children's Eyes
                            </h2>
                        </div>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Alarming Research Finding</h3>
                            <p className="text-red-700 text-lg">
                                Recent studies have revealed that <strong>1 in 37 children</strong> (2.7%) have undiagnosed keratoconus—a rate
                                far higher than previously believed. Most of these children have no symptoms and pass standard vision screenings.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-4">Why It's Missed</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                                        <span className="text-eyecare-light-navy">Keratoconus starts at the <strong>back of the cornea</strong>, invisible to standard eye exams</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                                        <span className="text-eyecare-light-navy">Early changes don't affect vision enough to trigger complaints</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                                        <span className="text-eyecare-light-navy">School screenings only test visual acuity, not corneal health</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                                        <span className="text-eyecare-light-navy">Parents may attribute symptoms to "needing new glasses"</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-4">Risk Factors in Children</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-eyecare-blue mt-0.5" />
                                        <span className="text-eyecare-light-navy"><strong>Progressive myopia</strong> (needing stronger glasses frequently)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-eyecare-blue mt-0.5" />
                                        <span className="text-eyecare-light-navy"><strong>Eye rubbing</strong> habits (allergies, itchy eyes)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-eyecare-blue mt-0.5" />
                                        <span className="text-eyecare-light-navy"><strong>Family history</strong> of keratoconus</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-eyecare-blue mt-0.5" />
                                        <span className="text-eyecare-light-navy"><strong>Astigmatism</strong> that changes frequently</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-eyecare-blue mt-0.5" />
                                        <span className="text-eyecare-light-navy"><strong>Down syndrome</strong> or connective tissue disorders</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Early Detection Matters */}
            <section className="py-20 bg-eyecare-warm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Critical Window</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Why Early Detection is Everything
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-eyecare-navy mb-3">Corneal Cross-Linking</h3>
                            <p className="text-eyecare-light-navy">
                                When detected early, <strong>corneal cross-linking</strong> can stop progression entirely—preserving vision for life.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Activity className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-eyecare-navy mb-3">Stop Progression</h3>
                            <p className="text-eyecare-light-navy">
                                Keratoconus progresses fastest during teenage years. Early intervention during this window is crucial.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Eye className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-eyecare-navy mb-3">Preserve Vision</h3>
                            <p className="text-eyecare-light-navy">
                                Children treated early often maintain excellent vision. Late detection may require corneal transplants.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Technology */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2">
                            <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Advanced Technology</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-6">
                                Pentacam: Seeing What Others Miss
                            </h2>
                            <p className="text-eyecare-light-navy text-lg mb-6 leading-relaxed">
                                Our <strong>Pentacam corneal tomographer</strong> is the gold standard for early keratoconus detection. Unlike standard
                                topographers that only see the front surface, Pentacam creates a complete 3D map of the cornea—including the critical
                                <strong> posterior (back) surface</strong> where keratoconus begins.
                            </p>

                            <div className="space-y-4">
                                <FeatureItem
                                    title="Posterior Elevation Mapping"
                                    description="Detects bulging at the back of the cornea—the earliest sign of keratoconus, often years before front-surface changes."
                                />
                                <FeatureItem
                                    title="Corneal Thickness Analysis"
                                    description="Maps thickness across the entire cornea to identify thinning patterns characteristic of early keratoconus."
                                />
                                <FeatureItem
                                    title="Progression Tracking"
                                    description="Annual scans compared over time to detect even subtle changes that indicate progression."
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 bg-gradient-to-br from-eyecare-blue to-eyecare-dark-blue p-8 rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-6">Myopia Management + Keratoconus Screening</h3>
                            <p className="text-white/80 mb-6">
                                If your child is in our myopia management program (ortho-k, atropine, or specialty lenses), we routinely screen
                                for keratoconus. This is <strong>one of the most difficult conditions to rule out</strong> in myopic children, and we take it seriously.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-300" />
                                    <span>Annual Pentacam screening for all myopia patients</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-300" />
                                    <span>Comparison to age-matched normals</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-300" />
                                    <span>Immediate referral for cross-linking if needed</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-300" />
                                    <span>35+ years of keratoconus expertise</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Should Be Screened */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-4">
                        Which Children Should Be Screened?
                    </h2>
                    <p className="text-eyecare-light-navy text-lg mb-12 max-w-2xl mx-auto">
                        We recommend comprehensive Pentacam screening for children with any of these factors:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <ScreeningCard title="Progressive Myopia" description="Needing stronger glasses every year, especially if myopia started young" />
                        <ScreeningCard title="Frequent Rx Changes" description="Prescriptions that keep changing, especially the astigmatism component" />
                        <ScreeningCard title="Eye Rubbing" description="Habitual eye rubbing due to allergies, eczema, or habit" />
                        <ScreeningCard title="Family History" description="Parent or sibling with keratoconus" />
                        <ScreeningCard title="Starting Ortho-K" description="Before beginning orthokeratology to ensure candidacy" />
                        <ScreeningCard title="Unexplained Blur" description="Vision that doesn't fully correct with glasses" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-eyecare-blue text-white text-center">
                <div className="container mx-auto px-4">
                    <Baby className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                        Don't Wait for Symptoms
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        With 1 in 37 children affected, keratoconus screening should be part of every comprehensive pediatric eye exam.
                        Schedule a screening today—early detection can preserve your child's vision for life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/book-appointment"
                            className="inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Schedule Screening
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

function FeatureItem({ title, description }: { title: string, description: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
                <Search className="w-5 h-5 text-eyecare-blue" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-eyecare-navy mb-1">{title}</h3>
                <p className="text-eyecare-light-navy leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function ScreeningCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm text-left hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-eyecare-navy mb-2">{title}</h3>
            <p className="text-sm text-eyecare-light-navy">{description}</p>
        </div>
    );
}
