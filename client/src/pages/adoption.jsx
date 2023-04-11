import { useEffect, useState } from 'react';
import {
  Page,
  Subtitle,
  PetController,
  PetCardList,
  Pagination,
} from '../components';
import pets from '../pets.json';
import getDataChunks from '../helpers/get-data-chunks';

export default function Adoption() {
  const [petsData, setPetsData] = useState(pets);
  const [controlValues, setControlValues] = useState({
    mode: 'grid',
    species: 'all',
    numberOfPets: 9,
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (controlValues.species === 'all') {
      setPetsData(pets);
    } else if (controlValues.species === 'cats') {
      setPetsData(pets.filter((pet) => pet.species === 'cat'));
    } else {
      setPetsData(pets.filter((pet) => pet.species === 'dog'));
    }
  }, [controlValues]);

  const dataChunks = getDataChunks(petsData, controlValues.numberOfPets);

  const changePage = (value) => {
    if (value <= 0) return;
    if (value === page) return;
    if (value > dataChunks.length) return;
    setPage(value);
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

  return (
    <Page>
      <Subtitle text="Our Pets" main />
      <PetController values={controlValues} onChange={handleControlValues} />
      <PetCardList pets={dataChunks[page]} mode={controlValues.mode} />
      <Pagination
        changePage={changePage}
        page={page}
        pages={dataChunks.length}
      />
    </Page>
  );
}
