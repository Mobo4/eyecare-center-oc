"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConditionCityModal from '@/components/ConditionCityModal';
import { conditions, ConditionSeverity } from '@/data/conditions-full';
import { Search, Eye, AlertTriangle } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/schema';
import Script from 'next/script';
import { CONTACT_INFO } from '@/lib/contact-info';


const severityStyles: { [key in ConditionSeverity]: string } = {
  Mild: "bg-green-100 text-green-800 border-green-200",
  Moderate: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Serious: "bg-orange-100 text-orange-800 border-orange-200",
  Emergency: "bg-red-100 text-red-800 border-red-200 animate-pulse",
};

export default function ConditionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCondition, setSelectedCondition] = useState<typeof conditions[0] | null>(null);

  const filteredConditions = useMemo(() => {
    if (!searchTerm) {
      return conditions;
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
        <section className="bg-gradient-to-br from-blue-50 via-eyecare-lighter-blue/20 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-8 h-8 text-eyecare-blue" />
                <span className="text-lg font-semibold text-eyecare-blue">Comprehensive Care</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Eye Conditions We Treat
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Expert diagnosis and treatment for over 191 eye conditions. Our board-certified specialists use the latest technology and proven treatments to preserve and enhance your vision.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={CONTACT_INFO.primaryPhone.href}
                  className="callrail-phone inline-flex items-center justify-center bg-eyecare-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-eyecare-dark-blue transition-all"
                >
                  Call {CONTACT_INFO.primaryPhone.display}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-eyecare-blue border-2 border-eyecare-blue px-6 py-3 rounded-lg font-semibold hover:bg-eyecare-blue hover:text-white transition-all"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white border-b sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by condition, symptom, or keyword..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eyecare-blue focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
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

            {categories.length > 0 ? categories.map((category) => (
              <div key={category} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-eyecare-blue">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedConditions[category].map((condition) => (
                    <button
                      key={condition.slug}
                      onClick={() => setSelectedCondition(condition)}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-2xl transition-all group flex flex-col text-left w-full"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-eyecare-blue transition">
                          {condition.name}
                        </h3>
                         <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${severityStyles[condition.severity]}`}>
                          {condition.severity}
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
                <p className="text-gray-500">
                  We couldn't find any conditions matching your search for "{searchTerm}". Please try another search.
                </p>
              </div>
            )}
            
            {/* Expanding Notice */}
            <div className="mt-12 text-center bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">
                Can't Find Your Condition?
              </h3>
              <p className="text-lg mb-6 text-white/90">
                We treat over 191 eye conditions. Our database is constantly expanding. Contact us to discuss your specific needs.
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
        onClose={() => setSelectedCondition(null)}
      />
    </>
  );
}
