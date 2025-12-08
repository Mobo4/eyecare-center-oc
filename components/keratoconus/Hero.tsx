"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Calendar, ZoomIn } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/contact-info"; // Assuming this exists based on previous file review, otherwise I'll hardcode or pass props

interface HeroProps {
    imageSrc?: string;
    title: React.ReactNode;
    subtitle: string;
    phoneHref?: string;
    phoneDisplay?: string;
}

export default function Hero({
    imageSrc = "/images/keratoconus-main.webp",
    title,
    subtitle,
    phoneHref = "tel:+19495551234", // Default fallback if needed
    phoneDisplay = "(949) 555-1234"
}: HeroProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Toggle handler for mobile image expansion
    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <section className="w-full font-sans">
            {/* =================================================================
          MOBILE LAYOUT (< md)
          Structure: Stacked (Image Strip Top, Content Bottom)
          ================================================================= */}
            <div className="md:hidden flex flex-col w-full bg-black">
                {/* Image Strip Container */}
                <div
                    onClick={toggleExpand}
                    className={`
            relative w-full cursor-pointer overflow-hidden group
            transition-all duration-700 ease-out
            ${isExpanded ? "aspect-[16/9]" : "aspect-[21/9]"}
          `}
                >
                    <Image
                        src={imageSrc}
                        alt="Keratoconus Treatment"
                        fill
                        priority
                        className="object-cover object-[80%_35%]"
                        sizes="(max-width: 768px) 100vw, 100vw"
                    />

                    {/* Visual indicator for interactivity (only visible when collapsed) */}
                    <div
                        className={`
              absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm 
              p-2 rounded-full text-white/90 shadow-lg
              transition-opacity duration-300
              ${isExpanded ? "opacity-0" : "opacity-100"}
            `}
                    >
                        <ZoomIn className="w-4 h-4" />
                    </div>
                    {/* Gradient Overlay - Matches standard hero style */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent pointer-events-none" />
                </div>

                {/* Content Area - Light Gradient (Updated) */}
                <div className="w-full bg-gradient-to-b from-blue-50 to-white px-5 py-10 pb-16">
                    <div className="space-y-6">
                        {/* Title */}
                        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                            {title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {subtitle}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col gap-3 pt-4">
                            <a
                                href={phoneHref}
                                className="flex items-center justify-center w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md active:scale-95 duration-200"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                {phoneDisplay}
                            </a>
                            <Link
                                href="/book-appointment"
                                className="flex items-center justify-center w-full bg-white border-2 border-blue-100 text-blue-900 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors active:scale-95 duration-200"
                            >
                                <Calendar className="w-5 h-5 mr-2" />
                                Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* =================================================================
          DESKTOP LAYOUT (md+)
          Structure: Full-width Immersive Container with Overlay
          ================================================================= */}
            <div className="hidden md:block relative w-full h-[700px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={imageSrc}
                        alt="Keratoconus Treatment"
                        fill
                        priority
                        className="object-cover object-[80%_center]"
                        sizes="100vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
                    <div className="max-w-xl lg:max-w-2xl space-y-8 mt-12">

                        {/* Title */}
                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg tracking-tight">
                            {title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl text-gray-100 leading-relaxed drop-shadow-md max-w-lg">
                            {subtitle}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-row gap-4 pt-4">
                            <a
                                href={phoneHref}
                                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-xl"
                            >
                                <Phone className="w-5 h-5 mr-3" />
                                {phoneDisplay}
                            </a>
                            <Link
                                href="/book-appointment"
                                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 hover:-translate-y-0.5 transition-all"
                            >
                                <Calendar className="w-5 h-5 mr-3" />
                                Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
