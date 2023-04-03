import { useState } from 'react';
import { Page, Icon, Button, Textfield } from '../components';
import { inputValidator } from '../helpers';

export default function Test() {
  const [input, setInput] = useState('');
  const [formValidation, setFormValidation] = useState({});
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handelClick = (event) => {
    console.log(event);
  };

  const validationHandler = (event, validationType, confirm) => {
    const { value, name } = event.target;
    const validationObject = inputValidator(value, validationType, confirm);
    if (!validationObject) return;
    setFormValidation((prev) => ({ ...prev, [name]: validationObject }));
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
        onChange={(event) => handleInput(event)}
        onBlur={(event) => validationHandler(event, 'email')}
        validation={formValidation.name}
        value={input}
        // required
      />
    </Page>
  );
}
