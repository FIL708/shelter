import './avatar.css';

export default function Avatar({ photo }) {
  const url =
    photo ||
    'https://tleliteracy.com/wp-content/uploads/2017/02/default-avatar.png';
  return <img src={url} alt="user avatar" />;
}
