import { Page, Icon,Button, Textfield } from '../components';

export default function Test() {
  const handelClick = () => {
    console.log('clicked!');
  };
  return (
    <Page>
      <h1>Test page</h1>
      <Icon type="youtube" size="300px" fill="blue" />
      <Button
        onClick={handelClick}
        text="Login"
        className="outline"
        iconType="small-logo"
        iconSize="18px"
        iconFill="red"
        disabled
      />
      <Textfield />
    </Page>
  );
}
