import './user-card.css';
import UserCardControlSection from './user-card___control-section/user-card___control-section.jsx';
import UserCardDataSection from './user-card__data-section/user-card__data-section.jsx';

export default function UserCard({ userData }) {
  console.log(userData);

  return (
    <section className="user-card">
      <UserCardControlSection
        userId={userData.id}
        avatar={userData.avatar}
        role={userData.role}
      />
      <UserCardDataSection />
    </section>
  );
}
