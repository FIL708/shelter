import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ErrorCard,
  LoadingSpinner,
  Page,
  Subtitle,
  UserCard,
  ConfirmModal,
  ChangePasswordForm,
  ProfileForm,
} from '../components';
import { useFetch } from '../hooks';
import { inputValidator } from '../helpers';

export default function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, isLoading, error] = useFetch(`/api/user/${id}`);

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
  });

  useEffect(() => {
    if (user) {
      setUpdateForm({ previous: user, current: user });
    }
  }, [user]);

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
    }));
    setPasswordForm({ password: '', confirm: '' });
    setUpdateForm((prev) => ({ ...prev, current: prev.previous }));
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
        deleteAccount={toggleConfirmModal}
        updateProfile={toggleUpdateModal}
        changePassword={togglePasswordModal}
      />
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
      <ProfileForm
        dataHandler={updateFormDataHandler}
        inputsValues={updateForm.current}
        toggleModalVision={toggleUpdateModal}
        isVisible={visibleModals.update}
        validationHandler={updateValidationHandler}
        validationObject={isFormsValid.updateForm}
        onCancel={onClosingUpdateForm}
      />
    </Page>
  );
}
