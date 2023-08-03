import { useState } from 'react';

const init = {
  name: '',
  description: '',
  shortDescription: '',
  gender: '',
  age: '',
  weight: '',
  species: '',
  createdAt: '',
  address: {
    city: '',
    country: '',
  },
  photos: [],
};

export default function useAdoptionForm(adoption) {
  const [adoptionForm, setAdoptionForm] = useState(adoption || init);

  const formHandler = (event) => {
    const { name, value } = event.target;
    if (name === 'city' || name === 'country') {
      setAdoptionForm((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value },
      }));
    } else if (name === 'photos') {
      setAdoptionForm((prev) => ({
        ...prev,
        photos: value.split(/\s+/g).map((url) => ({ url })),
      }));
    } else {
      setAdoptionForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  return [adoptionForm, formHandler];
}
