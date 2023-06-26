import './nav__user-panel.css';

import { NavLink } from 'react-router-dom';

export default function NavUserPanel({
  userId,
  userRole,
  userEmail,
  logoutHandler,
  visible,
}) {
  if (!visible) return false;

  const panelItems =
    userRole === 'admin'
      ? [
          { linkName: 'Users', link: '/users' },
          { linkName: 'Pets', link: '/pets' },
          { linkName: 'Messages', link: '/messages' },
          { linkName: 'My Profile', link: `/profile/${userId}` },
        ]
      : [
          { linkName: 'Favorites pets', link: '/favorites' },
          { linkName: 'Messages', link: '/messages' },
          { linkName: 'My Profile', link: `/profile/${userId}` },
        ];

  return (
    <nav className="nav__user-panel">
      <h4 className="nav__user-panel__email">{userEmail}</h4>
      <ul className="nav__user-panel__list">
        {panelItems.map((item) => (
          <li className="nav__user-panel__item" key={item.linkName}>
            <NavLink to={item.link}>{item.linkName}</NavLink>
          </li>
        ))}
        <li className="nav__user-panel__item">
          <button
            type="button"
            className="nav__user-panel__logout"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
