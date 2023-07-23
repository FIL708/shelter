import './radio-button.css';

export default function RadioButton({ name, checked, value, onChange }) {
  const labelClassName = checked
    ? 'checked radio-button__label'
    : 'radio-button__label';
  return (
    <label htmlFor={name} className={labelClassName}>
      {value}
      <input
        className="radio-button__input"
        type="radio"
        name={name}
        id={name}
        checked={checked}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
