import './dropdown.css';

export default function Dropdown({
  name,
  options,
  onChange,
  label,
  value,
  placeholder,
}) {
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
        {placeholder ? (
          <option
            hidden
            disabled={false}
            value={placeholder}
            className="dropdown__option__placeholder"
          >
            {placeholder}
          </option>
        ) : (
          false
        )}
        {options.map((option) => (
          <option className="dropdown__option" value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
