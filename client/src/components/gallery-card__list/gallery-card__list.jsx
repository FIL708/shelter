import { GalleryCard } from '../index.js';
import './gallery-card__list.css';

export default function GalleryCardList({ photos }) {
  if (!photos) return false;
  return (
    <ul className="gallery-card__list">
      {photos.map((photo) => (
        <GalleryCard url={photo.url} key={photo.id} id={photo.id} />
      ))}
    </ul>
  );
}
