import { useState } from 'react';
import { Button, Icon } from '../index.js';
import './pet-details.css';

export default function PetDetails({ data }) {
  const [isFav, setIsFav] = useState(data.isFavorite);

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
  return (
    <section className="pet-details">
      <ul className="pet-details__data-list">
        <li className="pet-details__name">
          <Icon type={data.species} size="40px" fill="#7286d3" />
          {data.name}
        </li>
        <li className="pet-details__address">
          {`${data.address.city}, ${data.address.country}`}
        </li>
      </ul>

      <ul className="pet-details__data-list">
        <li className="pet-details__list-item">
          views:{' '}
          <span className="pet-details__list-item__data">{data.views}</span>
        </li>
        <li className="pet-details__list-item">
          likes:{' '}
          <span className="pet-details__list-item__data">{data.likes}</span>
        </li>
        <li className="pet-details__list-item">
          looking for a home:{' '}
          <span className="pet-details__list-item__data">{data.createdAt}</span>
        </li>
        <Button
          className="pet-details__button"
          iconType={iconType}
          iconSize="25px"
          iconFill={iconFill}
          onClick={toggleFav}
        />
      </ul>
    </section>
  );
}
