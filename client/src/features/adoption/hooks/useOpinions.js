import { useEffect, useState } from 'react';

export default function useOpinions(initial) {
  const [opinions, setOpinions] = useState([]);
  console.log(opinions);

  useEffect(() => {
    if (initial) {
      setOpinions(initial.opinions);
    }
  }, [initial]);
}
