import { Icon } from 'components/ui';
import './icon-button.css';

export default function IconButton({ onClick }) {
  return (
    <button type="button" className="button-icon" onClick={onClick}>
      <Icon />
    </button>
  );
}
