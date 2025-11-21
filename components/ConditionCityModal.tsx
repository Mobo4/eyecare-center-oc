'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { X, MapPin, Eye, ArrowRight } from 'lucide-react';
import { cities } from '@/data/cities';

interface Condition {
  slug: string;
  name: string;
  category: string;
  description: string;
  symptoms: string[];
  treatments: string[];
}

interface ConditionCityModalProps {
  condition: Condition | null;
  onClose: () => void;
}

export default function ConditionCityModal({ condition, onClose }: ConditionCityModalProps) {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');

  if (!condition) return null;

  // Get top cities by population
  const topCities = cities
    .sort((a, b) => parseInt(b.population.replace(/,/g, '')) - parseInt(a.population.replace(/,/g, '')))
    .slice(0, 12);

  const filteredCities = searchTerm
    ? cities.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.county.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : topCities;

  const handleCitySelect = (citySlug: string) => {
    router.push(`/conditions/${condition.slug}/${citySlug}`);
    onClose();
  };

  const handleLearnMore = () => {
    router.push(`/conditions/${condition.slug}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-eyecare-blue to-eyecare-dark-blue text-white p-6 rounded-t-xl">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <Eye className="w-8 h-8 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">{condition.name}</h2>
                <p className="text-eyecare-lighter-blue text-sm">{condition.category}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Quick Info */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-700 leading-relaxed">{condition.description}</p>
          </div>

          {/* Learn More CTA */}
          <button
            onClick={handleLearnMore}
            className="w-full mb-6 bg-gradient-to-r from-eyecare-purple to-eyecare-dark-purple text-white p-4 rounded-lg hover:shadow-lg transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="font-bold text-lg mb-1">Learn More About {condition.name}</div>
                <div className="text-eyecare-lighter-purple text-sm">
                  Symptoms, causes, treatment options, and FAQs
                </div>
              </div>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 font-semibold">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* City Selector */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-eyecare-blue" />
              <h3 className="text-xl font-bold text-gray-900">
                Find {condition.name} Treatment Near You
              </h3>
            </div>

            {/* City Search */}
            <input
              type="text"
              placeholder="Search cities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg mb-4 focus:border-eyecare-blue focus:outline-none"
            />

            {/* City Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-80 overflow-y-auto">
              {filteredCities.map((city) => (
                <button
                  key={city.slug}
                  onClick={() => handleCitySelect(city.slug)}
                  className="text-left p-4 border-2 border-gray-200 rounded-lg hover:border-eyecare-blue hover:bg-blue-50 transition-all group"
                >
                  <div className="font-semibold text-gray-900 group-hover:text-eyecare-blue">
                    {city.name}
                  </div>
                  <div className="text-sm text-gray-500">{city.county}</div>
                  <div className="text-xs text-gray-400 mt-1">{city.population}</div>
                </button>
              ))}
            </div>

            {filteredCities.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No cities found. Try a different search term.
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-sm text-gray-600">
              Don't see your city? We serve all of Orange County.{' '}
              <a href="tel:+17145581182" className="text-eyecare-blue font-semibold hover:underline">
                Call (714) 558-1182
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
