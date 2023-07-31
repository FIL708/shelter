import './adoption-form__preview.css';

export default function AdoptionFormPreview({ images }) {
  if (!images) return false;
  return (
    <div>
      {images.map((image) => (
        <img key={image.url} src={image.url} alt="adoption preview" />
      ))}
    </div>
  );
}
