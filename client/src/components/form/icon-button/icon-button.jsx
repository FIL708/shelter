import { Icon } from 'components/ui';
import './icon-button.css';

export default function IconButton({
  onClick,
  type = 'heart',
  size = '20px',
  // color = '#7286d3',
  background = 'primary',
}) {
  const buttonClassName = `icon-button ${background}`;
  let iconColor;

  return (
    <button type="button" className={buttonClassName} onClick={onClick}>
      <Icon type={type} size={size} fill={iconColor} />
    </button>
  );
}
