import { Button } from '../index.js';
import './auth-buttons.css';

export default function AuthButtons({
  text,
  googleHandler,
  facebookHandler,
  twitterHandler,
}) {
  return (
    <div className="auth-buttons">
      <h4 className="auth-buttons__text">{text}</h4>
      <div className="auth-buttons__buttons">
        <Button
          iconType="round-google"
          iconSize="35px"
          onClick={googleHandler}
        />
        <Button
          iconType="round-twitter"
          iconSize="35px"
          onClick={twitterHandler}
        />
        <Button
          iconType="round-facebook"
          iconSize="35px"
          onClick={facebookHandler}
        />
      </div>
    </div>
  );
}
