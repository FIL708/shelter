import { Link } from 'react-router-dom';
import { AuthButtons, Button, Subtitle, Textfield } from '../index.js';
import './register-form.css';

export default function RegisterForm({
  registerHandler,
  registerDataHandler,
  formData,
  formIsValid,
  validationHandler,
  registerWithGoogle,
  registerWithTwitter,
  registerWithFacebook,
}) {
  const disableButton = Object.values(formData).some((item) => !item);

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
          text="Register"
          iconType="register"
          iconFill="#fff2f2"
          iconSize="18px"
          onClick={registerHandler}
          disabled={disableButton}
        />
      </form>
      <AuthButtons
        text="or sign up with:"
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
