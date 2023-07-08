import { Page } from 'components/ui';
import { ForgotForm, ResetForm } from 'features/forgot';

export default function Forgot() {
  return (
    <Page>
      <ForgotForm />
      <ResetForm />
    </Page>
  );
}
