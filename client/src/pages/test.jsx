import { useContext } from 'react';
import { Page, Subtitle } from '../components/ui';
import { UserContext } from '..';
import Hamburger from '../components/ui/hamburger/hamburger.jsx';

export default function Test() {
  const { user, serverUrl } = useContext(UserContext);
  console.log(user, serverUrl);

  return (
    <Page>
      <Subtitle text="Test Page" main />
      <Hamburger user={user} />
    </Page>
  );
}
