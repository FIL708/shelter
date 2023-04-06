import './modal-wrapper.css';

export default function ModalWrapper({ children }) {
  return <dialog className="modal-wrapper">{children}</dialog>;
}
