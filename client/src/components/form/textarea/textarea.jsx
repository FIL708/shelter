import './textarea.css';

export default function Textarea({ name, value, onChange, placeholder }) {
  return (
    <textarea
      className="textarea"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
