import { useParams } from 'react-router-dom';
import { Page } from 'components/ui';
import { ForgotForm, ResetForm } from 'features/forgot';
import { useState } from 'react';

export default function Forgot() {
  const { id } = useParams();
  const [forgotValue, setForgotValue] = useState();
  const [resetValues, setResetValues] = useState();
  console.log(forgotValue, setForgotValue, resetValues, setResetValues, id);

  return (
    <Page>
      <ForgotForm />
      <ResetForm />
    </Page>
  );
}
