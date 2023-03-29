import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="navbar__link navbar__home" to="/">
        Home
      </NavLink>
      <NavLink className="navbar__link navbar__adoption" to="/adoption">
        Adoption
      </NavLink>
      <NavLink className="navbar__link navbar__gallery" to="/gallery">
        Gallery
      </NavLink>
      <NavLink className="navbar__link navbar__contact" to="/contact">
        Contact
      </NavLink>
      <NavLink className="navbar__link navbar__signup" to="/signup">
        Signup
      </NavLink>
      <NavLink className="navbar__link navbar__login" to="/login">
        Login
      </NavLink>
    </nav>
  );
}
