import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from 'components/form';
import { Icon } from 'components/ui';
import { getFormattedDate } from 'utils';
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
  user,
}) {
  const [isFav, setIsFav] = useState(isFavorite);

  let favIconType;
  let favIconFill;

  if (isFav) {
    favIconType = 'full-heart';
    favIconFill = '#9f3e3e';
  } else {
    favIconType = 'heart';
    favIconFill = '#7286d3';
  }
  const genderIconColor = gender === 'male' ? '#00ABD8' : '#FF80ED';

  const toggleFav = () => {
    setIsFav((prev) => !prev);
  };

  const cardClassName = mode ? `pet-card ${mode}` : 'pet-card';
  const formattedDate = getFormattedDate(createdAt);
  return (
    <li className={cardClassName}>
      <PetCardPhoto url={photos[0].url} mode={mode} id={id} />
      <div className="pet-card__content">
        <h3 className="pet-card__name">
          <Icon size="18px" type={gender} fill={genderIconColor} />
          {name}
        </h3>
        <h4 className="pet-card__location">{`${address.city}, ${address.country}`}</h4>
        <hr className="pet-card__divider" />
        <p className="pet-card__desc">{shortDescription}</p>
        <strong className="pet-card__note">
          looking for a home:{' '}
          <span className="pet-card__date">{formattedDate}</span>
        </strong>
        <div className="pet-card__buttons">
          {user?.role === 'admin' ? (
            <Link to={`/adoptions/${id}/edit`} className="pet-card__edit-link">
              <Icon type="edit" size="20px" fill="#7286d3" />
            </Link>
          ) : (
            false
          )}
          <IconButton
            className="pet-card__button"
            type={favIconType}
            color={favIconFill}
            onClick={toggleFav}
          />
        </div>
      </div>
    </li>
  );
}
