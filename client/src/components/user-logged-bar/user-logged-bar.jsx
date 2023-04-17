import { useState } from 'react';
import { Button, UserNavbar } from '../index.js';
import './user-logged-bar.css';

export default function UserLoggedBar({ photo, email, role, logoutHandler }) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNavVisibility = () => setIsNavVisible((prev) => !prev);
  const avatar =
    photo ||
    'https://tleliteracy.com/wp-content/uploads/2017/02/default-avatar.png';
  return (
    <div className="user-logged-bar">
      <img src={avatar} alt="user avatar" className="user-logged-bar__avatar" />
      {email}
      <Button
        className="user-logged-bar__option-button"
        iconType="option"
        iconFill="#7286d3"
        iconSize="16px"
        onClick={toggleNavVisibility}
      />
      <UserNavbar
        userRole={role}
        logoutHandler={logoutHandler}
        visible={isNavVisible}
      />
    </div>
  );
}
