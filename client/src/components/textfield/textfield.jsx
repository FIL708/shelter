import { Button } from '../index.js';

import './textfield.css';

export default function Textfield({
  name,
  type = 'text',
  label,
  placeholder,
  onChange,
  onBlur,
  value,
  validation,
  required,
  iconType,
  iconFill,
}) {
  let inputClassName;
  if (!validation || validation?.isValid === null) {
    inputClassName = 'textfield__label';
  } else if (validation.isValid) {
    inputClassName = 'textfield__label valid';
  } else {
    inputClassName = 'textfield__label invalid';
  }

  return (
    <label htmlFor={name} className={inputClassName}>
      {label}
      <input
        className="textfield__input"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />

      {iconType ? (
        <Button
          iconType={iconType}
          iconSize="20px"
          iconFill={iconFill}
          className="textfield__button"
        />
      ) : null}

      {validation?.message ? (
        <strong className="textfield__message">{validation.message}</strong>
      ) : null}
    </label>
  );
}
