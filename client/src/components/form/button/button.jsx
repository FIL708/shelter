import { Icon } from '../../ui';

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
  const styleClassName = className ? `button ${className}` : 'button';
  const onlyIconClassName = !text && iconType ? 'only-icon' : '';
  const buttonClassName = `${styleClassName} ${onlyIconClassName}`;
  let iconColor;
  if (disabled && className === 'outline') {
    iconColor = '#868686';
  } else if (disabled && onlyIconClassName === 'only-icon') {
    iconColor = '#868686';
  } else if (disabled && !className) {
    iconColor = '#fff';
  } else {
    iconColor = iconFill;
  }
  const IconComponent = iconType ? (
    <Icon fill={iconColor} size={iconSize} type={iconType} />
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
