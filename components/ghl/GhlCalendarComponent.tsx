'use client';

import React, { useEffect } from 'react';

interface GhlCalendarComponentProps {
  calendarId: string;
  containerId: string;
}

const GhlCalendarComponent: React.FC<GhlCalendarComponentProps> = ({ calendarId, containerId }) => {
  useEffect(() => {
    // NOTE: This is a placeholder for the actual GHL calendar script.
    // The script URL and initialization method may need to be adjusted based on
    // GHL's documentation for embedding calendars.
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/embed.js'; // This might be a generic loader
    script.async = true;

    script.onload = () => {
      // It's possible an initialization function needs to be called after the script loads.
      // Example: window.GHL.initCalendar({ calendarId });
    };
    
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, [calendarId]);

  return (
    <div id={containerId}>
      {/* The GHL Calendar will be embedded here. */}
      {/* The structure required by GHL's script might be different. */}
      <div 
        className="ghl-calendar-container"
        data-calendar-id={calendarId}
        style={{ width: '100%', height: '800px' }} // Calendars usually need a fixed height
      >
        Loading Calendar...
      </div>
    </div>
  );
};

export default GhlCalendarComponent;
