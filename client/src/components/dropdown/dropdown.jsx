import './dropdown.css';

export default function Dropdown({ name, options, onChange, label, value }) {
  return (
    <label htmlFor={name} className="dropdown__label">
      {label}
      <select
        className="dropdown"
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <option className="dropdown__option" value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
