import { RadioButton, Textfield } from 'components/form';
import './pet-controller.css';

export default function PetController({ values, onChange }) {
  return (
    <nav className="pet-controller">
      <fieldset name="mode" className="pet-controller__fieldset">
        <RadioButton
          name="mode"
          value="grid"
          variant="button"
          checked={values.mode === 'grid'}
          onChange={(event) => onChange(event)}
        />
        <RadioButton
          name="mode"
          value="list"
          variant="button"
          checked={values.mode === 'list'}
          onChange={(event) => onChange(event)}
        />
      </fieldset>
      <fieldset name="species" className="pet-controller__fieldset">
        <RadioButton
          name="species"
          value="dogs"
          variant="button"
          checked={values.species === 'dogs'}
          onChange={(event) => onChange(event)}
        />
        <RadioButton
          name="species"
          value="cats"
          variant="button"
          checked={values.species === 'cats'}
          onChange={(event) => onChange(event)}
        />
        <RadioButton
          name="species"
          value="all"
          variant="button"
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
