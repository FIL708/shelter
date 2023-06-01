import { Subtitle, Textfield, Button } from '../index.js';
import './profile-form.css';

export default function ProfileForm() {
  return (
    <form className="profile-form">
      <Subtitle text="Update Profile" />
      <fieldset>
        <Textfield />
        <Textfield />
      </fieldset>
      <fieldset>
        <Textfield />
        <Textfield />
      </fieldset>
      <fieldset>
        <Textfield />
        <Textfield />
      </fieldset>
      <fieldset>
        <img src="" alt="avatar" />
        <Textfield />
      </fieldset>
      <div className="confirm-modal__buttons">
        <Button text="Confirm" />
        <Button className="cancel" text="Cancel" />
      </div>
    </form>
  );
}
