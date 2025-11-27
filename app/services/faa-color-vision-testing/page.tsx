import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Plane, Eye, CheckCircle, AlertCircle, FileCheck, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
    title: 'FAA Color Vision Testing | Pilot Medical Exam | Orange County',
    description: 'FAA-approved color vision testing for pilots. Farnsworth D-15, Rabin Cone Contrast Test, and OCVT alternatives. Failed Ishihara? We can help you get your medical certificate.',
    keywords: [
        'FAA color vision test',
        'pilot color vision exam',
        'Farnsworth D-15 test',
        'Rabin Cone Contrast Test',
        'failed Ishihara test pilot',
        'aviation medical examiner',
        'color vision deficiency pilot',
        'OCVT test orange county',
        'pilot medical certificate',
        'color blind pilot test',
        'FAA SODA letter',
        'MFT signal light test',
        'aviation color vision',
        'pilot eye exam irvine',
        'flight physical color test'
    ],
    openGraph: {
        title: 'FAA Color Vision Testing for Pilots | EyeCare Center OC',
        description: 'Failed the Ishihara? FAA-approved alternative color vision tests available. Farnsworth D-15, Rabin Cone Contrast, and more.',
        type: 'website',
    }
};

export default function FAAColorVisionPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Plane className="w-4 h-4" />
                            FAA-Approved Testing
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Color Vision Testing for Pilots
                        </h1>
                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Failed the Ishihara plate test at your flight physical? <strong className="text-white">Don't give up on your wings.</strong> We offer
                            FAA-approved alternative color vision tests that may qualify you for your medical certificate.
                        </p>
                        <Link
                            href="/book-appointment"
                            className="inline-flex items-center justify-center bg-white text-slate-800 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Schedule Color Vision Test
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Failed Ishihara Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">There's Hope</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                                Failed the Ishihara? You Have Options
                            </h2>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                            <h3 className="text-xl font-bold text-amber-800 mb-2">Good News for Color-Deficient Pilots</h3>
                            <p className="text-amber-700">
                                The Ishihara plate test is just <strong>one</strong> of several FAA-approved color vision tests. Many pilots who fail
                                the Ishihara pass alternative tests and fly with no restrictions. The FAA recognizes that different tests measure
                                different aspects of color vision.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-4 flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5 text-red-500" />
                                    Common Scenario
                                </h3>
                                <p className="text-eyecare-light-navy mb-4">
                                    You go in for your FAA flight physical. Everything is fine until the AME pulls out the Ishihara color plates.
                                    You struggle to see some numbers. The AME marks "color vision deficient" and tells you that you'll need further testing.
                                </p>
                                <p className="text-eyecare-light-navy font-medium">
                                    <strong>This is NOT the end of your flying career.</strong>
                                </p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    The Solution
                                </h3>
                                <p className="text-eyecare-light-navy mb-4">
                                    The FAA accepts several alternative color vision tests. If you pass ANY one of the approved tests, you can receive
                                    a medical certificate with <strong>no color vision limitations</strong>.
                                </p>
                                <p className="text-eyecare-light-navy">
                                    We administer multiple FAA-approved tests to give you the best chance of passing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tests We Offer */}
            <section className="py-20 bg-eyecare-warm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Our Testing Options</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            FAA-Approved Color Vision Tests
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            We offer multiple FAA-accepted color vision tests. Many pilots who fail one test pass another.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <TestCard
                            title="Farnsworth D-15"
                            description="Arrangement test where you sort colored caps in order. Tests your ability to discriminate between colors along the color confusion lines."
                            passRate="Many red-green deficient pilots pass"
                            icon={Eye}
                        />
                        <TestCard
                            title="Rabin Cone Contrast Test"
                            description="Computer-based test that measures the contrast sensitivity of your red, green, and blue cone systems independently."
                            passRate="Highly sensitive and specific"
                            icon={Eye}
                        />
                        <TestCard
                            title="Dvorine Color Plates"
                            description="Pseudoisochromatic plate test similar to Ishihara but using different colors and patterns."
                            passRate="Alternative plate option"
                            icon={Eye}
                        />
                        <TestCard
                            title="FALANT (Navy)"
                            description="Signal light test using red, green, and white lights. Used by military and some civil aviation authorities."
                            passRate="Tests practical signal recognition"
                            icon={Eye}
                        />
                        <TestCard
                            title="Operational Color Vision Test (OCVT)"
                            description="Practical test administered at a control tower where you identify light gun signals."
                            passRate="For Statement of Demonstrated Ability"
                            icon={Plane}
                        />
                        <TestCard
                            title="Medical Flight Test (MFT)"
                            description="Practical flight test demonstrating ability to identify aviation colors during actual flight operations."
                            passRate="Alternative to OCVT"
                            icon={Plane}
                        />
                    </div>
                </div>
            </section>

            {/* The Process */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">The Process</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            How We Help You Get Your Wings
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            <ProcessStep
                                number={1}
                                title="Comprehensive Color Vision Assessment"
                                description="We'll test your color vision using multiple FAA-approved methods to find one you can pass. Most pilots pass at least one test."
                            />
                            <ProcessStep
                                number={2}
                                title="Documentation for FAA"
                                description="If you pass, we provide official documentation on letterhead that your AME can use to issue your medical certificate."
                            />
                            <ProcessStep
                                number={3}
                                title="SODA Letter Guidance (If Needed)"
                                description="If you don't pass office tests, we can guide you through the OCVT or MFT process to obtain a Statement of Demonstrated Ability (SODA)."
                            />
                            <ProcessStep
                                number={4}
                                title="Follow-Up Support"
                                description="We're here to answer questions and provide any additional documentation the FAA or your AME may require."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Information */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy text-center mb-12">
                            Important Information for Pilots
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <FileCheck className="w-10 h-10 text-eyecare-blue mb-4" />
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">What to Bring</h3>
                                <ul className="space-y-2 text-eyecare-light-navy">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full"></span>
                                        Copy of failed Ishihara results (if available)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full"></span>
                                        Your glasses or contacts (if you wear them)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full"></span>
                                        AME's contact information
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full"></span>
                                        Pilot certificate number (if already a pilot)
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <Clock className="w-10 h-10 text-eyecare-blue mb-4" />
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">What to Expect</h3>
                                <ul className="space-y-2 text-eyecare-light-navy">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full"></span>
                                        Appointment takes 45-60 minutes
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full"></span>
                                        Multiple tests administered
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full"></span>
                                        Results provided same day
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full"></span>
                                        Official documentation if you pass
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-800 text-white text-center">
                <div className="container mx-auto px-4">
                    <Plane className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                        Don't Let Color Vision Ground Your Dreams
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Many pilots with color vision deficiency fly legally and safely. Let us help you find a path to your medical certificate.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/book-appointment"
                            className="inline-flex items-center justify-center bg-white text-slate-800 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Schedule Color Vision Test
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <a
                            href={CONTACT_INFO.primaryPhone.href}
                            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-800 transition-all duration-300"
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

function TestCard({ title, description, passRate, icon: Icon }: { title: string, description: string, passRate: string, icon: any }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-eyecare-warm rounded-full flex items-center justify-center text-eyecare-blue mb-4">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-eyecare-navy mb-2">{title}</h3>
            <p className="text-eyecare-light-navy mb-3">{description}</p>
            <p className="text-sm text-eyecare-blue font-medium">{passRate}</p>
        </div>
    );
}

function ProcessStep({ number, title, description }: { number: number, title: string, description: string }) {
    return (
        <div className="flex gap-6">
            <div className="shrink-0">
                <div className="w-12 h-12 bg-eyecare-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {number}
                </div>
            </div>
            <div className="pt-2">
                <h3 className="text-xl font-bold text-eyecare-navy mb-2">{title}</h3>
                <p className="text-eyecare-light-navy">{description}</p>
            </div>
        </div>
    );
}
