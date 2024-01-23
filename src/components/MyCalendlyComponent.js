import React, { useEffect } from 'react';

const MyCalendlyComponent = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove the Calendly script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/mridulawasthi/conversation?background_color=706f6f&text_color=fdfbfb&primary_color=090909" style={{ minWidth: 350, height: 1000, margin:'auto' }}></div>
  );
};

export default MyCalendlyComponent;
