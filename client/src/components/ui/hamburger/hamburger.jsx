import { NavLink } from 'react-router-dom';

import HamburgerMain from './hamburger__main-links/hamburger__main-links.jsx';

export default function Hamburger({ user, logoutHandler }) {
  console.log(user, logoutHandler);

  return (
    <nav className="hamburger">
      <HamburgerMain />
      <ul>
        <NavLink className="hamburger__link" to="/signup">
          Signup
        </NavLink>
        <NavLink className="hamburger__link" to="/login">
          Login
        </NavLink>
      </ul>
    </nav>
  );
}
