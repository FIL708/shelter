import { Subtitle } from '../index.js';

import './home-card.css';

export default function HomeCard({ photo, title, text, vertical }) {
  const cardClassName = vertical ? 'home-card vertical' : 'home-card';
  return (
    <li className={cardClassName}>
      <img src={photo} alt={title} className="home-card__photo" />
      <div className="home-card__content">
        <Subtitle text={title} />
        <p className="home-card__text">{text}</p>
      </div>
    </li>
  );
}