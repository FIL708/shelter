import { Link } from 'react-router-dom';
import './pet-card.css';

export default function PetCard({ url }) {
  return (
    <li className="pet-card">
      <Link to="/" className="pet-card__link">
        <img src={url} alt="pet" className="pet-card-photo" />
        <p className="pet-card__hover-text">Click me!</p>
      </Link>
    </li>
  );
}
