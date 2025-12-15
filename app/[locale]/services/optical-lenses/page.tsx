import { Metadata } from 'next';
import OpticalLensesContent from '@/components/services/OpticalLensesContent';

export const metadata: Metadata = {
    title: 'Premium Optical Lenses | Varilux & Crizal | OC',
    description: 'Advanced lens technology: Varilux progressives, Crizal coatings, digital lenses. Superior vision and comfort in Orange County.',
    keywords: [
        'optical lenses orange county',
        'progressive lenses',
        'varilux lenses',
        'crizal coating',
        'anti-reflective lenses',
        'computer glasses',
        'prescription glasses santa ana',
        'myopia control lenses'
    ],
    openGraph: {
        title: 'Advanced Optical Lenses & Glasses Technology | EyeCare Center OC',
        description: 'Discover the latest in lens technology for clearer, more comfortable vision.',
        type: 'website',
    },
    alternates: {
        canonical: 'https://eyecarecenteroc.com/services/optical-lenses',
    },
};

import { generateMedicalBusinessSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';

export default function OpticalLensesPage() {
    const businessSchema = generateMedicalBusinessSchema();
    return (
        <>
            <JsonLd data={businessSchema} id="business-schema" />
            <OpticalLensesContent />
        </>
    );
}
