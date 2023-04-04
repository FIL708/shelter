import { useState } from 'react';
import { inputValidator } from '../helpers';
import { Page, LoginForm } from '../components';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formIsValid, setFormIsValid] = useState({});
  const loginHandler = () => {
    console.log(formData);
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
  return (
    <Page>
      <h1>Login</h1>
      <LoginForm
        loginHandler={loginHandler}
        loginDataHandler={loginDataHandler}
        formData={formData}
        formIsValid={formIsValid}
        validationHandler={validationHandler}
      />
    </Page>
  );
}
