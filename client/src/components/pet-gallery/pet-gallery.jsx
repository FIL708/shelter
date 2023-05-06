import { useState } from 'react';
import { Button } from '../index.js';
import PetGalleryList from './pet-gallery__list/pet-gallery__list.jsx';
import './pet-gallery.css';

export default function PetGallery({ gallery, photos }) {
  const [mainPhoto, setMainPhoto] = useState(photos[0].url);

  const setPhotoAsMain = (url) => setMainPhoto(url);

  const setNextPhoto = () => {
    const index = photos.findIndex((photo) => photo.url === mainPhoto);
    console.log(index);

    // if (index + 2 > gallery.length) {
    //   setMainPhoto(gallery[0]);
    // } else {
    //   setMainPhoto(gallery[index + 1]);
    // }
  };
  const setPreviousPhoto = () => {
    const index = gallery.indexOf(mainPhoto);
    if (index - 1 < 0) {
      setMainPhoto(gallery[gallery.length - 1]);
    } else {
      setMainPhoto(gallery[index - 1]);
    }
  };

  return (
    <section className="pet-gallery">
      <div className="pet-gallery__main">
        <Button
          iconType="arrow-left"
          iconFill="#7286d3"
          iconSize="35px"
          onClick={setPreviousPhoto}
        />
        <img
          src={mainPhoto}
          alt="pet gallery main"
          className="pet-gallery__main-photo"
        />
        <Button
          iconType="arrow-right"
          iconFill="#7286d3"
          iconSize="35px"
          onClick={setNextPhoto}
        />
      </div>
      <PetGalleryList
        gallery={photos}
        main={mainPhoto}
        setPhotoAsMain={setPhotoAsMain}
      />
    </section>
  );
}
