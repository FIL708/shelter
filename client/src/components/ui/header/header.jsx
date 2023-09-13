import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Nav, Hamburger } from 'components/ui';
import { IconButton } from 'components/form';
import { useWindowSize } from 'hooks';
import { UserContext } from '../../..';

import logo from './assets/logo.svg';
import './header.css';

export default function Header() {
  const { user, serverUrl } = useContext(UserContext);

  const { width } = useWindowSize();
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

      {width > 1024 ? (
        <Nav logoutHandler={logoutHandler} user={user} />
      ) : (
        <>
          <IconButton
            color="#fff2f2"
            type="burger"
            iconSize="25px"
            onClick={toggleHamburger}
          />
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
