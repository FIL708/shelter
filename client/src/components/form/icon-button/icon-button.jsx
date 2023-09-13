import { Icon } from 'components/ui';
import './icon-button.css';

export default function IconButton({
  onClick,
  className,
  type = 'heart',
  size = '20px',
  color,
  background = '',
}) {
  const buttonClassName = `icon-button ${background} ${className}`;

  let iconColor;
  if (color) {
    iconColor = color;
  } else if (background) {
    iconColor = '#fff2f2';
  } else {
    iconColor = '#7286d3';
  }

  return (
    <button type="button" className={buttonClassName} onClick={onClick}>
      <Icon type={type} size={size} fill={iconColor} />
    </button>
  );
}
