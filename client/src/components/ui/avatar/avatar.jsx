import './avatar.css';

export default function Avatar({
  photo = 'https://tleliteracy.com/wp-content/uploads/2017/02/default-avatar.png',
  alt = 'user avatar',
}) {
  return <img src={photo} alt={alt} />;
}
