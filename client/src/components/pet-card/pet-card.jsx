import './pet-card.css';

export default function PetCard({ url }) {
  return (
    <li className="pet-card">
      <img src={url} alt="pet" className="pet-card-photo" />
    </li>
  );
}
