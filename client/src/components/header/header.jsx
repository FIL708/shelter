import logo from './assets/logo.svg';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
    </header>
  );
}
