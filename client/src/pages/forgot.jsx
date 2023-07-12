import { Page } from 'components/ui';
import { ForgotForm } from 'features/forgot';
import { useState } from 'react';

export default function Forgot() {
  const [forgotValue, setForgotValue] = useState('');

  const [formMessage, setFormMessage] = useState({ text: '', isValid: false });

  const forgotValueHandler = (event) => {
    const { value } = event.target;
    setForgotValue(value);
  };

  const sendForgotRequest = async () => {
    if (!forgotValue) return;

    try {
      const res = await fetch('/api/forgot', {
        method: 'POST',
        body: JSON.stringify({ email: forgotValue }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setForgotValue('');
        setFormMessage({
          text: 'Please check your email for a password reset link.',
          isValid: true,
        });
      }
      if (res.status === 404) {
        setFormMessage({
          text: `${forgotValue} not found!`,
          isValid: false,
        });
        setForgotValue('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Page>
      <ForgotForm
        inputValue={forgotValue}
        handler={forgotValueHandler}
        sendEmail={sendForgotRequest}
        message={formMessage}
      />
    </Page>
  );
}
