import { useState } from 'react';
import { Subtitle } from 'components/ui';
import { Textfield, Textarea, RadioButton, Button } from 'components/form';
import AdoptionFormPreview from './adoption-form__preview/adoption-form__preview.jsx';

import './adoption-form.css';

export default function AdoptionForm({ title, formHandler, values }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const togglePreview = () => setIsPreviewOpen((prev) => !prev);

  return (
    <form className="adoption-form">
      <Subtitle text={title} main />
      <fieldset className="adoption-form__fieldset">
        <Textfield
          name="name"
          label="Name"
          placeholder="Enter pet name"
          onChange={formHandler}
          value={values.name}
        />
        <Textfield
          type="number"
          name="age"
          label="Age"
          placeholder="Enter pet age"
          onChange={formHandler}
          value={values.age}
        />
      </fieldset>
      <fieldset className="adoption-form__fieldset">
        <Textfield
          name="city"
          label="City"
          placeholder="Enter city"
          onChange={formHandler}
          value={values.address.city}
        />
        <Textfield
          name="country"
          label="Country"
          placeholder="Enter  country"
          onChange={formHandler}
          value={values.address.country}
        />
      </fieldset>
      <fieldset className="adoption-form__fieldset">
        <fieldset className="adoption-form__radio-group">
          <legend>Species:</legend>
          <RadioButton
            value="dog"
            onChange={formHandler}
            checked={values.species}
          />
          <RadioButton
            value="cat"
            onChange={formHandler}
            checked={values.species}
          />
        </fieldset>
        <fieldset className="adoption-form__radio-group">
          <legend>Gender:</legend>
          <RadioButton
            value="male"
            onChange={formHandler}
            checked={values.gender}
          />
          <RadioButton
            value="female"
            onChange={formHandler}
            checked={values.gender}
          />
        </fieldset>
      </fieldset>
      <Textarea
        name="shortDescription"
        label="Short description"
        placeholder="Enter Preview about pet"
        onChange={formHandler}
        value={values.shortDescription}
      />
      <Textarea
        name="description"
        label="Description"
        placeholder="Enter description about pet"
        onChange={formHandler}
        value={values.description}
      />
      <Textarea
        label="Photos"
        placeholder="Enter photos URLs"
        onChange={formHandler}
      />
      <Button text="show preview" onClick={togglePreview} />
      <AdoptionFormPreview images={values.photos} visible={isPreviewOpen} />
      <Button text="Create new adoption" />
    </form>
  );
}
