import { useState } from 'react';
import NavUserPanel from '../nav__user-panel/user-navbar.jsx';
import './nav__avatar.css';

export default function NavAvatar({ id, avatar, role, logoutHandler, email }) {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const togglePanelVisibility = () => setIsPanelVisible((prev) => !prev);
  const photo =
    avatar ||
    'https://tleliteracy.com/wp-content/uploads/2017/02/default-avatar.png';
  return (
    <div className="nav__avatar">
      <button
        className="nav__avatar__button"
        type="button"
        onClick={togglePanelVisibility}
      >
        <img src={photo} alt="user avatar" className="nav__avatar__avatar" />
      </button>
      <NavUserPanel
        userEmail={email}
        userId={id}
        userRole={role}
        logoutHandler={logoutHandler}
        visible={isPanelVisible}
      />
    </div>
  );
}
