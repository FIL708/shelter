import './login-form.css';
import { Textfield, Button } from '../index.js';

export default function LoginForm() {
  return (
    <>
      <form className="login-form">
        <Textfield name="email" label="Email" />
        <Textfield name="password" type="password" label="Password" />
        <Button
          text="Login"
          iconType="login"
          iconFill="#fff2f2"
          iconSize="18px"
        />
      </form>
      <span>asdas</span>
    </>
  );
}
