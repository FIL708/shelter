import { useEffect, useState } from 'react';
import {
  Page,
  Subtitle,
  PetController,
  PetCardList,
  Pagination,
  ScrollButton,
  LoadingSpinner,
  ErrorCard,
} from '../components';
import { getDataChunks } from '../helpers';
import { useScrollToggle, useFetch } from '../hooks';

export default function Adoption() {
  const [pets, isLoading, error] = useFetch('/api/adoption');
  const [petsData, setPetsData] = useState([]);
  const [controlValues, setControlValues] = useState({
    mode: 'grid',
    species: 'all',
    numberOfPets: 9,
  });
  const [page, setPage] = useState(1);
  const isScrollButtonVisible = useScrollToggle(200);

  useEffect(() => {
    if (controlValues.species === 'all') {
      setPetsData(pets);
    } else if (controlValues.species === 'cats') {
      setPetsData(pets.filter((pet) => pet.species === 'cat'));
    } else {
      setPetsData(pets.filter((pet) => pet.species === 'dog'));
    }
  }, [controlValues, pets]);

  const dataChunks = getDataChunks(petsData, controlValues.numberOfPets);

  const changePage = (value) => {
    if (value <= 0) return;
    if (value === page) return;
    if (value > dataChunks.length) return;
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleControlValues = (event) => {
    const { name, value } = event.target;
    if (name === 'numberOfPets') {
      if (value < 3) {
        setControlValues((prev) => ({ ...prev, [name]: 3 }));
      } else if (value > 36) {
        setControlValues((prev) => ({ ...prev, [name]: 36 }));
      } else {
        setControlValues((prev) => ({ ...prev, [name]: value }));
      }
      return;
    }
    setControlValues((prev) => ({ ...prev, [name]: value }));
  };

  if (isLoading || error)
    return (
      <Page>
        <Subtitle text="Gallery" main />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ErrorCard
            errorCode={error.status}
            errorMessage="Something goes wrong!"
          />
        )}
      </Page>
    );

  return (
    <Page>
      <Subtitle text="Our Pets" main />
      <PetController values={controlValues} onChange={handleControlValues} />
      <PetCardList pets={dataChunks[page - 1]} mode={controlValues.mode} />
      <Pagination
        changePage={changePage}
        page={page}
        pages={dataChunks.length}
      />
      <ScrollButton visible={isScrollButtonVisible} />
    </Page>
  );
}
