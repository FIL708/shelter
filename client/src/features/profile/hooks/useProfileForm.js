import { useState, useEffect } from 'react';

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

export default function useProfileForm(user) {
  const [profileForm, setProfileForm] = useState(profileInit);

  useEffect(() => {
    if (user) {
      const userData = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        address: { city: user.address?.city, country: user.address?.country },
        phone: user.phone,
        birthday: user.birthday,
        avatar: user.avatar,
        createdAt: user.createdAt,
      };

      setProfileForm({ previous: userData, current: userData });
    }
  }, [user]);

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

  const undoProfileChanges = () => {
    setProfileForm((prev) => ({ ...prev, current: prev.previous }));
  };

  const confirmProfileChanges = () => {
    setProfileForm((prev) => ({ ...prev, previous: prev.current }));
  };

  return [
    profileForm,
    profileFormHandler,
    undoProfileChanges,
    confirmProfileChanges,
  ];
}
