import { Button } from 'components/form';
import './user-card___control.css';

export default function UserCardControl({
  userId,
  avatar,
  role,
  deleteAccount,
  updateProfile,
  changePassword,
}) {
  const userRole =
    role === 'admin' ? `Admin ID: ${userId}` : `User ID: ${userId}`;
  const profilePhoto =
    avatar ||
    'https://tleliteracy.com/wp-content/uploads/2017/02/default-avatar.png';

  return (
    <div className="user-card__control">
      <img
        src={profilePhoto}
        alt="user avatar"
        className="user-card__control__avatar"
      />
      <span className="user-card__control__id">{userRole}</span>
      <Button className="outline" onClick={changePassword}>
        Change password
      </Button>
      <Button className="outline" onClick={updateProfile}>
        Update profile
      </Button>
      <Button className="outline red" onClick={deleteAccount}>
        Delete account
      </Button>
    </div>
  );
}
