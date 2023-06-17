import './textarea.css';

export default function Textarea({ name, value, onChange }) {
  return (
    <textarea
      className="textarea"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    />
  );
}
