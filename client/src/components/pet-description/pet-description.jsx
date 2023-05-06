import './pet-description.css';

export default function PetDescription({ text }) {
  if (!text) return false;
  const paragraphArray = text.split('\n');
  return (
    <section className="pet-description">
      {paragraphArray.map((paragraph) => (
        <p key={paragraph} className="pet-description__paragraph">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
