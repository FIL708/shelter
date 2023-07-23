import { Textfield } from 'components/form';

import './adoption-form__photos.css';

export default function AdoptionFormPhotos({ formHandler }) {
  return (
    <fieldset className="adoption-form__photos">
      <Textfield onChange={formHandler} />
    </fieldset>
  );
}
