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
        id: 'anthem-blue-cross',
        name: 'Anthem Blue Cross',
        type: 'Medical',
        logo: '/images/logos/anthem.svg',
        accepted: true,
    },
    {
        id: 'united-healthcare',
        name: 'United Healthcare',
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
        id: 'providence',
        name: 'Providence Health',
        type: 'Medical',
        logo: '/images/logos/providence.svg',
        accepted: true,
    },
    {
        id: 'optum',
        name: 'Optum',
        type: 'Medical',
        logo: '/images/logos/optum.svg',
        accepted: true,
    },
    {
        id: 'memorialcare',
        name: 'MemorialCare',
        type: 'Medical',
        logo: '/images/logos/memorialcare.svg',
        accepted: true,
    },
    {
        id: 'health-net',
        name: 'Health Net',
        type: 'Medical',
        logo: '/images/logos/health-net.svg',
        accepted: true,
    },
    {
        id: 'tricare',
        name: 'Tricare',
        type: 'Medical',
        logo: '/images/logos/tricare.svg',
        accepted: true,
    },
    {
        id: 'covered-california',
        name: 'Covered California',
        type: 'Medical',
        logo: '/images/logos/covered-california.svg',
        accepted: true,
        description: 'California state health insurance marketplace plans.'
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
        id: 'superior-vision',
        name: 'Superior Vision',
        type: 'Vision',
        logo: '/images/logos/superior-vision.svg',
        accepted: true,
    },
    {
        id: 'avesis',
        name: 'Avesis',
        type: 'Vision',
        logo: '/images/logos/avesis.svg',
        accepted: true,
    }
];

export const allInsurances = [...medicalInsurances, ...visionInsurances];
