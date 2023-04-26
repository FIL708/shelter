import { useState } from 'react';
import { Button } from '../index.js';
import PetGalleryList from './pet-gallery__list/pet-gallery__list.jsx';
import './pet-gallery.css';

export default function PetGallery({ gallery }) {
  const [mainPhoto, setMainPhoto] = useState(gallery[0]);

  const setPhotoAsMain = (url) => setMainPhoto(url);

  return (
    <section className="pet-gallery">
      <div className="pet-gallery__main">
        <Button iconType="arrow-left" iconFill="#7286d3" iconSize="35px" />
        <img
          src={mainPhoto}
          alt="pet gallery main"
          className="pet-gallery__main-photo"
        />
        <Button iconType="arrow-right" iconFill="#7286d3" iconSize="35px" />
      </div>
      <PetGalleryList
        gallery={gallery}
        main={mainPhoto}
        setPhotoAsMain={setPhotoAsMain}
      />
    </section>
  );
}
