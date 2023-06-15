import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalWrapper } from '../../../../components/ui';

import './gallery-card.css';

export default function GalleryCard({ url, id }) {
  const [modalVision, setModalVision] = useState(false);
  const toggleModalVision = () => {
    setModalVision((prev) => !prev);
  };
  return (
    <li className="gallery-card">
      <button
        type="button"
        className="gallery-card__button"
        onClick={toggleModalVision}
      >
        <img src={url} alt="pet gallery" className="gallery-card__photo" />
        <p className="gallery-card__hover-text">Zooooom!</p>
      </button>
      <Link to={`/adoptions/${id}`} className="gallery-card__link">
        Go to details
      </Link>
      <ModalWrapper
        isVisible={modalVision}
        toggleModalVision={toggleModalVision}
      >
        <img
          src={url}
          alt="pet gallery preview"
          className="gallery-card__preview-photo"
        />
      </ModalWrapper>
    </li>
  );
}
