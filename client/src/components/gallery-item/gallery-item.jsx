import { Link } from 'react-router-dom';

import './gallery-item.css';

export default function GalleryItem({ url }) {
  return (
    <ul className="gallery-item">
      <button type="button" className="gallery-item__button">
        <img src={url} alt="pet gallery" className="gallery-item__photo" />
      </button>
      <Link to="/" />
    </ul>
  );
}
