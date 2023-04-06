import { Button } from '../index.js';
import './modal-wrapper.css';

export default function ModalWrapper({ children }) {
  return (
    <dialog className="modal-wrapper">
      <Button
        className="modal-wrapper__button"
        iconType="exit"
        iconSize="30px"
        iconFill="#fff2f2"
      />
      {children}
    </dialog>
  );
}
