import { Subtitle } from 'components/ui';
import { Button, Textfield } from 'components/form';

export default function ResetForm() {
  return (
    <form className="reset-form">
      <Subtitle text="Reset password" main />
      <fieldset>
        <Textfield label="Password" placeholder="Enter your new password" />
        <Textfield
          label="Confirm password"
          placeholder="Confirm your password"
        />
      </fieldset>
      <Button />
    </form>
  );
}
