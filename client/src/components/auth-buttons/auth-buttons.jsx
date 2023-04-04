import { Button } from '../index.js';
import './auth-buttons.css';

export default function AuthButtons({
  text,
  loginWithGoogle,
  loginWithTwitter,
  loginWithFacebook,
}) {
  return (
    <div className="auth-buttons">
      <h4 className="auth-buttons__text">{text}</h4>
      <div className="auth-buttons__buttons">
        <Button
          iconType="round-google"
          iconSize="35px"
          onClick={loginWithGoogle}
        />
        <Button
          iconType="round-twitter"
          iconSize="35px"
          onClick={loginWithTwitter}
        />
        <Button
          iconType="round-facebook"
          iconSize="35px"
          onClick={loginWithFacebook}
        />
      </div>
    </div>
  );
}
