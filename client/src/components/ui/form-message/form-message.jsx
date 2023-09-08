import { AnimatePresence, motion } from 'framer-motion';
import './form-message.css';

export default function FormMessage({
  text,
  isValid,
  bottom = 0,
  left = 0,
  width,
}) {
  const messageClassName = text ? 'form__message visible' : 'form__message';

  let validClassName = '';
  if (isValid === undefined) {
    validClassName = '';
  } else if (isValid) {
    validClassName = 'valid__message';
  } else {
    validClassName = 'not-valid__message';
  }

  const positionStyling =
    bottom || left ? { position: 'absolute', bottom, left } : {};
  const restStyling = width ? { width } : {};
  const styles = { ...positionStyling, ...restStyling };

  return (
    <AnimatePresence>
      {text && (
        <motion.p
          className={`${messageClassName} ${validClassName}`}
          style={styles}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
