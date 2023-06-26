import { useState } from 'react';
import { UserNavbar } from '..';
import './logged-bar.css';

export default function LoggedBar({ id, avatar, role, logoutHandler, email }) {
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
      <UserNavbar
        userEmail={email}
        userId={id}
        userRole={role}
        logoutHandler={logoutHandler}
        visible={isNavVisible}
      />
    </div>
  );
}
