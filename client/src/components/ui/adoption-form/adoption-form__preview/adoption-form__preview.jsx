import './adoption-form__preview.css';

export default function AdoptionFormPreview({ images }) {
  if (!images) return false;
  return (
    <div className="adoption-form__preview">
      <p className="adoption-form__preview__label">Preview:</p>
      <div className="adoption-form__preview__images">
        {images.map((image) => (
          <img
            className="adoption-form__preview__image"
            key={image.url}
            src={image.url}
            alt="adoption preview"
          />
        ))}
      </div>
    </div>
  );
}
