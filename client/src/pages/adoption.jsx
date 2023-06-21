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

  useEffect(() => {
    if (pet.opinions) {
      setOpinions(pet.opinions);
    }
  }, [pet]);

  const confirmOpinionChanges = async (opinionId, body) => {
    try {
      const res = await fetch(`/api/opinion/${opinionId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body }),
      });
      if (res.ok) {
        const arrayAfterChanges = opinions.map((opinion) =>
          opinion.id === opinionId ? { ...opinion, body } : opinion,
        );
        setOpinions(arrayAfterChanges);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteOpinion = async (opinionId) => {
    try {
      const res = await fetch(`/api/opinion/${opinionId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        const arrayAfterDelete = opinions.filter(
          (opinion) => opinion.id !== opinionId,
        );
        setOpinions(arrayAfterDelete);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const createNewOpinion = async (body) => {
    try {
      const res = await fetch(`/api/opinion/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body }),
      });
      const newOpinion = await res.json();
      console.log(newOpinion);

      if (res.ok) {
        setOpinions((prev) => [newOpinion.opinion, ...prev]);
      }
    } catch (e) {
      console.log(e);
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
        confirmOpinionChanges={confirmOpinionChanges}
        deleteOpinion={deleteOpinion}
        createNewOpinion={createNewOpinion}
      />
      <ScrollButton />
    </Page>
  );
}
