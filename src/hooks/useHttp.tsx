import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (callback : any) => {
    setLoading(true);
    try {
      const response = await callback();
      if (!response) {
        throw new Error(`Request error ${response.status}`);
      }

      setLoading(false);
      return response;
    } catch (e : any) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, []);

  const clearError = useCallback(() => { setError(null); }, []);

  return {
    clearError, loading, error, request,
  };
};
