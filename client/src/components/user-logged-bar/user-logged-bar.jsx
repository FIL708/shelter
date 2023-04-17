import { Button } from '../index.js';
import './user-logged-bar.css';

export default function UserLoggedBar({ photo, role, email }) {
  return (
    <div className="user-logged-bar">
      <img src={photo} alt="user avatar" className="user-logged-bar__avatar" />
      {`${role}: ${email}`}
      <Button />
    </div>
  );
}
