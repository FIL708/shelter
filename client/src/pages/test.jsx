import { Page, Subtitle, Alert } from 'components/ui';

export default function Test() {
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <Alert variant="success" message="Message" />
      <Alert variant="warning" message="Message" />
      <Alert variant="info" message="Message" />
      <Alert variant="error" message="Message" />
    </Page>
  );
}
