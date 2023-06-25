import { useEffect, useState } from 'react';

export default function useOpinions(initial) {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    if (initial) {
      setOpinions(initial.opinions);
    }
  }, [initial]);

  const addOpinion = (opinion) => {
    setOpinions((prev) => [opinion, ...prev]);
  };

  const changeOpinion = (id, body) => {
    setOpinions((prev) =>
      prev.map((opinion) =>
        opinion.id === id ? { ...opinion, body } : opinion,
      ),
    );
  };

  const deleteOpinion = (id) => {
    setOpinions((prev) => prev.filter((opinion) => opinion.id !== id));
  };

  return [opinions, addOpinion, changeOpinion, deleteOpinion];
}
