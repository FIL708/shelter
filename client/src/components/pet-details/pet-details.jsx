import { useState } from 'react';
import { Button, Icon } from '../index.js';
import { getFormattedDate } from '../../helpers';
import './pet-details.css';

export default function PetDetails({ data }) {
  const [isFav, setIsFav] = useState(data?.isFavorite || false);

  if (!data) return false;

  const formattedDate = getFormattedDate(data.createdAt);

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
  const genderIconColor = data.gender === 'male' ? '#00ABD8' : '#FF80ED';
  return (
    <section className="pet-details">
      <ul className="pet-details__data-list">
        <li className="pet-details__name">
          <Icon type={data.species} size="40px" fill="#7286d3" />
          {data.name}
          <Icon size="25px" type={data.gender} fill={genderIconColor} />
        </li>
        <li className="pet-details__address">
          {`${data.address.city}, ${data.address.country}`}
        </li>
      </ul>

      <ul className="pet-details__data-grid">
        <li className="pet-details__list-grid-item">
          age:{' '}
          <span className="pet-details__list-item__data">{`${data.age} years`}</span>
        </li>
        <li className="pet-details__list-grid-item">
          weight:{' '}
          <span className="pet-details__list-item__data">{`${data.weight} kg`}</span>
        </li>
        <li className="pet-details__list-grid-item">
          views:{' '}
          <span className="pet-details__list-item__data">{data.views}</span>
        </li>
        <li className="pet-details__list-grid-item">
          likes:{' '}
          <span className="pet-details__list-item__data">{data.likes}</span>
        </li>
      </ul>
      <strong className="pet-details__date">
        looking for a home:{' '}
        <span className="pet-details__list-item__data">{formattedDate}</span>
      </strong>

      <Button
        className="pet-details__button"
        iconType={iconType}
        iconSize="25px"
        iconFill={iconFill}
        onClick={toggleFav}
      />
    </section>
  );
}
