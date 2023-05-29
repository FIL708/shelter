import { useState } from 'react';
import { Page, Subtitle, ConfirmModal, Button } from '../components';

export default function Test() {
  const [visibleModals, setVisibleModals] = useState({ confirm: false });
  const onClickConfirm = () => {
    setVisibleModals((prev) => ({ ...prev, confirm: !prev.confirm }));
  };
  const cancelConfirmMode = () => {
    onClickConfirm();
  };

  return (
    <Page>
      <Subtitle text="Test Page" main />
      <Button text="click" onClick={onClickConfirm} />
      <ConfirmModal
        title="Delete account"
        textToConfirm="DELETE"
        question="Are you sure you want to delete your account?"
        isVisible={visibleModals.confirm}
        toggleModalVision={onClickConfirm}
        onCancel={cancelConfirmMode}
      />
    </Page>
  );
}
