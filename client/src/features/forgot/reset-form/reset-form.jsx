import { Subtitle, FormMessage } from 'components/ui';
import { Button, Textfield } from 'components/form';

import './reset-form.css';

export default function ResetForm({
  inputValues,
  handler,
  resetPassword,
  formIsValid,
  validationHandler,
  message,
}) {
  const disableButton =
    Object.values(inputValues).some((item) => !item) ||
    Object.values(formIsValid).some((item) => !item.isValid);

  return (
    <form className="reset-form">
      <Subtitle text="Reset password" main />
      <fieldset className="reset-form__fieldset">
        <Textfield
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your new password"
          value={inputValues.password}
          onChange={handler}
          validation={formIsValid.password}
          onBlur={(event) =>
            validationHandler(event, 'password', inputValues.password)
          }
        />
        <Textfield
          name="confirm"
          type="password"
          label="Confirm password"
          placeholder="Confirm your password"
          value={inputValues.confirm}
          onChange={handler}
          validation={formIsValid.confirm}
          onBlur={(event) =>
            validationHandler(event, 'confirm', inputValues.password)
          }
        />
      </fieldset>
      <FormMessage
        text={message.text}
        isValid={message.isValid}
        width="90%"
        bottom="90px"
        left="5%"
      />
      <Button onClick={resetPassword} disabled={disableButton}>
        Reset password
      </Button>
    </form>
  );
}
