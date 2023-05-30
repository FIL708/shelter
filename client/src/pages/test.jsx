import { useState } from 'react';
import {
  Page,
  Subtitle,
  ConfirmModal,
  ChangePasswordForm,
  Button,
} from '../components';

export default function Test() {
  const [visibleModals, setVisibleModals] = useState({ confirm: false });

  const toggleConfirmModal = () => {
    setVisibleModals((prev) => ({ ...prev, confirm: !prev.confirm }));
  };
  const deleteAccountHandler = () => {
    console.log('Delete');
  };

  return (
    <Page>
      <Subtitle text="Test Page" main />
      <Button text="confirm modal" onClick={toggleConfirmModal} />
      <ConfirmModal
        title="Delete account"
        textToConfirm="DELETE"
        question="Are you sure you want to delete your account?"
        isVisible={visibleModals.confirm}
        toggleModalVision={toggleConfirmModal}
        onConfirm={deleteAccountHandler}
      />
      <ChangePasswordForm />
    </Page>
  );
}
