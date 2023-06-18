import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Page,
  Subtitle,
  ScrollButton,
  LoadingSpinner,
  ErrorCard,
} from '../components/ui';
import {
  PetGallery,
  PetDetails,
  PetDescription,
  OpinionsList,
} from '../features/adoption';
import { useFetch } from '../hooks';

export default function Adoption() {
  const { id } = useParams();
  const [pet, isLoading, error] = useFetch(`/api/adoption/${id}`);
  const [opinions, setOpinions] = useState([]);
  console.log(opinions);

  useEffect(() => {
    if (pet.opinions) {
      const opinionsList = pet.opinions.map((opinion) => ({
        ...opinion,
        editMode: false,
      }));
      setOpinions(opinionsList);
    }
  }, [pet]);

  const toggleEditMode = (opinionId) => {
    const arrayAfterToggle = opinions.map((opinion) =>
      opinion.id === opinionId
        ? { ...opinion, editMode: !opinion.editMode }
        : opinion,
    );
    setOpinions(arrayAfterToggle);
  };

  const confirmOpinionChanges = (opinionId, newValue) => {
    const arrayAfterChanges = opinions.map((opinion) =>
      opinion.id === opinionId
        ? { ...opinion, body: newValue, editMode: !opinion.editMode }
        : opinion,
    );
    setOpinions(arrayAfterChanges);
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
      <Subtitle main text={`Adoption no. ${id}`} />
      <PetDetails data={pet} />
      <PetGallery photos={pet.photos} />
      <Subtitle text="Something About Me" />
      <PetDescription text={pet.description} />
      <Subtitle text="What people think about me" />
      <OpinionsList
        opinions={opinions}
        toggleEditMode={toggleEditMode}
        confirmOpinionChanges={confirmOpinionChanges}
      />
      <ScrollButton />
    </Page>
  );
}
