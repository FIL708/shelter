import { useContext } from 'react';
import { UserContext } from '../..';
import './user-logged-bar.css';

export default function UserLoggedBar() {
  const user = useContext(UserContext);
  console.log(user);

  return <div>user-loged-bar</div>;
}
