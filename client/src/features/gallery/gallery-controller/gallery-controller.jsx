import { RadioButton } from '../../../components/form';
import './gallery-controller.css';

export default function GalleryController({ value, onChange }) {
  return (
    <nav className="gallery-controller">
      <h3 className="gallery-controller__header">Tags:</h3>
      <RadioButton
        name="tags"
        value="all"
        checked={value === 'all'}
        onChange={(event) => onChange(event)}
      />
      <RadioButton
        name="tags"
        value="dogs"
        checked={value === 'dogs'}
        onChange={(event) => onChange(event)}
      />
      <RadioButton
        name="tags"
        value="cats"
        checked={value === 'cats'}
        onChange={(event) => onChange(event)}
      />
      <RadioButton
        name="tags"
        value="events"
        checked={value === 'events'}
        onChange={(event) => onChange(event)}
      />
    </nav>
  );
}
