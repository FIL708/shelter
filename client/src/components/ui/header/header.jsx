import { Link } from 'react-router-dom';
import { Navbar } from '..';

import logo from './assets/logo.svg';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
      <Navbar />
    </header>
  );
}