import { Button } from '../index.js';
import './auth-buttons.css';

export default function AuthButtons({ text }) {
  return (
    <div className="auth-buttons">
      {text}
      <Button iconType="" iconSize="30px" />
      <Button iconType="" iconSize="30px" />
      <Button iconType="" iconSize="30px" />
    </div>
  );
}
