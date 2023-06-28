import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../..';
import { Nav, Hamburger } from '..';
import { Button } from '../../form';

import logo from './assets/logo.svg';
import './header.css';

export default function Header() {
  const { user, serverUrl } = useContext(UserContext);

  const temporary = false;
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerVisible((prev) => !prev);
  };
  const logoutHandler = () => {
    window.open(`${serverUrl}/api/auth/logout`, '_self');
  };
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>

      {temporary ? (
        <Nav logoutHandler={logoutHandler} user={user} />
      ) : (
        <>
          <Button text="Hamburger" onClick={toggleHamburger} />
          <Hamburger
            user={user}
            isVisible={isHamburgerVisible}
            toggleHamburger={toggleHamburger}
            logoutHandler={logoutHandler}
          />
        </>
      )}
    </header>
  );
}
