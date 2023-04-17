import './home-card.css';

export default function HomeCard({ photo, title, text, vertical }) {
  const cardClassName = vertical ? 'home-card vertical' : 'home-card';
  return (
    <li className={cardClassName}>
      <img src={photo} alt={title} className="home-card__photo" />
      <div className="home-card__content">
        <h3 className="home-card__title">{title}</h3>
        <p className="home-card__text">{text}</p>
      </div>
    </li>
  );
}
