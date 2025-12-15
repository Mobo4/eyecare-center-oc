import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Moon, Sun, Eye, Shield, CheckCircle, XCircle, Zap, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
    title: 'Ortho-K for Adults | Non-Surgical Vision Correction',
    description: 'Orthokeratology for adults: overnight vision correction without surgery. Wake up with clear vision. Expert fitting in Orange County.',
    keywords: [
        'ortho-k for adults',
        'orthokeratology orange county',
        'LASIK alternative',
        'non-surgical vision correction',
        'overnight contact lenses',
        'corneal reshaping lenses',
        'CRT lenses adults',
        'Paragon CRT orange county',
        'vision correction without surgery',
        'ortho-k vs LASIK',
        'reversible vision correction',
        'myopia correction adults',
        'astigmatism correction overnight',
        'freedom from glasses',
        'no surgery clear vision',
        'night lenses irvine',
        'orthokeratology newport beach',
        'adult ortho k fitting',
        'corneal refractive therapy',
        'overnight vision correction santa ana'
    ],
    openGraph: {
        title: 'Adult Ortho-K | LASIK Alternative | EyeCare Center OC',
        description: 'Clear vision without surgery. Ortho-K overnight lenses reshape your cornea while you sleep. Wake up seeing clearly.',
        type: 'website',
    }
,
  alternates: {
    canonical: 'https://eyecarecenteroc.com/services/ortho-k-adults',
  }
};

import { generateMedicalBusinessSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export default function AdultOrthoKPage() {
    const businessSchema = generateMedicalBusinessSchema();

    return (
        <main className="min-h-screen bg-white">
            <JsonLd data={businessSchema} id="business-schema" />
            <Header />

            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/myopia-control-main.webp"
                        alt="Adult Ortho-K Vision Correction"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                </div>
                <div className="relative h-full container mx-auto px-4 flex items-center">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Moon className="w-4 h-4" />
                            Non-Surgical Vision Correction
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            See Clearly Without Surgery
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Orthokeratology (Ortho-K) gently reshapes your cornea while you sleep.
                            <strong className="text-white"> Wake up with clear, natural vision</strong> — no glasses, no daytime contacts, no surgery required.
                        </p>
                        <Link
                            href="/book-appointment"
                            className="inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Schedule Ortho-K Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">The Science</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            How Ortho-K Works
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            Ortho-K uses specially designed gas permeable contact lenses worn only during sleep to gently reshape the front surface of your eye.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            <StepCard
                                number={1}
                                icon={Moon}
                                title="Wear at Night"
                                description="Insert your custom-fitted Ortho-K lenses before bed. They work while you sleep, gently reshaping your cornea."
                            />
                            <StepCard
                                number={2}
                                icon={Sun}
                                title="Wake Up Seeing"
                                description="Remove the lenses in the morning and enjoy clear, natural vision all day long without glasses or contacts."
                            />
                            <StepCard
                                number={3}
                                icon={Zap}
                                title="Live Freely"
                                description="Go about your day — work, exercise, swim — with clear vision and nothing on your eyes."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Ortho-K vs LASIK Comparison */}
            <section className="py-20 bg-eyecare-warm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Compare Options</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Ortho-K vs. LASIK Surgery
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            Both provide freedom from daytime glasses and contacts, but with important differences.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Ortho-K Column */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-eyecare-blue">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-eyecare-blue rounded-full flex items-center justify-center">
                                        <Moon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-eyecare-navy">Ortho-K</h3>
                                </div>
                                <ul className="space-y-4">
                                    <ComparisonItem positive={true} text="Non-surgical and non-invasive" />
                                    <ComparisonItem positive={true} text="100% reversible — stop anytime" />
                                    <ComparisonItem positive={true} text="No permanent changes to your eye" />
                                    <ComparisonItem positive={true} text="Adjustable as your vision changes" />
                                    <ComparisonItem positive={true} text="Safe for most prescriptions" />
                                    <ComparisonItem positive={true} text="Results in 1-2 weeks" />
                                    <ComparisonItem positive={false} text="Requires nightly lens wear" />
                                    <ComparisonItem positive={false} text="Ongoing lens care needed" />
                                </ul>
                            </div>

                            {/* LASIK Column */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                                        <Eye className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-eyecare-navy">LASIK Surgery</h3>
                                </div>
                                <ul className="space-y-4">
                                    <ComparisonItem positive={true} text="No daily maintenance required" />
                                    <ComparisonItem positive={true} text="One-time procedure" />
                                    <ComparisonItem positive={true} text="Immediate results" />
                                    <ComparisonItem positive={false} text="Surgical procedure with risks" />
                                    <ComparisonItem positive={false} text="Permanent and irreversible" />
                                    <ComparisonItem positive={false} text="Not suitable for everyone" />
                                    <ComparisonItem positive={false} text="Dry eye side effects common" />
                                    <ComparisonItem positive={false} text="Enhancement may be needed later" />
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-blue-50 rounded-2xl p-6 text-center">
                            <p className="text-eyecare-navy font-medium">
                                <strong>Not sure which is right for you?</strong> Many patients who are not candidates for LASIK
                                or prefer to avoid surgery find Ortho-K to be the perfect solution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Benefits</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Why Adults Choose Ortho-K
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <BenefitCard
                            icon={Shield}
                            title="No Surgical Risks"
                            description="Avoid the risks associated with eye surgery. Ortho-K is completely non-invasive."
                        />
                        <BenefitCard
                            icon={Eye}
                            title="Reversible"
                            description="Stop wearing the lenses anytime and your vision returns to its original state."
                        />
                        <BenefitCard
                            icon={Zap}
                            title="Active Lifestyle"
                            description="Perfect for swimmers, athletes, and anyone who finds daytime contacts inconvenient."
                        />
                        <BenefitCard
                            icon={Clock}
                            title="Works While You Sleep"
                            description="Your vision correction happens overnight, leaving your days completely lens-free."
                        />
                    </div>
                </div>
            </section>

            {/* Who Is a Candidate */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy text-center mb-12">
                            Is Ortho-K Right for You?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-6 h-6" />
                                    Great Candidates
                                </h3>
                                <ul className="space-y-3 text-eyecare-light-navy">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                                        <span>Myopia (nearsightedness) up to -6.00D</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                                        <span>Astigmatism up to -1.75D</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                                        <span>Adults who prefer non-surgical options</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                                        <span>Active individuals and athletes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                                        <span>Those with dry eyes from daytime contacts</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                                        <span>People not eligible for LASIK</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h3 className="text-xl font-bold text-amber-600 mb-4 flex items-center gap-2">
                                    <XCircle className="w-6 h-6" />
                                    May Not Be Ideal For
                                </h3>
                                <ul className="space-y-3 text-eyecare-light-navy">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></span>
                                        <span>Very high prescriptions (above -6.00D)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></span>
                                        <span>Significant farsightedness (hyperopia)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></span>
                                        <span>Active eye infections or diseases</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></span>
                                        <span>Severe dry eye syndrome</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></span>
                                        <span>Those unable to commit to nightly wear</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">What to Expect</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Your Ortho-K Journey
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            <ProcessStep
                                number={1}
                                title="Comprehensive Eye Exam"
                                description="We evaluate your vision, corneal shape, and eye health to determine if Ortho-K is right for you. Advanced topography maps your cornea in detail."
                            />
                            <ProcessStep
                                number={2}
                                title="Custom Lens Design"
                                description="Using your corneal measurements, we design lenses specifically for your eyes. Each pair is custom-manufactured to your unique specifications."
                            />
                            <ProcessStep
                                number={3}
                                title="Fitting & Training"
                                description="We teach you how to insert, remove, and care for your lenses. You'll practice until you're completely comfortable."
                            />
                            <ProcessStep
                                number={4}
                                title="Progressive Improvement"
                                description="Most patients see significant improvement within the first week. Full results typically achieved in 2 weeks."
                            />
                            <ProcessStep
                                number={5}
                                title="Ongoing Care"
                                description="Regular follow-up visits ensure your lenses continue to work optimally and your eyes remain healthy."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-eyecare-warm">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy text-center mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="max-w-3xl mx-auto space-y-6">
                        <FAQItem
                            question="Is Ortho-K safe?"
                            answer="Yes. Ortho-K has been FDA-approved since 2002. With proper fitting and care, it's a safe and effective vision correction method. Our doctors have extensive experience fitting these specialized lenses."
                        />
                        <FAQItem
                            question="How long does the effect last?"
                            answer="After removing the lenses in the morning, most patients enjoy clear vision for the entire day. Some may notice slight blur by evening, which is normal. Consistent nightly wear maintains optimal results."
                        />
                        <FAQItem
                            question="What happens if I stop wearing them?"
                            answer="Your vision will gradually return to its original state over a few days to weeks. This reversibility is one of the key advantages of Ortho-K over surgical options."
                        />
                        <FAQItem
                            question="Can I wear them if I have astigmatism?"
                            answer="Yes! Modern Ortho-K lens designs can correct astigmatism up to -1.75D. Our advanced fitting technology ensures precise correction for astigmatic corneas."
                        />
                        <FAQItem
                            question="How long do the lenses last?"
                            answer="With proper care, Ortho-K lenses typically last 1-2 years before needing replacement. Regular check-ups help us monitor lens condition and fit."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-eyecare-blue text-white text-center">
                <div className="container mx-auto px-4">
                    <Moon className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                        Ready to See Without Surgery?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Discover if Ortho-K is the right vision correction solution for your lifestyle. Schedule your consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/book-appointment"
                            className="inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Book Ortho-K Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <a
                            href={CONTACT_INFO.primaryPhone.href}
                            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-eyecare-blue transition-all duration-300"
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

function StepCard({ number, icon: Icon, title, description }: { number: number, icon: any, title: string, description: string }) {
    return (
        <div className="text-center">
            <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-eyecare-warm rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-10 h-10 text-eyecare-blue" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-eyecare-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {number}
                </div>
            </div>
            <h3 className="text-xl font-bold text-eyecare-navy mb-2">{title}</h3>
            <p className="text-eyecare-light-navy">{description}</p>
        </div>
    );
}

function ComparisonItem({ positive, text }: { positive: boolean, text: string }) {
    return (
        <li className="flex items-center gap-3">
            {positive ? (
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
            ) : (
                <XCircle className="w-5 h-5 text-red-400 shrink-0" />
            )}
            <span className="text-eyecare-light-navy">{text}</span>
        </li>
    );
}

function BenefitCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
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

function ProcessStep({ number, title, description }: { number: number, title: string, description: string }) {
    return (
        <div className="flex gap-6">
            <div className="shrink-0">
                <div className="w-12 h-12 bg-eyecare-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {number}
                </div>
            </div>
            <div className="pt-2">
                <h3 className="text-xl font-bold text-eyecare-navy mb-2">{title}</h3>
                <p className="text-eyecare-light-navy">{description}</p>
            </div>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-eyecare-navy mb-2">{question}</h3>
            <p className="text-eyecare-light-navy">{answer}</p>
        </div>
    );
}
