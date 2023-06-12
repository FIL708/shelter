import { Subtitle, Textfield, Button, ModalWrapper } from '../index.js';
import './profile-form.css';

export default function ProfileForm({
  inputsValues,
  dataHandler,
  toggleModalVision,
  isVisible,
  validationHandler,
  validationObject,
  onCancel,
  onConfirm,
  message,
}) {
  const avatarURL =
    inputsValues.avatar ||
    'https://tleliteracy.com/wp-content/uploads/2017/02/default-avatar.png';
  const confirmButtonDisable =
    validationObject.phone.isValid === false ||
    validationObject.avatar.isValid === false;
  const messageClassName = '';

  return (
    <ModalWrapper toggleModalVision={toggleModalVision} isVisible={isVisible}>
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
            value={inputsValues.address?.city}
            onChange={dataHandler}
          />
          <Textfield
            name="country"
            label="Country"
            value={inputsValues.address?.country}
            onChange={dataHandler}
          />
        </fieldset>
        <fieldset className="profile-form__fieldset">
          <Textfield
            name="phone"
            label="Phone Number"
            value={inputsValues.phone}
            onChange={dataHandler}
            validation={validationObject.phone}
            onBlur={(event) => validationHandler(event, 'phone')}
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
            validation={validationObject.avatar}
            onBlur={(event) => validationHandler(event, 'url')}
          />
        </fieldset>
        <div className="profile-form__buttons">
          <Button
            text="Confirm"
            disabled={confirmButtonDisable}
            onClick={onConfirm}
          />
          <Button className="cancel" text="Cancel" onClick={onCancel} />
        </div>
        <p className={messageClassName}>{message.text}</p>
      </form>
    </ModalWrapper>
  );
}
