import { useState } from 'react';
import { Button } from '../index.js';
import PetGalleryList from './pet-gallery__list/pet-gallery__list.jsx';
import './pet-gallery.css';

export default function PetGallery({ gallery }) {
  const [mainPhoto, setMainPhoto] = useState(gallery[0]);
  console.log(mainPhoto);

  const setPhotoAsMain = (url) => setMainPhoto(url);

  return (
    <section className="pet-gallery">
      <div className="pet-gallery__main">
        <Button
          iconType="arrow"
          iconFill="#7286d3"
          iconSize="40px"
          className="pet-gallery__button left"
        />
        <img
          src={mainPhoto}
          alt="pet gallery main"
          className="pet-gallery__main-photo"
        />
        <Button
          iconType="arrow"
          iconFill="#7286d3"
          iconSize="40px"
          className="pet-gallery__button right"
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
