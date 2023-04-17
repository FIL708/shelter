import './user-navbar.css';

import { Link } from 'react-router-dom';

export default function UserNavbar({ userRole }) {
  if (!userRole) return false;
  const userNavItems =
    userRole === 'admin'
      ? [
          { linkName: 'Users', link: '/users' },
          { linkName: 'Pets', link: '/pets' },
          { linkName: 'Messages', link: '/messages' },
          { linkName: 'My Profile', link: '/profile' },
        ]
      : [
          { linkName: 'Favorites pets', link: '/favorites' },
          { linkName: 'Messages', link: '/messages' },
          { linkName: 'My Profile', link: '/profile' },
        ];

  console.log(userNavItems);

  return (
    <nav className="user-navbar">
      {userNavItems.map((item) => (
        <li className="user-navbar__item" key={item.linkName}>
          <Link to={item.link}>{item.linkName}</Link>
        </li>
      ))}
      <li className="user-navbar__item">
        <button type="button" className="user-navbar__logout">
          Logout
        </button>
      </li>
    </nav>
  );
}
