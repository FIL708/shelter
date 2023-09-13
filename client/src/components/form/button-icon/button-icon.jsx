import { Icon } from 'components/ui';
import './button-icon.css';

export default function ButtonIcon({ onClick }) {
  return (
    <button type="button" className="button-icon" onClick={onClick}>
      <Icon />
    </button>
  );
}
