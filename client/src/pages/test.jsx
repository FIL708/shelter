import { Page, Subtitle, ConfirmModal } from '../components';

export default function Test() {
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <ConfirmModal title="Delete account" />
    </Page>
  );
}
