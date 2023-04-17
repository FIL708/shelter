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
        text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />
      <HomeCard
        photo={care}
        title="care"
        text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />
      <HomeCard
        photo={treat}
        title="treat"
        text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />
      <HomeCard
        photo={feed}
        title="feed"
        text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />
      <HomeCard
        photo={find}
        title="find new home"
        text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />
    </ul>
  );
}
