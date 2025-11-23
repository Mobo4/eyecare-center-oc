import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Stethoscope, ClipboardCheck, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
    title: 'For Medical Professionals | Patient Referrals | EyeCare Center OC',
    description: 'Partner with EyeCare Center of Orange County. Seamless patient referrals for keratoconus, dry eye, and complex corneal conditions. Co-management opportunities available.',
};

export default function MedicalProfessionalsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-eyecare-navy text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 text-eyecare-blue mb-4">
                                <Stethoscope className="w-6 h-6" />
                                <span className="font-semibold uppercase tracking-wider">Physician Portal</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                                Partnering for Excellence in Patient Care
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                We value our partnerships with local optometrists, ophthalmologists, and primary care physicians.
                                Together, we can provide seamless, advanced care for your patients with complex eye conditions.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#referral-form"
                                    className="inline-flex items-center px-6 py-3 bg-eyecare-blue hover:bg-eyecare-dark-blue text-white font-semibold rounded-lg transition-colors"
                                >
                                    Refer a Patient
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                                <a
                                    href={`tel:${CONTACT_INFO.primaryPhone.href}`}
                                    className="inline-flex items-center px-6 py-3 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
                                >
                                    <Phone className="mr-2 w-5 h-5" />
                                    Doctor-to-Doctor Line
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Grid */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                            {/* Left Column: Information */}
                            <div>
                                <h2 className="text-3xl font-bold text-eyecare-navy mb-6">
                                    Why Refer to EyeCare Center of OC?
                                </h2>
                                <div className="prose prose-lg text-gray-600 mb-8">
                                    <p>
                                        Dr. Bonakdar and his team specialize in managing complex corneal conditions that often require
                                        advanced diagnostics and specialized treatment modalities not available in all primary eye care settings.
                                    </p>
                                    <p>
                                        We act as an extension of your practice, ensuring your patients receive the specialized care they need
                                        while maintaining your relationship as their primary eye care provider.
                                    </p>
                                </div>

                                <div className="space-y-6 mb-12">
                                    <div className="flex gap-4">
                                        <div className="p-3 bg-blue-50 rounded-lg h-fit">
                                            <CheckCircle className="w-6 h-6 text-eyecare-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Specialized Expertise</h3>
                                            <p className="text-gray-600">
                                                Over 35 years of experience in Keratoconus management, Scleral Lens fitting,
                                                and severe Dry Eye treatment using IPL and LipiFlow.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="p-3 bg-blue-50 rounded-lg h-fit">
                                            <CheckCircle className="w-6 h-6 text-eyecare-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Prompt Communication</h3>
                                            <p className="text-gray-600">
                                                We provide detailed consultation reports within 24 hours of seeing your patient,
                                                keeping you fully informed of their diagnosis and treatment plan.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="p-3 bg-blue-50 rounded-lg h-fit">
                                            <CheckCircle className="w-6 h-6 text-eyecare-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Co-Management</h3>
                                            <p className="text-gray-600">
                                                We support co-management arrangements for surgical cases and ongoing condition monitoring,
                                                respecting your role in the patient's long-term care.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                                    <h3 className="text-xl font-bold text-eyecare-navy mb-4">Conditions We Manage</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            'Keratoconus & Ectasia',
                                            'Severe Dry Eye Disease',
                                            'Post-Surgical Corneas',
                                            'Irregular Astigmatism',
                                            'Sjogren\'s Syndrome',
                                            'Pellucid Marginal Degeneration',
                                            'GVHD Ocular Complications',
                                            'Stevens-Johnson Syndrome'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center text-gray-700">
                                                <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full mr-2"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column: Referral Form */}
                            <div id="referral-form" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                                <div className="bg-eyecare-blue p-6 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <ClipboardCheck className="w-6 h-6" />
                                        <h3 className="text-xl font-bold">Secure Referral Form</h3>
                                    </div>
                                    <p className="text-blue-100 text-sm">
                                        Please fill out the patient details below. Our coordination team will contact the patient
                                        within 2 hours to schedule their consultation.
                                    </p>
                                </div>

                                <div className="p-1">
                                    {/* GHL Form Iframe */}
                                    <iframe
                                        src="https://api.leadconnectorhq.com/widget/form/a2vv3ztdBH5WpJ5iGfVj"
                                        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '4px' }}
                                        id="referral-frame"
                                        data-layout="{'id':'REFERRAL_FORM'}"
                                        data-trigger-type="alwaysShow"
                                        data-trigger-value=""
                                        data-activation-type="alwaysActivated"
                                        data-activation-value=""
                                        data-deactivation-type="neverDeactivate"
                                        data-deactivation-value=""
                                        data-form-name="Appointment Request"
                                        data-height="600"
                                        data-layout-iframe-id="referral-frame"
                                        data-form-id="a2vv3ztdBH5WpJ5iGfVj"
                                        title="Referral Form"
                                    />
                                </div>

                                <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
                                    <p className="text-sm text-gray-500 mb-2">Prefer to fax or email?</p>
                                    <div className="flex justify-center gap-6 text-sm font-semibold text-eyecare-navy">
                                        <span className="flex items-center">
                                            <Phone className="w-4 h-4 mr-2" />
                                            Fax: (949) 555-0123
                                        </span>
                                        <span className="flex items-center">
                                            <Mail className="w-4 h-4 mr-2" />
                                            referrals@eyecarecenteroc.com
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
