const inputValidator = (value, type, confirm) => {
  if (!value || !type) return { isValid: null, message: null };
  if (type.includes('password')) {
    const isValid = value.length >= 8;
    const message = isValid
      ? 'Correct!'
      : 'Password need to contain at least 8 characters!';
    return { isValid, message };
  }
  if (type.includes('email')) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = regex.test(value);
    const message = isValid ? 'Correct!' : 'Invalid email!';
    return { isValid, message };
  }
  if (type.includes('url')) {
    const regex =
      /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
    const isValid = regex.test(value);
    const message = isValid ? 'Correct!' : 'Invalid URL!';
    return { isValid, message };
  }
  if (type.includes('number')) {
    const isValid = typeof value === 'number';
    const message = isValid ? 'Correct!' : 'Input need to be a number!';
    return { isValid, message };
  }
  if (type.includes('phone')) {
    const phoneNumber = value.replace(/\D/g, '');
    const isValid = phoneNumber.length >= 7 && phoneNumber.length <= 15;
    const message = isValid ? 'Correct!' : 'Invalid phone number!';
    return { isValid, message };
  }
  if (type.includes('confirm')) {
    const isValid = String(value) === String(confirm);
    const message = isValid ? 'Correct!' : 'Do not match!';
    return { isValid, message };
  }
  return { isValid: null, message: null };
};

export default inputValidator;
