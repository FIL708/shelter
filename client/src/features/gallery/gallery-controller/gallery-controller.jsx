import { RadioButton } from 'components/form';
import './gallery-controller.css';

export default function GalleryController({ value, onChange }) {
  return (
    <nav className="gallery-controller">
      <h3 className="gallery-controller__header">Tags:</h3>
      <RadioButton
        name="tags"
        value="all"
        variant="button"
        checked={value === 'all'}
        onChange={(event) => onChange(event)}
      />
      <RadioButton
        name="tags"
        value="dogs"
        variant="button"
        checked={value === 'dogs'}
        onChange={(event) => onChange(event)}
      />
      <RadioButton
        name="tags"
        value="cats"
        variant="button"
        checked={value === 'cats'}
        onChange={(event) => onChange(event)}
      />
      <RadioButton
        name="tags"
        value="events"
        variant="button"
        checked={value === 'events'}
        onChange={(event) => onChange(event)}
      />
    </nav>
  );
}
