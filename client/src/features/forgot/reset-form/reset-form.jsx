import { Subtitle } from 'components/ui';
import { Button, Textfield } from 'components/form';

import './reset-form.css';

export default function ResetForm() {
  return (
    <form className="reset-form">
      <Subtitle text="Reset password" main />
      <fieldset className="reset-form__fieldset">
        <Textfield
          name="password"
          label="Password"
          placeholder="Enter your new password"
        />
        <Textfield
          name="confirm"
          label="Confirm password"
          placeholder="Confirm your password"
        />
      </fieldset>
      <Button text="Reset password" />
    </form>
  );
}
