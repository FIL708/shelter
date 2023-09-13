import { useState } from 'react';
import { IconButton } from 'components/form';
import PetGalleryList from './pet-gallery__list/pet-gallery__list.jsx';
import './pet-gallery.css';

export default function PetGallery({ photos }) {
  if (!photos) return false;

  const [mainPhoto, setMainPhoto] = useState(photos[0].url);

  const setPhotoAsMain = (url) => setMainPhoto(url);

  const setNextPhoto = () => {
    const index = photos.findIndex((photo) => photo.url === mainPhoto);

    if (index + 2 > photos.length) {
      setMainPhoto(photos[0].url);
    } else {
      setMainPhoto(photos[index + 1].url);
    }
  };

  const setPreviousPhoto = () => {
    const index = photos.findIndex((photo) => photo.url === mainPhoto);

    if (index - 1 < 0) {
      setMainPhoto(photos[photos.length - 1].url);
    } else {
      setMainPhoto(photos[index - 1].url);
    }
  };

  return (
    <section className="pet-gallery">
      <div className="pet-gallery__main">
        <IconButton type="arrow-left" size="30px" onClick={setPreviousPhoto} />
        <img
          src={mainPhoto}
          alt="pet gallery main"
          className="pet-gallery__main-photo"
        />
        <IconButton type="arrow-right" size="30px" onClick={setNextPhoto} />
      </div>
      <PetGalleryList
        gallery={photos}
        main={mainPhoto}
        setPhotoAsMain={setPhotoAsMain}
      />
    </section>
  );
}
