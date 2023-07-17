import { useState } from 'react';

export default function useValidation(init) {
  const [validation, setValidation] = useState(init);

  return [validation, setValidation];
}
