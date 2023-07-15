import { Page, Subtitle } from 'components/ui';
import { ForgotForm, ResetForm } from 'features/forgot';

export default function Test() {
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <ForgotForm />
      <ResetForm />
    </Page>
  );
}
