import { useState } from 'react';
import { Subtitle } from 'components/ui';
import { Textfield, Textarea, RadioButton, Button } from 'components/form';
import AdoptionFormPreview from './adoption-form__preview/adoption-form__preview.jsx';

import './adoption-form.css';

export default function AdoptionForm({
  title,
  formHandler,
  values,
  onConfirm,
}) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const photos = values.photos.map((photo) => photo.url).join(' ');

  const togglePreview = () => setIsPreviewOpen((prev) => !prev);

  return (
    <form className="adoption-form">
      <Subtitle text={title} main />

      <Textfield
        name="name"
        label="Name"
        placeholder="Enter pet name"
        onChange={formHandler}
        value={values.name}
      />

      <fieldset className="adoption-form__fieldset">
        <Textfield
          type="number"
          name="age"
          label="Age"
          placeholder="Enter pet age"
          onChange={formHandler}
          value={values.age}
        />
        <Textfield
          name="weight"
          label="Weight ( kg )"
          placeholder="Enter weight of animal"
          onChange={formHandler}
          value={values.weight}
        />
      </fieldset>

      <fieldset className="adoption-form__fieldset adoption-form__radio-fieldset">
        <fieldset className="adoption-form__radio-group">
          <legend>Species:</legend>
          <RadioButton
            value="dog"
            name="species"
            onChange={formHandler}
            checked={values.species === 'dog'}
          />
          <RadioButton
            value="cat"
            name="species"
            onChange={formHandler}
            checked={values.species === 'cat'}
          />
        </fieldset>
        <fieldset className="adoption-form__radio-group">
          <legend>Gender:</legend>
          <RadioButton
            value="male"
            name="gender"
            onChange={formHandler}
            checked={values.gender === 'male'}
          />
          <RadioButton
            value="female"
            name="gender"
            onChange={formHandler}
            checked={values.gender === 'female'}
          />
        </fieldset>
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
        name="photos"
        placeholder="Enter photos URLs"
        onChange={formHandler}
        value={photos}
      />

      <Button text="show preview" onClick={togglePreview} />
      <AdoptionFormPreview images={values.photos} visible={isPreviewOpen} />
      <Button text="Create new adoption" onClick={onConfirm} />
    </form>
  );
}
