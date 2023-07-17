import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Page, ErrorCard } from 'components/ui';
import { RegisterForm } from 'features/signup';
import { useValidation } from 'hooks';
import { UserContext } from '..';

export default function Signup() {
  const { serverUrl } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm: '',
  });
  const [isFormValid, validationHandler, validationReset] = useValidation({
    email: { isValid: null, message: '' },
    password: { isValid: null, message: '' },
    confirm: { isValid: null, message: '' },
  });
  const [message, setMessage] = useState({ text: '', isValid: null });
  const [error, setError] = useState(null);

  const registrationRequest = async () => {
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
        setFormData({
          email: '',
          password: '',
          confirm: '',
        });
        validationReset();
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
          registerHandler={registrationRequest}
          registerDataHandler={registerDataHandler}
          formData={formData}
          formIsValid={isFormValid}
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
