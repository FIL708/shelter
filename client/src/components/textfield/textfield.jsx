import './textfield.css';

export default function Textfield({
  name,
  type = 'text',
  label,
  placeholder,
  onChange,
  onBlur,
  value,
  validation,
  required,
}) {
  let inputClassName;
  if (!validation) {
    inputClassName = 'textfield__label';
  } else if (validation.isValid) {
    inputClassName = 'textfield__label valid';
  } else {
    inputClassName = 'textfield__label invalid';
  }

  return (
    <label htmlFor={name} className={inputClassName}>
      {label}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {validation ? <strong>{validation.message}</strong> : null}
    </label>
  );
}
