import { AnimatePresence, motion } from 'framer-motion';
import { IconButton } from 'components/form';
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
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="hamburger"
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          exit={{ x: 500 }}
          transition={{ type: 'Tween', duration: 0.4 }}
        >
          <IconButton
            type="back"
            size="35px"
            color="#4B4B4B"
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
