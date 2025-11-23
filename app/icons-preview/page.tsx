'use client';

import React from 'react';
import { YearsExperienceIconV1 } from '@/components/icons/trust-badges/YearsExperienceIcon-v1';
import { YearsExperienceIconV2 } from '@/components/icons/trust-badges/YearsExperienceIcon-v2';
import { PatientsTreatedIconV1 } from '@/components/icons/trust-badges/PatientsTreatedIcon-v1';
import { PatientsTreatedIconV2 } from '@/components/icons/trust-badges/PatientsTreatedIcon-v2';
import { PatientRatingIconV1 } from '@/components/icons/trust-badges/PatientRatingIcon-v1';
import { PatientRatingIconV2 } from '@/components/icons/trust-badges/PatientRatingIcon-v2';
import { DryEyeIplIconV1 } from '@/components/icons/service-icons/DryEyeIplIcon-v1';
import { DryEyeIplIconV2 } from '@/components/icons/service-icons/DryEyeIplIcon-v2';
import { KeratoconusTreatmentIconV1 } from '@/components/icons/service-icons/KeratoconusTreatmentIcon-v1';
import { KeratoconusTreatmentIconV2 } from '@/components/icons/service-icons/KeratoconusTreatmentIcon-v2';
import { LasikSurgeryIconV1 } from '@/components/icons/service-icons/LasikSurgeryIcon-v1';
import { LasikSurgeryIconV2 } from '@/components/icons/service-icons/LasikSurgeryIcon-v2';
import { OrthokIconV1 } from '@/components/icons/service-icons/OrthokIcon-v1';
import { OrthokIconV2 } from '@/components/icons/service-icons/OrthokIcon-v2';
import { CornealCrosslinkingIconV1 } from '@/components/icons/service-icons/CornealCrosslinkingIcon-v1';
import { CornealCrosslinkingIconV2 } from '@/components/icons/service-icons/CornealCrosslinkingIcon-v2';
import { ScleralLensFittingIconV1 } from '@/components/icons/service-icons/ScleralLensFittingIcon-v1';
import { ScleralLensFittingIconV2 } from '@/components/icons/service-icons/ScleralLensFittingIcon-v2';

export default function IconsPreviewPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Eye Care Service Icons Preview
        </h1>

        {/* Trust Badge Icons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Trust Badge Icons (128x128px)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-4">Years Experience V1</h3>
              <YearsExperienceIconV1 size={128} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-4">Years Experience V2</h3>
              <YearsExperienceIconV2 size={128} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-4">Patients Treated V1</h3>
              <PatientsTreatedIconV1 size={128} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-4">Patients Treated V2</h3>
              <PatientsTreatedIconV2 size={128} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-4">Patient Rating V1</h3>
              <PatientRatingIconV1 size={128} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-4">Patient Rating V2</h3>
              <PatientRatingIconV2 size={128} />
            </div>
          </div>
        </section>

        {/* Service Category Icons */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Category Icons (64x64px)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-sm font-semibold mb-3">Dry Eye IPL V1</h3>
              <DryEyeIplIconV1 size={64} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-sm font-semibold mb-3">Dry Eye IPL V2</h3>
              <DryEyeIplIconV2 size={64} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-sm font-semibold mb-3">Keratoconus V1</h3>
              <KeratoconusTreatmentIconV1 size={64} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-sm font-semibold mb-3">Keratoconus V2</h3>
              <KeratoconusTreatmentIconV2 size={64} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-sm font-semibold mb-3">LASIK V1</h3>
              <LasikSurgeryIconV1 size={64} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-sm font-semibold mb-3">LASIK V2</h3>
              <LasikSurgeryIconV2 size={64} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-sm font-semibold mb-3">Ortho-K V1</h3>
              <OrthokIconV1 size={64} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-sm font-semibold mb-3">Ortho-K V2</h3>
              <OrthokIconV2 size={64} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-sm font-semibold mb-3">Cross-Linking V1</h3>
              <CornealCrosslinkingIconV1 size={64} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-sm font-semibold mb-3">Cross-Linking V2</h3>
              <CornealCrosslinkingIconV2 size={64} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-sm font-semibold mb-3">Scleral Lens V1</h3>
              <ScleralLensFittingIconV1 size={64} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-sm font-semibold mb-3">Scleral Lens V2</h3>
              <ScleralLensFittingIconV2 size={64} />
            </div>
          </div>
        </section>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <p className="text-gray-700">
            <strong>Note:</strong> All icons are React components with SVG code. 
            Each icon can be individually customized by editing its `.tsx` file.
            Visit <code className="bg-white px-2 py-1 rounded">/components/icons/</code> to see all files.
          </p>
        </div>
      </div>
    </div>
  );
}

