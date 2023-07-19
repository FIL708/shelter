import { Link } from 'react-router-dom';
import { Textfield, Button } from 'components/form';
import { AuthButtons, Subtitle, FormMessage } from 'components/ui';
import './login-form.css';

export default function LoginForm({
  loginRequest,
  loginHandler,
  formData,
  authWithGoogle,
  authWithTwitter,
  authWithFacebook,
  message,
}) {
  const disableButton = Object.values(formData).some((item) => !item);

  return (
    <section className="login-form__section">
      <Subtitle text="Login" main />
      <form className="login-form">
        <Textfield
          name="email"
          type="email"
          label="Email"
          onChange={(event) => loginHandler(event)}
          value={formData.email}
        />
        <Textfield
          name="password"
          type="password"
          label="Password"
          onChange={(event) => loginHandler(event)}
          value={formData.password}
        />
        <Link className="login-form__link" to="/forgot">
          Forgot password?
        </Link>
        <Button
          text="Login"
          iconType="login"
          iconFill="#fff2f2"
          iconSize="18px"
          onClick={loginRequest}
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
