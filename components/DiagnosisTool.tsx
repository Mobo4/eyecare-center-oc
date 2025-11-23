'use client';

import React, { useState, useMemo } from 'react';
import { Search, Activity, AlertCircle, ArrowRight, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { allConditions } from '@/data/conditions-search';

export default function DiagnosisTool() {
    const [query, setQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'symptoms' | 'conditions'>('symptoms');

    const filteredResults = useMemo(() => {
        if (!query) return [];

        const lowerQuery = query.toLowerCase();

        return allConditions.filter(condition => {
            if (activeTab === 'conditions') {
                return condition.name.toLowerCase().includes(lowerQuery);
            } else {
                // Search in symptoms
                return condition.symptoms?.some(symptom =>
                    symptom.toLowerCase().includes(lowerQuery)
                );
            }
        }).slice(0, 5); // Limit to 5 results for the dropdown feel
    }, [query, activeTab]);

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-eyecare-blue/10 overflow-hidden">
            <div className="bg-eyecare-blue p-6 text-white text-center">
                <h3 className="text-2xl font-serif font-bold mb-2">Symptom & Condition Checker</h3>
                <p className="text-eyecare-lighter-blue">Search by what you're feeling or a specific diagnosis</p>
            </div>

            <div className="p-6">
                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b border-gray-100">
                    <button
                        onClick={() => setActiveTab('symptoms')}
                        className={`pb-3 px-4 font-medium transition-colors relative ${activeTab === 'symptoms'
                                ? 'text-eyecare-blue'
                                : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        Search by Symptoms
                        {activeTab === 'symptoms' && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-eyecare-blue" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('conditions')}
                        className={`pb-3 px-4 font-medium transition-colors relative ${activeTab === 'conditions'
                                ? 'text-eyecare-blue'
                                : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        Search by Condition
                        {activeTab === 'conditions' && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-eyecare-blue" />
                        )}
                    </button>
                </div>

                {/* Search Input */}
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-eyecare-blue/20 focus:border-eyecare-blue outline-none transition-all text-lg"
                        placeholder={activeTab === 'symptoms' ? "e.g. blurry vision, red eye, headache..." : "e.g. Glaucoma, Cataracts..."}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                {/* Results */}
                <div className="space-y-2 min-h-[200px]">
                    {query && filteredResults.length > 0 ? (
                        filteredResults.map((condition) => (
                            <Link
                                key={condition.slug}
                                href={`/conditions/${condition.slug}`}
                                className="flex items-center justify-between p-4 rounded-xl hover:bg-eyecare-warm transition-colors group border border-transparent hover:border-eyecare-blue/10"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-eyecare-blue group-hover:text-eyecare-dark-blue">
                                        {activeTab === 'symptoms' ? <AlertCircle className="w-6 h-6" /> : <Activity className="w-6 h-6" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy group-hover:text-eyecare-blue transition-colors">
                                            {condition.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 line-clamp-1">
                                            {activeTab === 'symptoms'
                                                ? `Matches symptom: "${query}"`
                                                : condition.category
                                            }
                                        </p>
                                    </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-eyecare-blue transition-colors" />
                            </Link>
                        ))
                    ) : query ? (
                        <div className="text-center py-12 text-gray-400">
                            <Stethoscope className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>No matching conditions found. Try a different search term.</p>
                        </div>
                    ) : (
                        <div className="text-center py-12 text-gray-400">
                            <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Start typing to find relevant eye conditions</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
