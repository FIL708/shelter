import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ErrorCard,
  LoadingSpinner,
  Page,
  Subtitle,
  ConfirmModal,
} from 'components/ui';
import { ChangePasswordForm, ProfileForm, UserCard } from 'features/profile';
import { UserContext } from 'index.jsx';
import { useFetch } from 'hooks';
import { inputValidator, areObjectsEqual } from 'utils';

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { serverUrl } = useContext(UserContext);
  const [user, isLoading, error] = useFetch(`/api/user/${id}`);
  const initialIsFormValid = {
    passwordForm: {
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
    },
    updateForm: {
      phone: {
        isValid: null,
        message: null,
      },
      avatar: {
        isValid: null,
        message: null,
      },
    },
  };

  const [visibleModals, setVisibleModals] = useState({
    confirm: false,
    password: false,
    update: false,
  });
  const [updateForm, setUpdateForm] = useState({
    previous: {
      firstName: '',
      lastName: '',
      address: {
        city: '',
        country: '',
      },
      phone: '',
      birthday: '',
      avatar: '',
    },
    current: {
      firstName: '',
      lastName: '',
      address: {
        city: '',
        country: '',
      },
      phone: '',
      birthday: '',
      avatar: '',
    },
  });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isFormsValid, setIsFormValid] = useState(initialIsFormValid);
  const [formsMessage, setFormsMessage] = useState({
    text: '',
    isWrong: false,
  });

  useEffect(() => {
    if (user) {
      const userData = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        address: { city: user.address?.city, country: user.address?.country },
        phone: user.phone,
        birthday: user.birthday,
        avatar: user.avatar,
        createdAt: user.createdAt,
      };

      setUpdateForm({ previous: userData, current: userData });
    }
  }, [user]);

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
      passwordForm: initialIsFormValid.passwordForm,
    }));
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };
  const checkRequiredPasswordFormFields = () => {
    let isFilled = true;
    if (!passwordForm.currentPassword) {
      setIsFormValid((prev) => ({
        ...prev,
        passwordForm: {
          ...prev.passwordForm,
          currentPassword: {
            isValid: false,
            message: 'This field is required',
          },
        },
      }));
      isFilled = false;
    }
    if (!passwordForm.newPassword) {
      setIsFormValid((prev) => ({
        ...prev,
        passwordForm: {
          ...prev.passwordForm,
          newPassword: {
            isValid: false,
            message: 'This field is required',
          },
        },
      }));
      isFilled = false;
    }
    if (!passwordForm.confirmPassword) {
      setIsFormValid((prev) => ({
        ...prev,
        passwordForm: {
          ...prev.passwordForm,
          confirmPassword: {
            isValid: false,
            message: 'This field is required',
          },
        },
      }));
      isFilled = false;
    }
    return isFilled;
  };
  const onConfirmPasswordForm = async () => {
    const isFormFilled = checkRequiredPasswordFormFields();
    if (isFormFilled) {
      const res = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordForm }),
      });

      if (res.status === 401) {
        const respondMessage = await res.json();
        setIsFormValid((prev) => ({
          ...prev,
          passwordForm: {
            ...prev.passwordForm,
            currentPassword: {
              message: respondMessage.message,
              isValid: false,
            },
          },
        }));
      } else if (!res.ok) {
        setFormsMessage({ text: 'Something goes wrong', isWrong: true });
      } else {
        setFormsMessage({
          text: 'Password successfully changed',
          isWrong: false,
        });
        setPasswordForm({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
        setIsFormValid(initialIsFormValid);

        setTimeout(() => {
          togglePasswordModal();
          setFormsMessage({
            text: '',
            isWrong: false,
          });
        }, 1000);
      }
    }
  };

  const toggleUpdateModal = () => {
    setVisibleModals((prev) => ({ ...prev, update: !prev.update }));
  };
  const updateFormDataHandler = (event) => {
    const { name, value } = event.target;

    if (name === 'city' || name === 'country') {
      setUpdateForm((prev) => ({
        ...prev,
        current: {
          ...prev.current,
          address: { ...prev.current.address, [name]: value },
        },
      }));
    } else {
      setUpdateForm((prev) => ({
        ...prev,
        current: { ...prev.current, [name]: value },
      }));
    }
  };
  const updateValidationHandler = (event, type) => {
    const { name, value } = event.target;
    const validationObject = inputValidator(value, type);
    setIsFormValid((prev) => ({
      ...prev,
      updateForm: { ...prev.updateForm, [name]: validationObject },
    }));
  };
  const onClosingUpdateForm = () => {
    toggleUpdateModal();
    setIsFormValid((prev) => ({
      ...prev,
      updateForm: initialIsFormValid.updateForm,
    }));
    setPasswordForm({ password: '', confirm: '' });
    setUpdateForm((prev) => ({ ...prev, current: prev.previous }));
    setFormsMessage({ text: '', isWrong: false });
  };
  const onConfirmUpdateForm = async () => {
    try {
      if (!areObjectsEqual(updateForm.previous, updateForm.current)) {
        const res = await fetch(`/api/user/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateForm.current),
        });
        if (!res.ok) {
          setFormsMessage({ text: 'Something goes wrong', isWrong: true });
        } else {
          setFormsMessage({
            text: 'Profile successfully updated',
            isWrong: false,
          });
          setUpdateForm((prev) => ({ ...prev, previous: prev.current }));
          setIsFormValid((prev) => ({
            ...prev,
            updateForm: initialIsFormValid.updateForm,
          }));
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
        userData={updateForm.previous}
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
        validationObject={isFormsValid.passwordForm}
        dataHandler={passwordFormDataHandler}
        inputsValues={passwordForm}
        isVisible={visibleModals.password}
        toggleModalVision={togglePasswordModal}
        onCancel={onClosingPasswordForm}
        onConfirm={onConfirmPasswordForm}
        message={formsMessage}
      />
      <ProfileForm
        dataHandler={updateFormDataHandler}
        inputsValues={updateForm.current}
        toggleModalVision={toggleUpdateModal}
        isVisible={visibleModals.update}
        validationHandler={updateValidationHandler}
        validationObject={isFormsValid.updateForm}
        onCancel={onClosingUpdateForm}
        onConfirm={onConfirmUpdateForm}
        message={formsMessage}
      />
    </Page>
  );
}
