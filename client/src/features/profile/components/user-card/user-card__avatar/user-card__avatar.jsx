import { Icon } from 'components/ui';
import './user-card__avatar.css';

export default function UserCardAvatar({ user }) {
  const userRole =
    user.role === 'admin' ? `Admin ID: ${user.id}` : `User ID: ${user.id}`;

  const profilePhoto =
    user.avatar ||
    'https://tleliteracy.com/wp-content/uploads/2017/02/default-avatar.png';

  const userName =
    user.firstName || user.lastName
      ? `${user.firstName || '-'} ${user.lastName || '-'}`
      : 'Unknown';

  const iconType = user.role === 'admin' ? 'admin' : 'user';

  return (
    <div className="user-card__avatar">
      <img
        src={profilePhoto}
        alt="user avatar"
        className="user-card__avatar__photo"
      />
      <strong className="user-card__data__name">
        <Icon type={iconType} size="25px" fill="#868686" />
        {userName}
      </strong>
      <span className="user-card__avatar__id">{userRole}</span>
    </div>
  );
}
