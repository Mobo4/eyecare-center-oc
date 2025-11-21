import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Shield, Phone, ArrowRight, FileText, CreditCard } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Coverage & Accepted Plans | EyeCare Center OC',
  description: 'We accept VSP, EyeMed, Medicare, and most major vision and medical insurance plans. Keratoconus treatment, scleral lenses, and comprehensive eye care covered by insurance.',
  keywords: [
    'keratoconus treatment covered by insurance',
    'scleral lenses insurance coverage',
    'vsp keratoconus specialist',
    'medical insurance keratoconus',
    'eyemed scleral lenses',
    'medicare eye care orange county',
    'insurance eye doctor orange county',
    'vision insurance accepted',
  ],
};

export default function InsuranceCoveragePage() {
  const insurancePlans = [
    {
      category: 'Vision Insurance Plans',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      plans: [
        { name: 'VSP (Vision Service Plan)', coverage: 'Comprehensive exams, frames, lenses, contact lenses' },
        { name: 'EyeMed', coverage: 'Annual exams, eyewear allowances, contact lens fittings' },
        { name: 'Spectera', coverage: 'Routine vision care, specialty contact lenses' },
        { name: 'Avesis', coverage: 'Vision exams, corrective lenses, frame allowances' },
        { name: 'Superior Vision', coverage: 'Comprehensive vision benefits, specialty services' },
      ],
    },
    {
      category: 'Medical Insurance Plans',
      icon: FileText,
      color: 'from-emerald-500 to-emerald-600',
      plans: [
        { name: 'Medicare / Medicare Advantage', coverage: 'Medical eye exams, diabetic retinopathy screenings, glaucoma testing' },
        { name: 'Blue Cross Blue Shield', coverage: 'Medical eye care, cataract surgery, keratoconus treatment' },
        { name: 'Anthem Blue Cross', coverage: 'Medical eye conditions, surgical procedures' },
        { name: 'Aetna', coverage: 'Medical necessity eye care, disease management' },
        { name: 'Cigna', coverage: 'Medical eye exams, treatment of eye diseases' },
        { name: 'UnitedHealthcare', coverage: 'Medical eye care, specialist consultations' },
        { name: 'Health Net', coverage: 'Medical eye conditions, surgical care' },
      ],
    },
  ];

  const coveredServices = [
    {
      service: 'Keratoconus Treatment',
      medicalCoverage: 'Usually covered',
      visionCoverage: 'Specialty lens coverage',
      details: 'Diagnosis, corneal cross-linking (FDA-approved), scleral lens fittings typically covered by medical insurance.',
    },
    {
      service: 'Scleral Lens Fitting',
      medicalCoverage: 'Often covered with diagnosis',
      visionCoverage: 'Specialty benefit',
      details: 'Custom scleral lenses for keratoconus, post-LASIK complications, and severe dry eye may qualify for medical coverage.',
    },
    {
      service: 'Dry Eye Treatment (IPL)',
      medicalCoverage: 'Case-by-case',
      visionCoverage: 'Not typically covered',
      details: 'IPL therapy for chronic dry eye syndrome may be covered if medically necessary. Pre-authorization often required.',
    },
    {
      service: 'Corneal Cross-Linking',
      medicalCoverage: 'Usually covered',
      visionCoverage: 'N/A',
      details: 'FDA-approved treatment to halt keratoconus progression typically covered by medical insurance with prior authorization.',
    },
    {
      service: 'Comprehensive Eye Exam',
      medicalCoverage: 'If medical condition present',
      visionCoverage: 'Annual benefit',
      details: 'Routine exams covered by vision insurance. Medical exams for eye diseases covered by medical insurance.',
    },
    {
      service: 'LASIK Consultation',
      medicalCoverage: 'Not covered',
      visionCoverage: 'Discounts may apply',
      details: 'LASIK is typically not covered by insurance, but we offer financing options and discounts for VSP/EyeMed members.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-eyecare-blue via-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Most Insurance Plans Accepted
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Insurance Coverage & Payment Options
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We accept VSP, EyeMed, Medicare, and most major medical and vision insurance plans.
            Keratoconus treatment and scleral lenses often covered by medical insurance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT_INFO.primaryPhone.href}
              className="callrail-phone inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Verify Insurance: {CONTACT_INFO.primaryPhone.display}
            </a>

            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-eyecare-blue hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Accepted Insurance Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Accepted Insurance Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We accept most major vision and medical insurance plans. Contact us to verify your specific coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {insurancePlans.map((category, idx) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-eyecare-blue transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>

                  <ul className="space-y-4">
                    {category.plans.map((plan, planIdx) => (
                      <li key={planIdx} className="flex items-start">
                        <Check className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900">{plan.name}</div>
                          <div className="text-sm text-gray-600">{plan.coverage}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <strong>Don't see your plan listed?</strong> We accept many other plans not listed here.
              Call us at <a href={CONTACT_INFO.primaryPhone.href} className="text-eyecare-blue hover:underline callrail-phone">{CONTACT_INFO.primaryPhone.display}</a> to verify your coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage by Service */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Covered by Insurance?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding insurance coverage for specialty eye care services
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-eyecare-blue to-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Service</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Medical Insurance</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Vision Insurance</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {coveredServices.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.service}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        item.medicalCoverage.includes('Usually') || item.medicalCoverage.includes('Often')
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.medicalCoverage.includes('Case-by-case')
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {item.medicalCoverage}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">{item.visionCoverage}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-eyecare-blue p-6 rounded-r-xl">
            <div className="flex">
              <Shield className="h-6 w-6 text-eyecare-blue mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Insurance Pre-Verification</h3>
                <p className="text-gray-700">
                  We recommend verifying your coverage before your appointment. Our insurance specialists can help you understand your benefits,
                  out-of-pocket costs, and payment options. Call <a href={CONTACT_INFO.primaryPhone.href} className="text-eyecare-blue hover:underline font-semibold callrail-phone">{CONTACT_INFO.primaryPhone.display}</a> for a free insurance verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer multiple payment options to make quality eye care accessible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300">
              <div className="inline-flex p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6">
                <CreditCard className="w-8 h-8 text-eyecare-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Assignment</h3>
              <p className="text-gray-600">
                We file claims directly with your insurance company and accept assignment of benefits
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300">
              <div className="inline-flex p-4 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full mb-6">
                <FileText className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financing Plans</h3>
              <p className="text-gray-600">
                CareCredit and other healthcare financing options available for qualified patients
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300">
              <div className="inline-flex p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mb-6">
                <Check className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">All Major Cards</h3>
              <p className="text-gray-600">
                Visa, Mastercard, American Express, Discover, cash, and checks accepted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-eyecare-blue via-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Verify Your Coverage?
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact our insurance specialists today for a free benefits verification
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={CONTACT_INFO.primaryPhone.href}
              className="callrail-phone inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call {CONTACT_INFO.primaryPhone.display}
            </a>

            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-eyecare-blue hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
