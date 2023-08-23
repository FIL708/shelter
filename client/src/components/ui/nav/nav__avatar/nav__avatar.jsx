import { useState } from 'react';
import { Avatar } from 'components/ui';
import NavUserPanel from '../nav__user-panel/nav__user-panel.jsx';
import './nav__avatar.css';

export default function NavAvatar({ id, avatar, role, logoutHandler, email }) {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const togglePanelVisibility = () => setIsPanelVisible((prev) => !prev);

  return (
    <div className="nav__avatar">
      <button
        className="nav__avatar__button"
        type="button"
        onClick={togglePanelVisibility}
      >
        <Avatar photo={avatar} />
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
