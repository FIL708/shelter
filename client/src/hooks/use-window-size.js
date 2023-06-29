import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const sizeHandler = () =>
    setSize({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    window.addEventListener('resize', sizeHandler);

    return () => {
      window.removeEventListener('resize', sizeHandler);
    };
  }, []);

  return { size };
}
