import { Link } from 'react-router-dom';
import { AuthButtons, Button, Subtitle, Textfield } from '../index.js';
import './signup-form.css';

export default function SignupForm({
  registerHandler,
  registerDataHandler,
  formData,
  formIsValid,
  validationHandler,
  registerWithGoogle,
  registerWithTwitter,
  registerWithFacebook,
}) {
  return (
    <section className="signup-form__section">
      <Subtitle text="Register" main />
      <form className="signup-form">
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
        />
      </form>
      <AuthButtons
        text="or signup with:"
        authWithGoogle={registerWithGoogle}
        authWithTwitter={registerWithTwitter}
        authWithFacebook={registerWithFacebook}
      />
      <span className="signup-form__login">
        Already have a account{' '}
        <Link to="/signup" className="signup-form__link">
          Signup now!
        </Link>
      </span>
    </section>
  );
}
