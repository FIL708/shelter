import { Subtitle } from 'components/ui';
import { Textfield, Textarea } from 'components/form';

import './adoption-form.css';

export default function AdoptionForm({ title }) {
  return (
    <form className="adoption-form">
      <Subtitle text={title} main />
      <fieldset>
        <Textfield name="name" label="Name" placeholder="Enter pet name" />
        <Textfield name="age" label="Age" placeholder="Enter pet age" />
      </fieldset>
      <fieldset>
        <Textfield name="city" label="City" placeholder="Enter city" />
        <Textfield name="country" label="Country" placeholder="Enter country" />
      </fieldset>
      <Textarea name="shortDescription" label="Short description" />
      <Textarea name="description" label="Description" />
    </form>
  );
}
