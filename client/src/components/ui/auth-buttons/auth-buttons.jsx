import { IconButton } from 'components/form';
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
        <IconButton type="round-google" size="35px" onClick={authWithGoogle} />
        <IconButton
          type="round-twitter"
          size="35px"
          onClick={authWithTwitter}
        />
        <IconButton
          type="round-facebook"
          size="35px"
          onClick={authWithFacebook}
        />
      </div>
    </div>
  );
}
