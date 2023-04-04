import './login-form.css';
import { Textfield, Button } from '../index.js';

export default function LoginForm({
  loginHandler,
  loginDataHandler,
  formData,
  validationHandler,
  formIsValid,
}) {
  return (
    <>
      <form className="login-form">
        <Textfield
          name="email"
          label="Email"
          onChange={(event) => loginDataHandler(event)}
          value={formData.email}
          onBlur={(event) => validationHandler(event, 'email')}
          validation={formIsValid.email}
        />
        <Textfield
          name="password"
          type="password"
          label="Password"
          onChange={(event) => loginDataHandler(event)}
          value={formData.password}
          onBlur={(event) => validationHandler(event, 'password')}
          validation={formIsValid.password}
        />
        <Button
          text="Login"
          iconType="login"
          iconFill="#fff2f2"
          iconSize="18px"
          onClick={loginHandler}
        />
      </form>
      <span>asdas</span>
    </>
  );
}
