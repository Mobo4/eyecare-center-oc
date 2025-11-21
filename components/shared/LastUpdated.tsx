/**
 * FILE: components/shared/LastUpdated.tsx
 * PURPOSE: Last updated timestamp for content freshness signals
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: Shows when medical content was last reviewed/updated.
 * Important for E-E-A-T and user trust on medical content.
 */

import { Calendar, RefreshCw } from 'lucide-react';

interface LastUpdatedProps {
  datePublished: string;
  dateModified?: string;
  className?: string;
  variant?: 'badge' | 'text' | 'detailed';
}

export default function LastUpdated({
  datePublished,
  dateModified,
  className = '',
  variant = 'text'
}: LastUpdatedProps) {
  const displayDate = dateModified || datePublished;
  const formattedDate = new Date(displayDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Calculate days since update
  const daysSinceUpdate = Math.floor(
    (Date.now() - new Date(displayDate).getTime()) / (1000 * 60 * 60 * 24)
  );

  const getFreshnessLabel = () => {
    if (daysSinceUpdate <= 30) return 'Recently updated';
    if (daysSinceUpdate <= 90) return 'Updated this quarter';
    if (daysSinceUpdate <= 180) return 'Updated within 6 months';
    if (daysSinceUpdate <= 365) return 'Updated this year';
    return 'Review scheduled';
  };

  const getFreshnessColor = () => {
    if (daysSinceUpdate <= 30) return 'text-green-600 bg-green-50';
    if (daysSinceUpdate <= 90) return 'text-emerald-600 bg-emerald-50';
    if (daysSinceUpdate <= 180) return 'text-yellow-600 bg-yellow-50';
    if (daysSinceUpdate <= 365) return 'text-orange-600 bg-orange-50';
    return 'text-gray-600 bg-gray-50';
  };

  if (variant === 'badge') {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getFreshnessColor()} ${className}`}
      >
        <RefreshCw className="w-3 h-3" />
        {getFreshnessLabel()}
      </span>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className={`text-sm text-gray-500 ${className}`}>
        <div className="flex items-center gap-2 mb-1">
          <Calendar className="w-4 h-4" />
          <span>Last reviewed: {formattedDate}</span>
        </div>
        <p className="text-xs text-gray-400">
          Medical content is reviewed regularly to ensure accuracy and reflect current best practices.
        </p>
      </div>
    );
  }

  // Default text variant
  return (
    <p className={`text-sm text-gray-500 flex items-center gap-1 ${className}`}>
      <Calendar className="w-4 h-4" />
      Last updated: {formattedDate}
    </p>
  );
}
