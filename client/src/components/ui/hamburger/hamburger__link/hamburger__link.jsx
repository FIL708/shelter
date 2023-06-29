import { NavLink } from 'react-router-dom';

import './hamburger__link.css';

export default function HamburgerLink({ text, to }) {
  return (
    <li className="hamburger__link__list-item">
      <NavLink className="hamburger__link" to={to}>
        {text}
      </NavLink>
    </li>
  );
}
