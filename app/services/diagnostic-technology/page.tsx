import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Eye, Scan, Activity, Layers, Droplets, Sun, TestTube, Radio, Target, Zap } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

export const metadata: Metadata = {
    title: 'Advanced Eye Diagnostic Technology | OCT, Pentacam, ERG | Orange County',
    description: 'State-of-the-art eye diagnostic equipment: OCT, Pentacam corneal tomography, ERG, visual field testing, meibography, B-scan ultrasound, and point-of-care testing. Comprehensive eye care in Orange County.',
    keywords: [
        'OCT eye scan orange county',
        'optical coherence tomography',
        'Pentacam corneal tomography',
        'corneal topography orange county',
        'ERG electroretinography',
        'electroretinogram test',
        'visual field test',
        'Humphrey visual field',
        'meibography dry eye',
        'meibomian gland imaging',
        'B-scan ultrasound eye',
        'ocular ultrasound',
        'cataract evaluation',
        'cataract scoring',
        'point of care testing eye',
        'MMP-9 dry eye test',
        'InflammaDry test',
        'adenovirus eye test',
        'AdenoPlus test',
        'Neurolens fitting',
        'IPL dry eye treatment',
        'OptiLight treatment',
        'advanced eye diagnostics irvine',
        'comprehensive eye exam newport beach',
        'retinal imaging santa ana'
    ],
    openGraph: {
        title: 'Advanced Eye Diagnostic Technology | EyeCare Center OC',
        description: 'Comprehensive diagnostic capabilities including OCT, Pentacam, ERG, visual field, meibography, and point-of-care testing.',
        type: 'website',
    }
};

export default function DiagnosticTechnologyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-eyecare-navy to-slate-800 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Scan className="w-4 h-4" />
                            State-of-the-Art Equipment
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Advanced Diagnostic Technology
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Precision diagnosis leads to better outcomes. Our office is equipped with the latest
                            <strong className="text-white"> diagnostic technology</strong> to detect eye conditions early and monitor them effectively.
                        </p>
                        <Link
                            href="/book-appointment"
                            className="inline-flex items-center justify-center bg-white text-eyecare-navy px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Schedule Comprehensive Exam
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Imaging Technology Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Imaging Systems</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Advanced Imaging Technology
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            High-resolution imaging allows us to see structures of the eye in unprecedented detail.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <TechCard
                            icon={Layers}
                            title="OCT (Optical Coherence Tomography)"
                            description="Non-invasive imaging that creates detailed cross-sections of the retina, optic nerve, and cornea. Essential for detecting and monitoring:"
                            features={[
                                "Macular degeneration",
                                "Diabetic retinopathy",
                                "Glaucoma progression",
                                "Retinal holes and detachments",
                                "Corneal conditions"
                            ]}
                            highlight
                        />
                        <TechCard
                            icon={Target}
                            title="Pentacam Corneal Tomography"
                            description="Rotating Scheimpflug camera that captures a complete 3D model of the anterior segment, measuring:"
                            features={[
                                "Corneal thickness mapping",
                                "Anterior and posterior curvature",
                                "Keratoconus detection",
                                "Post-LASIK evaluation",
                                "Cataract density analysis"
                            ]}
                        />
                        <TechCard
                            icon={Scan}
                            title="Corneal Topographer"
                            description="Maps the surface curvature of the cornea using reflected light patterns. Critical for:"
                            features={[
                                "Contact lens fitting",
                                "Astigmatism measurement",
                                "Corneal irregularities",
                                "Ortho-K evaluation",
                                "Pre-surgical planning"
                            ]}
                        />
                        <TechCard
                            icon={Radio}
                            title="B-Scan Ultrasound"
                            description="Diagnostic ultrasound that images the internal structures of the eye when direct visualization is not possible:"
                            features={[
                                "Dense cataracts",
                                "Vitreous hemorrhage",
                                "Retinal detachment",
                                "Intraocular tumors",
                                "Post-trauma evaluation"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Functional Testing Section */}
            <section className="py-20 bg-eyecare-warm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Functional Testing</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Functional & Diagnostic Testing
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            Beyond imaging, we assess how well your eyes function and respond.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <FunctionalCard
                            icon={Activity}
                            title="ERG (Electroretinography)"
                            description="Measures the electrical response of retinal cells to light stimulation. Used to diagnose:"
                            uses={["Retinitis pigmentosa", "Cone dystrophy", "Night blindness", "Retinal toxicity"]}
                        />
                        <FunctionalCard
                            icon={Eye}
                            title="Visual Field Testing"
                            description="Maps your peripheral vision to detect blind spots and vision loss patterns. Essential for:"
                            uses={["Glaucoma monitoring", "Neurological conditions", "Stroke effects", "Brain tumors"]}
                        />
                        <FunctionalCard
                            icon={Target}
                            title="Cataract Evaluation"
                            description="Advanced analysis system that grades cataract density and type, helping determine:"
                            uses={["Surgery timing", "Visual impact", "Treatment options", "Lens selection"]}
                        />
                    </div>
                </div>
            </section>

            {/* Dry Eye & Surface Disease Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Dry Eye Diagnostics</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Dry Eye & Ocular Surface Testing
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            Comprehensive evaluation of tear film quality and meibomian gland health.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-eyecare-blue rounded-full flex items-center justify-center">
                                    <Droplets className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-eyecare-navy">Meibography</h3>
                            </div>
                            <p className="text-eyecare-light-navy mb-4">
                                Infrared imaging of the meibomian glands reveals gland structure and health.
                                This helps diagnose meibomian gland dysfunction (MGD), a leading cause of dry eye.
                            </p>
                            <ul className="space-y-2 text-eyecare-light-navy">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                                    Visualize gland dropout
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                                    Assess gland structure
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                                    Track treatment progress
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                                    Guide therapy decisions
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-eyecare-blue rounded-full flex items-center justify-center">
                                    <Sun className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-eyecare-navy">IPL Treatment</h3>
                            </div>
                            <p className="text-eyecare-light-navy mb-4">
                                Intense Pulsed Light (IPL) therapy treats meibomian gland dysfunction and
                                inflammatory dry eye by targeting abnormal blood vessels and reducing inflammation.
                            </p>
                            <ul className="space-y-2 text-eyecare-light-navy">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                                    FDA-approved for dry eye
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                                    Reduces inflammation
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                                    Improves gland function
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                                    Long-lasting relief
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Point of Care Testing Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">In-Office Testing</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-4">
                            Point-of-Care Diagnostics
                        </h2>
                        <p className="text-eyecare-light-navy max-w-2xl mx-auto">
                            Rapid in-office tests provide immediate answers for targeted treatment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <POCCard
                            icon={TestTube}
                            title="InflammaDry (MMP-9 Test)"
                            description="Detects elevated MMP-9 levels, a marker of ocular surface inflammation. Results in 10 minutes help determine if anti-inflammatory treatment is needed for dry eye."
                            result="Results in 10 minutes"
                        />
                        <POCCard
                            icon={TestTube}
                            title="AdenoPlus (Adenovirus Test)"
                            description="Identifies adenoviral conjunctivitis (pink eye) with high accuracy. Helps distinguish viral from bacterial infection for appropriate treatment."
                            result="Results in 10 minutes"
                        />
                    </div>

                    <div className="mt-12 bg-white p-8 rounded-2xl max-w-3xl mx-auto text-center">
                        <h3 className="text-xl font-bold text-eyecare-navy mb-4">Why Point-of-Care Testing Matters</h3>
                        <p className="text-eyecare-light-navy">
                            Traditional lab tests can take days. Our in-office diagnostics provide immediate results,
                            allowing us to start the right treatment during your visit. No waiting, no follow-up calls —
                            just accurate diagnosis and prompt care.
                        </p>
                    </div>
                </div>
            </section>

            {/* Neurolens Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="w-full md:w-1/2">
                                <span className="text-eyecare-blue font-semibold tracking-wider uppercase text-sm">Specialty Lenses</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mt-2 mb-6">
                                    Neurolens Technology
                                </h2>
                                <p className="text-eyecare-light-navy mb-6">
                                    Neurolens addresses eye misalignment that causes digital eye strain, headaches,
                                    and neck pain. Our advanced measurement system detects even small misalignments
                                    that traditional exams miss.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-3 text-eyecare-light-navy">
                                        <Zap className="w-5 h-5 text-eyecare-blue" />
                                        <span>Relieves headaches and eye strain</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-eyecare-light-navy">
                                        <Zap className="w-5 h-5 text-eyecare-blue" />
                                        <span>Reduces neck and shoulder tension</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-eyecare-light-navy">
                                        <Zap className="w-5 h-5 text-eyecare-blue" />
                                        <span>Improves comfort during screen time</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-eyecare-light-navy">
                                        <Zap className="w-5 h-5 text-eyecare-blue" />
                                        <span>Customized contoured prism design</span>
                                    </li>
                                </ul>
                                <Link
                                    href="/services/neurolens"
                                    className="text-eyecare-blue font-semibold hover:underline inline-flex items-center"
                                >
                                    Learn more about Neurolens
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="bg-eyecare-warm p-8 rounded-3xl">
                                    <h3 className="text-xl font-bold text-eyecare-navy mb-4">Do You Experience?</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-eyecare-light-navy">
                                            <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                                            Headaches at the end of the day
                                        </li>
                                        <li className="flex items-center gap-3 text-eyecare-light-navy">
                                            <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                                            Eye strain during computer work
                                        </li>
                                        <li className="flex items-center gap-3 text-eyecare-light-navy">
                                            <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                                            Neck or shoulder pain
                                        </li>
                                        <li className="flex items-center gap-3 text-eyecare-light-navy">
                                            <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                                            Difficulty focusing up close
                                        </li>
                                        <li className="flex items-center gap-3 text-eyecare-light-navy">
                                            <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                                            Discomfort when reading
                                        </li>
                                    </ul>
                                    <p className="mt-4 text-sm text-eyecare-navy font-medium">
                                        You may benefit from a Neurolens evaluation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-eyecare-blue text-white text-center">
                <div className="container mx-auto px-4">
                    <Scan className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                        Experience Comprehensive Eye Care
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Our advanced diagnostic technology allows for earlier detection and better treatment outcomes.
                        Schedule your comprehensive exam today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/book-appointment"
                            className="inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Schedule Diagnostic Exam
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

function TechCard({ icon: Icon, title, description, features, highlight = false }: {
    icon: any,
    title: string,
    description: string,
    features: string[],
    highlight?: boolean
}) {
    return (
        <div className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${highlight ? 'border-eyecare-blue bg-blue-50/50' : 'border-gray-100 bg-white'}`}>
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${highlight ? 'bg-eyecare-blue text-white' : 'bg-eyecare-warm text-eyecare-blue'}`}>
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-eyecare-navy mb-3">{title}</h3>
            <p className="text-eyecare-light-navy mb-4">{description}</p>
            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-eyecare-light-navy">
                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full"></span>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FunctionalCard({ icon: Icon, title, description, uses }: {
    icon: any,
    title: string,
    description: string,
    uses: string[]
}) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-eyecare-blue rounded-full flex items-center justify-center text-white mb-6">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-eyecare-navy mb-3">{title}</h3>
            <p className="text-eyecare-light-navy mb-4 text-sm">{description}</p>
            <ul className="space-y-2">
                {uses.map((use, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-eyecare-light-navy">
                        <span className="w-1.5 h-1.5 bg-eyecare-blue rounded-full"></span>
                        {use}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function POCCard({ icon: Icon, title, description, result }: {
    icon: any,
    title: string,
    description: string,
    result: string
}) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-eyecare-navy">{title}</h3>
                    <span className="text-sm text-green-600 font-medium">{result}</span>
                </div>
            </div>
            <p className="text-eyecare-light-navy">{description}</p>
        </div>
    );
}
