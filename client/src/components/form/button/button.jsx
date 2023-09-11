import { Icon } from 'components/ui';

import './button.css';

export default function Button({
  onClick,
  className,
  variant = 'full',
  disabled = false,
  startIcon,
  endIcon,
  children,
}) {
  const buttonClassName = `button ${variant} ${className}`;

  let iconColor;
  if (disabled && variant === 'outline') {
    iconColor = '#868686';
  } else if (disabled) {
    iconColor = '#fff';
  }
  const startIconComponent = (
    <Icon fill={iconColor} size="18px" type={startIcon} />
  );
  const endIconComponent = <Icon fill={iconColor} size="18px" type={endIcon} />;

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {startIconComponent}
      {children}
      {endIconComponent}
    </button>
  );
}
