import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Search, Calendar, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
    title: 'Page Not Found | EyeCare Center of Orange County',
    description: 'The page you are looking for does not exist. Please visit our homepage or contact us for assistance.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
                <div className="max-w-2xl w-full text-center">
                    <h1 className="text-9xl font-bold text-eyecare-blue opacity-20">404</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 -mt-12 mb-6 relative z-10">
                        Page Not Found
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 text-gray-700 font-semibold hover:text-eyecare-blue"
                        >
                            <Home className="w-5 h-5" />
                            Return Home
                        </Link>
                        <Link
                            href="/conditions"
                            className="flex items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 text-gray-700 font-semibold hover:text-eyecare-blue"
                        >
                            <Search className="w-5 h-5" />
                            Browse Conditions
                        </Link>
                        <Link
                            href="/book-appointment"
                            className="flex items-center justify-center gap-2 bg-eyecare-blue p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-white font-semibold hover:bg-eyecare-dark-blue"
                        >
                            <Calendar className="w-5 h-5" />
                            Book Appointment
                        </Link>
                        <a
                            href={CONTACT_INFO.primaryPhone.href}
                            className="callrail-phone flex items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 text-gray-700 font-semibold hover:text-eyecare-blue"
                        >
                            <Phone className="w-5 h-5" />
                            Call Us
                        </a>
                    </div>

                    <div className="text-gray-500 text-sm">
                        Need immediate assistance? Call us at <span className="font-bold text-gray-700">{CONTACT_INFO.primaryPhone.display}</span>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
