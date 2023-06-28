import HamburgerLink from '../hamburger__link/hamburger__link.jsx';

export default function HamburgerMain() {
  return (
    <ul className="hamburger__main">
      <li className="hamburger__main__link">
        <HamburgerLink text="Development" to="/test" />
      </li>
      <li className="hamburger__main__link">
        <HamburgerLink text="Home" to="/" />
      </li>
      <li className="hamburger__main__link">
        <HamburgerLink text="Adoptions" to="/adoptions" />
      </li>
      <li className="hamburger__main__link">
        <HamburgerLink text="Gallery" to="/gallery" />
      </li>
      <li className="hamburger__main__link">
        <HamburgerLink text="Contact" to="/contact" />
      </li>
    </ul>
  );
}
