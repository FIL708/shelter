import { useEffect, useState } from 'react';

export default function useOpinion(initial) {
  const [opinions, setOpinions] = useState([]);
  const [newOpinion, setNewOpinion] = useState('');

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

  const newOpinionHandler = (event) => {
    const { value } = event.target;
    setNewOpinion(value);
  };

  const resetNewOpinion = () => {
    setNewOpinion('');
  };

  return [
    opinions,
    newOpinion,
    newOpinionHandler,
    resetNewOpinion,
    addOpinion,
    changeOpinion,
    deleteOpinion,
  ];
}
