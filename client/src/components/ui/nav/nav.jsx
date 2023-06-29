import { NavLink } from 'react-router-dom';

import NavAvatar from './nav__avatar/nav__avatar.jsx';
import './nav.css';

export default function Nav({ logoutHandler, user }) {
  return (
    <nav className="nav">
      <NavLink className="nav__link" to="/test">
        Development
      </NavLink>
      <NavLink className="nav__link" to="/">
        Home
      </NavLink>
      <NavLink className="nav__link" to="/adoptions">
        Adoptions
      </NavLink>
      <NavLink className="nav__link" to="/gallery">
        Gallery
      </NavLink>
      <NavLink className="nav__link" to="/contact">
        Contact
      </NavLink>

      <hr className="nav-divider" />

      {user ? (
        <NavAvatar {...user} logoutHandler={logoutHandler} />
      ) : (
        <>
          <NavLink className="nav__link" to="/signup">
            Signup
          </NavLink>
          <NavLink className="nav__link" to="/login">
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
}
