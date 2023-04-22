import { Link } from 'react-router-dom';
import { Textfield, Button, AuthButtons, Subtitle } from '../index.js';
import './login-form.css';

export default function LoginForm({
  loginHandler,
  loginDataHandler,
  formData,
  validationHandler,
  formIsValid,
  loginWithGoogle,
  loginWithTwitter,
  loginWithFacebook,
  message,
}) {
  const disableButton = Object.values(formData).some((item) => !item);
  const messageErrorClassName = message
    ? 'login-form__error-message visible'
    : 'login-form__error-message';
  return (
    <section className="login-form__section">
      <Subtitle text="Login" main />
      <form className="login-form">
        <Textfield
          name="email"
          type="email"
          label="Email"
          onChange={(event) => loginDataHandler(event)}
          onBlur={(event) => validationHandler(event, 'email')}
          value={formData.email}
          validation={formIsValid.email}
        />
        <Textfield
          name="password"
          type="password"
          label="Password"
          onChange={(event) => loginDataHandler(event)}
          onBlur={(event) => validationHandler(event, 'password')}
          value={formData.password}
          validation={formIsValid.password}
        />
        <Link className="login-form__link" to="/">
          Forgot password?
        </Link>
        <Button
          text="Login"
          iconType="login"
          iconFill="#fff2f2"
          iconSize="18px"
          onClick={loginHandler}
          disabled={disableButton}
        />
      </form>
      <p className={messageErrorClassName}>{message}</p>
      <AuthButtons
        text="or login with:"
        loginWithGoogle={loginWithGoogle}
        loginWithTwitter={loginWithTwitter}
        loginWithFacebook={loginWithFacebook}
      />
      <span className="login-form__register">
        Not a member?{' '}
        <Link to="/signup" className="login-form__link">
          Signup now!
        </Link>
      </span>
    </section>
  );
}
