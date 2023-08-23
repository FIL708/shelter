import './avatar.css';
import defaultAvatar from './assets/default-avatar.jpg';

export default function Avatar({
  photo = defaultAvatar,
  alt = 'user avatar',
  size = 'medium',
}) {
  return <img src={photo} alt={alt} className={`avatar ${size}`} />;
}
