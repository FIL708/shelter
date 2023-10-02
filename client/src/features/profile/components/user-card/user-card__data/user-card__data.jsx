import { getFormattedDate } from 'utils';
import './user-card__data.css';

export default function UserCardData({ userData }) {
  const formattedBirthday = userData.birthday
    ? getFormattedDate(userData.birthday)
    : '-';
  const formattedCreatedAt = getFormattedDate(userData.createdAt);

  return (
    <ul className="user-card__data-list">
      <li className="user-card__data__item">
        <span className="user-card__data__item-label">Email:</span>
        {userData.email}
      </li>
      <li className="user-card__data__item">
        <span className="user-card__data__item-label">Phone:</span>
        {userData.phone || '-'}
      </li>
      <li className="user-card__data__item">
        <span className="user-card__data__item-label">City:</span>
        {userData.address?.city || '-'}
      </li>
      <li className="user-card__data__item">
        <span className="user-card__data__item-label">Country:</span>
        {userData.address?.country || '-'}
      </li>
      <li className="user-card__data__item">
        <span className="user-card__data__item-label">Birthday:</span>
        {formattedBirthday}
      </li>
      <li className="user-card__data__item">
        <span className="user-card__data__item-label">Created at:</span>
        {formattedCreatedAt}
      </li>
    </ul>
  );
}
