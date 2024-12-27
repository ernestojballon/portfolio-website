'use client';
import { useState, useEffect } from 'react';

type ScriptType = 'module' | 'nomodule';

interface ScriptConfig {
  url: string;
  type: ScriptType;
  id?: string; // Add optional id for better script management
}

type ScriptLoaderStatus = 'loading' | 'loaded' | 'error';

const useScriptLoader = (scriptConfigs: ScriptConfig[]) => {
  const [status, setStatus] = useState<ScriptLoaderStatus>('loading');
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const loadScript = ({ url, type, id }: ScriptConfig): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check for existing script using both URL and ID
        const existingScript = id
          ? document.getElementById(id)
          : document.querySelector(`script[src="${url}"]`);

        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = url;
        script.async = true;

        // Add crossOrigin attribute for external scripts
        if (url.startsWith('http')) {
          script.crossOrigin = 'anonymous';
        }

        // Add ID if provided
        if (id) {
          script.id = id;
        }

        if (type === 'module') {
          script.type = 'module';
        } else if (type === 'nomodule') {
          script.setAttribute('nomodule', '');
        }

        // Enhanced error handling
        script.onload = () => {
          console.log(`Script loaded successfully: ${url}`);
          resolve();
        };

        script.onerror = (event) => {
          const errorDetails = {
            url,
            type,
            event: event.toString(),
            timestamp: new Date().toISOString(),
          };
          console.error('Script loading failed:', errorDetails);
          reject(new Error(`Failed to load script: ${url}`));
        };

        // Add to document head instead of body for better performance
        document.head.appendChild(script);
      });
    };

    let isMounted = true;

    // Add delay for production environment
    const loadWithRetry = async () => {
      const maxRetries = 3;
      let retryCount = 0;

      while (retryCount < maxRetries) {
        try {
          await Promise.all(scriptConfigs.map(loadScript));
          if (isMounted) {
            setStatus('loaded');
            console.log('All scripts loaded successfully');
          }
          return;
        } catch (err) {
          retryCount++;
          console.warn(`Retry attempt ${retryCount} of ${maxRetries}`);

          if (retryCount === maxRetries) {
            if (isMounted) {
              setStatus('error');
              setError(
                err instanceof Error
                  ? err
                  : new Error('Unknown error loading scripts')
              );
              console.error('Final retry failed:', err);
            }
          } else {
            // Wait before retrying (exponential backoff)
            await new Promise((resolve) =>
              setTimeout(resolve, 1000 * Math.pow(2, retryCount))
            );
          }
        }
      }
    };

    loadWithRetry();

    return () => {
      isMounted = false;
    };
  }, [scriptConfigs]);

  return { status, error };
};

export default useScriptLoader;
