import { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Page,
  Subtitle,
  LoadingSpinner,
  ErrorCard,
  AdoptionForm,
} from 'components/ui';
import { useFetch, useAdoptionForm } from 'hooks';

export default function EditAdoption() {
  const { id } = useParams();
  const [pet, isLoading, error] = useFetch(`/api/adoption/${id}`);
  const [form, formHandler] = useAdoptionForm(pet);
  const [message, setMessage] = useState({ text: '', isValid: false });

  const confirmForm = () => {
    console.log(setMessage);

    console.log(form);
  };
  if (isLoading || error)
    return (
      <Page>
        <Subtitle text={`Adoption No. ${id}`} main />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ErrorCard errorCode={error.status} errorMessage={error.message} />
        )}
      </Page>
    );

  return (
    <Page>
      <AdoptionForm
        title={`Edit Adoption No. ${id}`}
        values={form}
        formHandler={formHandler}
        onConfirm={confirmForm}
        message={message}
      />
    </Page>
  );
}
