import { Icon } from '../index.js';
import './loading-spinner.css';

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <Icon type="small-logo" size="50px" fill="#7286d3" />
    </div>
  );
}
