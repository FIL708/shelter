import { useContext, useState } from 'react';

import { Page, ErrorCard } from 'components/ui';
import { LoginForm } from 'features/login';
import { useForm } from 'hooks';
import { UserContext } from '..';

export default function Login() {
  const { serverUrl } = useContext(UserContext);

  const [loginData, loginHandler] = useForm({ email: '', password: '' });
  const [message, setMessage] = useState({ text: '', isValid: false });
  const [error, setError] = useState(null);

  const loginRequest = async () => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.status === 200) {
        window.open(res.url, '_self');
      } else if (res.status === 401) {
        setMessage({ text: 'Incorrect email or password', isValid: false });
      }
    } catch (err) {
      setError(err);
    }
  };

  const loginWithGoogle = () => {
    window.open(`${serverUrl}/api/auth/google`, '_self');
  };
  const loginWithTwitter = () => {
    console.log('twitter login');
  };
  const loginWithFacebook = () => {
    window.open(`${serverUrl}/api/auth/facebook`, '_self');
  };
  return (
    <Page>
      {error ? (
        <ErrorCard errorCode="500" errorMessage={error} />
      ) : (
        <LoginForm
          loginRequest={loginRequest}
          loginHandler={loginHandler}
          formData={loginData}
          authWithGoogle={loginWithGoogle}
          authWithTwitter={loginWithTwitter}
          authWithFacebook={loginWithFacebook}
          message={message}
        />
      )}
    </Page>
  );
}
