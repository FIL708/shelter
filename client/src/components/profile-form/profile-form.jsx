import { Subtitle, Textfield, Button } from '../index.js';
import './profile-form.css';

export default function ProfileForm() {
  return (
    <form className="profile-form">
      <Subtitle text="Update Profile" />
      <fieldset>
        <Textfield name="firstName" label="First Name" />
        <Textfield name="lastName" label="Last Name" />
      </fieldset>
      <fieldset>
        <Textfield name="city" label="City" />
        <Textfield name="country" label="Country" />
      </fieldset>
      <fieldset>
        <Textfield name="phone" label="Phone Number" />
        <Textfield name="birthday" label="BirthDay" />
      </fieldset>
      <fieldset>
        <img src="" alt="avatar" />
        <Textfield name="avatar" label="Avatar URL" />
      </fieldset>
      <div className="confirm-modal__buttons">
        <Button text="Confirm" />
        <Button className="cancel" text="Cancel" />
      </div>
    </form>
  );
}
