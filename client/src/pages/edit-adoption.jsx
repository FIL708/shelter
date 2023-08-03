import { useParams } from 'react-router-dom';
import { Page, Subtitle, LoadingSpinner, ErrorCard } from 'components/ui';

import { useFetch } from 'hooks';

export default function Adoption() {
  const { id } = useParams();
  const [pet, isLoading, error] = useFetch(`/api/adoption/${id}`);
  console.log(pet);

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

  return <Page>Hi</Page>;
}
