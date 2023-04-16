import { HomeCard } from '../index.js';
import './home__goals-section.css';
import adoptions from './assets/adoptions.png';
import donations from './assets/donations.png';
import food from './assets/food.png';

export default function HomeGoalsSection() {
  return (
    <ul className="home__goals-section">
      <HomeCard
        title="adoption"
        photo={adoptions}
        text="Lorem ipsum dolor sit amet consectetur. Netus integer bibendum at pharetra leo nisl."
        vertical
      />
      <HomeCard
        title="donations"
        photo={donations}
        text="Lorem ipsum dolor sit amet consectetur. Netus integer bibendum at pharetra leo nisl."
        vertical
      />
      <HomeCard
        title="food"
        photo={food}
        text="Lorem ipsum dolor sit amet consectetur. Netus integer bibendum at pharetra leo nisl."
        vertical
      />
    </ul>
  );
}
