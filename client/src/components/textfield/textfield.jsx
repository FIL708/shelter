import { useState } from 'react';
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
}) {
  const [passwordVisible, setPasswordVisible] = useState('password');

  const togglePasswordVisible = () =>
    setPasswordVisible((prev) => (prev === 'password' ? 'text' : 'password'));

  let inputClassName;
  if (!validation || validation?.isValid === null) {
    inputClassName = 'textfield__label';
  } else if (validation.isValid) {
    inputClassName = 'textfield__label valid';
  } else {
    inputClassName = 'textfield__label invalid';
  }

  const inputType = type === 'password' ? passwordVisible : type;
  const iconType = passwordVisible === 'password' ? 'invisible' : 'visible';

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
        value={value}
        onBlur={onBlur}
      />

      {type === 'password' ? (
        <Button
          iconType={iconType}
          iconSize="20px"
          iconFill="#4B4B4B"
          className="textfield__button"
          onClick={togglePasswordVisible}
        />
      ) : null}

      {validation?.message ? (
        <strong className="textfield__message">{validation.message}</strong>
      ) : null}
    </label>
  );
}
