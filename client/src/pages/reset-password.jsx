import { useState } from 'react';
import { Page } from 'components/ui';
import { ResetForm } from 'features/forgot';

export default function ResetPassword() {
  const [resetValues, setResetValues] = useState({ password: '', confirm: '' });
  const [formMessage, setFormMessage] = useState({ text: '', isValid: false });
  console.log(setFormMessage);

  const resetValuesHandler = (event) => {
    const { value, name } = event.target;
    setResetValues((prev) => ({ ...prev, [name]: value }));
  };
  const sendResetRequest = () => {
    console.log('Reset!');
  };
  return (
    <Page>
      <ResetForm
        inputValues={resetValues}
        handler={resetValuesHandler}
        resetPassword={sendResetRequest}
        message={formMessage}
      />
    </Page>
  );
}
