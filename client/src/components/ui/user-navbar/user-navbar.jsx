import './user-navbar.css';

import { NavLink } from 'react-router-dom';

export default function UserNavbar({
  userId,
  userRole,
  logoutHandler,
  visible,
}) {
  if (!visible) return false;

  const userNavItems =
    userRole === 'admin'
      ? [
          { linkName: 'Users', link: '/users' },
          { linkName: 'Pets', link: '/pets' },
          { linkName: 'Messages', link: '/messages' },
          { linkName: 'My Profile', link: `/users/${userId}` },
        ]
      : [
          { linkName: 'Favorites pets', link: '/favorites' },
          { linkName: 'Messages', link: '/messages' },
          { linkName: 'My Profile', link: `/users/${userId}` },
        ];

  return (
    <nav className="user-navbar">
      {userNavItems.map((item) => (
        <li className="user-navbar__item" key={item.linkName}>
          <NavLink to={item.link}>{item.linkName}</NavLink>
        </li>
      ))}
      <li className="user-navbar__item">
        <button
          type="button"
          className="user-navbar__logout"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </li>
    </nav>
  );
}
