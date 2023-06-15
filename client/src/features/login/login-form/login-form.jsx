import { Link } from 'react-router-dom';
import { Textfield, Button } from '../../../components/form';
import { AuthButtons, Subtitle, FormMessage } from '../../../components/ui';
import './login-form.css';

export default function LoginForm({
  loginHandler,
  loginDataHandler,
  formData,
  validationHandler,
  formIsValid,
  authWithGoogle,
  authWithTwitter,
  authWithFacebook,
  message,
}) {
  const disableButton =
    Object.values(formData).some((item) => !item) ||
    Object.values(formIsValid).some((item) => !item.isValid);

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
        <FormMessage
          text={message.text}
          isValid={message.isValid}
          width="100%"
        />
      </form>
      <AuthButtons
        text="or sign in with:"
        authWithGoogle={authWithGoogle}
        authWithTwitter={authWithTwitter}
        authWithFacebook={authWithFacebook}
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
