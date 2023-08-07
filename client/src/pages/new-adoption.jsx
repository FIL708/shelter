import { Page, AdoptionForm } from 'components/ui';
import useAdoptionForm from 'hooks/use-adoption-form';
import { useState } from 'react';

export default function NewAdoption() {
  const [form, formHandler] = useAdoptionForm();
  const [message, setMessage] = useState({ text: '', isValid: false });

  const confirmForm = () => {
    console.log(setMessage);

    console.log(form);
  };
  return (
    <Page>
      <AdoptionForm
        title="New adoption"
        values={form}
        formHandler={formHandler}
        onConfirm={confirmForm}
        message={message}
      />
    </Page>
  );
}
