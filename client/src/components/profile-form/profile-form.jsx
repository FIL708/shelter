import { Subtitle, Textfield, Button } from '../index.js';
import './profile-form.css';

export default function ProfileForm() {
  const avatarURL =
    'https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg';
  return (
    <form className="profile-form">
      <Subtitle text="Update Profile" />
      <fieldset className="profile-form__fieldset">
        <Textfield name="firstName" label="First Name" />
        <Textfield name="lastName" label="Last Name" />
      </fieldset>
      <fieldset className="profile-form__fieldset">
        <Textfield name="city" label="City" />
        <Textfield name="country" label="Country" />
      </fieldset>
      <fieldset className="profile-form__fieldset">
        <Textfield name="phone" label="Phone Number" />
        <Textfield name="birthday" label="BirthDay" />
      </fieldset>
      <fieldset className="profile-form__fieldset">
        <img src={avatarURL} alt="avatar" className="profile-form__avatar" />
        <Textfield name="avatar" label="Avatar URL" />
      </fieldset>
      <div className="confirm-modal__buttons">
        <Button text="Confirm" />
        <Button className="cancel" text="Cancel" />
      </div>
    </form>
  );
}
