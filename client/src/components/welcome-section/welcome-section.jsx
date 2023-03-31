import './welcome-section.css';

import logo from './assets/logo.svg';

import { Subtitle } from '../index.js';

export default function WelcomeSection() {
  return (
    <section className="welcome-section">
      <img
        src={logo}
        alt="welcome section logo"
        className="welcome-section__logo"
      />
      <Subtitle title="Welcome!" />
      <p className="welcome-section__note">
        Lorem ipsum dolor sit amet consectetur. Neque scelerisque enim tempor
        cras cras. Vitae id viverra pretium felis feugiat id pulvinar maecenas
        commodo. Habitant congue pellentesque gravida faucibus habitasse.
        Fermentum sed rutrum nisi tincidunt eget dignissim.
      </p>
    </section>
  );
}
