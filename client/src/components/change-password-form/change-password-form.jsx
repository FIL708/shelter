import { Subtitle, Textfield, Button } from '../index.js';
import './change-password-form.css';

export default function ChangePasswordForm({ validationHandler }) {
  return (
    <form className="change-password-form">
      <Subtitle text="Change password" />
      <Textfield
        name="password"
        label="Password"
        type="password"
        onBlur={(event) => validationHandler(event, 'password')}
      />
      <Textfield
        name="confirm"
        label="Confirm password"
        type="password"
        onBlur={(event) => validationHandler(event, 'confirm')}
      />
      <div className="confirm-modal__buttons">
        <Button text="Confirm" />
        <Button className="cancel" text="Cancel" />
      </div>
    </form>
  );
}
