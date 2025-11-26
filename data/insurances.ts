export interface InsuranceProvider {
    id: string;
    name: string;
    type: 'Medical' | 'Vision';
    logo: string; // Path to logo image
    description?: string;
    accepted: boolean;
}

export const medicalInsurances: InsuranceProvider[] = [
    {
        id: 'medicare',
        name: 'Medicare',
        type: 'Medical',
        logo: '/images/logos/medicare.svg',
        accepted: true,
        description: 'Federal health insurance for people 65 or older.'
    },
    {
        id: 'blue-shield',
        name: 'Blue Shield of California',
        type: 'Medical',
        logo: '/images/logos/blue-shield.svg',
        accepted: true,
    },
    {
        id: 'blue-cross',
        name: 'Anthem Blue Cross',
        type: 'Medical',
        logo: '/images/logos/blue-shield.svg', // Using Blue Shield as placeholder for now or create another
        accepted: true,
    },
    {
        id: 'united-healthcare',
        name: 'UnitedHealthcare',
        type: 'Medical',
        logo: '/images/logos/united-healthcare.svg',
        accepted: true,
    },
    {
        id: 'cigna',
        name: 'Cigna',
        type: 'Medical',
        logo: '/images/logos/cigna.svg',
        accepted: true,
    },
    {
        id: 'aetna',
        name: 'Aetna',
        type: 'Medical',
        logo: '/images/logos/aetna.svg',
        accepted: true,
    },
    {
        id: 'tricare',
        name: 'Tricare',
        type: 'Medical',
        logo: '/images/logos/tricare.svg',
        accepted: true,
    }
];

export const visionInsurances: InsuranceProvider[] = [
    {
        id: 'vsp',
        name: 'VSP (Vision Service Plan)',
        type: 'Vision',
        logo: '/images/logos/vsp.svg',
        accepted: true,
        description: 'The largest vision insurance provider in the nation.'
    },
    {
        id: 'eyemed',
        name: 'EyeMed',
        type: 'Vision',
        logo: '/images/logos/eyemed.svg',
        accepted: true,
    },
    {
        id: 'mes',
        name: 'MES Vision (Medical Eye Services)',
        type: 'Vision',
        logo: '/images/logos/mes-vision.svg',
        accepted: true,
    },
    {
        id: 'davis',
        name: 'Davis Vision',
        type: 'Vision',
        logo: '/images/logos/davis-vision.svg',
        accepted: true,
    },
    {
        id: 'spectera',
        name: 'Spectera',
        type: 'Vision',
        logo: '/images/logos/spectera.svg',
        accepted: true,
    },
    {
        id: 'march',
        name: 'March Vision Care',
        type: 'Vision',
        logo: '/images/logos/march-vision.svg',
        accepted: true,
    }
];

export const allInsurances = [...medicalInsurances, ...visionInsurances];
