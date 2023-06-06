import { Subtitle, Textfield, Button } from '../index.js';
import './profile-form.css';

export default function ProfileForm({ inputsValues, dataHandler }) {
  const avatarURL =
    inputsValues.avatar ||
    'https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg';
  return (
    <form className="profile-form">
      <Subtitle text="Update Profile" />
      <fieldset className="profile-form__fieldset">
        <Textfield
          name="firstName"
          label="First Name"
          value={inputsValues.firstName}
          onChange={dataHandler}
        />
        <Textfield
          name="lastName"
          label="Last Name"
          value={inputsValues.lastName}
          onChange={dataHandler}
        />
      </fieldset>
      <fieldset className="profile-form__fieldset">
        <Textfield
          name="city"
          label="City"
          value={inputsValues.city}
          onChange={dataHandler}
        />
        <Textfield
          name="country"
          label="Country"
          value={inputsValues.country}
          onChange={dataHandler}
        />
      </fieldset>
      <fieldset className="profile-form__fieldset">
        <Textfield
          name="phone"
          label="Phone Number"
          value={inputsValues.phone}
          onChange={dataHandler}
        />
        <Textfield
          type="date"
          name="birthday"
          label="Date of birth"
          value={inputsValues.birthday}
          onChange={dataHandler}
        />
      </fieldset>
      <fieldset className="profile-form__fieldset">
        <img src={avatarURL} alt="avatar" className="profile-form__avatar" />
        <Textfield
          name="avatar"
          label="Avatar URL"
          value={inputsValues.avatar}
          onChange={dataHandler}
        />
      </fieldset>
      <div className="confirm-modal__buttons">
        <Button text="Confirm" />
        <Button className="cancel" text="Cancel" />
      </div>
    </form>
  );
}
