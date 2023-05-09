import { useState } from 'react';
import { Button } from '../index.js';
import { getFormattedDate } from '../../helpers';
import PetCardPhoto from './pet-card-photo/pet-card-photo.jsx';
import './pet-card.css';

export default function PetCard({
  id,
  photos,
  isFavorite,
  name,
  address,
  shortDescription,
  createdAt,
  gender,
  mode,
}) {
  const [isFav, setIsFav] = useState(isFavorite);
  console.log(gender);

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
  const formattedDate = getFormattedDate(createdAt);
  return (
    <li className={cardClassName}>
      <PetCardPhoto url={photos[0].url} mode={mode} id={id} />
      <div className="pet-card__content">
        <h3 className="pet-card__name">{name}</h3>
        <h4 className="pet-car__location">{`${address.city}, ${address.country}`}</h4>
        <hr className="pet-card__divider" />
        <p className="pet-car__desc">{shortDescription}</p>
        <strong className="pet-card__note">
          looking for a home:{' '}
          <span className="pet-card__date">{formattedDate}</span>
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
