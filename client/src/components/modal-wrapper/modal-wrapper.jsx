import { Button } from '../index.js';
import './modal-wrapper.css';

export default function ModalWrapper({
  children,
  isVisible,
  toggleModalVision,
}) {
  const modalClassName = isVisible ? 'modal-wrapper' : 'invisible';

  return (
    <dialog className={modalClassName}>
      <Button
        className="modal-wrapper__button"
        iconType="exit"
        iconSize="30px"
        iconFill="#fff2f2"
        onClick={toggleModalVision}
      />
      {children}
    </dialog>
  );
}
