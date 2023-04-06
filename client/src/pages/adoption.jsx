import { useEffect, useState } from 'react';
import { Page, Subtitle, PetController, PetCardList } from '../components';
import pets from '../pets.json';

export default function Adoption() {
  const [petsData, setPetsData] = useState(pets);
  const [controlValues, setControlValues] = useState({
    mode: 'grid',
    species: 'all',
    numberOfPets: 9,
  });
  useEffect(() => {
    if (controlValues.species === 'all') {
      setPetsData(pets);
    } else if (controlValues.species === 'cats') {
      setPetsData(pets.filter((pet) => pet.species === 'cat'));
    } else {
      setPetsData(pets.filter((pet) => pet.species === 'dog'));
    }
    console.log(controlValues);
  }, [controlValues]);
  const handleControlValues = (event) => {
    const { name, value } = event.target;
    setControlValues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Page>
      <Subtitle text="Our Pets" main />
      <PetController values={controlValues} onChange={handleControlValues} />
      <PetCardList pets={petsData} />
    </Page>
  );
}
