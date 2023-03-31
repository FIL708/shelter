import { Icon } from '../index.js';

import './button.css';

export default function Button({
  onClick,
  className,
  disabled = false,
  iconType,
  fill,
  size,
  text,
}) {
  const buttonClassName = className ? `button ${className}` : 'button';
  const IconComponent = iconType ? (
    <Icon fill={fill} size={size} type={iconType} />
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
