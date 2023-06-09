import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page, ErrorCard } from 'components/ui';
import { RegisterForm } from 'features/signup';
import { inputValidator } from 'utils';
import { UserContext } from '..';

export default function Signup() {
  const { serverUrl } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm: '',
  });
  const [formIsValid, setFormIsValid] = useState({});
  const [message, setMessage] = useState({ text: '', isValid: false });
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
        setMessage({
          text: 'Account has been successfully created',
          isValid: true,
        });
        setTimeout(() => navigate('/login'), 2000);
      } else if (res.status === 409) {
        setMessage({ text: 'Account already exists', isValid: false });
      } else if (res.status === '422') {
        setMessage({ text: 'Unprocessable entity', isValid: false });
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
    window.open(`${serverUrl}/api/auth/google`, '_self');
  };
  const registerWithTwitter = () => {
    console.log('twitter register');
  };
  const registerWithFacebook = () => {
    window.open(`${serverUrl}/api/auth/facebook`, '_self');
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
