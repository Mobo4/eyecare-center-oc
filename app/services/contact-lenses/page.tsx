import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Eye, Layers, Moon, Droplets } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
    title: 'Contact Lenses Services | EyeCare Center of Orange County',
    description: 'Comprehensive contact lens services including soft lenses, RGP, scleral lenses for keratoconus, and Ortho-K for myopia control.',
    keywords: ['contact lenses', 'soft contacts', 'RGP lenses', 'scleral lenses', 'ortho-k', 'contact lens fitting orange county'],
    openGraph: {
        title: 'Contact Lenses Services | EyeCare Center of Orange County',
        description: 'Find the perfect contact lenses for your vision needs. From daily disposables to specialty medical lenses.',
        type: 'website',
    }
};

export default function ContactLensesHubPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/contact-lenses-main.webp"
                        alt="Contact Lens Services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                </div>
                <div className="relative h-full container mx-auto px-4 flex items-center">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Contact Lens Center
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            From standard soft lenses to advanced medical specialty contacts, we provide expert fitting for all vision needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                        {/* Soft Lenses */}
                        <Link href="/services/contact-lenses/soft" className="group bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-eyecare-blue/30">
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-eyecare-blue mb-6 group-hover:scale-110 transition-transform">
                                <Droplets className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl font-bold text-eyecare-navy mb-3 group-hover:text-eyecare-blue transition-colors">Soft Contact Lenses</h2>
                            <p className="text-eyecare-light-navy mb-6">
                                Daily disposables, torics for astigmatism, and multifocals. The most popular choice for comfort and convenience.
                            </p>
                            <div className="flex items-center text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>

                        {/* RGP Lenses */}
                        <Link href="/services/contact-lenses/rgp" className="group bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-eyecare-blue/30">
                            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                                <Eye className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl font-bold text-eyecare-navy mb-3 group-hover:text-eyecare-blue transition-colors">Rigid Gas Permeable (RGP)</h2>
                            <p className="text-eyecare-light-navy mb-6">
                                Superior optics and high oxygen permeability. Excellent for high astigmatism and presbyopia.
                            </p>
                            <div className="flex items-center text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>

                        {/* Scleral Lenses */}
                        <Link href="/services/scleral-lens-fitting" className="group bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-eyecare-blue/30">
                            <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                                <Layers className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl font-bold text-eyecare-navy mb-3 group-hover:text-eyecare-blue transition-colors">Scleral Lenses</h2>
                            <p className="text-eyecare-light-navy mb-6">
                                Large-diameter lenses for keratoconus, irregular corneas, and severe dry eye. Unmatched vision and comfort.
                            </p>
                            <div className="flex items-center text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>

                        {/* Ortho-K */}
                        <Link href="/services/ortho-k" className="group bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-eyecare-blue/30">
                            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                                <Moon className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl font-bold text-eyecare-navy mb-3 group-hover:text-eyecare-blue transition-colors">Orthokeratology (Ortho-K)</h2>
                            <p className="text-eyecare-light-navy mb-6">
                                Reshape your cornea while you sleep for clear daytime vision without glasses. Also slows myopia progression in children.
                            </p>
                            <div className="flex items-center text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </Link>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-eyecare-navy text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                        Schedule Your Contact Lens Exam
                    </h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Whether you're new to contacts or need a specialty fitting, our experts are here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-eyecare-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Book Appointment
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
