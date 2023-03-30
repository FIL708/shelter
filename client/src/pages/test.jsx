import { useState } from 'react';
import { Page, Icon, Button, Textfield } from '../components';

export default function Test() {
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    setInput(e.target.value);
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
        label="First Name"
        name="name"
        placeholder="Enter your name"
        onChange={(e) => handleInput(e)}
        validation="emails"
        value={input}
      />
    </Page>
  );
}
