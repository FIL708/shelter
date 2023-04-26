import './pet-gallery__list.css';

export default function PetGalleryList({ gallery, main }) {
  return (
    <ul className="pet-gallery__list">
      {gallery.map((photo) => {
        const className =
          photo === main
            ? 'pet-gallery__list-item main-photo'
            : 'pet-gallery__list-item';
        return (
          <li className={className} key={photo}>
            <img
              src={photo}
              alt="pet gallery list item"
              className="pet-gallery__list-item__photo"
            />
          </li>
        );
      })}
    </ul>
  );
}
