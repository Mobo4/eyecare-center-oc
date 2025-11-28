'use client';

import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Glasses, Eye, Shield, Sun, Monitor, Zap, Layers, Sparkles, Brain, X, Check } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export default function OpticalLensesContent() {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const openModal = (id: string) => setActiveModal(id);
    const closeModal = () => setActiveModal(null);

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-eyecare-navy text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Glasses Lens Technology
                        </h1>
                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Understanding your lens options is key to achieving your best possible vision.
                            We offer the latest in optical technology to suit your lifestyle and visual needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Lens Designs Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Vision Correction</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Lens Designs
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            From standard correction to advanced multifocal solutions, we have the right lens design for your eyes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <LensCard
                            title="Single Vision"
                            description="The most common lens type, correcting vision for one distance—either near, intermediate, or far. Ideal for general use reading glasses or distance correction."
                            icon={Eye}
                        />
                        <LensCard
                            title="Bifocals"
                            description="Traditional lenses with two distinct viewing areas separated by a visible line. The top provides distance vision, while the bottom segment is for reading."
                            icon={Layers}
                        />
                        <LensCard
                            title="Progressive Lenses"
                            description="No-line multifocals that provide a smooth transition between distance, intermediate, and near vision. They offer a more natural viewing experience without visible lines."
                            icon={Glasses}
                            highlight
                            onClick={() => openModal('progressives')}
                            hasMoreInfo
                        />
                        <LensCard
                            title="Trifocals"
                            description="Similar to bifocals but with a third intermediate zone for computer work or dashboard viewing. These lenses have two visible lines."
                            icon={Layers}
                        />
                        <LensCard
                            title="Blended Bifocals"
                            description="A cosmetic improvement over standard bifocals where the segment line is smoothed out to be less visible, though the optical jump remains."
                            icon={Sparkles}
                        />
                    </div>
                </div>
            </section>

            {/* Specialty Lenses Section */}
            <section className="py-20 bg-eyecare-warm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Advanced Solutions</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Specialty & Digital Lenses
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            Modern lifestyle demands modern solutions. These specialized lenses address specific visual challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <FeatureCard
                            title="Computer Lenses (Essilor)"
                            description="Designed specifically for the digital workspace. These lenses maximize your intermediate vision for clear, comfortable screen viewing while providing a wide near zone for paperwork."
                            icon={Monitor}
                        />
                        <FeatureCard
                            title="Neurolens"
                            description="The first and only prescription lenses that add a contoured prism to bring the eyes into alignment. Perfect for patients suffering from chronic headaches, eye strain, and neck pain."
                            icon={Brain}
                        />
                        <FeatureCard
                            title="PowerUp / Anti-Fatigue"
                            description="Single vision lenses with a slight boost in the lower area to reduce eye strain during prolonged reading or digital device use. Great for students and young professionals."
                            icon={Zap}
                        />
                        <FeatureCard
                            title="Aspheric Lenses"
                            description="Flatter and thinner than conventional lenses, reducing magnification of the eyes and providing better peripheral vision. A great choice for higher prescriptions."
                            icon={Eye}
                        />
                    </div>
                </div>
            </section>

            {/* Lens Enhancements Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Protection & Performance</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Lens Enhancements
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            Customize your lenses with coatings and treatments that improve durability, clarity, and comfort.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <EnhancementCard
                            title="Anti-Reflective (AR)"
                            description="Reduces glare from screens and headlights, improves night driving, and makes your lenses nearly invisible so people see your eyes, not reflections."
                            icon={Sparkles}
                            onClick={() => openModal('ar')}
                            hasMoreInfo
                        />
                        <EnhancementCard
                            title="Scratch Resistant"
                            description="A hard coating that protects your lenses from everyday wear and tear, extending the life of your glasses."
                            icon={Shield}
                        />
                        <EnhancementCard
                            title="Transitions"
                            description="Light-intelligent lenses that automatically darken outdoors and return to clear indoors. 100% UV protection in every light condition."
                            icon={Sun}
                        />
                        <EnhancementCard
                            title="Prism"
                            description="A specialized optical correction ground into the lens to help align images for patients with double vision or binocular vision dysfunction."
                            icon={Layers}
                            onClick={() => openModal('prism')}
                            hasMoreInfo
                        />
                    </div>
                </div>
            </section>

            {/* Featured Lens Technologies Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Premium Brands</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Featured Lens Technologies
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            We partner with industry leaders to bring you the most advanced optical solutions available.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Link href="/services/stellest-lenses" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-eyecare-blue transition-all duration-300">
                            <div className="mb-6">
                                <div className="h-12 mb-4 flex items-center">
                                    <img src="/images/logos/essilor.svg" alt="Essilor" className="h-8 w-auto" />
                                </div>
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3">Myopia Control</span>
                                <h3 className="text-2xl font-bold text-eyecare-navy group-hover:text-eyecare-blue transition-colors">Essilor Stellest™</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Revolutionary lenses designed to slow down myopia progression in children by 67% on average.
                            </p>
                            <div className="flex items-center text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>

                        <Link href="/services/varilux-xr" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-eyecare-blue transition-all duration-300">
                            <div className="mb-6">
                                <div className="h-12 mb-4 flex items-center">
                                    <img src="/images/logos/varilux.svg" alt="Varilux" className="h-6 w-auto" />
                                </div>
                                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3">Progressive</span>
                                <h3 className="text-2xl font-bold text-eyecare-navy group-hover:text-eyecare-blue transition-colors">Varilux® XR series™</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                The first eye-responsive progressive lens powered by behavioral artificial intelligence.
                            </p>
                            <div className="flex items-center text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>

                        <Link href="/services/zeiss-smartlife" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-eyecare-blue transition-all duration-300">
                            <div className="mb-6">
                                <div className="h-12 mb-4 flex items-center">
                                    <img src="/images/logos/zeiss.svg" alt="ZEISS" className="h-8 w-auto" />
                                </div>
                                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3">Digital Lifestyle</span>
                                <h3 className="text-2xl font-bold text-eyecare-navy group-hover:text-eyecare-blue transition-colors">ZEISS SmartLife</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Lenses designed for your connected, on-the-move lifestyle, providing clear vision in all directions.
                            </p>
                            <div className="flex items-center text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>

                        <Link href="/services/shamir-autograph" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-eyecare-blue transition-all duration-300">
                            <div className="mb-6">
                                <div className="h-12 mb-4 flex items-center">
                                    <img src="/images/logos/shamir.svg" alt="Shamir" className="h-6 w-auto" />
                                </div>
                                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3">Personalized</span>
                                <h3 className="text-2xl font-bold text-eyecare-navy group-hover:text-eyecare-blue transition-colors">Shamir Autograph</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Intelligence™ technology that adapts to your visual age and reading posture.
                            </p>
                            <div className="flex items-center text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>

                        <Link href="/services/eyezen" className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-eyecare-blue transition-all duration-300">
                            <div className="mb-6">
                                <div className="h-12 mb-4 flex items-center">
                                    <img src="/images/logos/eyezen.svg" alt="Eyezen" className="h-6 w-auto" />
                                </div>
                                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wide mb-3">Anti-Fatigue</span>
                                <h3 className="text-2xl font-bold text-eyecare-navy group-hover:text-eyecare-blue transition-colors">Essilor Eyezen®</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Enhanced single vision lenses that relax your eyes and protect against blue-violet light.
                            </p>
                            <div className="flex items-center text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-eyecare-blue text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                        Not Sure Which Lens is Right for You?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Our opticians are experts in matching the perfect lens technology to your prescription and lifestyle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Schedule an Exam
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

            {/* Modals */}
            {activeModal === 'progressives' && (
                <LensModal
                    isOpen={true}
                    onClose={closeModal}
                    title="Progressive Lenses: Seamless Vision"
                    icon={Glasses}
                >
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700">
                            Progressive lenses, often called "no-line bifocals," are an engineering marvel that provides a smooth, continuous transition between distance, intermediate, and near vision. Unlike traditional bifocals, there are no visible lines on the lenses, giving you a more youthful appearance.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h4 className="font-bold text-eyecare-navy mb-4 flex items-center gap-2">
                                <Check className="w-5 h-5 text-eyecare-blue" />
                                How They Work
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-eyecare-blue mt-2 shrink-0" />
                                    <span className="text-gray-700"><strong>Top Zone:</strong> Clear distance vision for driving and watching TV.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-eyecare-blue mt-2 shrink-0" />
                                    <span className="text-gray-700"><strong>Middle Zone:</strong> Intermediate vision for computer use and dashboard viewing.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-eyecare-blue mt-2 shrink-0" />
                                    <span className="text-gray-700"><strong>Bottom Zone:</strong> Near vision for reading and phone use.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-eyecare-navy mb-3">Why Choose Progressives?</h4>
                            <p className="text-gray-600 mb-4">
                                They mimic natural vision by allowing you to see at all distances without jumping between distinct lens segments. This makes them ideal for everyday wear, eliminating the need to switch between reading and distance glasses.
                            </p>
                            <p className="text-sm text-gray-500 italic">
                                * Note: There is a short adaptation period (usually 1-2 weeks) as your brain learns to look through the correct part of the lens for different tasks.
                            </p>
                        </div>
                    </div>
                </LensModal>
            )}

            {activeModal === 'ar' && (
                <LensModal
                    isOpen={true}
                    onClose={closeModal}
                    title="Anti-Reflective (AR) Coating"
                    icon={Sparkles}
                >
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700">
                            Anti-Reflective (AR) coating is one of the most important enhancements you can add to your lenses. It eliminates reflections from the front and back surfaces of your eyeglass lenses, allowing 99.5% of available light to pass through.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-5 rounded-xl">
                                <h4 className="font-bold text-eyecare-navy mb-2">Better Vision</h4>
                                <p className="text-gray-600 text-sm">
                                    Reduces glare from headlights, streetlights, and computer screens, significantly reducing eye strain and improving night driving safety.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-xl">
                                <h4 className="font-bold text-eyecare-navy mb-2">Better Appearance</h4>
                                <p className="text-gray-600 text-sm">
                                    Makes your lenses nearly invisible, so people see your eyes and facial expressions clearly, not annoying reflections.
                                </p>
                            </div>
                        </div>

                        <div className="bg-eyecare-warm p-6 rounded-xl border border-eyecare-blue/20">
                            <h4 className="font-bold text-eyecare-navy mb-3">Premium Crizal® AR Options</h4>
                            <p className="text-gray-700 mb-3">
                                We offer premium AR coatings like Crizal® that provide additional benefits:
                            </p>
                            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-eyecare-blue" /> Scratch Resistance</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-eyecare-blue" /> Smudge Repellent</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-eyecare-blue" /> Water Repellent</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-eyecare-blue" /> Dust Repellent</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-eyecare-blue" /> UV Protection</li>
                            </ul>
                        </div>
                    </div>
                </LensModal>
            )}

            {activeModal === 'prism' && (
                <LensModal
                    isOpen={true}
                    onClose={closeModal}
                    title="Prism Correction"
                    icon={Layers}
                >
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700">
                            Prism is a specialized optical correction ground into lenses to help align how your eyes work together. It is prescribed for patients who have binocular vision dysfunction (BVD), double vision (diplopia), or significant eye strain from misalignment.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h4 className="font-bold text-eyecare-navy mb-4">How Prism Works</h4>
                            <p className="text-gray-700 mb-4">
                                Normal lenses focus light on the retina. Prism lenses <strong>bend light</strong> before it enters the eye to redirect the image to the correct part of the retina. This tricks the brain into thinking the eyes are perfectly aligned, relieving the struggle to fuse images.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-eyecare-navy mb-3">Common Symptoms Treated</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Double vision (Diplopia)",
                                    "Headaches & Migraines",
                                    "Eye strain & Fatigue",
                                    "Neck & Shoulder pain",
                                    "Dizziness or Vertigo",
                                    "Difficulty reading"
                                ].map((symptom, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                                        <div className="w-1.5 h-1.5 rounded-full bg-eyecare-blue" />
                                        {symptom}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 italic mt-4 border-t pt-4">
                            * Prism is a medical prescription that requires a specific evaluation by Dr. Alexander Bonakdar. If you experience these symptoms, please mention them during your exam.
                        </p>
                    </div>
                </LensModal>
            )}
        </main>
    );
}

function LensModal({ isOpen, onClose, title, icon: Icon, children }: { isOpen: boolean, onClose: () => void, title: string, icon: any, children: React.ReactNode }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
            <div
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
                onClick={e => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-white p-6 border-b flex items-center justify-between z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-eyecare-blue/10 flex items-center justify-center text-eyecare-blue">
                            <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-eyecare-navy">{title}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-700"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6 md:p-8">
                    {children}
                </div>
                <div className="p-6 border-t bg-gray-50 flex justify-end rounded-b-2xl">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-eyecare-blue text-white font-semibold rounded-lg hover:bg-eyecare-dark-blue transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

function LensCard({ title, description, icon: Icon, highlight = false, onClick, hasMoreInfo = false }: { title: string, description: string, icon: any, highlight?: boolean, onClick?: () => void, hasMoreInfo?: boolean }) {
    return (
        <div
            className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl overflow-hidden ${highlight ? 'border-eyecare-blue bg-blue-50/50' : 'border-gray-100 bg-white hover:border-eyecare-blue'} ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-eyecare-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${highlight ? 'bg-eyecare-blue text-white' : 'bg-eyecare-warm text-eyecare-blue'}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-eyecare-navy mb-3 flex items-center gap-2 group-hover:text-eyecare-blue transition-colors">
                    {title}
                    {hasMoreInfo && <span className="text-xs bg-eyecare-blue/10 text-eyecare-blue px-2 py-0.5 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity">Info</span>}
                </h3>
                <p className="text-eyecare-light-navy leading-relaxed mb-4">{description}</p>

                {hasMoreInfo && (
                    <div className="text-eyecare-blue text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                )}
            </div>
        </div>
    );
}

function FeatureCard({ title, description, icon: Icon }: { title: string, description: string, icon: any }) {
    return (
        <div className="group relative flex flex-col md:flex-row gap-6 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-eyecare-blue transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-eyecare-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 shrink-0">
                <div className="w-14 h-14 rounded-full bg-eyecare-warm flex items-center justify-center text-eyecare-blue">
                    <Icon className="w-7 h-7" />
                </div>
            </div>
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-eyecare-navy mb-2 group-hover:text-eyecare-blue transition-colors">{title}</h3>
                <p className="text-eyecare-light-navy leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function EnhancementCard({ title, description, icon: Icon, onClick, hasMoreInfo = false }: { title: string, description: string, icon: any, onClick?: () => void, hasMoreInfo?: boolean }) {
    return (
        <div
            className={`group relative p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-eyecare-blue transition-all duration-300 overflow-hidden ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-eyecare-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
                <div className="mb-4 text-eyecare-light-navy group-hover:text-eyecare-blue transition-colors">
                    <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-eyecare-navy mb-2 flex items-center gap-2 group-hover:text-eyecare-blue transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-eyecare-light-navy leading-relaxed mb-3">{description}</p>

                {hasMoreInfo && (
                    <div className="text-eyecare-blue text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                        Click for details
                    </div>
                )}
            </div>
        </div>
    );
}
