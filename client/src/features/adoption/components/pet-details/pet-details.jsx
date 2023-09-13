import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from 'components/form';
import { Icon } from 'components/ui';
import { getFormattedDate } from 'utils';
import './pet-details.css';
import { UserContext } from 'index';

export default function PetDetails({ data }) {
  const [isFav, setIsFav] = useState(data?.isFavorite || false);
  const { user } = useContext(UserContext);

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

      <div className="pet-details__buttons">
        {user?.role === 'admin' ? (
          <Link
            to={`/adoptions/${data.id}/edit`}
            className="pet-card__edit-link"
          >
            <Icon type="edit" size="20px" fill="#7286d3" />
          </Link>
        ) : (
          false
        )}
        <IconButton
          className="pet-details__button"
          type={iconType}
          size="25px"
          color={iconFill}
          onClick={toggleFav}
        />
      </div>
    </section>
  );
}
