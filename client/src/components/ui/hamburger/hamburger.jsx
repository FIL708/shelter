import HamburgerLink from './hamburger__link/hamburger__link.jsx';
import HamburgerMain from './hamburger__main-links/hamburger__main-links.jsx';
import HamburgerUserPanel from './hamburger__user-panel/hamburger__user-panel.jsx';

export default function Hamburger({ user, logoutHandler }) {
  console.log(user, logoutHandler);

  return (
    <nav className="hamburger">
      <HamburgerMain />
      <ul>
        <HamburgerLink text="Signup" to="/signup">
          Signup
        </HamburgerLink>
        <HamburgerLink text="Login" to="/login">
          Login
        </HamburgerLink>
      </ul>
      <HamburgerUserPanel user={user} />
    </nav>
  );
}
