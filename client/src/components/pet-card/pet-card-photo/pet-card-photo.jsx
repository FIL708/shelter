import { Link } from 'react-router-dom';
import './pet-card-photo.css';

export default function PetCardPhoto({ url }) {
  return (
    <Link to="/" className="pet-card__link">
      <img src={url} alt="pet" className="pet-card-photo" />
      <p className="pet-card__hover-text">Click me!</p>
    </Link>
  );
}
