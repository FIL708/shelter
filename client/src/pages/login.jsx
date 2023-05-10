import { useContext, useState } from 'react';
import { inputValidator } from '../helpers';
import { Page, LoginForm, ErrorCard } from '../components';
import { UserContext } from '..';

export default function Login() {
  const { serverUrl } = useContext(UserContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formIsValid, setFormIsValid] = useState({});
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const loginHandler = async () => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(res);

      if (res.status === 200) {
        setMessage(null);
        window.open(res.url, '_self');
      } else if (res.status === 401) {
        setMessage('Incorrect email or password');
      }
    } catch (err) {
      setError(err);
    }
  };

  const loginDataHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const validationHandler = (event, type) => {
    const { name, value } = event.target;
    const validationObject = inputValidator(value, type);
    setFormIsValid((prev) => ({ ...prev, [name]: validationObject }));
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
          loginHandler={loginHandler}
          loginDataHandler={loginDataHandler}
          formData={formData}
          formIsValid={formIsValid}
          validationHandler={validationHandler}
          authWithGoogle={loginWithGoogle}
          authWithTwitter={loginWithTwitter}
          authWithFacebook={loginWithFacebook}
          message={message}
        />
      )}
    </Page>
  );
}
