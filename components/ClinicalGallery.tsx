'use client';

/**
 * ClinicalGallery Component
 * Displays clinical atlas images in a responsive carousel/gallery with lightbox
 * Optimized for SEO with ImageObject schema and accessibility
 */

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn, Info } from 'lucide-react';
import type { ClinicalImage } from '@/lib/schema/types';

interface ClinicalGalleryProps {
    images: ClinicalImage[];
    conditionName: string;
    className?: string;
}

export default function ClinicalGallery({ images, conditionName, className = '' }: ClinicalGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showInfo, setShowInfo] = useState(false);

    const openLightbox = useCallback((index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
        setShowInfo(false);
        document.body.style.overflow = '';
    }, []);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
    }, [closeLightbox, goToPrevious, goToNext]);

    if (!images || images.length === 0) return null;

    const currentImage = images[currentIndex];

    return (
        <>
            {/* Gallery Section */}
            <section className={`clinical-gallery ${className}`} aria-label={`Clinical images of ${conditionName}`}>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Clinical Images
                    </h2>
                    <p className="text-gray-600">
                        High-resolution clinical photographs showing various presentations of {conditionName.toLowerCase()}.
                    </p>
                </div>

                {/* Thumbnail Grid / Carousel */}
                <div className="relative">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                        {images.slice(0, 10).map((image, index) => (
                            <button
                                key={image.filename}
                                onClick={() => openLightbox(index)}
                                className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                aria-label={`View ${image.title}`}
                            >
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <p className="text-white text-xs font-medium line-clamp-2">
                                            {image.title}
                                        </p>
                                    </div>
                                    <div className="absolute top-2 right-2">
                                        <ZoomIn className="w-5 h-5 text-white/90" />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Show More Button */}
                    {images.length > 10 && (
                        <div className="mt-4 text-center">
                            <button
                                onClick={() => openLightbox(0)}
                                className="inline-flex items-center px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors"
                            >
                                View All {images.length} Images
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Viewing ${currentImage.title}`}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Close lightbox"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Info Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); setShowInfo(!showInfo); }}
                        className="absolute top-4 right-16 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Toggle image information"
                    >
                        <Info className="w-6 h-6" />
                    </button>

                    {/* Navigation - Previous */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                        className="absolute left-2 md:left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    {/* Main Image */}
                    <div
                        className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={currentImage.url}
                            alt={currentImage.alt}
                            fill
                            sizes="90vw"
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Navigation - Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); goToNext(); }}
                        className="absolute right-2 md:right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Image Info Panel */}
                    <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 transition-transform duration-300 ${showInfo ? 'translate-y-0' : 'translate-y-full md:translate-y-0'}`}>
                        <div className="max-w-3xl mx-auto">
                            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-2">
                                {currentImage.category}
                            </span>
                            <h3 className="text-white text-xl font-bold mb-2">
                                {currentImage.title}
                            </h3>
                            <p className="text-gray-300 text-sm mb-3">
                                {currentImage.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400 text-sm">
                                    Image {currentIndex + 1} of {images.length}
                                </span>
                                <div className="flex gap-1">
                                    {images.slice(0, 8).map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-blue-500' : 'bg-white/30 hover:bg-white/50'}`}
                                            aria-label={`Go to image ${idx + 1}`}
                                        />
                                    ))}
                                    {images.length > 8 && (
                                        <span className="text-white/50 text-xs ml-1">+{images.length - 8}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Strip (Desktop) */}
                    <div className="hidden md:flex absolute bottom-24 left-1/2 -translate-x-1/2 gap-2 p-2 bg-black/50 rounded-xl backdrop-blur-sm max-w-[80vw] overflow-x-auto">
                        {images.slice(0, 12).map((image, idx) => (
                            <button
                                key={image.filename}
                                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                                className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all ${idx === currentIndex ? 'ring-2 ring-blue-500 scale-110' : 'opacity-60 hover:opacity-100'}`}
                            >
                                <Image
                                    src={image.url}
                                    alt={`Thumbnail of ${image.title}`}
                                    fill
                                    sizes="64px"
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
