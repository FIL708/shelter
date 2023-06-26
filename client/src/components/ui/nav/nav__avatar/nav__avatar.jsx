import { useState } from 'react';
import NavUserPanel from '../nav__user-panel/user-navbar.jsx';
import './nav__avatar.css';

export default function NavAvatar({ id, avatar, role, logoutHandler, email }) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNavVisibility = () => setIsNavVisible((prev) => !prev);
  const photo =
    avatar ||
    'https://tleliteracy.com/wp-content/uploads/2017/02/default-avatar.png';
  return (
    <div className="user-logged-bar">
      <button
        className="user-logged-bar__button"
        type="button"
        onClick={toggleNavVisibility}
      >
        <img
          src={photo}
          alt="user avatar"
          className="user-logged-bar__avatar"
        />
      </button>
      <NavUserPanel
        userEmail={email}
        userId={id}
        userRole={role}
        logoutHandler={logoutHandler}
        visible={isNavVisible}
      />
    </div>
  );
}
