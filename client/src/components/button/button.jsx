import { Icon } from '../index.js';

import './button.css';

export default function Button({
  onClick,
  className,
  disabled = false,
  iconType,
  iconFill,
  iconSize,
  text,
}) {
  const buttonClassName = className ? `button ${className}` : 'button';
  const IconComponent = iconType ? (
    <Icon fill={iconFill} size={iconSize} type={iconType} />
  ) : null;
  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {IconComponent}
      {text}
    </button>
  );
}
