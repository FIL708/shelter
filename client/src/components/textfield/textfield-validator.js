export default function TextfieldValidator(value, type, confirm) {
  if (!value || !type) return null;
  if (type === 'email') {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = regex.test(value);
    const message = isValid ? 'Correct!' : 'Invalid email!';
    return { isValid, message };
  }
  if (type === 'phone') {
    const phoneNumber = value.replace(/\D/g, '');
    const isValid = phoneNumber.length >= 7 && phoneNumber.length <= 15;
    const message = isValid ? 'Correct!' : 'Invalid phone number!';
    return { isValid, message };
  }
  if (type === 'number') {
    const isValid = typeof value === 'number';
    const message = isValid ? 'Correct!' : 'Input need to be a number!';
    return { isValid, message };
  }
  if (type === 'password') {
    const isValid = value.length >= 8;
    const message = isValid
      ? 'Correct!'
      : 'Password need to contain at least 8 characters!';
    return { isValid, message };
  }
  if (type === 'confirm') {
    const isValid = String(value) === String(confirm);
    const message = isValid ? 'Correct!' : 'Do not match!';
    return { isValid, message };
  }
  return null;
}
