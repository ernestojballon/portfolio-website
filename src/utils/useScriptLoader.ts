import { useState, useEffect } from 'react';

type ScriptType = 'module' | 'nomodule';

interface ScriptConfig {
  url: string;
  type: ScriptType;
}

type ScriptLoaderStatus = 'loading' | 'loaded' | 'error';

const useScriptLoader = (scriptConfigs: ScriptConfig[]) => {
  const [status, setStatus] = useState<ScriptLoaderStatus>('loading');
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      // Skip script loading on server-side
      return;
    }

    const loadScript = ({ url, type }: ScriptConfig): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if the script is already loaded
        if (document.querySelector(`script[src="${url}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = url;
        script.async = true;

        if (type === 'module') {
          script.type = 'module';
        } else {
          script.setAttribute('nomodule', '');
        }

        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Failed to load script: ${url}`));

        document.body.appendChild(script);
      });
    };

    let isMounted = true;

    Promise.all(scriptConfigs.map(loadScript))
      .then(() => {
        console.log('script loaded');
        if (isMounted) setStatus('loaded');
      })
      .catch((err) => {
        console.log('error loading scripts', JSON.stringify(err));
        if (isMounted) {
          setStatus('error');
          setError(err);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [scriptConfigs]);

  return { status, error };
};

export default useScriptLoader;
