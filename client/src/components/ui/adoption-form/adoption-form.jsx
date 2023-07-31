import { Subtitle } from 'components/ui';
import { Textfield, Textarea, RadioButton } from 'components/form';
import AdoptionFormPreview from './adoption-form__preview/adoption-form__preview.jsx';

import './adoption-form.css';

export default function AdoptionForm({ title, formHandler, values }) {
  return (
    <form className="adoption-form">
      <Subtitle text={title} main />
      <fieldset className="adoption-form__fieldset">
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
      <fieldset className="adoption-form__fieldset">
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
      <fieldset className="adoption-form__fieldset">
        <fieldset className="adoption-form__radio-group">
          <legend>Species:</legend>
          <RadioButton value="dog" onChange={formHandler} />
          <RadioButton value="cat" onChange={formHandler} />
        </fieldset>
        <fieldset className="adoption-form__radio-group">
          <legend>Gender:</legend>
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
      <AdoptionFormPreview images={values.photos} />
    </form>
  );
}
