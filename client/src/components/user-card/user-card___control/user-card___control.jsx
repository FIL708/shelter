import { Button } from '../../index.js';
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
  return (
    <div className="user-card__control">
      <img
        src={avatar}
        alt="user avatar"
        className="user-card__control__avatar"
      />
      <span className="user-card__control__id">{userRole}</span>
      <Button
        text="Change password"
        className="outline"
        onClick={changePassword}
      />
      <Button
        text="Update profile"
        className="outline"
        onClick={updateProfile}
      />
      <Button
        text="Delete account"
        className="outline red"
        onClick={deleteAccount}
      />
    </div>
  );
}
