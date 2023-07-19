import { useState } from 'react';
import { inputValidator } from 'utils';

export default function useValidation(init = {}) {
  const [validation, setValidation] = useState(init);

  const handler = (event, type, confirm) => {
    const { name, value } = event.target;
    const validationObject = inputValidator(value, type, confirm);
    setValidation((prev) => ({ ...prev, [name]: validationObject }));
  };

  const reset = () => setValidation(init);

  return [validation, handler, reset];
}
