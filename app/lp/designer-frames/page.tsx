import React from 'react';
import { Metadata } from 'next';
import LandingPageLayout from '@/components/landing/LandingPageLayout';
import {
    LandingHero,
    SocialProof,
    BenefitsSection,
    Testimonials,
    FAQSection,
    StickyCTA,
    AnimatedSection
} from '@/components/landing/LandingComponents';
import { Eye, Sparkles, Gem, Award, Clock, Star } from 'lucide-react';
import { SERVICE_AREAS } from '@/lib/schema';

export const metadata: Metadata = {
    title: 'Designer Frames & Eye Exams',
    description: 'Expert eye care meets luxury eyewear. Comprehensive exams and personalized frame styling in one visit. Serving Santa Ana, Irvine, and Newport Beach.',
};

export default function DesignerFramesLandingPage() {
    return (
        <LandingPageLayout>
            {/* Hero Section  */}
            <LandingHero
                headline="See Better. Look Stunning."
                subheadline="Experience the perfect blend of fashion and precision eye care. Discover our curated collection of designer frames and get a comprehensive eye exam—all in one personalized visit."
                imageSrc="/images/Eyewear_designer02.avif"
                ctaText="Book My Eye Exam & Styling"
                benefits={[
                    "Curated designer frame collection",
                    "Precision eye exams",
                    "Personalized styling consultation",
                    "One-stop convenience"
                ]}
            />

            <AnimatedSection className="bg-eyecare-navy">
                <SocialProof />
            </AnimatedSection>

            {/* Problem/Agitation Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy mb-6">
                            Is Your Prescription Outdated? Are Your Glasses Hiding Your Style?
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            Many people settle for glasses that don't fit their face or personality, or they struggle with blurry vision from an old prescription. Your eyewear is the first thing people notice—it should make a statement, not an apology.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: <Eye className="w-6 h-6" />, text: "Outdated prescription causing strain" },
                            { icon: <Sparkles className="w-6 h-6" />, text: "Generic frames that don't suit you" },
                            { icon: <Award className="w-6 h-6" />, text: "Uncomfortable fit causing headaches" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center gap-3">
                                <div className="w-12 h-12 bg-eyecare-blue/10 rounded-full flex items-center justify-center text-eyecare-blue">
                                    {item.icon}
                                </div>
                                <span className="font-medium text-eyecare-navy">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img
                                src="/images/recommendations_eyewear_different_face_shapes.avif"
                                alt="Eyewear Face Shape Guide for Designer Frames"
                                className="rounded-2xl shadow-xl w-full"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-eyecare-blue font-bold tracking-wider uppercase text-sm mb-2 block">The Perfect Pair</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy mb-6">
                                Expert Eye Care Meets Luxury Eyewear
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We combine medical-grade eye exams with a boutique optical experience. Dr. Bonakdar ensures your vision is crystal clear, while our expert opticians act as your personal stylists to find the perfect frames for your face shape and lifestyle.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-eyecare-blue shadow-sm shrink-0">
                                        <Gem className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">Curated Collection</h4>
                                        <p className="text-sm text-gray-600">Hand-picked frames from top designers that complement your unique features.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-eyecare-blue shadow-sm shrink-0">
                                        <Eye className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">Precision Optics</h4>
                                        <p className="text-sm text-gray-600">The latest lens technology for high-definition vision and ultimate clarity.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-eyecare-blue shadow-sm shrink-0">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">Personalized Fit</h4>
                                        <p className="text-sm text-gray-600">No more slipping, pinching, or headaches—just perfect comfort all day long.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AnimatedSection>
                <BenefitsSection
                    title="The Designer Difference"
                    benefits={[
                        {
                            title: "Curated Collection",
                            description: "We hand-select frames from the world's top designers, ensuring quality, style, and durability.",
                            icon: <Gem className="w-8 h-8" />
                        },
                        {
                            title: "Precision Optics",
                            description: "Our lenses are crafted with the latest digital technology for the sharpest possible vision.",
                            icon: <Eye className="w-8 h-8" />
                        },
                        {
                            title: "Personal Styling",
                            description: "Our opticians are trained stylists who help you find the perfect frame for your face shape.",
                            icon: <Sparkles className="w-8 h-8" />
                        },
                        {
                            title: "Exclusive Brands",
                            description: "Access limited-edition collections and brands you won't find at chain stores.",
                            icon: <Award className="w-8 h-8" />
                        },
                        {
                            title: "Fast Turnaround",
                            description: "Our on-site lab allows us to craft many prescriptions same-day or next-day.",
                            icon: <Clock className="w-8 h-8" />
                        },
                        {
                            title: "Satisfaction Guaranteed",
                            description: "We stand behind our products. If you don't love your glasses, we'll make it right.",
                            icon: <Star className="w-8 h-8" />
                        }
                    ]}
                />
            </AnimatedSection>

            <AnimatedSection className="bg-blue-50">
                <Testimonials
                    quote="I've never had so many compliments on my glasses! The staff really took the time to help me find a pair that fits my style perfectly."
                    author="Jennifer L."
                    role="Fashion Enthusiast"
                />
            </AnimatedSection>

            {/* How It Works */}
            <AnimatedSection className="bg-gray-50">
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy text-center mb-12">
                                How It Works
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    { step: "1", title: "Book Your Exam", desc: "Reserve your time with Dr. Bonakdar for a comprehensive eye health check." },
                                    { step: "2", title: "Get Styled", desc: "Our opticians curate a selection of frames perfectly suited to your face and style." },
                                    { step: "3", title: "See the World", desc: "Pick up your custom glasses and enjoy high-definition vision in frames you love." }
                                ].map((item, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="w-16 h-16 bg-eyecare-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-bold text-eyecare-navy mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            {/* FAQ */}
            <AnimatedSection>
                <FAQSection
                    items={[
                        {
                            question: "Do you accept my insurance?",
                            answer: "We accept most major vision plans, including VSP and EyeMed. We'll help you maximize your benefits and verify coverage before your appointment."
                        },
                        {
                            question: "Can I bring my own prescription?",
                            answer: "Absolutely! If you have a valid prescription, you can book a styling appointment directly. Our opticians will help you find the perfect frames."
                        },
                        {
                            question: "How long does it take to get my glasses?",
                            answer: "Most single-vision prescriptions are ready within 7-10 days. We prioritize quality to ensure your lenses are perfect."
                        },
                        {
                            question: "What brands do you carry?",
                            answer: "We carry a curated selection of premium and designer brands. Visit us to see our full collection and find frames that match your style."
                        },
                        {
                            question: "Can you adjust frames I bought elsewhere?",
                            answer: "Yes! We're happy to adjust and repair frames purchased from other providers. Stop by during business hours for quick adjustments."
                        }
                    ]}
                />
            </AnimatedSection>

            {/* Service Area / Local SEO Section */}
            <section className="py-12 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-xl font-bold text-eyecare-navy mb-4">
                        Designer Eyewear in Orange County
                    </h3>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Conveniently located in Santa Ana, we serve fashion-conscious patients from across Orange County, including
                        <span className="font-semibold text-eyecare-blue"> Irvine, Newport Beach, Tustin, Costa Mesa, Orange, Huntington Beach, and Mission Viejo</span>.
                    </p>
                </div>
            </section>

            {/* Local Business & Product Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Designer Eyewear & Prescription Glasses",
                        "description": "Curated collection of designer frames with precision eye exams and personalized styling.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Optometric Eyecare Center of Orange County"
                        },
                        "offers": {
                            "@type": "Offer",
                            "availability": "https://schema.org/InStock",
                            "priceCurrency": "USD"
                        },
                        "provider": {
                            "@type": "MedicalClinic",
                            "name": "Optometric Eyecare Center of Orange County",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "801 N Tustin Ave # 404",
                                "addressLocality": "Santa Ana",
                                "addressRegion": "CA",
                                "postalCode": "92705",
                                "addressCountry": "US"
                            },
                            "telephone": "+1-714-558-1182",
                            "areaServed": SERVICE_AREAS
                        }
                    })
                }}
            />

            <StickyCTA />
        </LandingPageLayout>
    );
}
