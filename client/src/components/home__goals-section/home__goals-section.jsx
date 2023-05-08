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
        text="Adopting a pet means providing a loving home to an animal in need and gaining a loyal companion for life."
        vertical
      />
      <HomeCard
        title="donations"
        photo={donations}
        text="Your generous donations enable us to continue providing the highest level of care and support to our furry friends."
        vertical
      />
      <HomeCard
        title="food"
        photo={food}
        text="Donating pet food ensures that our furry friends receive the proper nutrition they need while in our care."
        vertical
      />
    </ul>
  );
}
