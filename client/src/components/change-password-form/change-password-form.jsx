import { Subtitle, Textfield, Button } from '../index.js';
import './change-password-form.css';

export default function ChangePasswordForm() {
  return (
    <form className="change-password-form">
      <Subtitle text="Change password" />
      <Textfield name="password" label="Password" type="password" />
      <Textfield name="confirm" label="Confirm password" type="password" />
      <div className="confirm-modal__buttons">
        <Button text="Confirm" />
        <Button className="cancel" text="Cancel" />
      </div>
    </form>
  );
}
