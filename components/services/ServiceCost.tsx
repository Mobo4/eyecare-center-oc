/**
 * FILE: components/services/ServiceCost.tsx
 * PURPOSE: Cost and insurance information for service pages
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 */

import { DollarSign, CreditCard, Shield } from 'lucide-react';
import { CostInfo } from '@/lib/schema/types';

interface ServiceCostProps {
  cost: CostInfo;
  serviceName: string;
  className?: string;
}

export default function ServiceCost({
  cost,
  serviceName,
  className = ''
}: ServiceCostProps) {
  return (
    <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost & Insurance</h2>

      {/* Price Range */}
      {cost.rangeMin && cost.rangeMax && (
        <div className="flex items-center gap-3 mb-4 p-4 bg-white rounded-lg">
          <DollarSign className="w-8 h-8 text-eyecare-blue" />
          <div>
            <p className="text-sm text-gray-500">Typical Cost Range</p>
            <p className="text-2xl font-bold text-gray-900">
              ${cost.rangeMin.toLocaleString()} - ${cost.rangeMax.toLocaleString()}
            </p>
          </div>
        </div>
      )}

      {/* Insurance */}
      <div className="flex items-start gap-3 mb-4">
        <Shield className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-gray-900">Insurance Coverage</p>
          <p className="text-gray-600">{cost.insuranceCoverage}</p>
        </div>
      </div>

      {/* Financing */}
      {cost.financingAvailable && (
        <div className="flex items-start gap-3">
          <CreditCard className="w-6 h-6 text-eyecare-blue flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-gray-900">Financing Available</p>
            <p className="text-gray-600">{cost.financingDetails || 'Flexible payment plans available.'}</p>
          </div>
        </div>
      )}

      <p className="text-sm text-gray-500 mt-4">
        *Costs vary based on individual needs. Contact us for a personalized quote.
      </p>
    </div>
  );
}
