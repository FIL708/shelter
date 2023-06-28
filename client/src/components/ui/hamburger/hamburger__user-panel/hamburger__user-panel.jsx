import HamburgerLink from '../hamburger__link/hamburger__link.jsx';

import './hamburger__user-panel.css';

export default function HamburgerUserPanel({ user }) {
  const panelItems =
    user.role === 'admin'
      ? [
          { linkName: 'Users', link: '/users' },
          { linkName: 'Pets', link: '/pets' },
          { linkName: 'Messages', link: '/messages' },
          { linkName: 'My Profile', link: `/profile/${user.id}` },
        ]
      : [
          { linkName: 'Favorites pets', link: '/favorites' },
          { linkName: 'Messages', link: '/messages' },
          { linkName: 'My Profile', link: `/profile/${user.id}` },
        ];

  return (
    <>
      <li className="hamburger__user-panel__user">
        <img
          src={user.avatar}
          alt="user avatar"
          className="hamburger__user-panel__avatar"
        />
        <h4 className="hamburger__user-panel__email">{user.email}</h4>
      </li>
      {panelItems.map((item) => (
        <HamburgerLink
          text={item.linkName}
          to={item.link}
          key={item.linkName}
        />
      ))}
    </>
  );
}
