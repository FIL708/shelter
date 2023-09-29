import { Button } from 'components/form';
import UserCardData from './user-card__data/user-card__data.jsx';
import UserCardAvatar from './user-card__avatar/user-card__avatar.jsx';
import './user-card.css';

export default function UserCard({
  userData,
  deleteAccount,
  updateProfile,
  changePassword,
}) {
  return (
    <section className="user-card">
      <UserCardAvatar user={userData} />
      <UserCardData userData={userData} />

      <Button variant="outline" onClick={changePassword}>
        Change password
      </Button>
      <Button variant="outline" onClick={updateProfile}>
        Update profile
      </Button>
      <Button variant="outline" color="red" onClick={deleteAccount}>
        Delete account
      </Button>
    </section>
  );
}
