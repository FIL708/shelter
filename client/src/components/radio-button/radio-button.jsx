import './radio-button.css';

export default function RadioButton({ name }) {
  return (
    <label htmlFor={name}>
      asd
      <input type="radio" name={name} id="" />
    </label>
  );
}
