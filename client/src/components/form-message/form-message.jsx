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
    <p className={`${messageClassName} ${validClassName}`} style={styles}>
      {text}
    </p>
  );
}
