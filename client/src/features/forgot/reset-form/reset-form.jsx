import { Subtitle } from 'components/ui';
import { Button, Textfield } from 'components/form';

import './reset-form.css';

export default function ResetForm({ inputValues, handler, resetPassword }) {
  return (
    <form className="reset-form">
      <Subtitle text="Reset password" main />
      <fieldset className="reset-form__fieldset">
        <Textfield
          name="password"
          label="Password"
          placeholder="Enter your new password"
          value={inputValues.password}
          onChange={handler}
        />
        <Textfield
          name="confirm"
          label="Confirm password"
          placeholder="Confirm your password"
          value={inputValues.confirm}
          onChange={handler}
        />
      </fieldset>
      <Button text="Reset password" onClick={resetPassword} />
    </form>
  );
}
