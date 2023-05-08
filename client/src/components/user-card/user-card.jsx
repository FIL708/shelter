import './user-card.css';
import UserCardControl from './user-card___control/user-card___control.jsx';
import UserCardDataSection from './user-card__data-section/user-card__data-section.jsx';

export default function UserCard({ userData }) {
  return (
    <section className="user-card">
      <UserCardControl
        userId={userData.id}
        avatar={userData.avatar}
        role={userData.role}
      />
      <UserCardDataSection userData={userData} />
    </section>
  );
}
