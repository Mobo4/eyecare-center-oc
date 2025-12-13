import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, CreditCard, Calendar, DollarSign, CheckCircle, Shield, Percent, Clock, Calculator } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Eye Care Financing | CareCredit & Payment Plans | OC',
    description: 'Flexible financing options for eye care. CareCredit, payment plans, and insurance accepted. Make vision care affordable in Orange County.',
    keywords: [
        'eye care financing orange county',
        'vision care payment plans',
        'CareCredit eye doctor',
        'CareCredit optometrist',
        'Alphaeon Credit vision',
        'eye exam payment plan',
        'contact lens financing',
        'glasses payment plan',
        'affordable eye care',
        '0 interest eye care',
        'no interest vision care',
        'monthly payment eye doctor',
        'finance glasses orange county',
        'finance contact lenses',
        'vision insurance alternatives',
        'eye care credit card',
        'optometry financing irvine',
        'eye doctor payment options newport beach',
        'affordable glasses santa ana',
        'vision care credit'
    ],
    openGraph: {
        title: 'Eye Care Financing & Payment Plans | EyeCare Center OC',
        description: 'Make quality eye care affordable with flexible financing. 0% interest options, CareCredit, and monthly payment plans available.',
        type: 'website',
    }
};

export default function FinancingPage() {
    const businessSchema = generateLocalBusinessSchema();
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://eyecarecenteroc.com' },,
  alternates: {
    canonical: 'https://eyecarecenteroc.com/financing',
  }
        { name: 'Financing', url: 'https://eyecarecenteroc.com/financing' },
    ]);

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={businessSchema} id="business-schema" />
            <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <DollarSign className="w-4 h-4" />
                            Affordable Vision Care
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Flexible Financing Options
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Quality eye care shouldn't be out of reach. We offer multiple payment options to make
                            <strong className="text-white"> vision care affordable</strong> for every budget.
                        </p>
                        <Link
                            href="/book-appointment"
                            className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Schedule Appointment
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Payment Options Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Payment Options</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Ways to Pay for Your Eye Care
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            We accept multiple payment methods to fit your financial situation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <PaymentCard
                            icon={CreditCard}
                            title="Major Credit Cards"
                            description="Visa, Mastercard, American Express, and Discover accepted for all services."
                        />
                        <PaymentCard
                            icon={Shield}
                            title="Vision Insurance"
                            description="We accept most major vision insurance plans. We'll help verify your benefits."
                        />
                        <PaymentCard
                            icon={DollarSign}
                            title="FSA / HSA"
                            description="Use your pre-tax health savings for eye exams, glasses, and contacts."
                        />
                        <PaymentCard
                            icon={Calendar}
                            title="Payment Plans"
                            description="Interest-free and low-interest monthly payment options available."
                        />
                    </div>
                </div>
            </section>

            {/* CareCredit Section */}
            <section className="py-20 bg-eyecare-warm">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Healthcare Financing</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-6">
                                    CareCredit Healthcare Credit Card
                                </h2>
                                <p className="text-eyecare-light-navy mb-6">
                                    CareCredit is a healthcare credit card that helps you pay for treatments and procedures
                                    your insurance may not cover. Use it for eye exams, glasses, contact lenses, and specialty services.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <FinanceFeature text="0% interest if paid in full within 6, 12, 18, or 24 months" />
                                    <FinanceFeature text="Low minimum monthly payments" />
                                    <FinanceFeature text="Apply online in minutes" />
                                    <FinanceFeature text="Use at 250,000+ healthcare providers" />
                                    <FinanceFeature text="Reusable credit line" />
                                </ul>
                                <a
                                    href="https://www.carecredit.com/apply/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-eyecare-blue font-semibold hover:underline"
                                >
                                    Apply for CareCredit
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="bg-white p-8 rounded-3xl shadow-lg">
                                    <h3 className="text-xl font-bold text-eyecare-navy mb-6">Promotional Financing Options</h3>
                                    <div className="space-y-4">
                                        <PromoOption months={6} minPurchase={200} />
                                        <PromoOption months={12} minPurchase={500} />
                                        <PromoOption months={18} minPurchase={1000} />
                                        <PromoOption months={24} minPurchase={1500} />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-4">
                                        *Subject to credit approval. Minimum monthly payments required. See CareCredit for details.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alphaeon Credit Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Another Option</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-6">
                                    Alphaeon Credit
                                </h2>
                                <p className="text-eyecare-light-navy mb-6">
                                    Alphaeon Credit offers another flexible financing option specifically designed for
                                    lifestyle healthcare services including vision care, cosmetic procedures, and more.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <FinanceFeature text="Competitive interest rates" />
                                    <FinanceFeature text="Flexible payment terms up to 60 months" />
                                    <FinanceFeature text="Quick approval process" />
                                    <FinanceFeature text="No prepayment penalties" />
                                    <FinanceFeature text="Use for multiple family members" />
                                </ul>
                                <a
                                    href="https://www.alphaeon.com/patients/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-eyecare-blue font-semibold hover:underline"
                                >
                                    Learn About Alphaeon Credit
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="bg-gray-50 p-8 rounded-3xl">
                                    <h3 className="text-xl font-bold text-eyecare-navy mb-4">Perfect For:</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-eyecare-light-navy">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span>Premium eyewear purchases</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-eyecare-light-navy">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span>Specialty contact lens fittings</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-eyecare-light-navy">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span>Ortho-K treatment programs</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-eyecare-light-navy">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span>Myopia management for children</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-eyecare-light-navy">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span>Dry eye treatment packages</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FSA/HSA Highlight Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Clock className="w-16 h-16 text-eyecare-blue mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-6">
                            Have FSA or HSA Funds?
                        </h2>
                        <p className="text-xl text-eyecare-light-navy mb-8">
                            Don't let your pre-tax healthcare dollars go to waste! FSA funds typically expire at year-end.
                            Use them for eye exams, prescription glasses, contact lenses, and more.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/fsa-hsa-eye-care"
                                className="inline-flex items-center justify-center bg-eyecare-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                Learn About FSA/HSA Benefits
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monthly Payment Calculator Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Budget Planning</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Sample Monthly Payments
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            See how affordable your eye care can be with monthly payments.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-50 rounded-3xl p-8">
                            <div className="grid md:grid-cols-3 gap-6">
                                <PaymentExample
                                    service="Designer Glasses"
                                    total={600}
                                    monthly={50}
                                    months={12}
                                />
                                <PaymentExample
                                    service="Annual Contact Lens Supply"
                                    total={480}
                                    monthly={40}
                                    months={12}
                                />
                                <PaymentExample
                                    service="Specialty Lens Fitting"
                                    total={1200}
                                    monthly={100}
                                    months={12}
                                />
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-6">
                                *Examples shown with 0% APR promotional financing. Actual terms vary based on credit approval and purchase amount.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Finance Section */}
            <section className="py-20 bg-eyecare-warm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-4">
                            Why Finance Your Eye Care?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <ReasonCard
                            icon={CheckCircle}
                            title="Get Care Now"
                            description="Don't wait for your vision needs. Get the glasses, contacts, or treatment you need today."
                        />
                        <ReasonCard
                            icon={Percent}
                            title="0% Interest Options"
                            description="Pay over time without paying extra. Interest-free financing makes quality care affordable."
                        />
                        <ReasonCard
                            icon={Calculator}
                            title="Budget-Friendly"
                            description="Spread the cost into manageable monthly payments that fit your budget."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-green-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <DollarSign className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                        Questions About Financing?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Our team is happy to discuss payment options and help you find the best solution for your budget.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/book-appointment"
                            className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Schedule Appointment
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <a
                            href={CONTACT_INFO.primaryPhone.href}
                            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300"
                        >
                            Call {CONTACT_INFO.primaryPhone.display}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function PaymentCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-eyecare-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-eyecare-navy mb-2">{title}</h3>
            <p className="text-sm text-eyecare-light-navy">{description}</p>
        </div>
    );
}

function FinanceFeature({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 text-eyecare-light-navy">
            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
            <span>{text}</span>
        </li>
    );
}

function PromoOption({ months, minPurchase }: { months: number, minPurchase: number }) {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
                <span className="text-2xl font-bold text-eyecare-navy">{months}</span>
                <span className="text-eyecare-light-navy ml-2">months</span>
            </div>
            <div className="text-right">
                <span className="text-green-600 font-bold">0% APR</span>
                <p className="text-xs text-gray-500">Min. ${minPurchase}</p>
            </div>
        </div>
    );
}

function PaymentExample({ service, total, monthly, months }: { service: string, total: number, monthly: number, months: number }) {
    return (
        <div className="bg-white p-6 rounded-2xl text-center">
            <h4 className="font-bold text-eyecare-navy mb-2">{service}</h4>
            <p className="text-3xl font-bold text-eyecare-blue mb-1">${monthly}<span className="text-lg">/mo</span></p>
            <p className="text-sm text-gray-500">${total} over {months} months</p>
        </div>
    );
}

function ReasonCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-eyecare-navy mb-2">{title}</h3>
            <p className="text-eyecare-light-navy">{description}</p>
        </div>
    );
}
