import PetCardPhoto from './pet-card-photo/pet-card-photo.jsx';
import './pet-card.css';

export default function PetCard({ url }) {
  return (
    <li className="pet-card">
      <PetCardPhoto url={url} />
    </li>
  );
}
