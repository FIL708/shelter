import { Link } from 'react-router-dom';
import './pet-card-photo.css';

export default function PetCardPhoto({ url, mode }) {
  const linkClassName = mode ? `pet-card__link mode` : 'pet-card__link ';
  return (
    <Link to="/" className={linkClassName}>
      <img src={url} alt="pet" className="pet-card-photo" />
      <p className="pet-card__hover-text">Click me!</p>
    </Link>
  );
}
