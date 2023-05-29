import { Subtitle, Textfield, Button } from '../index.js';
import './confirm-modal.css';

export default function ConfirmModal({ title, question, onConfirm }) {
  return (
    <div className="confirm-modal">
      <Subtitle text={title} />
      <p className="confirm-modal__question">{question}</p>
      <Textfield />
      <div className="confirm-modal__buttons">
        <Button text="Confirm" onClick={onConfirm} />
        <Button text="Cancel" />
      </div>
    </div>
  );
}
