import './user-card.css';
import UserCardControl from './user-card___control/user-card___control.jsx';
import UserCardData from './user-card__data/user-card__data.jsx';

export default function UserCard({ userData }) {
  return (
    <section className="user-card">
      <UserCardControl
        userId={userData.id}
        avatar={userData.avatar}
        role={userData.role}
      />
      <UserCardData userData={userData} />
    </section>
  );
}
