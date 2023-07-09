import { useParams } from 'react-router-dom';
import { Page } from 'components/ui';
import { ForgotForm, ResetForm } from 'features/forgot';
import { useState } from 'react';

export default function Forgot() {
  const { id } = useParams();
  const [forgotValue, setForgotValue] = useState('');
  const [resetValues, setResetValues] = useState({ password: '', confirm: '' });

  const forgotValueHandler = (event) => {
    const { value } = event.target;
    setForgotValue(value);
  };
  const resetValuesHandler = (event) => {
    const { value, name } = event.target;
    setResetValues((prev) => ({ ...prev, [name]: value }));
  };

  const sendForgotRequest = () => {
    console.log('Forgot!');
  };
  const sendResetRequest = () => {
    console.log('Reset!');
  };

  return (
    <Page>
      {id ? (
        <ResetForm
          inputValues={resetValues}
          handler={resetValuesHandler}
          resetPassword={sendResetRequest}
        />
      ) : (
        <ForgotForm
          inputValue={forgotValue}
          handler={forgotValueHandler}
          sendEmail={sendForgotRequest}
        />
      )}
    </Page>
  );
}
