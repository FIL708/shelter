import './alert.css';

export default function Alert({ variant, message }) {
  return (
    <aside className="alert">
      <h4 className="alert__header">{variant}</h4>
      <strong className="alert__message">{message}</strong>
    </aside>
  );
}
