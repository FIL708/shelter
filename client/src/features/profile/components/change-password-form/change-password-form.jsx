import { Textfield, Button } from 'components/form';
import { Subtitle, ModalWrapper, FormMessage } from 'components/ui';
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
          <Button onClick={onConfirm}>Confirm</Button>
          <Button color="red" onClick={onCancel}>
            Cancel
          </Button>
        </div>
        <FormMessage
          text={message.text}
          isValid={!message.isWrong}
          left="10%"
          bottom="92px"
          width="80%"
        />
      </form>
    </ModalWrapper>
  );
}
