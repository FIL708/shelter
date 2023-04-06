import { GalleryCard } from '../index.js';
import './gallery-card__list.css';

export default function GalleryCardList({ photos }) {
  return (
    <ul className="gallery-card__list">
      {photos.map((photo) => (
        <GalleryCard url={photo.url} key={photo.id} />
      ))}
    </ul>
  );
}
