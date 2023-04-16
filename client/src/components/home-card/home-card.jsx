import { Subtitle } from '../index.js';

import './home-card.css';

export default function HomeCard({ url, title, text }) {
  return (
    <li className="home-card">
      <img src={url} alt={title} />
      <Subtitle>{title}</Subtitle>
      <p className="home-card__text">{text}</p>
    </li>
  );
}
