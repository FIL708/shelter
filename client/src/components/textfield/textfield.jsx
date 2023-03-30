import { useState } from 'react';
import './textfield.css';
import TextfieldValidator from './textfield-validator.js';

export default function Textfield({
  name,
  type = 'text',
  label,
  placeholder,
  onChange,
  required = false,
  value,
  validation,
}) {
  const [classNames, setClassNames] = useState({
    inputClassName: 'textfield__input',
    messageClassName: 'textfield__message',
    message: '',
  });

  const isValid = () => {
    if (!value || !validation) return null;
    const valid = TextfieldValidator(value, validation);

    if (valid === null) {
      return null;
    }
    if (valid.isValid) {
      setClassNames({
        inputClassName: 'textfield__input valid',
        messageClassName: 'textfield__message valid',
        message: valid.message,
      });
    }
    if (!valid.isValid) {
      setClassNames({
        inputClassName: 'textfield__input invalid',
        messageClassName: 'textfield__message invalid',
        message: valid.message,
      });
    }
    return null;
  };

  return (
    <label htmlFor={name} className="textfield__label">
      {label}
      <input
        type={type}
        className={classNames.inputClassName}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        onBlur={isValid}
      />
      <strong className={classNames.messageClassName}>
        {classNames.message}
      </strong>
    </label>
  );
}
