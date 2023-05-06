import './pet-gallery__list.css';

export default function PetGalleryList({ gallery, main, setPhotoAsMain }) {
  return (
    <ul className="pet-gallery__list">
      {gallery.map((photo) => {
        const className =
          photo.url === main
            ? 'pet-gallery__list-item main-photo'
            : 'pet-gallery__list-item';

        return (
          <li className={className} key={photo.id}>
            <button
              type="button"
              className="pet-gallery__list-item__button"
              onClick={() => setPhotoAsMain(photo.url)}
            >
              <img
                src={photo.url}
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
