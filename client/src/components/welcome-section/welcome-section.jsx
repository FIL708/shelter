import './welcome-section.css';

import logo from './assets/logo.svg';

export default function WelcomeSection() {
  return (
    <section className="welcome-section">
      <img src={logo} alt="welcome section logo" />
    </section>
  );
}
