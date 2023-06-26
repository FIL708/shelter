import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../..';
import NavAvatar from './nav__avatar/nav__avatar.jsx';
import './nav.css';

export default function Nav() {
  const { user, serverUrl } = useContext(UserContext);

  const logoutHandler = () => {
    window.open(`${serverUrl}/api/auth/logout`, '_self');
  };

  return (
    <nav className="nav">
      <NavLink className="nav__link navbar__home" to="/test">
        Development
      </NavLink>
      <NavLink className="nav__link navbar__home" to="/">
        Home
      </NavLink>
      <NavLink className="nav__link navbar__adoption" to="/adoptions">
        Adoptions
      </NavLink>
      <NavLink className="nav__link navbar__gallery" to="/gallery">
        Gallery
      </NavLink>
      <NavLink className="nav__link navbar__contact" to="/contact">
        Contact
      </NavLink>

      <hr className="nav-divider" />

      {user ? (
        <NavAvatar {...user} logoutHandler={logoutHandler} />
      ) : (
        <>
          <NavLink className="nav__link nav__signup" to="/signup">
            Signup
          </NavLink>
          <NavLink className="nav__link nav__login" to="/login">
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
}
