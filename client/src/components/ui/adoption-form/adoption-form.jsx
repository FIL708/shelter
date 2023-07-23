import { Subtitle } from 'components/ui';
import { Textfield } from 'components/form';

import './adoption-form.css';

export default function AdoptionForm({ title }) {
  return (
    <form className="adoption-form">
      <Subtitle text={title} main />
      <fieldset>
        <Textfield name="name" label="Name" placeholder="Enter pet name" />
        <Textfield name="age" label="Age" placeholder="Enter pet age" />
      </fieldset>
    </form>
  );
}
