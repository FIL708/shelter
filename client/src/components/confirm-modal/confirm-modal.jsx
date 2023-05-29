import { Subtitle, Textfield, Button, ModalWrapper } from '../index.js';
import './confirm-modal.css';

export default function ConfirmModal({
  title,
  question,
  textToConfirm,
  onConfirm,
  onCancel,
  isVisible,
  toggleModalVision,
  inputValue,
  onInputChange,
}) {
  return (
    <ModalWrapper isVisible={isVisible} toggleModalVision={toggleModalVision}>
      <form className="confirm-modal">
        <Subtitle text={title} />
        <p className="confirm-modal__question">{question}</p>
        {textToConfirm && (
          <Textfield
            className="confirm-modal__input"
            placeholder={`To confirm type: ${textToConfirm}`}
            required
            value={inputValue}
            onChange={onInputChange}
          />
        )}

        <div className="confirm-modal__buttons">
          <Button text="Confirm" onClick={onConfirm} />
          <Button className="cancel" text="Cancel" onClick={onCancel} />
        </div>
      </form>
    </ModalWrapper>
  );
}
