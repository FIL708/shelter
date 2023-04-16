import { HomeCard } from '../index.js';
import './home__goals-section.css';

export default function HomeGoalsSection() {
  return (
    <section className="home__goals-section">
      <HomeCard title="adoption" />
      <HomeCard title="donations" />
      <HomeCard title="food" />
    </section>
  );
}
