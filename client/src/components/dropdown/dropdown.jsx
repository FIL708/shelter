import './dropdown.css';

export default function Dropdown({
  name,
  values,
  onChange,
  placeholder,
  label,
}) {
  return (
    <label htmlFor={name} className="dropdown__label">
      {label}
      <select
        className="dropdown"
        name={name}
        id={name}
        onChange={onChange}
        defaultValue={placeholder}
      >
        {placeholder ? (
          <option
            className="dropdown__placeholder"
            value={placeholder}
            disabled
            hidden
          >
            {placeholder}
          </option>
        ) : null}

        {values.map((option) => (
          <option className="dropdown__option" value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
