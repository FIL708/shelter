import { Subtitle } from 'components/ui';
import { Button, Textfield } from 'components/form';

import './forgot-form.css';

export default function ForgotForm({ inputValue, handler, sendEmail }) {
  return (
    <form className="forgot-form">
      <Subtitle text="Forgot your password?" main />
      <fieldset>
        <p className="forgot-form__description">
          Please enter the email address you`d like to password reset
          information sent to
        </p>
        <Textfield
          name="email"
          label="Email"
          placeholder="Enter your email address"
          value={inputValue}
          onChange={handler}
        />
      </fieldset>
      <Button text="Reset password" onClick={sendEmail} />
    </form>
  );
}
