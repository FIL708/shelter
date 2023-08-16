import { useParams } from 'react-router-dom';
import {
  Page,
  Subtitle,
  ScrollButton,
  LoadingSpinner,
  ErrorCard,
} from 'components/ui';
import {
  PetGallery,
  PetDetails,
  PetDescription,
  OpinionsList,
} from 'features/adoption';
import { useFetch } from 'hooks';
import { useOpinion } from 'features/adoption/hooks';

export default function Adoption() {
  const { id } = useParams();
  const [pet, isLoading, error] = useFetch(`/api/adoption/${id}`);

  const [
    opinions,
    newOpinion,
    newOpinionHandler,
    resetNewOpinion,
    addOpinion,
    changeOpinion,
    deleteOpinion,
  ] = useOpinion(pet);

  const updateOpinionRequest = async (opinionId, body) => {
    try {
      const res = await fetch(`/api/opinion/${opinionId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body }),
      });

      if (res.ok) {
        changeOpinion(opinionId, body);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteOpinionRequest = async (opinionId) => {
    try {
      const res = await fetch(`/api/opinion/${opinionId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        deleteOpinion(opinionId);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const createOpinionRequest = async (body) => {
    try {
      const res = await fetch(`/api/opinion/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body }),
      });
      const { opinion } = await res.json();

      if (res.ok) {
        addOpinion(opinion);
      }
    } catch (e) {
      console.log(e);
    } finally {
      resetNewOpinion();
    }
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
        updateOpinion={updateOpinionRequest}
        deleteOpinion={deleteOpinionRequest}
        createOpinion={createOpinionRequest}
        newOpinion={newOpinion}
        newOpinionHandler={newOpinionHandler}
      />
      <ScrollButton />
    </Page>
  );
}
