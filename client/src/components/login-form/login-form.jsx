import { Link } from 'react-router-dom';
import { Textfield, Button, AuthButtons } from '../index.js';
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
}) {
  return (
    <>
      <form className="login-form">
        <Textfield
          name="email"
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
        />
      </form>
      <AuthButtons
        text="or login with:"
        loginWithGoogle={loginWithGoogle}
        loginWithTwitter={loginWithTwitter}
        loginWithFacebook={loginWithFacebook}
      />
      <span>asdas</span>
    </>
  );
}
