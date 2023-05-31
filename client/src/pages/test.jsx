import { useState } from 'react';
import {
  Page,
  Subtitle,
  ConfirmModal,
  ChangePasswordForm,
  Button,
} from '../components';
import { inputValidator } from '../helpers/index.js';

export default function Test() {
  const [visibleModals, setVisibleModals] = useState({
    confirm: false,
    changePassword: false,
    updateForm: false,
  });
  const [formData, setFormData] = useState({
    passwordForm: { password: '', confirm: '' },
    updateForm: {},
  });
  const [isFormsValid, setIsFormValid] = useState({
    passwordForm: { password: {}, confirm: '' },
    updateForm: {},
  });
  const toggleConfirmModal = () => {
    setVisibleModals((prev) => ({ ...prev, confirm: !prev.confirm }));
  };
  const deleteAccountHandler = () => {
    console.log(setFormData, isFormsValid);
  };

  const passwordFormDataHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      passwordForm: { ...prev.passwordForm, [name]: value },
    }));
  };

  const passwordValidationHandler = (event, type) => {
    const { name, value } = event.target;
    const validationObject = inputValidator(value, type);
    setIsFormValid((prev) => ({
      ...prev,
      passwordForm: { ...prev.passwordForm, [name]: validationObject },
    }));
  };
  console.log(isFormsValid);

  return (
    <Page>
      <Subtitle text="Test Page" main />
      <Button text="confirm modal" onClick={toggleConfirmModal} />
      <Button text="change password" onClick={toggleConfirmModal} />
      <ConfirmModal
        title="Delete account"
        textToConfirm="DELETE"
        question="Are you sure you want to delete your account?"
        isVisible={visibleModals.confirm}
        toggleModalVision={toggleConfirmModal}
        onConfirm={deleteAccountHandler}
      />
      <ChangePasswordForm
        validationHandler={passwordValidationHandler}
        validationObject={isFormsValid.passwordForm}
        dataHandler={passwordFormDataHandler}
        inputsValues={formData.passwordForm}
      />
    </Page>
  );
}
