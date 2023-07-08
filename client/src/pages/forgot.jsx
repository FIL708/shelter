import { useParams } from 'react-router-dom';
import { Page } from 'components/ui';
import { ForgotForm, ResetForm } from 'features/forgot';
import { useState } from 'react';

export default function Forgot() {
  const { id } = useParams();
  const [forgotValue, setForgotValue] = useState('');
  const [resetValues, setResetValues] = useState({ password: '', confirm: '' });
  console.log(forgotValue, setForgotValue, resetValues, setResetValues, id);

  const forgotValueHandler = (event) => {
    const { value } = event.target;
    setForgotValue(value);
  };
  const resetValuesHandler = (event) => {
    const { value, name } = event.target;
    setForgotValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Page>
      <ForgotForm handler={forgotValueHandler} />
      <ResetForm handler={resetValuesHandler} />
    </Page>
  );
}
