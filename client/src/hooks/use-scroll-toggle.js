import { useEffect, useState } from 'react';

export default function useScrollToggle(offset) {
  const [isReached, setIsReached] = useState(false);

  const toggleFlagOnScroll = () => {
    console.log('scroll', offset);
    setIsReached(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleFlagOnScroll);

    return () => {
      window.removeEventListener('scroll', toggleFlagOnScroll);
    };
  });
  return isReached;
}
