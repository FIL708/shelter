import { Page, AdoptionForm } from 'components/ui';
import useAdoptionForm from 'hooks/use-adoption-form';

export default function NewAdoption() {
  const [form, formHandler] = useAdoptionForm();

  const confirmForm = () => {
    console.log(form);
  };
  return (
    <Page>
      <AdoptionForm
        title="New adoption"
        values={form}
        formHandler={formHandler}
        onConfirm={confirmForm}
      />
    </Page>
  );
}
