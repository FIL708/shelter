import { Link } from 'react-router-dom';
import { Button, Textfield } from 'components/form';
import { AuthButtons, Subtitle, FormMessage } from 'components/ui';
import './register-form.css';

export default function RegisterForm({
  registrationRequest,
  registerDataHandler,
  formData,
  formIsValid,
  validationHandler,
  registerWithGoogle,
  registerWithTwitter,
  registerWithFacebook,
  message,
}) {
  const disableButton =
    Object.values(formData).some((item) => !item) ||
    Object.values(formIsValid).some((item) => !item.isValid);

  return (
    <section className="register-form__section">
      <Subtitle text="Join to us" main />
      <form className="register-form">
        <Textfield
          name="email"
          type="email"
          label="Email"
          onChange={(event) => registerDataHandler(event)}
          onBlur={(event) => validationHandler(event, 'email')}
          value={formData.email}
          validation={formIsValid.email}
        />
        <Textfield
          name="password"
          type="password"
          label="Password"
          onChange={(event) => registerDataHandler(event)}
          onBlur={(event) => validationHandler(event, 'password')}
          value={formData.password}
          validation={formIsValid.password}
        />
        <Textfield
          name="confirm"
          type="password"
          label="Confirm password"
          onChange={(event) => registerDataHandler(event)}
          onBlur={(event) =>
            validationHandler(event, 'confirm', formData.password)
          }
          value={formData.confirm}
          validation={formIsValid.confirm}
        />
        <Button
          startIcon="register"
          onClick={registrationRequest}
          disabled={disableButton}
        >
          Register
        </Button>
        <FormMessage
          text={message.text}
          isValid={message.isValid}
          width="100%"
        />
      </form>
      <AuthButtons
        text="or sign in with:"
        authWithGoogle={registerWithGoogle}
        authWithTwitter={registerWithTwitter}
        authWithFacebook={registerWithFacebook}
      />
      <span className="register-form__login">
        Already have a account{' '}
        <Link to="/login" className="register-form__link">
          Signup now!
        </Link>
      </span>
    </section>
  );
}
