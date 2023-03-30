import './textfield.css';

export default function Textfield({
  name,
  type = 'text',
  label,
  placeholder,
  onChange,
  required = false,
  value,
}) {
  const isValid = true;
  let validationMessage = 'validation message';
  let inputClassName;
  let messageClassName;
  if (isValid) {
    inputClassName = 'textfield__input valid';
    messageClassName = 'textfield__message valid';
    validationMessage = 'Correct!';
  } else if (!isValid) {
    inputClassName = 'textfield__input invalid';
    messageClassName = 'textfield__message invalid';
    validationMessage = 'Error!';
  }
  return (
    <label htmlFor={name} className="textfield__label">
      {label}
      <input
        type={type}
        className={inputClassName}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
      <strong className={messageClassName}>{validationMessage}</strong>
    </label>
  );
}
