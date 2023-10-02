import { getFormattedDate } from 'utils';
import './user-card__data.css';

export default function UserCardData({ userData }) {
  const formattedBirthday = userData.birthday
    ? getFormattedDate(userData.birthday)
    : '-';
  const formattedCreatedAt = getFormattedDate(userData.createdAt);

  return (
    <div className="user-card__data">
      <div className="user-card__data__lists">
        <ul className="user-card__data__list">
          <li className="user-card__data__label">Email:</li>
          <li className="user-card__data__label">Phone:</li>
          <li className="user-card__data__label">City:</li>
          <li className="user-card__data__label">Country:</li>
          <li className="user-card__data__label">Birthday:</li>
          <li className="user-card__data__label">Created at:</li>
        </ul>
        <ul className="user-card__data__list">
          <li className="user-card__data__data">{userData.email}</li>
          <li className="user-card__data__data">{userData.phone || '-'}</li>
          <li className="user-card__data__data">
            {userData.address?.city || '-'}
          </li>
          <li className="user-card__data__data">
            {userData.address?.country || '-'}
          </li>
          <li className="user-card__data__data">{formattedBirthday}</li>
          <li className="user-card__data__data">{formattedCreatedAt}</li>
        </ul>
      </div>

      <ul className="user-card__data-list">
        <li className="user-card__data__item-label">
          <span>Email:</span>
          {userData.email}
        </li>
        <li className="user-card__data__item-label">
          <span>Phone:</span>
          {userData.phone || '-'}
        </li>
        <li className="user-card__data__item-label">
          <span>City:</span>
          {userData.address?.city || '-'}
        </li>
        <li className="user-card__data__item-label">
          <span>Country:</span>
          {userData.address?.country || '-'}
        </li>
        <li className="user-card__data__item-label">
          <span>Birthday:</span>
          {formattedBirthday}
        </li>
        <li className="user-card__data__item-label">
          <span>Created at:</span>
          {formattedCreatedAt}
        </li>
      </ul>
    </div>
  );
}
