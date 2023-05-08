import './user-card.css';
import UserCardControlSection from './user-card___control-section/user-card___control-section.jsx';
import UserCardDataSection from './user-card__data-section/user-card__data-section.jsx';

export default function UserCard() {
  return (
    <section className="user-card">
      <UserCardControlSection />
      <UserCardDataSection />
    </section>
  );
}
