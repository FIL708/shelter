import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from 'components/ui';
import './alert.css';

export default function Alert({ variant, message }) {
  let iconSettings = { glyph: '', color: '' };
  if (variant === 'success') {
    iconSettings = { glyph: 'alert-success', color: '#167230' };
  } else if (variant === 'warning') {
    iconSettings = { glyph: 'alert-warning', color: '#e2a405' };
  } else if (variant === 'error') {
    iconSettings = { glyph: 'alert-error', color: '#d14e4e' };
  } else {
    iconSettings = { glyph: 'alert-info', color: '#00abd8' };
  }

  return (
    <AnimatePresence>
      {message && (
        <motion.aside
          className={`alert alert__${variant}`}
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          exit={{ x: 400 }}
          transition={{ type: 'spring', stiffness: 100, duration: 0.4 }}
        >
          <h4 className="alert__header">
            <Icon
              type={iconSettings.glyph}
              fill={iconSettings.color}
              size="20px"
            />
            {variant}!
          </h4>
          <strong className="alert__message">{message}</strong>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
