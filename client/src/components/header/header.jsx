import logo from './assets/logo.svg';
import './header.css';
import Navbar from '../navbar/navbar.jsx';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <Navbar />
    </header>
  );
}
