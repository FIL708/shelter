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
      <div>
        <Icon type={data.species} size="40px" fill="#7286d3" />
        <p className="pet-details__name">{data.name}</p>
        <p>{`${data.address.city}, ${data.address.country}`}</p>
      </div>
      <div>
        <p>
          views: <span>{data.views}</span>
        </p>
        <p>
          likes: <span>{data.likes}</span>
        </p>
        <Button
          className="pet-details__button"
          iconType={iconType}
          iconSize="25px"
          iconFill={iconFill}
          onClick={toggleFav}
        />
        <p>
          looking for a home: <span>{data.createdAt}</span>
        </p>
      </div>
    </section>
  );
}
