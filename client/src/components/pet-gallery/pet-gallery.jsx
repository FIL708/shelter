import './pet-gallery.css';

export default function PetGallery({ gallery }) {
  return (
    <section className="pet-gallery">
      <img
        src={gallery[0]}
        alt="pet gallery main"
        className="pet-gallery__main-photo"
      />
    </section>
  );
}
