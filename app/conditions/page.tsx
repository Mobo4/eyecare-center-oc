/**
 * FILE: app/conditions/page.tsx
 * PURPOSE: Eye conditions page with featured cards and autosuggest search
 * UPDATED: 2025-11-21
 */

"use client";

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConditionCityModal from '@/components/ConditionCityModal';
import { ConditionAutosuggest } from '@/components/conditions';
import ServiceHero from '@/components/services/ServiceHero';
import { conditions, allConditions, ConditionSeverity, Condition } from '@/data/conditions';
import { SearchCondition, searchConditions } from '@/data/conditions-search';
import { Eye, AlertTriangle, Sparkles, ChevronRight, Search } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/schema';
import Script from 'next/script';
import { CONTACT_INFO } from '@/lib/contact-info';

const severityStyles: { [key in ConditionSeverity]: string } = {
  Mild: "bg-green-100 text-green-800 border-green-200",
  Moderate: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Serious: "bg-orange-100 text-orange-800 border-orange-200",
  Emergency: "bg-red-100 text-red-800 border-red-200 animate-pulse",
};

// Featured conditions for cards - common conditions patients search for
const featuredConditionSlugs = [
  'myopia',
  'hyperopia',
  'astigmatism',
  'presbyopia',
  'keratoconus',
  'dry-eye-syndrome',
  'cataracts',
  'glaucoma',
];

// Helper to create a Condition object from SearchCondition for modal display
const createConditionFromSearch = (search: SearchCondition): Condition => ({
  name: search.name,
  slug: search.slug,
  category: search.category,
  severity: 'Moderate' as ConditionSeverity,
  description: `${search.name} is an eye condition that our specialists diagnose and treat. Schedule a consultation to learn more about your treatment options.`,
  symptoms: search.aliases?.map(a => `Also known as: ${a}`) || ['Contact us for detailed symptom information'],
  treatments: ['Comprehensive evaluation', 'Personalized treatment plan', 'Expert care from our specialists'],
  seoTitle: `${search.name} Treatment | Orange County`,
  seoDescription: `Expert ${search.name} treatment in Orange County. Contact our specialists for diagnosis and care.`,
  keywords: search.aliases || [],
});

// Helper to find a matching Condition from conditions-full.ts or create one from search
const findOrCreateCondition = (searchCondition: SearchCondition): Condition => {
  // Try exact slug match first
  let fullCondition = conditions.find(c => c.slug === searchCondition.slug);
  if (fullCondition) return fullCondition;

  // Try name match (case insensitive)
  fullCondition = conditions.find(c =>
    c.name.toLowerCase() === searchCondition.name.toLowerCase() ||
    c.name.toLowerCase().includes(searchCondition.name.toLowerCase()) ||
    searchCondition.name.toLowerCase().includes(c.name.toLowerCase())
  );
  if (fullCondition) return fullCondition;

  // Create a condition object from search data for modal display
  return createConditionFromSearch(searchCondition);
};

export default function ConditionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  const [selectedSearchCondition, setSelectedSearchCondition] = useState<SearchCondition | null>(null);

  // Get featured conditions from our search data
  const featuredConditions = useMemo(() => {
    // Sort by the order in featuredConditionSlugs
    return allConditions
      .filter(c => featuredConditionSlugs.includes(c.slug))
      .sort((a, b) => {
        return featuredConditionSlugs.indexOf(a.slug) - featuredConditionSlugs.indexOf(b.slug);
      });
  }, []);

  // Filter conditions based on search
  const filteredConditions = useMemo(() => {
    if (!searchTerm) {
      return conditions;
    }
    const searchResults = searchConditions(searchTerm);
    if (searchResults.length > 0) {
      // Get condition slugs from search results
      const matchingSlugs = searchResults.map(r => r.slug);
      // Return matching conditions from full list, or show all if search matches categories
      const matched = conditions.filter(condition =>
        matchingSlugs.includes(condition.slug) ||
        condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        condition.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase())) ||
        condition.keywords?.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      return matched.length > 0 ? matched : conditions.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return conditions.filter(condition =>
      condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      condition.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase())) ||
      condition.keywords?.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const groupedConditions = useMemo(() => {
    const grouped: { [key: string]: typeof conditions } = {};
    filteredConditions.forEach((condition) => {
      if (!grouped[condition.category]) {
        grouped[condition.category] = [];
      }
      grouped[condition.category].push(condition);
    });
    return grouped;
  }, [filteredConditions]);

  const categories = Object.keys(groupedConditions).sort();

  const handleSearch = useCallback((query: string) => {
    setSearchTerm(query);
  }, []);

  const handleSelectSearchCondition = useCallback((condition: SearchCondition) => {
    setSelectedSearchCondition(condition);
    // Find matching condition in full list or create one from search data
    const fullCondition = findOrCreateCondition(condition);
    setSelectedCondition(fullCondition);
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://eyecarecenteroc.com' },
    { name: 'Conditions', url: 'https://eyecarecenteroc.com/conditions' },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        {/* Hero Section */}
        <ServiceHero
          imageSrc="/images/main.webp"
          title={
            <>
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-8 h-8 text-eyecare-blue md:text-white" />
                <span className="text-lg font-semibold text-eyecare-blue md:text-white">Comprehensive Eye Care</span>
              </div>
              Eye Conditions We Treat
            </>
          }
          subtitle="Expert diagnosis and treatment for over 300 eye conditions. Our board-certified specialists use the latest technology and proven treatments to preserve and enhance your vision."
        >
          {/* Autosuggest Search - Enhanced Visibility */}
          <div className="max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl p-2 border-2 border-eyecare-blue/20">
              <ConditionAutosuggest
                onSearch={handleSearch}
                onSelect={handleSelectSearchCondition}
                placeholder="Search conditions (e.g., dry eye, keratoconus, glaucoma...)"
                className="search-enhanced"
              />
            </div>
            <p className="mt-3 text-sm text-gray-500 md:text-white/80 flex items-center gap-2">
              <Search className="w-4 h-4" />
              Search over 300+ eye conditions with spelling assistance
            </p>
          </div>
        </ServiceHero>

        {/* Featured Conditions Cards */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-6 h-6 text-eyecare-blue" />
              <h2 className="text-2xl font-bold text-gray-900">Common Conditions</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredConditions.map((condition) => {
                return (
                  <button
                    key={condition.slug}
                    onClick={() => {
                      // Use helper to find or create full condition for modal
                      const fullCondition = findOrCreateCondition(condition);
                      setSelectedCondition(fullCondition);
                    }}
                    className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-eyecare-blue overflow-hidden text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-eyecare-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-eyecare-blue transition-colors">
                          {condition.name}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-eyecare-blue group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        {condition.category}
                      </p>
                      {condition.aliases && condition.aliases.length > 0 && (
                        <p className="text-xs text-gray-400">
                          Also known as: {condition.aliases.slice(0, 2).join(', ')}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>


        {/* Conditions by Category */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    This information is for educational purposes only and is not a substitute for professional medical advice. Please see our{' '}
                    <Link href="/medical-disclaimer" className="font-medium underline hover:text-yellow-800">
                      Medical Disclaimer
                    </Link>
                    . If you have an emergency, please call 911.
                  </p>
                </div>
              </div>
            </div>

            {searchTerm && (
              <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border">
                <p className="text-gray-600">
                  Showing results for "<span className="font-semibold text-eyecare-blue">{searchTerm}</span>"
                  - {filteredConditions.length} conditions found
                </p>
              </div>
            )}

            {categories.length > 0 ? categories.map((category) => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-eyecare-blue">
                  {category}
                  <span className="text-sm font-normal text-gray-500 ml-3">
                    ({groupedConditions[category].length} conditions)
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedConditions[category].map((condition) => (
                    <button
                      key={condition.slug}
                      onClick={() => setSelectedCondition(condition)}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all group flex flex-col text-left w-full"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-eyecare-blue transition">
                          {condition.name}
                        </h3>
                        <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${severityStyles[condition.severity || 'Moderate']}`}>
                          {condition.severity || 'Moderate'}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {condition.description}
                      </p>
                      <div className="text-eyecare-blue font-semibold group-hover:translate-x-2 transition-transform inline-block mt-auto">
                        Learn More →
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Results Found</h3>
                <p className="text-gray-500 mb-4">
                  We couldn't find any conditions matching your search for "{searchTerm}".
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-eyecare-blue font-semibold hover:underline"
                >
                  Clear search and show all conditions
                </button>
              </div>
            )}

            {/* Expanding Notice */}
            <div className="mt-12 text-center bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">
                Can&apos;t Find Your Condition?
              </h3>
              <p className="text-lg mb-6 text-white/90">
                We treat over {allConditions.length} eye conditions. Contact us to discuss your specific needs with our specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CONTACT_INFO.primaryPhone.href}
                  className="callrail-phone inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  Call Us
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-eyecare-blue transition-all"
                >
                  Send Message
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Treatment?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule your comprehensive eye exam with our specialists today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CONTACT_INFO.primaryPhone.href}
                className="callrail-phone inline-flex items-center justify-center bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all"
              >
                Call {CONTACT_INFO.primaryPhone.display}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-eyecare-blue border-2 border-eyecare-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-eyecare-blue hover:text-white transition-all"
              >
                Book Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Condition City Modal */}
      <ConditionCityModal
        condition={selectedCondition}
        onClose={() => {
          setSelectedCondition(null);
          setSelectedSearchCondition(null);
        }}
      />
    </>
  );
}
