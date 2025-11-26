import { SearchCondition } from '@/data/conditions-search';

interface MedicalConditionSchemaProps {
    condition: SearchCondition;
}

export default function MedicalConditionSchema({ condition }: MedicalConditionSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": condition.name,
        "alternateName": condition.aliases?.join(', '),
        "code": condition.icdCode ? {
            "@type": "MedicalCode",
            "code": condition.icdCode,
            "codingSystem": "ICD-10"
        } : undefined,
        "associatedAnatomy": {
            "@type": "AnatomicalStructure",
            "name": condition.category
        },
        "signOrSymptom": condition.symptoms?.map(symptom => ({
            "@type": "MedicalSymptom",
            "name": symptom
        })),
        "possibleTreatment": {
            "@type": "MedicalTherapy",
            "name": "Comprehensive Eye Exam & Treatment Plan"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
