import React, { useEffect } from 'react';
import axios from 'axios';

const ExternalScriptLoader = ({ src }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);

    return () => {
      // Clean up function to remove the script from the DOM when the component is unmounted
      document.head.removeChild(script);
    };
  }, [src]);

  return null; // This component doesn't render anything
};

export default ExternalScriptLoader;
