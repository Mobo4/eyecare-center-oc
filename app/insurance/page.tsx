import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Phone, CheckCircle, CreditCard, HelpCircle } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/schema';
import Script from 'next/script';
import { medicalInsurances, visionInsurances } from '@/data/insurances';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
  title: 'Insurance Accepted | EyeCare Center of Orange County',
  description: 'We accept most major medical and vision insurance plans including VSP, EyeMed, Medicare, Blue Shield, Aetna, Cigna, and more. Call us to verify your coverage.',
  keywords: [
    'eye doctor insurance orange county',
    'VSP eye doctor',
    'EyeMed provider',
    'Medicare eye doctor',
    'vision insurance accepted',
    'medical insurance eye care',
    'optometrist insurance',
    'eye exam insurance coverage',
    'Blue Shield eye doctor',
    'Aetna eye care',
  ],
  openGraph: {
    title: 'Insurance Accepted | EyeCare Center of Orange County',
    description: 'We accept most major medical and vision insurance plans. Verify your coverage today.',
    type: 'website',
  },
  alternates: {
    canonical: '/insurance',
  },
};

export default function InsurancePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://eyecarecenteroc.com' },
    { name: 'Insurance', url: 'https://eyecarecenteroc.com/insurance' },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-eyecare-blue" />
                <span className="text-eyecare-blue font-semibold">Insurance & Payment</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Insurance Plans We Accept
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                We work with most major medical and vision insurance providers to make quality eye care accessible and affordable. Our staff will help verify your benefits and maximize your coverage.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={CONTACT_INFO.primaryPhone.href}
                  className="inline-flex items-center bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors callrail-phone"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Verify Coverage: {CONTACT_INFO.primaryPhone.display}
                </a>
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Insurance Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vision Insurance Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are in-network providers for these major vision insurance plans
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {visionInsurances.map((insurance) => (
                <div
                  key={insurance.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-eyecare-blue transition-all duration-300 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-full h-16 relative mb-3 flex items-center justify-center">
                    <Image
                      src={insurance.logo}
                      alt={`${insurance.name} logo`}
                      width={120}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{insurance.name}</span>
                  <CheckCircle className="h-4 w-4 text-green-500 mt-2" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Insurance Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Medical Insurance Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                For medical eye conditions, we accept these major health insurance providers
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {medicalInsurances.map((insurance) => (
                <div
                  key={insurance.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-eyecare-blue transition-all duration-300 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-full h-16 relative mb-3 flex items-center justify-center">
                    <Image
                      src={insurance.logo}
                      alt={`${insurance.name} logo`}
                      width={140}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{insurance.name}</span>
                  {insurance.description && (
                    <span className="text-xs text-gray-500 mt-1">{insurance.description}</span>
                  )}
                  <CheckCircle className="h-4 w-4 text-green-500 mt-2" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Info Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* What's Typically Covered */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  What&apos;s Typically Covered
                </h2>
                <ul className="space-y-4">
                  {[
                    'Annual comprehensive eye exams',
                    'Contact lens fitting and evaluation',
                    'Prescription eyeglasses frames and lenses',
                    'Medical eye conditions (glaucoma, cataracts, etc.)',
                    'Diabetic eye exams',
                    'Emergency eye care visits',
                    'Specialty contact lenses (with prior authorization)',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Payment Options */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CreditCard className="h-6 w-6 text-eyecare-blue mr-3" />
                  Payment Options
                </h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-600 mb-4">
                    Don&apos;t have insurance? No problem! We offer:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Competitive self-pay rates',
                      'Flexible payment plans',
                      'All major credit cards accepted',
                      'HSA and FSA cards welcome',
                      'CareCredit financing available',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-eyecare-blue rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <HelpCircle className="h-8 w-8 text-eyecare-blue mr-3" />
                Insurance FAQs
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "How do I know if you accept my insurance?",
                  a: "Call our office and our friendly staff will verify your benefits. We work with most major medical and vision plans. If we don't accept your specific plan, we can still see you as an out-of-network provider."
                },
                {
                  q: "What's the difference between vision and medical insurance?",
                  a: "Vision insurance (VSP, EyeMed) typically covers routine eye exams, glasses, and contacts. Medical insurance covers treatment for eye diseases and conditions like glaucoma, cataracts, dry eye, and diabetic eye disease."
                },
                {
                  q: "Can I use both vision and medical insurance?",
                  a: "Yes! If you have both types of coverage, we can bill the appropriate insurance based on the reason for your visit. Our billing team will help maximize your benefits."
                },
                {
                  q: "What if my insurance isn't listed?",
                  a: "We may still accept your plan. Insurance networks change frequently, so please call us to confirm your coverage. We also offer competitive self-pay rates."
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-eyecare-blue">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Call us to verify your insurance benefits or book your appointment online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CONTACT_INFO.primaryPhone.href}
                className="inline-flex items-center bg-white text-eyecare-blue hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors callrail-phone"
              >
                <Phone className="h-5 w-5 mr-2" />
                {CONTACT_INFO.primaryPhone.display}
              </a>
              <Link
                href="/book-appointment"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-eyecare-blue px-8 py-4 rounded-lg font-bold transition-colors"
              >
                Book Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
