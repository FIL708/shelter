import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Hamburger } from '..';

import logo from './assets/logo.svg';
import './header.css';

export default function Header() {
  const temporary = false;
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);
  const toggleHamburger = () => {
    setIsHamburgerVisible((prev) => !prev);
  };
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
      {temporary ? (
        <Nav />
      ) : (
        <Hamburger
          toggleHamburger={toggleHamburger}
          isVisible={isHamburgerVisible}
        />
      )}
    </header>
  );
}
