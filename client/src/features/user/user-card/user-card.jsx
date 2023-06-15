import UserCardControl from './user-card___control/user-card___control.jsx';
import UserCardData from './user-card__data/user-card__data.jsx';
import './user-card.css';

export default function UserCard({
  userData,
  deleteAccount,
  updateProfile,
  changePassword,
}) {
  return (
    <section className="user-card">
      <UserCardControl
        userId={userData.id}
        avatar={userData.avatar}
        role={userData.role}
        deleteAccount={deleteAccount}
        updateProfile={updateProfile}
        changePassword={changePassword}
      />
      <UserCardData userData={userData} />
    </section>
  );
}
