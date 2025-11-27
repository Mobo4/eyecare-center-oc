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
  title: 'Insurance | EyeCare Center of Orange County',
  description: 'We accept most major medical and vision insurance plans including VSP, EyeMed, Medicare, Blue Shield, Aetna, Cigna, and more. Learn the difference between vision and medical insurance.',
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
    title: 'Insurance | EyeCare Center of Orange County',
    description: 'We accept most major medical and vision insurance plans. Learn the difference between vision and medical insurance.',
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

        {/* Vision vs Medical Insurance Education Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Understanding Vision vs. Medical Insurance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vision and medical insurance are <strong>not the same</strong> and serve different purposes for your eye care
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Vision Insurance */}
              <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">Vision Insurance</h3>
                </div>
                <p className="text-blue-800 mb-4">
                  Vision insurance covers <strong>routine vision care</strong> for healthy eyes:
                </p>
                <ul className="space-y-3">
                  {[
                    'Measurement of refractive error (your prescription)',
                    'Prescription eyeglasses and frames',
                    'Contact lens fitting and supplies',
                    'Routine annual eye exams',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-blue-700">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Medical Insurance */}
              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900">Medical Insurance</h3>
                </div>
                <p className="text-green-800 mb-4">
                  Medical insurance covers <strong>eye health conditions</strong> and diseases:
                </p>
                <ul className="space-y-3">
                  {[
                    'Glaucoma, cataracts, macular degeneration',
                    'Dry eye disease and treatment',
                    'Diabetic eye exams and retinopathy',
                    'Eye infections, injuries, and emergencies',
                    'Any condition affecting eye health',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-green-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Important Notice Box */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Important Information About Insurance Billing
              </h3>
              <div className="space-y-4 text-amber-800">
                <p>
                  <strong>Vision and medical insurance cannot be billed at the same time</strong> for the same visit. Here&apos;s what you need to know:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>
                      <strong>Medical conditions take priority:</strong> If a medical issue is discovered during what started as a routine vision exam, the visit will be converted to a medical exam and billed to your medical insurance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>
                      <strong>Medical issues must be addressed first:</strong> Eye health problems almost always need to be treated before we can perform a vision exam with a reliable refraction (glasses prescription). Conditions like dry eye, cataracts, or infections can affect your prescription accuracy.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>
                      <strong>Separate visits may be needed:</strong> Once your medical condition is managed, you may need to return for a separate vision exam to get an accurate glasses or contact lens prescription.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Info Section */}
        <section className="py-16 bg-gray-50">
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
                  q: "Why was my visit billed to medical insurance instead of vision?",
                  a: "If a medical condition is discovered during your exam (such as dry eye, cataracts, or signs of diabetes), the visit must be billed to your medical insurance. Vision and medical insurance cannot be billed at the same time for the same visit. Eye health conditions are always considered medical, not vision."
                },
                {
                  q: "Why do I need to come back for a separate vision exam?",
                  a: "Medical eye conditions can affect the accuracy of your glasses or contact lens prescription. For example, dry eye or cataracts can cause fluctuating vision. We need to treat the medical issue first to ensure you get an accurate and reliable prescription."
                },
                {
                  q: "Can I use both vision and medical insurance?",
                  a: "You can have both types of coverage, but they cannot be used for the same visit. If your visit is medical in nature, it goes to medical insurance. If it's purely for glasses/contacts with no health issues, it can go to vision insurance. Our billing team will help determine the appropriate coverage."
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
