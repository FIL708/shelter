import { Subtitle } from 'components/ui';
import { Button, Textfield } from 'components/form';

import './forgot-form.css';

export default function ForgotForm() {
  return (
    <form className="forgot-form">
      <Subtitle text="Forgot your password?" main />
      <p className="forgot-form__description">
        Please enter the email address you`d like to password reset information
        sent to.
      </p>
      <Textfield placeholder="Enter your email address" />
      <Button text="Reset password" />
    </form>
  );
}
