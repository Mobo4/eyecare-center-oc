'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white p-4 z-40 backdrop-blur-sm border-t border-gray-800 shadow-2xl animate-in slide-in-from-bottom duration-500">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 text-center">
                <div className="max-w-3xl">
                    <p className="text-sm text-gray-300 leading-relaxed">
                        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
                        By clicking "Accept All", you consent to our use of cookies.
                        <Link href="/privacy-policy" className="text-eyecare-blue hover:text-white underline ml-1 transition-colors">
                            Read our Privacy Policy
                        </Link>.
                    </p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={() => {
                            localStorage.setItem('cookie-consent', 'rejected');
                            setIsVisible(false);
                        }}
                        className="px-6 py-2 rounded-lg text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-gray-700 hover:border-gray-500"
                    >
                        Reject
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-eyecare-blue/20"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
}
