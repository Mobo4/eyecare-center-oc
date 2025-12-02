'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Star, Phone, Calendar, ChevronDown, ArrowRight } from 'lucide-react';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// --- Animated Section Wrapper ---
export function AnimatedSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const [variant, setVariant] = useState("hidden");

    useEffect(() => {
        // Randomize animation on mount
        const variants = ["fadeUp", "slideLeft", "slideRight"];
        const random = variants[Math.floor(Math.random() * variants.length)];
        setVariant(random);
    }, []);

    const animations = {
        hidden: { opacity: 0, y: 20 },
        fadeUp: { opacity: 0, y: 50 },
        slideLeft: { opacity: 0, x: -50 },
        slideRight: { opacity: 0, x: 50 }
    };

    const finalAnimation = {
        hidden: animations[variant as keyof typeof animations] || animations.hidden,
        visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={finalAnimation}
            className={`min-h-screen w-full snap-start flex items-center justify-center ${className}`}
        >
            {children}
        </motion.section>
    );
}

// --- Hero Section ---
interface HeroProps {
    headline: string;
    subheadline: string;
    imageSrc: string;
    ctaText?: string;
    ctaLink?: string;
    benefits?: string[];
    phoneNumber?: string;
    phoneHref?: string;
}

export function LandingHero({
    headline,
    subheadline,
    imageSrc,
    ctaText = "Schedule Your Assessment",
    ctaLink = "/book-appointment",
    benefits = [],
    phoneNumber = '(949) 364-0008',
    phoneHref = 'tel:+19493640008'
}: HeroProps) {
    return (
        <section className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 to-white overflow-hidden flex items-center snap-start">
            <div className="container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-eyecare-blue px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-eyecare-blue"></span>
                            </span>
                            Accepting New Patients
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-eyecare-navy mb-6 leading-tight">
                            {headline}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {subheadline}
                        </p>

                        {benefits.length > 0 && (
                            <ul className="space-y-3 mb-8">
                                {benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href={ctaLink}
                                className="inline-flex items-center justify-center bg-eyecare-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-eyecare-dark-blue hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                {ctaText}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <a
                                href={phoneHref}
                                className="inline-flex items-center justify-center bg-white text-eyecare-navy border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-eyecare-blue hover:text-eyecare-blue transition-all"
                            >
                                <Phone className="mr-2 w-5 h-5" />
                                {phoneNumber}
                            </a>
                        </div>

                        <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                                        <span className="text-xs">User</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <span>Trusted by 10,000+ Patients</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-eyecare-blue/5 rounded-[2rem] transform rotate-3 scale-105"></div>
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white w-full max-h-[80vh]">
                            <Image
                                src={imageSrc}
                                alt="Treatment result"
                                width={800}
                                height={1000}
                                className="w-full h-full object-cover"
                                priority
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-eyecare-navy">Proven Results</p>
                                        <p className="text-xs text-gray-500">FDA-Approved Technology</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Benefits Grid ---
interface BenefitItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export function BenefitsSection({ title, benefits }: { title: string, benefits: BenefitItem[] }) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy mb-4">{title}</h2>
                    <div className="w-20 h-1 bg-eyecare-blue mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((item, idx) => {
                        return (
                            <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-eyecare-blue/30 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-eyecare-blue mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// --- Social Proof / Stats ---
export function SocialProof() {
    return (
        <section className="py-12 bg-eyecare-navy text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    <div>
                        <div className="text-4xl font-bold text-eyecare-blue mb-1">35+</div>
                        <div className="text-sm text-white/70 uppercase tracking-wider">Years Experience</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-eyecare-blue mb-1">10k+</div>
                        <div className="text-sm text-white/70 uppercase tracking-wider">Patients Treated</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-eyecare-blue mb-1">4.9</div>
                        <div className="text-sm text-white/70 uppercase tracking-wider">Star Rating</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-eyecare-blue mb-1">#1</div>
                        <div className="text-sm text-white/70 uppercase tracking-wider">Technology</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Testimonial ---
export function Testimonials({ quote, author, role }: { quote: string, author: string, role?: string }) {
    return (
        <section className="py-20 bg-blue-50">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <div className="flex justify-center mb-8">
                    <div className="flex text-yellow-400 gap-1">
                        {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                    </div>
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium text-eyecare-navy leading-relaxed mb-8">
                    "{quote}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-eyecare-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {author.charAt(0)}
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-eyecare-navy">{author}</div>
                        {role && <div className="text-sm text-gray-500">{role}</div>}
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- FAQ Accordion ---
export function FAQSection({ items }: { items: { question: string, answer: string }[] }) {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-eyecare-navy mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {items.map((item, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-eyecare-navy text-lg">{item.question}</span>
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white border-t border-gray-100">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Sticky Mobile CTA ---
export function StickyCTA({
    phoneNumber = '(949) 364-0008',
    phoneHref = 'tel:+19493640008'
}: {
    phoneNumber?: string,
    phoneHref?: string
}) {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <a
                href={phoneHref}
                className="flex-1 flex items-center justify-center bg-white border-2 border-eyecare-blue text-eyecare-blue py-3 rounded-lg font-bold"
            >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
            </a>
            <Link
                href="/book-appointment"
                className="flex-1 flex items-center justify-center bg-eyecare-blue text-white py-3 rounded-lg font-bold"
            >
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
            </Link>
        </div>
    );
}
