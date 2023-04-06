import { useState } from 'react';
import { Page, Subtitle, PetController } from '../components';

export default function Adoption() {
  const [controlValues, setControlValues] = useState({
    mode: 'grid',
    species: 'all',
    numberOfPets: 9,
  });
  const handleControlValues = (event) => {
    const { name, value } = event.target;
    setControlValues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Page>
      <Subtitle text="Our Pets" main />
      <PetController values={controlValues} onChange={handleControlValues} />
    </Page>
  );
}
