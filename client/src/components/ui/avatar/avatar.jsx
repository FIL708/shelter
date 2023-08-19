import './avatar.css';
import defaultAvatar from './assets/default-avatar.jpg';

export default function Avatar({ photo = defaultAvatar, alt = 'user avatar' }) {
  return <img src={photo} alt={alt} />;
}
