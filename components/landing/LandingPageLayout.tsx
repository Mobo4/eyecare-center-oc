'use client';

import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

interface LandingPageLayoutProps {
    children: React.ReactNode;
    phoneNumber?: string;
    phoneHref?: string;
}

export default function LandingPageLayout({
    children,
    phoneNumber = CONTACT_INFO.primaryPhone.display,
    phoneHref = CONTACT_INFO.primaryPhone.href
}: LandingPageLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col font-poppins h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            {/* Minimal Header - Fixed */}
            <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 h-20 flex items-center">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="EyeCare Center OC" className="h-10 w-auto" />
                    </Link>
                    <a
                        href={phoneHref}
                        className="hidden md:flex items-center gap-2 font-bold text-eyecare-navy hover:text-eyecare-blue transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        {phoneNumber}
                    </a>
                    <Link
                        href="/book-appointment"
                        className="bg-eyecare-blue text-white px-6 py-2.5 rounded-full font-bold hover:bg-eyecare-dark-blue transition-colors shadow-lg shadow-blue-500/20"
                    >
                        Book Now
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Simplified Footer */}
            <footer className="bg-eyecare-navy text-white py-12 border-t border-white/10 snap-start">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                        {/* Address & Contact */}
                        <div>
                            <p className="font-bold text-lg mb-2">EyeCare Center of Orange County</p>
                            <p className="text-white/60 text-sm mb-4">
                                801 N Tustin Ave # 404<br />
                                Santa Ana, CA 92705
                            </p>
                            <div className="flex flex-col gap-1 text-sm text-white/80">
                                <span className="flex items-center justify-center md:justify-start gap-2">
                                    <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-semibold">Financing Available</span>
                                    <span>CareCredit Accepted</span>
                                </span>
                                <span className="flex items-center justify-center md:justify-start gap-2">
                                    <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-xs font-semibold">Se Habla Español</span>
                                </span>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="flex flex-col items-center md:items-end gap-4">
                            <div className="flex flex-col items-center md:items-end gap-2">
                                <a
                                    href={phoneHref}
                                    className="text-xl font-bold hover:text-eyecare-blue transition-colors"
                                >
                                    {phoneNumber}
                                </a>
                                <p className="text-white/40 text-xs">
                                    © {new Date().getFullYear()} EyeCare Center OC. All rights reserved.
                                </p>
                            </div>

                            {/* Payment Badges */}
                            <div className="flex flex-wrap justify-center md:justify-end gap-2 max-w-xs">
                                {['Visa', 'Mastercard', 'Amex', 'Discover', 'Alipay', 'UnionPay'].map((card) => (
                                    <span key={card} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-white/60 uppercase tracking-wider">
                                        {card}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
