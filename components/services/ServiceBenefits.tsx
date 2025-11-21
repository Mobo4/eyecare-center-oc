/**
 * FILE: components/services/ServiceBenefits.tsx
 * PURPOSE: Benefits list display for service pages
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 */

import { CheckCircle } from 'lucide-react';

interface ServiceBenefitsProps {
  benefits: string[];
  title?: string;
  className?: string;
}

export default function ServiceBenefits({
  benefits,
  title = 'Benefits',
  className = ''
}: ServiceBenefitsProps) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
