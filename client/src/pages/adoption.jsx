import { useParams } from 'react-router-dom';
import {
  Page,
  Subtitle,
  PetGallery,
  ScrollButton,
  PetDetails,
  PetDescription,
  LoadingSpinner,
} from '../components';
import { useScrollToggle, useFetch } from '../hooks';

export default function Adoption() {
  const { id } = useParams();
  const [pet, isLoading, error] = useFetch(`/api/adoption/${id}`);
  console.log(isLoading, error);

  const isScrollButtonVisible = useScrollToggle(200);

  return (
    <Page>
      <Subtitle main text={`Adoption no. ${id}`} />
      {isLoading || !pet ? (
        <LoadingSpinner />
      ) : (
        <>
          <PetDetails data={pet} />
          <PetGallery photos={pet.photos} />
          <Subtitle text="Something About Me" />
          <PetDescription text={pet.description} />
          <Subtitle text="What people think about me" />
          <ScrollButton visible={isScrollButtonVisible} />
        </>
      )}
    </Page>
  );
}
