import { useState } from 'react';
import PetGalleryList from './pet-gallery__list/pet-gallery__list.jsx';
import './pet-gallery.css';

export default function PetGallery({ gallery }) {
  const [mainPhoto, setMainPhoto] = useState(gallery[0]);
  console.log(mainPhoto);

  const setPhotoAsMain = (url) => setMainPhoto(url);

  return (
    <section className="pet-gallery">
      <div className="pet-gallery__main">
        <img
          src={mainPhoto}
          alt="pet gallery main"
          className="pet-gallery__main-photo"
        />
      </div>
      <PetGalleryList
        gallery={gallery}
        main={mainPhoto}
        setPhotoAsMain={setPhotoAsMain}
      />
    </section>
  );
}
