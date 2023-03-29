export default function ErrorCard({ errorCode, errorMessage }) {
  return (
    <section className="error-card">
      <h1 className="error-card__header">Oops!</h1>
      <h3 className="error-card__code">{errorCode}</h3>
      <p className="error-card__message">{errorMessage}</p>
    </section>
  );
}
