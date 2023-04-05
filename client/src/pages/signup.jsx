import { useState } from 'react';
import { Page, SignupForm } from '../components';
import { inputValidator } from '../helpers';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm: '',
  });
  const [formIsValid, setFormIsValid] = useState({});

  const registerHandler = () => {
    console.log(formData);
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
      <SignupForm
        registerHandler={registerHandler}
        registerDataHandler={registerDataHandler}
        formData={formData}
        formIsValid={formIsValid}
        validationHandler={validationHandler}
        registerWithGoogle={registerWithGoogle}
        registerWithTwitter={registerWithTwitter}
        registerWithFacebook={registerWithFacebook}
      />
    </Page>
  );
}
