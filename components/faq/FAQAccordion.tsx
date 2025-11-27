/**
 * FILE: components/faq/FAQAccordion.tsx
 * PURPOSE: Accessible FAQ accordion component with FAQPage schema integration
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: Displays FAQs in accordion format with proper accessibility
 * and Schema.org FAQPage structured data for rich search results.
 */

'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '@/lib/schema/types';
import { getFAQJsonLd } from '@/lib/schema/faq';

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  className?: string;
  includeSchema?: boolean;
}

export default function FAQAccordion({
  faqs,
  title = 'Frequently Asked Questions',
  className = '',
  includeSchema = true
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getFAQJsonLd(faqs) }}
        />
      )}
      <div className={className}>
        {title && (
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        )}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="p-4 pt-0 text-gray-600 bg-gray-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
