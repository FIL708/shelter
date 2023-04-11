import { Link } from 'react-router-dom';
import './error-card.css';

export default function ErrorCard({ errorCode, errorMessage }) {
  return (
    <section className="error-card">
      <h1 className="error-card__header">Oops!</h1>
      <h3 className="error-card__code">{errorCode}</h3>
      <p className="error-card__message">{errorMessage}</p>
      <Link to="/" className="error-card__link">
        Back to Home page
      </Link>
    </section>
  );
}
