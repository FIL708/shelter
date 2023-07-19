import { useState } from 'react';

export default function useForm(init = {}) {
  const [form, setForm] = useState(init);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(init);
  };

  return [form, updateForm, resetForm];
}
