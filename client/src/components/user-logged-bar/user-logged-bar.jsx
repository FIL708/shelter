import { Button } from '../index.js';
import './user-logged-bar.css';

export default function UserLoggedBar({ photo, email }) {
  return (
    <div className="user-logged-bar">
      <img src={photo} alt="user avatar" className="user-logged-bar__avatar" />
      {email}
      <Button
        className="user-logged-bar__option-button"
        iconType="option"
        iconFill="#7286d3"
        iconSize="18px"
      />
    </div>
  );
}
