import { useState } from 'react';
import { Textfield, Button } from 'components/form';
import { Subtitle, ModalWrapper, FormMessage } from 'components/ui';
import { inputValidator } from 'utils';
import './confirm-modal.css';

export default function ConfirmModal({
  title,
  question,
  textToConfirm,
  onConfirm,
  isVisible,
  toggleModalVision,
  message,
}) {
  const [isFormValid, setIsConfirmValid] = useState({
    isValid: null,
    message: null,
  });
  const [inputValue, setInputValue] = useState('');

  const setConfirmValue = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const onCancel = () => {
    setInputValue('');
    setIsConfirmValid({ isValid: null, message: null });
    toggleModalVision();
  };

  const validationHandler = () => {
    const validationObject = inputValidator(
      inputValue,
      'confirm',
      textToConfirm,
    );
    setIsConfirmValid(validationObject);
  };

  return (
    <ModalWrapper isVisible={isVisible} toggleModalVision={toggleModalVision}>
      <form className="confirm-modal">
        <Subtitle text={title} />
        <p className="confirm-modal__question">{question}</p>
        {textToConfirm && (
          <Textfield
            name="confirm-input"
            className="confirm-modal__input"
            placeholder={`To confirm type: ${textToConfirm}`}
            required
            value={inputValue}
            onChange={setConfirmValue}
            validation={isFormValid}
            onBlur={validationHandler}
          />
        )}

        <div className="confirm-modal__buttons">
          <Button onClick={onConfirm} disabled={!isFormValid.isValid}>
            Confirm
          </Button>
          <Button color="red" onClick={onCancel}>
            Cancel
          </Button>
        </div>
        <FormMessage
          text={message.text}
          isValid={!message.isWrong}
          left="15%"
          bottom="65px"
        />
      </form>
    </ModalWrapper>
  );
}
