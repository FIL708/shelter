import './radio-button.css';

export default function RadioButton({
  name,
  checked,
  value,
  onChange,
  variant,
}) {
  const variantClassName =
    variant === 'button' ? 'radio-button__button-type' : 'radio-button';

  return (
    <label htmlFor={value} className={`${variantClassName}`}>
      {value}
      <input
        className="radio-button__input"
        type="radio"
        name={name}
        id={value}
        checked={checked}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
