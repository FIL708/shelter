import { Subtitle, Textfield, Button } from '../index.js';
import './change-password-form.css';

export default function ChangePasswordForm() {
  return (
    <form className="change-password-form">
      <Subtitle text="Change password" />
      <Textfield name="new-password" label="Password" />
      <Textfield name="confirm-password" label="Confirm password" />
      <div className="confirm-modal__buttons">
        <Button text="Confirm" />
        <Button className="cancel" text="Cancel" />
      </div>
    </form>
  );
}
