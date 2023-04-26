import './pet-gallery__list.css';

export default function PetGalleryList({ gallery }) {
  return (
    <ul className="pet-gallery__list">
      {gallery.map((photo) => (
        <li className="pet-gallery__list-item" key={photo}>
          <img
            src={photo}
            alt="pet gallery list item"
            className="pet-gallery__list-item__photo"
          />
        </li>
      ))}
    </ul>
  );
}
