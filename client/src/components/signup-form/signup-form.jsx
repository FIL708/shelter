import { Link } from 'react-router-dom';
import { AuthButtons, Button, Subtitle, Textfield } from '../index.js';
import './signup-form.css';

export default function SignupForm() {
  return (
    <section className="signup-form__section">
      <Subtitle text="Register" main />
      <form className="signup-form">
        <Textfield />
        <Textfield />
        <Textfield />
        <Button />
      </form>
      <AuthButtons text="or signup with:" />
      <span className="signup-form__login">
        Already have a account{' '}
        <Link to="/signup" className="signup-form__link">
          Signup now!
        </Link>
      </span>
    </section>
  );
}
