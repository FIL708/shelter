import HamburgerLink from '../hamburger__link/hamburger__link.jsx';

export default function HamburgerMain() {
  return (
    <ul className="hamburger__main">
      <HamburgerLink text="Development" to="/test" />
      <HamburgerLink text="Home" to="/" />
      <HamburgerLink text="Adoptions" to="/adoptions" />
      <HamburgerLink text="Gallery" to="/gallery" />
      <HamburgerLink text="Contact" to="/contact" />
    </ul>
  );
}
