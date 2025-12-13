import React from 'react';

interface JsonLdProps {
    data: any;
    id?: string;
}

/**
 * Reusable component to render JSON-LD structured data
 * Safe for use in Next.js Server Components
 */
export default function JsonLd({ data, id }: JsonLdProps) {
    return (
        <script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
