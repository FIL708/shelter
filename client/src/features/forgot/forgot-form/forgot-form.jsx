import { Subtitle, FormMessage } from 'components/ui';
import { Button, Textfield } from 'components/form';

import './forgot-form.css';

export default function ForgotForm({
  inputValue,
  handler,
  sendEmail,
  message,
}) {
  return (
    <form className="forgot-form">
      <Subtitle text="Forgot your password?" main />
      <fieldset className="forgot-form__fieldset">
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
      <FormMessage
        text={message.text}
        isValid={message.isValid}
        width="90%"
        bottom="90px"
        left="5%"
      />
      <Button text="Reset password" onClick={sendEmail} />
    </form>
  );
}
