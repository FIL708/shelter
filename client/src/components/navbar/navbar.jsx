import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../..';
import { UserLoggedBar } from '..';
import './navbar.css';

export default function Navbar() {
  const { user, serverUrl } = useContext(UserContext);
  const logoutHandler = () => {
    window.open(`${serverUrl}/api/auth/logout`, '_self');
  };

  return (
    <nav className="navbar">
      <NavLink className="navbar__link navbar__home" to="/test">
        Development
      </NavLink>
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

      {user ? (
        <UserLoggedBar {...user} logoutHandler={logoutHandler} />
      ) : (
        <>
          <NavLink className="navbar__link navbar__signup" to="/signup">
            Signup
          </NavLink>
          <NavLink className="navbar__link navbar__login" to="/login">
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
}
