'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, X, ZoomIn } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  priority?: boolean;
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaText,
  ctaLink,
  priority = false,
}: HeroProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        {/* Mobile Layout: Split View (Image Top, Content Bottom) */}
        <div className="md:hidden flex flex-col">
          {/* Mobile Image Container */}
          <div
            className="relative w-full aspect-[4/3] cursor-zoom-in group"
            onClick={() => setIsLightboxOpen(true)}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={priority}
            />
            {/* Zoom Indicator Hint */}
            <div className="absolute bottom-2 right-2 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile Content */}
          <div className="px-6 py-10 bg-white">
            <h1 className="text-3xl font-serif font-bold text-eyecare-navy leading-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-eyecare-light-navy leading-relaxed mb-8">
                {subtitle}
              </p>
            )}
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-eyecare-blue text-white text-lg font-bold rounded-full hover:bg-eyecare-dark-blue transition-colors shadow-lg"
              >
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            )}
          </div>
        </div>

        {/* Desktop Layout: Full Overlay */}
        <div className="hidden md:block relative h-[600px] lg:h-[700px] w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={priority}
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-xl lg:text-2xl text-gray-100 mb-10 leading-relaxed drop-shadow-md max-w-xl">
                    {subtitle}
                  </p>
                )}
                {ctaText && ctaLink && (
                  <Link
                    href={ctaLink}
                    className="inline-flex items-center px-10 py-5 bg-eyecare-blue hover:bg-white hover:text-eyecare-blue text-white text-xl font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    {ctaText}
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Overlay (Mobile Only) */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="absolute top-4 right-4 z-[101] text-white p-2">
            <X className="w-8 h-8" />
          </div>
          <div className="relative w-full h-full p-2">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  );
}
