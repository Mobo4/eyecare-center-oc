'use client';

import React from 'react';

interface GhlFormComponentProps {
  formId: string;
  containerId?: string;
}

const GhlFormComponent: React.FC<GhlFormComponentProps> = ({ formId, containerId = 'ghl-form-container' }) => {
  const formUrl = `https://api.leadconnectorhq.com/widget/form/${formId}`;

  return (
    <div id={containerId} className="w-full">
      <iframe
        src={formUrl}
        style={{
          width: '100%',
          height: '800px',
          border: 'none',
          borderRadius: '8px',
        }}
        title="Contact Form"
        loading="lazy"
      />
    </div>
  );
};

export default GhlFormComponent;
