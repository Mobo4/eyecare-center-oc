import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Accessibility Statement | EyeCare Center of Orange County',
    description: 'We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone.',
    alternates: {
        canonical: 'https://eyecarecenteroc.com/accessibility',
    },
    openGraph: {
        title: 'Accessibility Statement | EyeCare Center of Orange County',
        description: 'Committed to digital accessibility for all users.',
        type: 'website',
    },
    robots: 'noindex, follow',
};

import { generateLocalBusinessSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export default function AccessibilityPage() {
    const businessSchema = generateLocalBusinessSchema();

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={businessSchema} id="business-schema" />
            <Header />

            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>

                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p className="lead text-xl text-gray-800 mb-8">
                            EyeCare Center of Orange County is committed to ensuring digital accessibility for people with disabilities.
                            We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conformance Status</h2>
                        <p>
                            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities.
                            It defines three levels of conformance: Level A, Level AA, and Level AAA.
                            EyeCare Center of Orange County is partially conformant with WCAG 2.1 level AA.
                            Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Feedback</h2>
                        <p>
                            We welcome your feedback on the accessibility of EyeCare Center of Orange County.
                            Please let us know if you encounter accessibility barriers on our website:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Phone: (949) 364-0008</li>
                            <li>E-mail: info@eyecarecenteroc.com</li>
                            <li>Visitor Address: 801 North Tustin Ave #404, Santa Ana, CA 92705</li>
                        </ul>
                        <p className="mt-4">
                            We try to respond to feedback within 2 business days.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Technical Specifications</h2>
                        <p>
                            Accessibility of EyeCare Center of Orange County relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>HTML</li>
                            <li>WAI-ARIA</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <p className="mt-4">
                            These technologies are relied upon for conformance with the accessibility standards used.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Assessment Approach</h2>
                        <p>
                            EyeCare Center of Orange County assessed the accessibility of our website by the following approaches:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Self-evaluation</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
