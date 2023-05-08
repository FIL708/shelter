import { Button } from '../../index.js';
import './user-card___control-section.css';

export default function UserCardControlSection({ userId, avatar, role }) {
  const userRole = role === 'admin' ? `Admin: ${userId}` : `User: ${userId}`;
  return (
    <div className="user-card__control-section">
      <img src={avatar} alt="user avatar" />
      <span className="user-card__control-section__id">{userRole}</span>
      <Button />
      <Button />
      <Button />
    </div>
  );
}
