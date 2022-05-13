import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(async (callback: () => Promise<any>) => {
    setLoading(true);
    try {
      const response = await callback();
      if (!response) {
        throw new Error(`Request error ${response.status}`);
      }

      setLoading(false);
      return response;
    } catch (e) {
      setLoading(false);
      setError((e as Error).message);
      throw e;
    }
  }, []);

  const clearError = useCallback(() => { setError(null); }, []);

  return {
    clearError, loading, error, request,
  };
};
