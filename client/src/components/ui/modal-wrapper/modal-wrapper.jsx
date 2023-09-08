import { Button } from 'components/form';
import './modal-wrapper.css';
import { AnimatePresence, motion } from 'framer-motion';

export default function ModalWrapper({
  children,
  isVisible,
  toggleModalVision,
}) {
  if (!isVisible) return false;

  return (
    <AnimatePresence>
      <motion.dialog
        className="modal-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          className="modal-wrapper__button"
          iconType="exit"
          iconSize="30px"
          iconFill="#fff2f2"
          onClick={toggleModalVision}
        />
        {children}
      </motion.dialog>
    </AnimatePresence>
  );
}
