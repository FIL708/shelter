import { PetCard } from '../index.js';

import './pet-card__list.css';

export default function PetCardList({ pets }) {
  return (
    <ul className="pet-card__list">
      {pets.map((pet) => (
        <PetCard key={pet.id} {...pet} />
      ))}
    </ul>
  );
}
