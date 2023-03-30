import './welcome-section.css';

import logo from './assets/logo.svg';

import { Subtitle } from '../index.js';

export default function WelcomeSection() {
  return (
    <section className="welcome-section">
      <img src={logo} alt="welcome section logo" />
      <Subtitle title="Welcome!" />
    </section>
  );
}
