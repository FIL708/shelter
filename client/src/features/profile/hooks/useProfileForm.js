import { useState } from 'react';

const profileInit = {
  previous: {
    firstName: '',
    lastName: '',
    address: {
      city: '',
      country: '',
    },
    phone: '',
    birthday: '',
    avatar: '',
  },
  current: {
    firstName: '',
    lastName: '',
    address: {
      city: '',
      country: '',
    },
    phone: '',
    birthday: '',
    avatar: '',
  },
};

export default function useProfileForm() {
  const [profileForm, setProfileForm] = useState(profileInit);

  const profileFormHandler = (event) => {
    const { name, value } = event.target;

    if (name === 'city' || name === 'country') {
      setProfileForm((prev) => ({
        ...prev,
        current: {
          ...prev.current,
          address: { ...prev.current.address, [name]: value },
        },
      }));
    } else {
      setProfileForm((prev) => ({
        ...prev,
        current: { ...prev.current, [name]: value },
      }));
    }
  };

  const setPrevProfileValues = () => {
    setProfileForm((prev) => ({ ...prev, current: prev.previous }));
  };

  return [profileForm, profileFormHandler, setPrevProfileValues];
}
