import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page, RegisterForm, ErrorCard } from '../components';
import { inputValidator } from '../helpers';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm: '',
  });
  const [formIsValid, setFormIsValid] = useState({});
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const registerHandler = async () => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.status === 200) {
        setMessage(null);
        navigate('/login');
      } else if (res.status === 409) {
        setMessage('Account already exists');
      } else if (res.status === '422') {
        setMessage('Unprocessable entity');
      }
    } catch (err) {
      setError(err);
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
      {error ? (
        <ErrorCard errorCode="500" errorMessage={error} />
      ) : (
        <RegisterForm
          registerHandler={registerHandler}
          registerDataHandler={registerDataHandler}
          formData={formData}
          formIsValid={formIsValid}
          validationHandler={validationHandler}
          registerWithGoogle={registerWithGoogle}
          registerWithTwitter={registerWithTwitter}
          registerWithFacebook={registerWithFacebook}
          message={message}
        />
      )}
    </Page>
  );
}
