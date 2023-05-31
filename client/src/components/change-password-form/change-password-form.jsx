import { Subtitle, Textfield, Button } from '../index.js';
import './change-password-form.css';

export default function ChangePasswordForm({
  dataHandler,
  inputsValues,
  validationHandler,
}) {
  console.log(inputsValues);

  return (
    <form className="change-password-form">
      <Subtitle text="Change password" />
      <Textfield
        name="password"
        label="Password"
        type="password"
        value={inputsValues.password}
        onChange={(event) => dataHandler(event)}
        onBlur={(event) => validationHandler(event, 'password')}
      />
      <Textfield
        name="confirm"
        label="Confirm password"
        type="password"
        value={inputsValues.confirm}
        onChange={(event) => dataHandler(event)}
        // onBlur={(event) => validationHandler(event, 'confirm')}
      />
      <div className="confirm-modal__buttons">
        <Button text="Confirm" />
        <Button className="cancel" text="Cancel" />
      </div>
    </form>
  );
}
