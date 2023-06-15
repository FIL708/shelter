import { Icon } from '..';
import './subtitle.css';

export default function Subtitle({ text, main }) {
  const iconType = main ? 'small-logo' : null;

  return (
    <h1 className="subtitle">
      <Icon type={iconType} size="24px" fill="#7286d3" />
      {text}
      <Icon type={iconType} size="24px" fill="#7286d3" />
    </h1>
  );
}
