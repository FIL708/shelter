import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(url);
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!url) return;
    makeRequest();
  }, [url]);

  return [response, isLoading, error];
}
