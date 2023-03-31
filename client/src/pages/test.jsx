import { Page, Icon, Button } from '../components';

export default function Test() {
  const handelClick = () => {
    console.log('clicked!');
  };
  return (
    <Page>
      <h1>Test page</h1>
      <Icon type="option" size="50px" fill="pink" />
      <Button onClick={handelClick} text="Button" />
    </Page>
  );
}
