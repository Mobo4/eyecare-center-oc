'use client';

import React, { useEffect } from 'react';

interface GhlFormComponentProps {
  formId: string;
  containerId: string;
}

const GhlFormComponent: React.FC<GhlFormComponentProps> = ({ formId, containerId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    
    script.onload = () => {
      // GHL's script will automatically find and render the form
      // in the div created below. The div needs to exist before the script loads.
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, [formId]); // Re-run effect if formId changes, though it's unlikely

  return (
    <div id={containerId}>
      {/* The GHL form will be embedded here by their script */}
      {/* It might be necessary to have a specific structure, e.g., a div with a specific class or id */}
      {/* For now, we'll assume the script finds a container. Let's create a placeholder. */}
      <div 
        className="ghl-form-container" 
        data-form-id={formId} 
        style={{ width: '100%', height: 'auto' }}
      >
        Loading Form...
      </div>
    </div>
  );
};

export default GhlFormComponent;
