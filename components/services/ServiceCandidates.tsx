/**
 * FILE: components/services/ServiceCandidates.tsx
 * PURPOSE: Good candidates / not candidates display for service pages
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 */

import { UserCheck, UserX } from 'lucide-react';

interface ServiceCandidatesProps {
  goodCandidates: string[];
  notCandidates?: string[];
  className?: string;
}

export default function ServiceCandidates({
  goodCandidates,
  notCandidates,
  className = ''
}: ServiceCandidatesProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {/* Good Candidates */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <UserCheck className="w-6 h-6 text-green-600" />
          <h3 className="text-lg font-bold text-gray-900">Good Candidates</h3>
        </div>
        <ul className="space-y-2">
          {goodCandidates.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-green-500 mt-1">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Not Ideal Candidates */}
      {notCandidates && notCandidates.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <UserX className="w-6 h-6 text-amber-600" />
            <h3 className="text-lg font-bold text-gray-900">May Need Evaluation</h3>
          </div>
          <ul className="space-y-2">
            {notCandidates.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-amber-500 mt-1">!</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
