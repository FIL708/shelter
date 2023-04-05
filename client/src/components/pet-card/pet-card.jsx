import { Link } from 'react-router-dom';
import './pet-card.css';

export default function PetCard({ url }) {
  return (
    <li className="pet-card">
      <Link to="/">
        <img src={url} alt="pet" className="pet-card-photo" />
      </Link>
    </li>
  );
}
