import './pet-gallery__list.css';

export default function PetGalleryList({ gallery, main, setPhotoAsMain }) {
  return (
    <ul className="pet-gallery__list">
      {gallery.map((photo) => {
        const className =
          photo === main
            ? 'pet-gallery__list-item main-photo'
            : 'pet-gallery__list-item';

        return (
          <li className={className} key={photo}>
            <button
              type="button"
              className="pet-gallery__list-item__button"
              onClick={() => setPhotoAsMain(photo)}
            >
              <img
                src={photo}
                alt="pet gallery list item"
                className="pet-gallery__list-item__photo"
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
