import './radio-button.css';

export default function RadioButton({
  name,
  checked,
  value,
  onChange,
  variant,
}) {
  const labelClassName =
    checked && variant === 'button'
      ? 'checked radio-button__button-type'
      : 'radio-button__button-type';
  return (
    <label htmlFor={value} className={labelClassName}>
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
