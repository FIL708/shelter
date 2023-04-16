import { Subtitle } from '../index.js';

import './home-card.css';

export default function HomeCard({ url, title, text, horizontal }) {
  const cardClassName = horizontal ? 'home-card horizontal' : 'home-card';
  return (
    <li className={cardClassName}>
      <img src={url} alt={title} className="home-card__photo" />
      <div className="home-card__content">
        <Subtitle text={title} />
        <p className="home-card__text">{text}</p>
      </div>
    </li>
  );
}
