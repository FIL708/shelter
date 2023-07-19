import { useState } from 'react';

export default function useForm(init) {
  const [form, setForm] = useState(init);
  return [form, setForm];
}
