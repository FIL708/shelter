import { PetCard } from '../index.js';

import './pet-card__list.css';

export default function PetCardList({ pets, mode }) {
  if (!pets) return false;
  return (
    <ul className="pet-card__list">
      {pets.map((pet) => (
        <PetCard key={pet.id} {...pet} mode={mode} />
      ))}
    </ul>
  );
}
