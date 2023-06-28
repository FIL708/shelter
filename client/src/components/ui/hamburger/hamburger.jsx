import { NavLink } from 'react-router-dom';

export default function Hamburger() {
  return (
    <nav className="hamburger">
      <NavLink className="hamburger__link" to="/test">
        Development
      </NavLink>
      <NavLink className="hamburger__link" to="/">
        Home
      </NavLink>
      <NavLink className="hamburger__link" to="/adoptions">
        Adoptions
      </NavLink>
      <NavLink className="hamburger__link" to="/gallery">
        Gallery
      </NavLink>
      <NavLink className="hamburger__link" to="/contact">
        Contact
      </NavLink>

      <NavLink className="hamburger__link" to="/signup">
        Signup
      </NavLink>
      <NavLink className="hamburger__link" to="/login">
        Login
      </NavLink>
    </nav>
  );
}
