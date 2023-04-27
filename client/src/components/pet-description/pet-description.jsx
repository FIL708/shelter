import './pet-description.css';

export default function PetDescription({ text }) {
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
