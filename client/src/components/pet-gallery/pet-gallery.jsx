import { useState } from 'react';
import PetGalleryList from './pet-gallery__list/pet-gallery__list.jsx';
import './pet-gallery.css';

export default function PetGallery({ gallery }) {
  const [mainPhoto, setMainPhoto] = useState(gallery[0]);
  console.log(setMainPhoto);

  return (
    <section className="pet-gallery">
      <div className="pet-gallery__main">
        <img
          src={mainPhoto}
          alt="pet gallery main"
          className="pet-gallery__main-photo"
        />
      </div>
      <PetGalleryList gallery={gallery} main={mainPhoto} />
    </section>
  );
}
