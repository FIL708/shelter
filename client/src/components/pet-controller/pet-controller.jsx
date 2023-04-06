import { RadioButton, Textfield } from '../index.js';
import './pet-controller.css';

export default function PetController({ values, onChange }) {
  return (
    <nav className="pet-controller">
      <fieldset name="mode" className="pet-controller__fieldset">
        <RadioButton
          name="mode"
          value="grid"
          checked={values.mode === 'grid'}
          onChange={(event) => onChange(event)}
        />
        <RadioButton
          name="mode"
          value="list"
          checked={values.mode === 'list'}
          onChange={(event) => onChange(event)}
        />
      </fieldset>
      <fieldset name="species" className="pet-controller__fieldset">
        <RadioButton
          name="species"
          value="dogs"
          checked={values.species === 'dogs'}
          onChange={(event) => onChange(event)}
        />
        <RadioButton
          name="species"
          value="cats"
          checked={values.species === 'cats'}
          onChange={(event) => onChange(event)}
        />
        <RadioButton
          name="species"
          value="all"
          checked={values.species === 'all'}
          onChange={(event) => onChange(event)}
        />
      </fieldset>
      <fieldset name="elements-number" className="pet-controller__fieldset">
        Pets / page:
        <Textfield
          className="white-border"
          type="number"
          value={values.numberOfPets}
          name="numberOfPets"
          onChange={onChange}
        />
      </fieldset>
    </nav>
  );
}
