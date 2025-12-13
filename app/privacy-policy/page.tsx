import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | EyeCare Center of Orange County',
  description: 'Privacy policy for EyeCare Center of Orange County. Learn how we protect your personal health information and maintain HIPAA compliance.',
  robots: 'noindex, follow',
,
  alternates: {
    canonical: 'https://eyecarecenteroc.com/privacy-policy',
  }
};

import { generateLocalBusinessSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export default function PrivacyPolicyPage() {
  const businessSchema = generateLocalBusinessSchema();

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={businessSchema} id="business-schema" />
      <Header />

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy & HIPAA Notice</h1>

          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="lead text-xl text-gray-800 mb-8">
              At EyeCare Center of Orange County, we are committed to protecting your privacy and the confidentiality of your health information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Website Privacy Policy</h2>
            <p>
              This Privacy Policy applies to the EyeCare Center of Orange County website. It describes how we collect, use, and protect information you provide to us through our website.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Information We Collect</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Request an appointment</li>
              <li>Contact us via our contact form</li>
              <li>Sign up for our newsletter</li>
            </ul>
            <p className="mt-4">
              This information may include your name, email address, phone number, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">How We Use Your Information</h3>
            <p>
              We use the information you provide to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Respond to your inquiries and requests</li>
              <li>Schedule appointments</li>
              <li>Send you important updates or information about our services</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">HIPAA Notice of Privacy Practices</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="font-semibold text-gray-900 mb-4">
                THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
              </p>
              <p>
                EyeCare Center of Orange County is required by law to maintain the privacy of your health information and to provide you with this notice of our legal duties and privacy practices with respect to your health information.
              </p>

              <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Get a copy of your paper or electronic medical record</li>
                <li>Correct your paper or electronic medical record</li>
                <li>Request confidential communication</li>
                <li>Ask us to limit the information we share</li>
                <li>Get a list of those with whom we've shared your information</li>
                <li>Get a copy of this privacy notice</li>
                <li>Choose someone to act for you</li>
                <li>File a complaint if you believe your privacy rights have been violated</li>
              </ul>

              <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Our Uses and Disclosures</h3>
              <p>We may use and share your information as we:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Treat you</li>
                <li>Run our organization</li>
                <li>Bill for your services</li>
                <li>Help with public health and safety issues</li>
                <li>Do research</li>
                <li>Comply with the law</li>
                <li>Respond to organ and tissue donation requests</li>
                <li>Work with a medical examiner or funeral director</li>
                <li>Address workers' compensation, law enforcement, and other government requests</li>
                <li>Respond to lawsuits and legal actions</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Phone: (949) 364-0008</li>
              <li>E-mail: info@eyecarecenteroc.com</li>
              <li>Address: 801 North Tustin Ave #404, Santa Ana, CA 92705</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
