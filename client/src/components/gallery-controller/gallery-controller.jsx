import { RadioButton } from '../index.js';
import './gallery-controller.css';

export default function GalleryController() {
  return (
    <nav className="gallery-controller">
      <h3>Tags:</h3>
      <fieldset>
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
      </fieldset>
    </nav>
  );
}
