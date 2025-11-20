import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Medical Disclaimer | Eye Care Center OC',
  description: 'Medical Disclaimer for Eye Care Center OC.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MedicalDisclaimerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Medical Disclaimer</h1>
        <div className="prose prose-lg text-gray-600">
          <p>
            The information provided on this website is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <p>
            Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or 911 immediately.
          </p>
          <p>
            Reliance on any information provided by Eye Care Center OC, its employees, or others appearing on the site at the invitation of Eye Care Center OC, or other visitors to the site is solely at your own risk. The site and its content are provided on an "as is" basis.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
