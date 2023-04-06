import { Link } from 'react-router-dom';

import './gallery-card.css';

export default function GalleryCard({ url }) {
  return (
    <li className="gallery-item">
      <button type="button" className="gallery-item__button">
        <img src={url} alt="pet gallery" className="gallery-item__photo" />
        <p className="gallery-card__hover-text">Zooom!</p>
      </button>
      <Link to="/">Go to details</Link>
    </li>
  );
}
