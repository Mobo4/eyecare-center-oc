import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Eye, Droplets, Shield, Sun, Circle, Layers, Focus } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export default function SoftContactLensesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-eyecare-blue text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Soft Contact Lenses
                        </h1>
                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Experience freedom from glasses with our advanced soft contact lens options.
                            Comfortable, breathable, and designed for your specific vision needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Lens Options</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Available Technologies
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            Whether you have astigmatism, need reading help, or just want distance correction, we have a soft lens for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TechCard
                            title="Single Vision"
                            description="The standard for correcting nearsightedness (myopia) or farsightedness (hyperopia). These lenses provide clear vision at one distance across the entire lens."
                            icon={Circle}
                        />
                        <TechCard
                            title="Toric for Astigmatism"
                            description="Specially designed lenses that correct astigmatism by compensating for the irregular shape of the cornea. They are weighted to stay stable on your eye for crisp vision."
                            icon={Eye}
                        />
                        <TechCard
                            title="Multifocal"
                            description="Advanced optical designs that allow you to see clearly at all distances—near, intermediate, and far—simultaneously. A great alternative to reading glasses."
                            icon={Layers}
                            highlight
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-eyecare-warm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-6">
                                Why Choose Soft Lenses?
                            </h2>
                            <div className="space-y-6">
                                <BenefitItem
                                    title="Immediate Comfort"
                                    description="Made from flexible, water-loving plastics that conform to your eye shape for instant comfort."
                                    icon={Droplets}
                                />
                                <BenefitItem
                                    title="Active Lifestyle"
                                    description="Perfect for sports and active living where glasses might get in the way or fog up."
                                    icon={Sun}
                                />
                                <BenefitItem
                                    title="Daily Disposables"
                                    description="The healthiest way to wear contacts. A fresh, sterile pair every day means no cleaning and lower risk of infection."
                                    icon={Shield}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 bg-white p-8 rounded-3xl shadow-lg border border-eyecare-blue/10">
                            <h3 className="text-2xl font-bold text-eyecare-navy mb-4">New to Contacts?</h3>
                            <p className="text-eyecare-light-navy mb-6">
                                Our comprehensive fitting process ensures you get the perfect lens for your eyes. We'll teach you:
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-eyecare-navy">
                                    <div className="w-2 h-2 bg-eyecare-blue rounded-full mr-3"></div>
                                    Proper insertion and removal techniques
                                </li>
                                <li className="flex items-center text-eyecare-navy">
                                    <div className="w-2 h-2 bg-eyecare-blue rounded-full mr-3"></div>
                                    Hygiene and lens care best practices
                                </li>
                                <li className="flex items-center text-eyecare-navy">
                                    <div className="w-2 h-2 bg-eyecare-blue rounded-full mr-3"></div>
                                    Wearing schedules for optimal eye health
                                </li>
                            </ul>
                            <Link
                                href="/contact"
                                className="block w-full text-center bg-eyecare-blue text-white py-3 rounded-xl font-semibold hover:bg-eyecare-dark-blue transition-colors"
                            >
                                Book a Fitting
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-6">
                        Ready to Ditch the Glasses?
                    </h2>
                    <p className="text-xl text-eyecare-light-navy mb-10 max-w-2xl mx-auto">
                        Schedule your contact lens exam and fitting today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-eyecare-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Schedule Exam
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <a
                            href={CONTACT_INFO.primaryPhone.href}
                            className="inline-flex items-center justify-center bg-transparent border-2 border-eyecare-blue text-eyecare-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-eyecare-blue hover:text-white transition-all duration-300"
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

function TechCard({ title, description, icon: Icon, highlight = false }: { title: string, description: string, icon: any, highlight?: boolean }) {
    return (
        <div className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${highlight ? 'border-eyecare-blue bg-blue-50/50' : 'border-gray-100 bg-white hover:border-eyecare-blue/30'}`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${highlight ? 'bg-eyecare-blue text-white' : 'bg-eyecare-warm text-eyecare-blue'}`}>
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-eyecare-navy mb-3">{title}</h3>
            <p className="text-eyecare-light-navy leading-relaxed">{description}</p>
        </div>
    );
}

function BenefitItem({ title, description, icon: Icon }: { title: string, description: string, icon: any }) {
    return (
        <div className="flex gap-4">
            <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-eyecare-blue">
                    <Icon className="w-6 h-6" />
                </div>
            </div>
            <div>
                <h3 className="text-lg font-bold text-eyecare-navy mb-1">{title}</h3>
                <p className="text-eyecare-light-navy leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
