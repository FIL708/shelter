import { useState } from 'react';
import { ErrorCard, LoadingSpinner, Page, Subtitle } from 'components/ui';
import { useFetch } from 'hooks';
import { ResetForm } from 'features/forgot';
import { useParams } from 'react-router-dom';

export default function ResetPassword() {
  const { id } = useParams();
  const [check, isLoading, error] = useFetch(`/api/forgot/${id}`);
  const [resetValues, setResetValues] = useState({ password: '', confirm: '' });
  const [formMessage, setFormMessage] = useState({ text: '', isValid: false });
  console.log(setFormMessage, check);

  const resetValuesHandler = (event) => {
    const { value, name } = event.target;
    setResetValues((prev) => ({ ...prev, [name]: value }));
  };
  const sendResetRequest = async () => {
    if (!resetValues.password) return;

    try {
      const res = await fetch(`/api/forgot/${id}`, {
        method: 'POST',
        body: JSON.stringify({ password: resetValues.password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        setResetValues({ password: '', confirm: '' });
        setFormMessage({
          text: 'Password successfully changed!',
          isValid: true,
        });
      }
    } catch (reqError) {
      setResetValues({ password: '', confirm: '' });
      setFormMessage({
        text: 'Something goes wrong',
        isValid: false,
      });
    }
  };

  if (isLoading || error)
    return (
      <Page>
        <Subtitle text="Our Pets" main />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ErrorCard errorCode={error.status} errorMessage={error.message} />
        )}
      </Page>
    );
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
