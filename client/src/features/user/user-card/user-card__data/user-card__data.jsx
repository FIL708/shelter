import { Icon } from '../../../../components/ui';
import { getFormattedDate } from '../../../../utils';
import './user-card__data.css';

export default function UserCardData({ userData }) {
  const iconType = userData.role === 'admin' ? 'admin' : 'user';
  const formattedBirthday = userData.birthday
    ? getFormattedDate(userData.birthday)
    : '-';
  const userName =
    userData.firstName || userData.lastName
      ? `${userData.firstName || '-'} ${userData.lastName || '-'}`
      : 'Unknown';
  const formattedCreatedAt = getFormattedDate(userData.createdAt);

  return (
    <div className="user-card__data">
      <strong className="user-card__data__name">
        <Icon type={iconType} size="25px" fill="#868686" />
        {userName}
      </strong>
      <div className="user-card__data__lists">
        <ul className="user-card__data__list">
          <li className="user-card__data__label">Email:</li>
          <li className="user-card__data__label">Phone number:</li>
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
    </div>
  );
}
