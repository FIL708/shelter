import './pet-gallery__list.css';

export default function PetGalleryList({ gallery }) {
  return (
    <ul className="pet-gallery__list">
      {gallery.map((photo) => (
        <li className="pet-gallery__list-item">
          <img src={photo} alt="pet gallery list item" />
        </li>
      ))}
    </ul>
  );
}
