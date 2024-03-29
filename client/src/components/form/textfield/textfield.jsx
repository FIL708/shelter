import { useState } from 'react';
import { IconButton } from 'components/form';

import './textfield.css';

export default function Textfield({
  name,
  type = 'text',
  label,
  className,
  placeholder,
  onChange,
  onBlur,
  value,
  validation,
  required,
}) {
  const [passwordVisible, setPasswordVisible] = useState('password');

  const togglePasswordVisible = () =>
    setPasswordVisible((prev) => (prev === 'password' ? 'text' : 'password'));

  let inputClassName;
  if (!validation || validation?.isValid === null) {
    inputClassName = `textfield__label ${className}`;
  } else if (validation.isValid) {
    inputClassName = `textfield__label valid ${className}`;
  } else {
    inputClassName = `textfield__label invalid ${className}`;
  }

  const inputType = type === 'password' ? passwordVisible : type;
  const iconType = passwordVisible === 'password' ? 'invisible' : 'visible';
  const inputValue = value || '';

  return (
    <label htmlFor={name} className={inputClassName}>
      {label}
      <input
        className="textfield__input"
        type={inputType}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={inputValue}
        onBlur={onBlur}
      />

      {type === 'password' ? (
        <IconButton
          className="textfield__button"
          type={iconType}
          color="#868686"
          onClick={togglePasswordVisible}
        />
      ) : null}

      {validation?.message ? (
        <strong className="textfield__message">{validation.message}</strong>
      ) : null}
    </label>
  );
}
