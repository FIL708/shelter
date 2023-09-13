import { Icon } from 'components/ui';
import './icon-button.css';

export default function IconButton({
  onClick,
  className = '',
  type = 'heart',
  size = '20px',
  color,
  background = '',
  disabled,
}) {
  const buttonClassName = `icon-button ${background} ${className}`.trim();

  let iconColor;
  if (disabled && background) {
    iconColor = '#fff2f2';
  } else if (disabled) {
    iconColor = '#868686';
  } else if (color) {
    iconColor = color;
  } else if (background) {
    iconColor = '#fff2f2';
  } else {
    iconColor = '#7286d3';
  }

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon type={type} size={size} fill={iconColor} />
    </button>
  );
}
