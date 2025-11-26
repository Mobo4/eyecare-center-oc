import { Metadata } from 'next';
import OpticalLensesContent from '@/components/services/OpticalLensesContent';

export const metadata: Metadata = {
    title: 'Advanced Optical Lenses & Glasses Technology | EyeCare Center OC',
    description: 'Explore our premium lens options including Varilux progressives, Crizal anti-reflective coatings, and specialized lenses for digital eye strain and myopia control.',
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
    }
};

export default function OpticalLensesPage() {
    return <OpticalLensesContent />;
}
