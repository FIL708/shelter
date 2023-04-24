import { useState } from 'react';
import { Page, RegisterForm } from '../components';
import { inputValidator } from '../helpers';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm: '',
  });
  const [formIsValid, setFormIsValid] = useState({});

  const registerHandler = async () => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      const { message } = await response.json();
      console.log(message);

      if (!response.ok) {
        throw new Error({ message, status: response.status });
      }
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  };
  const registerDataHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const validationHandler = (event, type, confirm) => {
    const { name, value } = event.target;
    const validationObject = inputValidator(value, type, confirm);
    setFormIsValid((prev) => ({ ...prev, [name]: validationObject }));
  };

  const registerWithGoogle = () => {
    console.log('google register');
  };
  const registerWithTwitter = () => {
    console.log('twitter register');
  };
  const registerWithFacebook = () => {
    console.log('facebook register');
  };
  return (
    <Page>
      <RegisterForm
        registerHandler={registerHandler}
        registerDataHandler={registerDataHandler}
        formData={formData}
        formIsValid={formIsValid}
        validationHandler={validationHandler}
        registerWithGoogle={registerWithGoogle}
        registerWithTwitter={registerWithTwitter}
        registerWithFacebook={registerWithFacebook}
        message="asdasd"
      />
    </Page>
  );
}
