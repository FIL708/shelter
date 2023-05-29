import { Page, Subtitle, ConfirmModal } from '../components';

export default function Test() {
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <ConfirmModal
        title="Delete account"
        textToConfirm="DELETE"
        question="Are you sure you want to delete your account?"
      />
    </Page>
  );
}
