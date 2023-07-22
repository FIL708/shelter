import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ErrorCard,
  LoadingSpinner,
  Page,
  Subtitle,
  ConfirmModal,
} from 'components/ui';

import { UserContext } from 'index.jsx';
import { useFetch, useForm, useValidation } from 'hooks';
import { areObjectsEqual } from 'utils';

import { ChangePasswordForm, ProfileForm, UserCard } from 'features/profile';
import { useProfileForm } from 'features/profile/hooks';

const passwordValidationInit = {
  currentPassword: {
    isValid: null,
    message: null,
  },
  newPassword: {
    isValid: null,
    message: null,
  },
  confirmPassword: {
    isValid: null,
    message: null,
  },
};
const passwordFormInit = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};
const updateValidationInit = {
  phone: {
    isValid: null,
    message: '',
  },
  avatar: {
    isValid: null,
    message: '',
  },
};

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { serverUrl } = useContext(UserContext);

  const [user, isLoading, error] = useFetch(`/api/user/${id}`);

  const [
    profileForm,
    profileFormHandler,
    undoProfileChanges,
    confirmProfileChanges,
  ] = useProfileForm(user);
  const [isUpdateFormValid, updateValidationHandler, updateValidationReset] =
    useValidation(updateValidationInit);
  console.log(profileForm);

  const [passwordForm, passwordFormHandler, passwordFormReset] =
    useForm(passwordFormInit);
  const [
    isPasswordFormValid,
    passwordValidationHandler,
    passwordValidationReset,
  ] = useValidation(passwordValidationInit);

  const [formsMessage, setFormsMessage] = useState({
    text: '',
    isWrong: false,
  });
  const [visibleModals, setVisibleModals] = useState({
    confirm: false,
    password: false,
    update: false,
  });

  const toggleDeleteAccountModal = () => {
    setVisibleModals((prev) => ({ ...prev, confirm: !prev.confirm }));
  };
  const onConfirmDeleteAccount = async () => {
    try {
      const res = await fetch(`/api/user/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        setFormsMessage({ text: 'Something goes wrong', isWrong: true });
      } else {
        setFormsMessage({
          text: 'Account successfully deleted',
          isWrong: false,
        });
        setTimeout(() => {
          window.open(`${serverUrl}/api/auth/logout`, '_self');
        }, 1000);
      }
    } catch (errorDelete) {
      setFormsMessage({ text: 'Something goes wrong', isWrong: true });
    }
  };

  const togglePasswordModal = () => {
    setVisibleModals((prev) => ({ ...prev, password: !prev.password }));
  };

  const onClosingPasswordForm = () => {
    togglePasswordModal();
    passwordValidationReset();
    passwordFormReset();
  };
  const onConfirmPasswordForm = async () => {
    const res = await fetch(`/api/user/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: passwordForm }),
    });

    if (res.status === 401) {
      setFormsMessage({
        text: 'The entered current password is incorrect',
        isWrong: true,
      });
    } else if (!res.ok) {
      setFormsMessage({ text: 'Something goes wrong', isWrong: true });
    } else {
      setFormsMessage({
        text: 'Password successfully changed',
        isWrong: false,
      });
      passwordFormReset();
      passwordValidationReset();

      setTimeout(() => {
        togglePasswordModal();
        setFormsMessage({
          text: '',
          isWrong: false,
        });
      }, 1000);
    }
  };

  const toggleUpdateModal = () => {
    setVisibleModals((prev) => ({ ...prev, update: !prev.update }));
  };

  const onClosingUpdateForm = () => {
    toggleUpdateModal();
    updateValidationReset();
    undoProfileChanges();
    setFormsMessage({ text: '', isWrong: false });
  };
  const onConfirmUpdateForm = async () => {
    try {
      if (!areObjectsEqual(profileForm.previous, profileForm.current)) {
        const res = await fetch(`/api/user/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(profileForm.current),
        });
        if (!res.ok) {
          setFormsMessage({ text: 'Something goes wrong', isWrong: true });
        } else {
          setFormsMessage({
            text: 'Profile successfully updated',
            isWrong: false,
          });
          confirmProfileChanges();
          updateValidationReset();
        }
      }

      setTimeout(() => {
        toggleUpdateModal();
        setFormsMessage({ text: '', isWrong: false });
      }, 1000);
    } catch (updateError) {
      setFormsMessage({ text: 'Something goes wrong', isWrong: false });
      setTimeout(() => navigate('/'), 2000);
    }
  };

  if (isLoading || error) {
    if (error?.status === 403) {
      navigate('/');
    }
    return (
      <Page>
        <Subtitle text="Gallery" main />
        {isLoading || user ? (
          <LoadingSpinner />
        ) : (
          <ErrorCard errorCode={error.status} errorMessage={error.message} />
        )}
      </Page>
    );
  }

  return (
    <Page>
      <Subtitle text="Profile" main />
      <UserCard
        userData={profileForm.previous}
        deleteAccount={toggleDeleteAccountModal}
        updateProfile={toggleUpdateModal}
        changePassword={togglePasswordModal}
      />
      <ConfirmModal
        title="Delete account"
        textToConfirm="DELETE"
        question="Are you sure you want to delete your account?"
        isVisible={visibleModals.confirm}
        toggleModalVision={toggleDeleteAccountModal}
        message={formsMessage}
        onConfirm={onConfirmDeleteAccount}
      />
      <ChangePasswordForm
        validationHandler={passwordValidationHandler}
        validationObject={isPasswordFormValid}
        dataHandler={passwordFormHandler}
        inputsValues={passwordForm}
        isVisible={visibleModals.password}
        toggleModalVision={togglePasswordModal}
        onCancel={onClosingPasswordForm}
        onConfirm={onConfirmPasswordForm}
        message={formsMessage}
      />
      <ProfileForm
        dataHandler={profileFormHandler}
        inputsValues={profileForm.current}
        toggleModalVision={toggleUpdateModal}
        isVisible={visibleModals.update}
        validationHandler={updateValidationHandler}
        validationObject={isUpdateFormValid}
        onCancel={onClosingUpdateForm}
        onConfirm={onConfirmUpdateForm}
        message={formsMessage}
      />
    </Page>
  );
}
