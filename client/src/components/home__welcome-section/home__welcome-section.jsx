import './home__welcome-section.css';

import logo from './assets/logo.svg';

import { Subtitle } from '../index.js';

export default function HomeWelcomeSection() {
  return (
    <section className="home__welcome-section">
      <img
        src={logo}
        alt="welcome section logo"
        className="home__welcome-section__logo"
      />
      <Subtitle title="Welcome!" />
      <p className="home__welcome-section__note">
        Lorem ipsum dolor sit amet consectetur. Neque scelerisque enim tempor
        cras cras. Vitae id viverra pretium felis feugiat id pulvinar maecenas
        commodo. Habitant congue pellentesque gravida faucibus habitasse.
        Fermentum sed rutrum nisi tincidunt eget dignissim.
      </p>
    </section>
  );
}
