import { Button } from '../../index.js';
import './user-card___control-section.css';

export default function UserCardControlSection({ userId, avatar, role }) {
  const userRole =
    role === 'admin' ? `Admin ID: ${userId}` : `User ID: ${userId}`;
  return (
    <div className="user-card__control-section">
      <img
        src={avatar}
        alt="user avatar"
        className="user-card__control-section__avatar"
      />
      <span className="user-card__control-section__id">{userRole}</span>
      <Button text="Change password" className="outline" />
      <Button text="Update profile" className="outline" />
      <Button text="Delete account" className="outline red" />
    </div>
  );
}
