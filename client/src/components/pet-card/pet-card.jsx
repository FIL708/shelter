import { Button } from '../index.js';
import PetCardPhoto from './pet-card-photo/pet-card-photo.jsx';
import './pet-card.css';

export default function PetCard({ url }) {
  return (
    <li className="pet-card">
      <PetCardPhoto url={url} />
      <div className="pet-card__content">
        <h3 className="pet-card__name">Pet name</h3>
        <h4 className="pet-car__location">Location</h4>
        <hr className="pet-card__divider" />
        <p className="pet-car__disc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a
          ducimus iure accusamus recusandae opti...
        </p>
        <strong className="pet-card__note">
          looking for a home:{' '}
          <span className="pet-card__date">20 march 2022</span>
        </strong>
        <Button
          className="pet-card__button"
          iconType="heart"
          iconSize="20px"
          iconFill="#7286d3"
        />
      </div>
    </li>
  );
}
