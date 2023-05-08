import { HomeCard } from '../index.js';
import './home__mission-section.css';
import care from './assets/care.png';
import feed from './assets/feed.png';
import find from './assets/find.png';
import help from './assets/help.png';
import treat from './assets/treat.png';

export default function HomeMissionSection() {
  return (
    <ul className="home__mission-section">
      <HomeCard
        photo={help}
        title="help"
        text="HelpMeDude! strives to improve the lives of homeless pets by connecting them with loving families and creating a compassionate community dedicated to animal welfare."
      />
      <HomeCard
        photo={care}
        title="care"
        text="We take pride in providing the highest level of care and attention to each and every pet in our program, ensuring that they receive the medical attention, nutrition, and socialization they need to thrive and find their forever homes."
      />
      <HomeCard
        photo={treat}
        title="treat"
        text="The health and well-being of our pets is a top priority at HelpMeDude!. We provide all necessary medical treatment, including vaccinations, spaying/neutering, and any other required procedures."
      />
      <HomeCard
        photo={feed}
        title="feed"
        text="Feeding our pets a healthy and nutritious diet is essential to their overall health and well-being, which is why at HelpMeDude!, we take great care to provide our furry friends with high-quality pet food that meets their specific nutritional needs."
      />
      <HomeCard
        photo={find}
        title="find new home"
        text="Our ultimate mission is to find each of our furry friends their perfect forever home, where they can receive the love, care, and attention they deserve. We believe that every pet deserves a second chance at happiness, and we work tirelessly to connect them with loving families."
      />
    </ul>
  );
}
