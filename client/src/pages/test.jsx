import { useState } from 'react';
import { Page, Icon, Button, Textfield } from '../components';
// import { inputValidator } from '../helpers';

export default function Test() {
  const [input, setInput] = useState('');
  const [formValidation, setFormValidation] = useState({
    name: { isValid: true, message: 'x' },
  });
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handelClick = (event) => {
    console.log(event);
  };

  const validationHandler = (event) => {
    // const { value, name } = event.target;
    console.log(event);

    // setFormValidation((prev) => ({
    //   ...prev,
    //   [name]: validationObject,
    // }));
    setFormValidation({ name: { isValid: true, message: 'x' } });
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
        onBlur={(event) => validationHandler(event)}
        validation={formValidation.name}
        validationType="email"
        value={input}
        // required
      />
    </Page>
  );
}
