import { useParams } from 'react-router-dom';
import {
  Page,
  Subtitle,
  PetGallery,
  ScrollButton,
  PetDetails,
  PetDescription,
  LoadingSpinner,
  ErrorCard,
} from '../components';
import { useScrollToggle, useFetch } from '../hooks';

export default function Adoption() {
  const { id } = useParams();
  const [pet, isLoading, error] = useFetch(`/api/adoption/${id}`);
  const isScrollButtonVisible = useScrollToggle(200);

  if (isLoading || error)
    return (
      <Page>
        <Subtitle text="Gallery" main />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ErrorCard errorCode={error.status} errorMessage={error.message} />
        )}
      </Page>
    );

  return (
    <Page>
      <Subtitle main text={`Adoption no. ${id}`} />
      <PetDetails data={pet} />
      <PetGallery photos={pet.photos} />
      <Subtitle text="Something About Me" />
      <PetDescription text={pet.description} />
      <Subtitle text="What people think about me" />
      <ScrollButton visible={isScrollButtonVisible} />
    </Page>
  );
}
