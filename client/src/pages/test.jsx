import { Page, Icon, Button, Textfield } from '../components';

export default function Test() {
  const handleInput = (e) => {
    console.log(e);
  };
  const handelClick = (e) => {
    console.log(e);
  };

  return (
    <Page>
      <h1>Test page</h1>
      <Icon type="option" size="50px" fill="pink" />
      <Button
        onClick={handelClick}
        text="Login"
        className="outline"
        iconType="small-logo"
        iconSize="18px"
        iconFill="red"
        disabled
      />
      <Textfield
        name="name"
        placeholder="Enter your name"
        onChange={(e) => handleInput(e)}
      />
    </Page>
  );
}
