'use client';
import { useState, useEffect } from 'react';

interface ScriptConfig {
  url: string;
  type: 'module' | 'nomodule';
  id?: string;
}

type ScriptLoaderStatus = 'loading' | 'loaded' | 'error';

const useScriptLoader = (config: ScriptConfig) => {
  const [status, setStatus] = useState<ScriptLoaderStatus>('loading');
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const { url, type, id } = config;

    // Check for existing script
    const existingScript = id
      ? document.getElementById(id)
      : document.querySelector(`script[src="${url}"]`);

    if (existingScript) {
      setStatus('loaded');
      return;
    }

    const script = document.createElement('script');
    script.src = url;
    script.async = true;

    // Set the appropriate type
    if (type === 'module') {
      script.type = 'module';
    } else {
      script.setAttribute('nomodule', '');
    }

    if (id) {
      script.id = id;
    }

    script.onload = () => {
      // console.log(`Script loaded successfully: ${url}`);
      setStatus('loaded');
    };

    script.onerror = (event) => {
      const err = new Error(`Failed to load script: ${url}`);
      console.error('Script loading failed:', err);
      setStatus('error');
      setError(err);
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [config]);

  return { status, error };
};

export default useScriptLoader;
