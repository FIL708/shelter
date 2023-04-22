import { useState } from 'react';
import { inputValidator } from '../helpers';
import { Page, LoginForm } from '../components';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formIsValid, setFormIsValid] = useState({});
  const [message, setMessage] = useState(null);

  const loginHandler = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.status === 200) {
      setMessage(null);
      window.open(res.url, '_self');
    } else if (res.status === 401) {
      setMessage('Incorrect email or password');
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
    console.log('google login');
  };
  const loginWithTwitter = () => {
    console.log('twitter login');
  };
  const loginWithFacebook = () => {
    console.log('facebook login');
  };
  return (
    <Page>
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
    </Page>
  );
}
