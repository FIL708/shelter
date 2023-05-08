import { Icon } from '../../index.js';
import './user-card__data-section.css';

export default function UserCardDataSection({ userData }) {
  const iconType = userData.role === 'admin' ? 'admin' : 'user';
  return (
    <div className="user-card__data-section">
      <strong className="user-card__data-section__name">
        <Icon type={iconType} size="25px" fill="#868686" />
        {`${userData.firstName} ${userData.lastName}`}
      </strong>
      <div className="user-card__data-section__lists">
        <ul className="user-card__data-section__list">
          <li className="user-card__data-section__label">Email:</li>
          <li className="user-card__data-section__label">Phone number:</li>
          <li className="user-card__data-section__label">City:</li>
          <li className="user-card__data-section__label">Country:</li>
          <li className="user-card__data-section__label">Birthday:</li>
          <li className="user-card__data-section__label">Created at:</li>
        </ul>
        <ul className="user-card__data-section__list">
          <li className="user-card__data-section__data">{userData.email}</li>
          <li className="user-card__data-section__data">{userData.phone}</li>
          <li className="user-card__data-section__data">
            {userData.address.city}
          </li>
          <li className="user-card__data-section__data">
            {userData.address.country}
          </li>
          <li className="user-card__data-section__data">{userData.birthday}</li>
          <li className="user-card__data-section__data">
            {userData.createdAt}
          </li>
        </ul>
      </div>
    </div>
  );
}
