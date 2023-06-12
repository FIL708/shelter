import './form-message.css';

export default function FormMessage({ text, isValid, bottom, left, width }) {
  const messageClassName = text ? 'form__message visible' : 'form__message';

  let validClassName = '';
  if (isValid === undefined) {
    validClassName = '';
  } else if (isValid) {
    validClassName = 'valid__message';
  } else {
    validClassName = 'not-valid__message';
  }

  const styles = bottom ? { position: 'absolute', bottom, left, width } : {};

  return (
    <p className={`${messageClassName} ${validClassName}`} style={styles}>
      {text}
    </p>
  );
}
