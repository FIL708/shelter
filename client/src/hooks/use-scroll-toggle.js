import { useEffect, useState } from 'react';

export default function useScrollToggle(offset = 0) {
  const [isReached, setIsReached] = useState(false);

  const toggleFlagOnScroll = () =>
    window.pageYOffset >= offset ? setIsReached(true) : setIsReached(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleFlagOnScroll);

    return () => {
      window.removeEventListener('scroll', toggleFlagOnScroll);
    };
  });

  return isReached;
}
