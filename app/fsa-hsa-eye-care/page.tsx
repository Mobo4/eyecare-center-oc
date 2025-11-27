import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, DollarSign, CheckCircle, AlertTriangle, Eye, Glasses, ShoppingBag, Heart } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
    title: 'FSA & HSA Eye Care | Use Expiring Benefits | Orange County Optometrist',
    description: 'Use your FSA/HSA funds before they expire! Eye exams, glasses, contacts, and more are eligible expenses. Don\'t lose your pre-tax healthcare dollars. Orange County eye care.',
    keywords: [
        'FSA eye care',
        'HSA eye care',
        'FSA eligible eye exam',
        'HSA eligible glasses',
        'use FSA before it expires',
        'expiring FSA benefits',
        'FSA deadline eye doctor',
        'spend FSA on glasses',
        'HSA contact lenses',
        'flexible spending account eye care',
        'health savings account optometrist',
        'FSA eligible expenses vision',
        'year end FSA spending',
        'FSA use it or lose it',
        'FSA rollover eye care',
        'pre-tax vision care',
        'FSA glasses orange county',
        'HSA eye exam irvine',
        'FSA contacts newport beach',
        'expiring benefits eye doctor',
        'end of year eye exam',
        'December FSA spending',
        'FSA approved eye care',
        'HSA qualified vision expenses'
    ],
    openGraph: {
        title: 'FSA & HSA Eye Care | Use Expiring Benefits | EyeCare Center OC',
        description: 'Don\'t let your FSA/HSA funds expire! Eye exams, glasses, contacts, and specialty services are all eligible expenses.',
        type: 'website',
    }
};

export default function FSAHSAPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Clock className="w-4 h-4" />
                            Use It Before You Lose It!
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            FSA & HSA Eye Care
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Don't let your <strong className="text-white">pre-tax healthcare dollars expire</strong>.
                            Eye exams, glasses, contact lenses, and specialty treatments are all FSA/HSA eligible!
                        </p>
                        <Link
                            href="/book-appointment"
                            className="inline-flex items-center justify-center bg-white text-purple-700 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Book Before Year-End
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Urgency Banner */}
            <section className="bg-yellow-400 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-3 text-yellow-900">
                        <AlertTriangle className="w-5 h-5" />
                        <p className="font-semibold text-center">
                            Many FSA plans have a "use it or lose it" policy. Check your deadline and schedule now!
                        </p>
                    </div>
                </div>
            </section>

            {/* What is FSA/HSA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Understanding Your Benefits</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            What Are FSA & HSA Accounts?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-purple-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-eyecare-navy mb-4">FSA (Flexible Spending Account)</h3>
                            <p className="text-eyecare-light-navy mb-4">
                                Pre-tax dollars set aside through your employer for medical expenses.
                                Most FSA funds must be used within the plan year or they're forfeited.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-eyecare-light-navy">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                    Typically expires December 31st
                                </li>
                                <li className="flex items-center gap-2 text-eyecare-light-navy">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                    Some plans offer grace period or $610 rollover
                                </li>
                                <li className="flex items-center gap-2 text-eyecare-light-navy">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                    "Use it or lose it" policy applies
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-eyecare-navy mb-4">HSA (Health Savings Account)</h3>
                            <p className="text-eyecare-light-navy mb-4">
                                Pre-tax savings account for those with high-deductible health plans.
                                Unlike FSA, HSA funds roll over year to year and are yours forever.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-eyecare-light-navy">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Funds never expire
                                </li>
                                <li className="flex items-center gap-2 text-eyecare-light-navy">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Grows tax-free over time
                                </li>
                                <li className="flex items-center gap-2 text-eyecare-light-navy">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Use for qualified medical expenses anytime
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligible Expenses */}
            <section className="py-20 bg-eyecare-warm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Qualified Expenses</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            FSA/HSA Eligible Eye Care Services
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            Almost everything we offer qualifies for FSA/HSA spending!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <EligibleCard
                            icon={Eye}
                            title="Eye Exams"
                            items={["Comprehensive eye exams", "Contact lens evaluations", "Medical eye exams", "Pediatric eye exams"]}
                        />
                        <EligibleCard
                            icon={Glasses}
                            title="Eyeglasses"
                            items={["Prescription frames", "Prescription lenses", "Progressive lenses", "Lens coatings & treatments"]}
                        />
                        <EligibleCard
                            icon={ShoppingBag}
                            title="Contact Lenses"
                            items={["Daily disposables", "Monthly contacts", "Toric lenses", "Multifocal contacts"]}
                        />
                        <EligibleCard
                            icon={Heart}
                            title="Specialty Services"
                            items={["Ortho-K lenses", "Myopia management", "Dry eye treatments", "Specialty contact fittings"]}
                        />
                    </div>

                    <div className="mt-12 bg-white p-6 rounded-2xl max-w-3xl mx-auto">
                        <h3 className="text-lg font-bold text-eyecare-navy mb-4 text-center">Also Eligible:</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            <EligibleTag text="Prescription Sunglasses" />
                            <EligibleTag text="Reading Glasses" />
                            <EligibleTag text="Contact Lens Solution" />
                            <EligibleTag text="Eye Drops" />
                            <EligibleTag text="Lens Wipes" />
                            <EligibleTag text="Scleral Lenses" />
                            <EligibleTag text="RGP Lenses" />
                            <EligibleTag text="Blue Light Glasses (Rx)" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Smart Ways to Spend */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Maximize Your Benefits</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Smart Ways to Use Your FSA/HSA
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <SpendingIdea
                            number={1}
                            title="Stock Up on Contact Lenses"
                            description="Buy a year's supply of contacts. You'll use them anyway, and your FSA covers the cost."
                            savings="Save 25-30% with pre-tax dollars"
                        />
                        <SpendingIdea
                            number={2}
                            title="Get a Backup Pair of Glasses"
                            description="Everyone needs a backup pair. Get prescription sunglasses or a second frame style."
                            savings="Great for active lifestyles"
                        />
                        <SpendingIdea
                            number={3}
                            title="Upgrade Your Lenses"
                            description="Add progressive lenses, anti-reflective coating, or photochromic technology."
                            savings="Premium options become affordable"
                        />
                        <SpendingIdea
                            number={4}
                            title="Schedule Your Annual Exam"
                            description="Don't skip your comprehensive eye exam. Early detection saves vision and money."
                            savings="Preventive care is fully covered"
                        />
                        <SpendingIdea
                            number={5}
                            title="Try Specialty Contacts"
                            description="Invest in multifocal contacts, ortho-k, or specialty lenses for keratoconus."
                            savings="Life-changing vision solutions"
                        />
                        <SpendingIdea
                            number={6}
                            title="Address Dry Eye"
                            description="Diagnostic testing and treatment for chronic dry eye are FSA/HSA eligible."
                            savings="Relief from daily discomfort"
                        />
                    </div>
                </div>
            </section>

            {/* Important Deadlines */}
            <section className="py-20 bg-red-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <Calendar className="w-16 h-16 text-red-500 mx-auto mb-4" />
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-4">
                                Important FSA Deadlines
                            </h2>
                            <p className="text-eyecare-light-navy">
                                Don't miss these critical dates for using your FSA funds.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <DeadlineCard
                                date="December 31"
                                title="Plan Year End"
                                description="Most FSA plans end on December 31st. Services must be rendered by this date."
                                urgent
                            />
                            <DeadlineCard
                                date="March 15"
                                title="Grace Period"
                                description="Some plans offer a 2.5-month grace period. Check with your employer."
                                urgent={false}
                            />
                            <DeadlineCard
                                date="$610 Rollover"
                                title="Rollover Option"
                                description="Some plans allow up to $610 to roll over. Remaining funds are forfeited."
                                urgent={false}
                            />
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-2xl text-center">
                            <p className="text-eyecare-navy font-medium">
                                <strong>Pro Tip:</strong> Schedule your appointment early! Year-end appointments fill quickly,
                                and you'll want time to order glasses or contacts before your deadline.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Pay */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Easy Payment</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            How to Use Your FSA/HSA With Us
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-eyecare-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                                <h3 className="text-lg font-bold text-eyecare-navy mb-2">Bring Your Card</h3>
                                <p className="text-eyecare-light-navy">Bring your FSA/HSA debit card to your appointment. We accept them just like any credit card.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-eyecare-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                                <h3 className="text-lg font-bold text-eyecare-navy mb-2">Pay at Checkout</h3>
                                <p className="text-eyecare-light-navy">Swipe your card when you check out. Eligible expenses are automatically approved.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-eyecare-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                                <h3 className="text-lg font-bold text-eyecare-navy mb-2">Get Your Receipt</h3>
                                <p className="text-eyecare-light-navy">We provide itemized receipts for your records and any required documentation.</p>
                            </div>
                        </div>

                        <div className="mt-12 bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-lg font-bold text-eyecare-navy mb-4">Don't Have an FSA/HSA Card?</h3>
                            <p className="text-eyecare-light-navy">
                                No problem! Pay with any method and submit your itemized receipt to your FSA/HSA administrator for reimbursement.
                                We provide all the documentation you need.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-purple-700 text-white text-center">
                <div className="container mx-auto px-4">
                    <Clock className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                        Don't Let Your Benefits Expire!
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Schedule your appointment today and put your pre-tax healthcare dollars to good use.
                        Your eyes (and your wallet) will thank you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/book-appointment"
                            className="inline-flex items-center justify-center bg-white text-purple-700 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Book Appointment Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <a
                            href={CONTACT_INFO.primaryPhone.href}
                            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-700 transition-all duration-300"
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

function EligibleCard({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-eyecare-navy mb-3">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-eyecare-light-navy">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function EligibleTag({ text }: { text: string }) {
    return (
        <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            <CheckCircle className="w-3 h-3" />
            {text}
        </span>
    );
}

function SpendingIdea({ number, title, description, savings }: { number: number, title: string, description: string, savings: string }) {
    return (
        <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="w-10 h-10 bg-eyecare-blue text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                {number}
            </div>
            <h3 className="text-lg font-bold text-eyecare-navy mb-2">{title}</h3>
            <p className="text-eyecare-light-navy text-sm mb-3">{description}</p>
            <p className="text-xs text-green-600 font-medium">{savings}</p>
        </div>
    );
}

function DeadlineCard({ date, title, description, urgent }: { date: string, title: string, description: string, urgent: boolean }) {
    return (
        <div className={`p-6 rounded-2xl ${urgent ? 'bg-red-100 border-2 border-red-300' : 'bg-white'}`}>
            <p className={`text-2xl font-bold mb-2 ${urgent ? 'text-red-600' : 'text-eyecare-navy'}`}>{date}</p>
            <h3 className="text-lg font-bold text-eyecare-navy mb-2">{title}</h3>
            <p className="text-sm text-eyecare-light-navy">{description}</p>
        </div>
    );
}
