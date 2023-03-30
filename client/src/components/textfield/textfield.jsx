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
  const validationMessage = 'validation message';
  return (
    <label htmlFor={name} className="textfield__label">
      {label}
      <input
        type={type}
        className="textfield__input"
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
      <strong className="textfield__message">{validationMessage}</strong>
    </label>
  );
}
