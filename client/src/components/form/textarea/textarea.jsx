import './textarea.css';

export default function Textarea({
  name,
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <label htmlFor={name}>
      {label}
      <textarea
        className="textarea"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}
