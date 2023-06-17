import './textarea.css';

export default function Textarea({ name, value }) {
  return <textarea className="textarea" name={name} id={name} value={value} />;
}
