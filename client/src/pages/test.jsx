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
  // const [updateForm, setUpdateForm] = useState({});

  const [passwordForm, setPasswordForm] = useState({
    password: '',
    confirm: '',
  });
  const [isFormsValid, setIsFormValid] = useState({
    passwordForm: {
      password: {
        isValid: null,
        message: null,
      },
      confirm: {
        isValid: null,
        message: null,
      },
    },
    updateForm: {},
  });

  const toggleConfirmModal = () => {
    setVisibleModals((prev) => ({ ...prev, confirm: !prev.confirm }));
  };

  const togglePasswordModal = () => {
    setVisibleModals((prev) => ({ ...prev, password: !prev.password }));
  };
  const passwordFormDataHandler = (event) => {
    const { name, value } = event.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };
  const passwordValidationHandler = (event, type, confirm) => {
    const { name, value } = event.target;
    const validationObject = inputValidator(value, type, confirm);
    setIsFormValid((prev) => ({
      ...prev,
      passwordForm: { ...prev.passwordForm, [name]: validationObject },
    }));
  };
  const onClosingPasswordForm = () => {
    togglePasswordModal();
    setIsFormValid((prev) => ({
      ...prev,
      passwordForm: {
        password: {
          isValid: null,
          message: null,
        },
        confirm: {
          isValid: null,
          message: null,
        },
      },
    }));
    setPasswordForm({ password: '', confirm: '' });
  };

  return (
    <Page>
      <Subtitle text="Test Page" main />
      <Button text="confirm modal" onClick={toggleConfirmModal} />
      <Button text="change password" onClick={togglePasswordModal} />
      <ConfirmModal
        title="Delete account"
        textToConfirm="DELETE"
        question="Are you sure you want to delete your account?"
        isVisible={visibleModals.confirm}
        toggleModalVision={toggleConfirmModal}
      />
      <ChangePasswordForm
        validationHandler={passwordValidationHandler}
        validationObject={isFormsValid.passwordForm}
        dataHandler={passwordFormDataHandler}
        inputsValues={passwordForm}
        isVisible={visibleModals.password}
        toggleModalVision={togglePasswordModal}
        onCancel={onClosingPasswordForm}
      />
    </Page>
  );
}
