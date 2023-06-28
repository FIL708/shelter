import { Button } from '../../form';
import HamburgerLink from './hamburger__link/hamburger__link.jsx';
import HamburgerMain from './hamburger__main-links/hamburger__main-links.jsx';
import HamburgerUserPanel from './hamburger__user-panel/hamburger__user-panel.jsx';

import './hamburger.css';

export default function Hamburger({
  user,
  logoutHandler,
  toggleHamburger,
  isVisible,
}) {
  if (!isVisible) return false;

  return (
    <nav className="hamburger">
      <Button
        iconType="back"
        iconSize="35px"
        iconFill="#4B4B4B"
        className="hamburger__back-button"
        onClick={toggleHamburger}
      />
      <ul className="hamburger__list">
        <HamburgerMain />
      </ul>

      <hr className="hamburger__divider" />

      <ul className="hamburger__list">
        {user ? (
          <HamburgerUserPanel user={user} logoutHandler={logoutHandler} />
        ) : (
          <>
            <HamburgerLink text="Signup" to="/signup">
              Signup
            </HamburgerLink>
            <HamburgerLink text="Login" to="/login">
              Login
            </HamburgerLink>
          </>
        )}
      </ul>
    </nav>
  );
}
