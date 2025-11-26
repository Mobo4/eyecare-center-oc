import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCityBySlug, cities } from '@/data/cities';
import { medicalInsurances, visionInsurances } from '@/data/insurances';
import { Phone, Calendar, CheckCircle, Shield, Eye } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return cities.map((city) => ({
        slug: city.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const city = getCityBySlug(slug);

    if (!city) {
        return {
            title: 'City Not Found',
        };
    }

    return {
        title: `Eye Insurance Accepted in ${city.name} | VSP, Medicare, EyeMed`,
        description: `EyeCare Center of Orange County in ${city.name} accepts most major vision and medical insurance plans including VSP, Medicare, EyeMed, Blue Shield, and more.`,
        openGraph: {
            title: `Eye Insurance Accepted in ${city.name} | VSP, Medicare, EyeMed`,
            description: `We accept most major vision and medical insurance plans at our ${city.name} area eye care center. Verify your coverage today.`,
            type: 'website',
        },
    };
}

export default async function CityInsurancePage({ params }: Props) {
    const { slug } = await params;
    const city = getCityBySlug(slug);

    if (!city) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                Insurances Accepted in {city.name}
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                We believe quality eye care should be accessible. That's why we accept a wide range of medical and vision insurance plans for our patients in {city.name} and surrounding areas.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={CONTACT_INFO.primaryPhone.href}
                                    className="inline-flex items-center justify-center bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    Verify Coverage
                                </a>
                                <Link
                                    href="/book-appointment"
                                    className="inline-flex items-center justify-center bg-blue-600 text-white border border-blue-500 px-6 py-3 rounded-lg font-bold hover:bg-blue-500 transition-colors"
                                >
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Book Appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Insurance Content */}
                <section className="py-12 md:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                            {/* Main Content Column */}
                            <div className="lg:col-span-2 space-y-12">

                                {/* Vision Insurance Section */}
                                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                                            <Eye className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Vision Insurance Plans</h2>
                                    </div>
                                    <p className="text-gray-600 mb-8">
                                        Vision insurance typically covers routine eye exams, glasses, and contact lenses. We are in-network providers for major vision plans serving {city.name}.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {visionInsurances.map((insurance) => (
                                            <div key={insurance.id} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-gray-50/50">
                                                <div className="flex-shrink-0">
                                                    <img src={insurance.logo} alt={insurance.name} className="w-16 h-auto object-contain" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-gray-900 mb-1">{insurance.name}</h3>
                                                    {insurance.description && (
                                                        <p className="text-sm text-gray-500">{insurance.description}</p>
                                                    )}
                                                    <div className="mt-2 flex items-center text-green-600 text-sm font-medium">
                                                        <CheckCircle className="w-4 h-4 mr-1.5" />
                                                        Accepted
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Medical Insurance Section */}
                                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-green-100 rounded-lg text-green-600">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Medical Insurance Plans</h2>
                                    </div>
                                    <p className="text-gray-600 mb-8">
                                        Medical insurance is used for diagnosing and treating eye conditions such as dry eye, glaucoma, cataracts, and eye infections.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {medicalInsurances.map((insurance) => (
                                            <div key={insurance.id} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all bg-gray-50/50">
                                                <div className="flex-shrink-0">
                                                    <img src={insurance.logo} alt={insurance.name} className="w-16 h-auto object-contain" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-gray-900 mb-1">{insurance.name}</h3>
                                                    {insurance.description && (
                                                        <p className="text-sm text-gray-500">{insurance.description}</p>
                                                    )}
                                                    <div className="mt-2 flex items-center text-green-600 text-sm font-medium">
                                                        <CheckCircle className="w-4 h-4 mr-1.5" />
                                                        Accepted
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-2">What's the difference between vision and medical insurance?</h3>
                                            <p className="text-gray-600">Vision insurance generally covers routine eye exams and materials (glasses/contacts). Medical insurance covers the diagnosis and treatment of eye diseases and medical conditions.</p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-2">Do you accept plans not listed here?</h3>
                                            <p className="text-gray-600">We accept many other plans. Please call our office at {CONTACT_INFO.primaryPhone.display} to verify your specific coverage.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1 space-y-6">
                                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 sticky top-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us in {city.name}</h3>
                                    <p className="text-gray-600 mb-6">
                                        Dr. Alexander Bonakdar provides expert eye care for patients in {city.name} and throughout Orange County.
                                    </p>

                                    <div className="space-y-4">
                                        <a
                                            href={CONTACT_INFO.primaryPhone.href}
                                            className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                                        >
                                            <Phone className="w-5 h-5 mr-2" />
                                            Call to Verify
                                        </a>
                                        <Link
                                            href="/book-appointment"
                                            className="flex items-center justify-center w-full bg-white text-blue-600 border-2 border-blue-600 px-4 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                                        >
                                            <Calendar className="w-5 h-5 mr-2" />
                                            Book Online
                                        </Link>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <h4 className="font-bold text-gray-900 mb-2">Office Hours</h4>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex justify-between"><span>Monday</span> <span>9:00 AM - 5:00 PM</span></li>
                                            <li className="flex justify-between"><span>Tuesday</span> <span>9:00 AM - 5:00 PM</span></li>
                                            <li className="flex justify-between"><span>Wednesday</span> <span>9:00 AM - 5:00 PM</span></li>
                                            <li className="flex justify-between"><span>Thursday</span> <span>9:00 AM - 5:00 PM</span></li>
                                            <li className="flex justify-between"><span>Friday</span> <span>9:00 AM - 5:00 PM</span></li>
                                            <li className="flex justify-between text-gray-400"><span>Weekend</span> <span>Closed</span></li>
                                        </ul>
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
