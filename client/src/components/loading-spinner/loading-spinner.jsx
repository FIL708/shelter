import { Icon } from '../index.js';
import './loading-spinner.css';

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <span className="loading-spinner__logo">
        <Icon type="small-logo" size="50px" fill="#7286d3" />
      </span>
      Loading...
    </div>
  );
}
