/**
 * FILE: components/services/ServiceProcess.tsx
 * PURPOSE: Step-by-step process display for service pages
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 */

import { ProcessStep } from '@/lib/schema/types';
import { Clock } from 'lucide-react';

interface ServiceProcessProps {
  steps: ProcessStep[];
  title?: string;
  className?: string;
}

export default function ServiceProcess({
  steps,
  title = 'What to Expect',
  className = ''
}: ServiceProcessProps) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.step} className="flex gap-4">
            {/* Step Number */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-eyecare-blue rounded-full flex items-center justify-center text-white font-bold">
                {step.step}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-full bg-eyecare-blue/20 mx-auto mt-2" />
              )}
            </div>

            {/* Step Content */}
            <div className="flex-1 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-gray-600 mb-2">{step.description}</p>
              {step.duration && (
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{step.duration}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
