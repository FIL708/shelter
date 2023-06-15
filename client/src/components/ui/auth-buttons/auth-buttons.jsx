import { Button } from '../../form';
import './auth-buttons.css';

export default function AuthButtons({
  text,
  authWithGoogle,
  authWithTwitter,
  authWithFacebook,
}) {
  return (
    <div className="auth-buttons">
      <h4 className="auth-buttons__text">{text}</h4>
      <div className="auth-buttons__buttons">
        <Button
          iconType="round-google"
          iconSize="35px"
          onClick={authWithGoogle}
        />
        <Button
          iconType="round-twitter"
          iconSize="35px"
          onClick={authWithTwitter}
        />
        <Button
          iconType="round-facebook"
          iconSize="35px"
          onClick={authWithFacebook}
        />
      </div>
    </div>
  );
}
