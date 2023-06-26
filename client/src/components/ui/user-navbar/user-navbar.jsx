import './user-navbar.css';

import { NavLink } from 'react-router-dom';

export default function UserNavbar({
  userId,
  userRole,
  userEmail,
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
          { linkName: 'My Profile', link: `/profile/${userId}` },
        ]
      : [
          { linkName: 'Favorites pets', link: '/favorites' },
          { linkName: 'Messages', link: '/messages' },
          { linkName: 'My Profile', link: `/profile/${userId}` },
        ];

  return (
    <nav className="user-navbar">
      <li className="user-navbar__email">{userEmail}</li>
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
