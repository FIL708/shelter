import PetGalleryList from './pet-gallery__list/pet-gallery__list.jsx';
import './pet-gallery.css';

export default function PetGallery({ gallery }) {
  return (
    <section className="pet-gallery">
      <div className="pet-gallery__main">
        <img
          src={gallery[0]}
          alt="pet gallery main"
          className="pet-gallery__main-photo"
        />
      </div>
      <PetGalleryList gallery={gallery} />
    </section>
  );
}
