import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Medical Disclaimer | Eye Care Center OC',
  description: 'Medical disclaimer for EyeCare Center of Orange County. Information provided is for educational purposes only. Always consult your eye care professional.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://eyecarecenteroc.com/medical-disclaimer',
  }
};

import { generateLocalBusinessSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export default function MedicalDisclaimerPage() {
  const businessSchema = generateLocalBusinessSchema();

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={businessSchema} id="business-schema" />
      <Header />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Medical Disclaimer</h1>
        <div className="prose prose-lg text-gray-600 space-y-4">
          <p>
            The information provided on this website is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <p>
            Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or 911 immediately.
          </p>
          <p>
            Reliance on any information provided by Eye Care Center OC, its employees, or others appearing on the site at the invitation of Eye Care Center OC, or other visitors to the site is solely at your own risk. The site and its content are provided on an "as is" basis.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">No Doctor-Patient Relationship</h2>
          <p>
            The use of this website and the information contained herein does not create a doctor-patient relationship. Eye Care Center OC does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on this website.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Accuracy of Information</h2>
          <p>
            While we strive to provide accurate and up-to-date information, Eye Care Center OC makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>
          <p>
            Medical information and technology are constantly evolving. The information on this website may become outdated, and we make no commitment to update such information. We recommend consulting with your eye care professional for the most current information regarding your specific condition.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">External Links</h2>
          <p>
            This website may contain links to external websites that are not provided or maintained by Eye Care Center OC. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>
          <p>
            For questions about this medical disclaimer or any information on our website, please contact Eye Care Center of Orange County directly.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
