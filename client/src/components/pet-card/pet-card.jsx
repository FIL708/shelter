import { useState } from 'react';
import { Button } from '../index.js';
import PetCardPhoto from './pet-card-photo/pet-card-photo.jsx';
import './pet-card.css';

export default function PetCard({
  url,
  isFavorite,
  name,
  address,
  shortDescription,
  createdAt,
  mode,
}) {
  const [isFav, setIsFav] = useState(isFavorite);

  let iconType;
  let iconFill;

  if (isFav) {
    iconType = 'full-heart';
    iconFill = '#9f3e3e';
  } else {
    iconType = 'heart';
    iconFill = '#7286d3';
  }
  const toggleFav = () => {
    setIsFav((prev) => !prev);
  };
  const cardClassName = mode ? `pet-card ${mode}` : 'pet-card';
  return (
    <li className={cardClassName}>
      <PetCardPhoto url={url} mode={mode} />
      <div className="pet-card__content">
        <h3 className="pet-card__name">{name}</h3>
        <h4 className="pet-car__location">{`${address.city}, ${address.country}`}</h4>
        <hr className="pet-card__divider" />
        <p className="pet-car__desc">{shortDescription}</p>
        <strong className="pet-card__note">
          looking for a home:{' '}
          <span className="pet-card__date">{createdAt}</span>
        </strong>
        <Button
          className="pet-card__button"
          iconType={iconType}
          iconSize="20px"
          iconFill={iconFill}
          onClick={toggleFav}
        />
      </div>
    </li>
  );
}
