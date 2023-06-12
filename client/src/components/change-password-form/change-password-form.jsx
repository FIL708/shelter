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
  onConfirm,
  message,
}) {
  const messageClassName = message.text
    ? `change-password-form__message visible ${
        message.isWrong ? 'not-valid__message' : 'valid__message'
      }`
    : 'change-password-form__message';

  return (
    <ModalWrapper isVisible={isVisible} toggleModalVision={toggleModalVision}>
      <form className="change-password-form">
        <Subtitle text="Change password" />
        <Textfield
          name="currentPassword"
          label="Current Password *"
          type="password"
          value={inputsValues.currentPassword}
          validation={validationObject.currentPassword}
          onChange={(event) => dataHandler(event)}
        />
        <Textfield
          name="newPassword"
          label="New Password *"
          type="password"
          value={inputsValues.newPassword}
          onChange={(event) => dataHandler(event)}
          validation={validationObject.newPassword}
          onBlur={(event) => validationHandler(event, 'password')}
        />
        <Textfield
          name="confirmPassword"
          label="Confirm Password *"
          type="password"
          value={inputsValues.confirmPassword}
          onChange={(event) => dataHandler(event)}
          validation={validationObject.confirmPassword}
          onBlur={(event) =>
            validationHandler(event, 'confirm', inputsValues.newPassword)
          }
        />
        <div className="confirm-modal__buttons">
          <Button text="Confirm" onClick={onConfirm} />
          <Button className="cancel" text="Cancel" onClick={onCancel} />
        </div>
        <p className={messageClassName}>{message.text}</p>
      </form>
    </ModalWrapper>
  );
}
