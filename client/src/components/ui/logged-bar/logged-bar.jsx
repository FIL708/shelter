import { useState } from 'react';
import { UserNavbar } from '..';
import './logged-bar.css';

export default function LoggedBar({ id, avatar, role, logoutHandler }) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNavVisibility = () => setIsNavVisible((prev) => !prev);
  const photo =
    avatar ||
    'https://tleliteracy.com/wp-content/uploads/2017/02/default-avatar.png';
  return (
    <button
      className="user-logged-bar"
      type="button"
      onClick={toggleNavVisibility}
    >
      <img src={photo} alt="user avatar" className="user-logged-bar__avatar" />
      <UserNavbar
        userId={id}
        userRole={role}
        logoutHandler={logoutHandler}
        visible={isNavVisible}
      />
    </button>
  );
}
