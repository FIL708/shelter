import { NavLink } from 'react-router-dom';

export default function Hamburger({ user, logoutHandler }) {
  console.log(user, logoutHandler);

  return (
    <nav className="hamburger">
      <ul>
        <li className="hamburger__list-item">
          <NavLink className="hamburger__link" to="/test">
            Development
          </NavLink>
        </li>
        <li className="hamburger__list-item">
          <NavLink className="hamburger__link" to="/">
            Home
          </NavLink>
        </li>
        <li className="hamburger__list-item">
          <NavLink className="hamburger__link" to="/adoptions">
            Adoptions
          </NavLink>
        </li>
        <li className="hamburger__list-item">
          <NavLink className="hamburger__link" to="/gallery">
            Gallery
          </NavLink>
        </li>
        <li className="hamburger__list-item">
          <NavLink className="hamburger__link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
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
