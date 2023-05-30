import { Subtitle, Textfield } from '../index.js';
import './change-password-form.css';

export default function ChangePasswordForm() {
  return (
    <form className="change-password-form">
      <Subtitle text="Change password" />
      <Textfield />
      <Textfield />
    </form>
  );
}
