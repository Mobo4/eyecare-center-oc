import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Eye Care Center OC',
  description: 'Terms of service for EyeCare Center of Orange County. Website usage terms, privacy policies, and patient rights information.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://eyecarecenteroc.com/terms-of-service',
  }
};

import { generateLocalBusinessSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export default function TermsOfServicePage() {
  const businessSchema = generateLocalBusinessSchema();

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={businessSchema} id="business-schema" />
      <Header />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <div className="prose prose-lg text-gray-600">
          <p>Last updated: November 14, 2025</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Eye Care Center OC and its licensors.
          </p>

          <h2>3. Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by Eye Care Center OC. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
          </p>

          <h2>4. Termination</h2>
          <p>
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2>5. Limitation Of Liability</h2>
          <p>
            In no event shall Eye Care Center OC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
          </p>

          <h2>7. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
