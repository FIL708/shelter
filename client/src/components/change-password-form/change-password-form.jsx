import { Subtitle, Textfield, Button, ModalWrapper } from '../index.js';
import './change-password-form.css';

export default function ChangePasswordForm({
  dataHandler,
  inputsValues,
  validationHandler,
  validationObject,
  isVisible,
  toggleModalVision,
  onCancel,
}) {
  const confirmButtonDisable = !(
    validationObject.newPassword.isValid &&
    validationObject.confirmPassword.isValid
  );

  return (
    <ModalWrapper isVisible={isVisible} toggleModalVision={toggleModalVision}>
      <form className="change-password-form">
        <Subtitle text="Change password" />
        <Textfield
          name="currentPassword"
          label="Current Password"
          type="password"
          value={inputsValues.currentPassword}
          onChange={(event) => dataHandler(event)}
        />
        <Textfield
          name="newPassword"
          label="New Password"
          type="password"
          value={inputsValues.newPassword}
          onChange={(event) => dataHandler(event)}
          validation={validationObject.newPassword}
          onBlur={(event) => validationHandler(event, 'password')}
        />
        <Textfield
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={inputsValues.confirmPassword}
          onChange={(event) => dataHandler(event)}
          validation={validationObject.confirmPassword}
          onBlur={(event) =>
            validationHandler(event, 'confirm', inputsValues.newPassword)
          }
        />
        <div className="confirm-modal__buttons">
          <Button text="Confirm" disabled={confirmButtonDisable} />
          <Button className="cancel" text="Cancel" onClick={onCancel} />
        </div>
      </form>
    </ModalWrapper>
  );
}
