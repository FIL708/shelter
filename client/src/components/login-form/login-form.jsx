import './login-form.css';
import { Textfield, Button } from '../index.js';

export default function LoginForm() {
  return (
    <form className="login-form">
      <h2>Login</h2>
      <Textfield name="email" label="Email" />
      <Textfield name="password" label="Password" />
      <Button text="Login" iconType="login" iconFill="" iconSize="15px" />
    </form>
  );
}
