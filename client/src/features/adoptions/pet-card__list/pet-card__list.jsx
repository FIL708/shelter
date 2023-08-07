import { useContext } from 'react';
import { UserContext } from 'index.jsx';

import PetCard from './pet-card/pet-card.jsx';
import './pet-card__list.css';

export default function PetCardList({ pets, mode }) {
  if (!pets) return false;
  const { user } = useContext(UserContext);
  return (
    <ul className="pet-card__list">
      {pets.map((pet) => (
        <PetCard key={pet.id} {...pet} mode={mode} user={user} />
      ))}
    </ul>
  );
}
