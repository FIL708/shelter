const email = (value) => {
  if (!value) return null;
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = regex.test(value);
  const message = isValid ? 'Correct!' : 'Invalid email!';
  return { isValid, message };
};

const phone = (value) => {
  if (!value) return null;
  const phoneNumber = value.replace(/\D/g, '');
  const isValid = phoneNumber.length >= 7 && phoneNumber.length <= 15;
  const message = isValid ? 'Correct!' : 'Invalid phone number!';
  return { isValid, message };
};

const number = (value) => {
  if (!value) return null;
  const isValid = typeof value === 'number';
  const message = isValid ? 'Correct!' : 'Input need to be a number!';
  return { isValid, message };
};

const password = (value) => {
  if (!value) return null;
  const isValid = value.length >= 8;
  const message = isValid
    ? 'Correct!'
    : 'Password need to contain at least 8 characters!';
  return { isValid, message };
};

const confirm = (value, confirmValue) => {
  if (!value) return null;
  const isValid = String(value) === String(confirmValue);
  const message = isValid ? 'Correct!' : 'Do not match!';
  return { isValid, message };
};

export default { email, phone, number, password, confirm };
