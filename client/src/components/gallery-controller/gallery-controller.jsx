import { RadioButton } from '../index.js';
import './gallery-controller.css';

export default function GalleryController({ value, onChange }) {
  return (
    <nav className="gallery-controller">
      <h3 className="gallery-controller__header">Tags:</h3>
      <fieldset className="gallery-controller__fieldset">
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
      </fieldset>
    </nav>
  );
}
