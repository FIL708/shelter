import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const makeRequest = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      if (!res.ok) {
        setResponse(false);
        setError({ ...data, status: res.status });
      } else {
        setResponse(data);
        setError(null);
      }
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
