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
  return (
    <label htmlFor={name} className="textfield__label">
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
      <strong>{validation.message}</strong>
    </label>
  );
}
