import { Subtitle } from 'components/ui';
import { Textfield, Textarea, RadioButton } from 'components/form';

import './adoption-form.css';

export default function AdoptionForm({ title, formHandler }) {
  return (
    <form className="adoption-form">
      <Subtitle text={title} main />
      <fieldset>
        <Textfield
          name="name"
          label="Name"
          placeholder="Enter pet name"
          onChange={formHandler}
        />
        <Textfield
          type="number"
          name="age"
          label="Age"
          placeholder="Enter pet age"
          onChange={formHandler}
        />
      </fieldset>
      <fieldset>
        <Textfield
          name="city"
          label="City"
          placeholder="Enter city"
          onChange={formHandler}
        />
        <Textfield
          name="country"
          label="Country"
          placeholder="Enter  country"
          onChange={formHandler}
        />
      </fieldset>
      <fieldset>
        <fieldset>
          <RadioButton value="dog" onChange={formHandler} />
          <RadioButton value="cat" onChange={formHandler} />
        </fieldset>
        <fieldset>
          <RadioButton value="male" onChange={formHandler} />
          <RadioButton value="female" onChange={formHandler} />
        </fieldset>
      </fieldset>
      <Textarea
        name="shortDescription"
        label="Short description"
        placeholder="Enter Preview about pet"
        onChange={formHandler}
      />
      <Textarea
        name="description"
        label="Description"
        placeholder="Enter description about pet"
        onChange={formHandler}
      />
      <Textarea
        label="Photos"
        placeholder="Enter photos URLs"
        onChange={formHandler}
      />
    </form>
  );
}
