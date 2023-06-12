import './form-message.css';

export default function FormMessage({ text, isValid }) {
  const messageClassName = '';
  console.log(isValid);

  return <p className={messageClassName}>{text}</p>;
}
