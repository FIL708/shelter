import { useState } from 'react';
import { Page, Subtitle, UsersFilter, UsersTable } from '../components';

export default function Test() {
  const [filterValues, setFilterValues] = useState({
    usersNumber: 20,
    sortBy: 'newest',
    search: '',
    searchBy: 'first name',
  });

  const filterHandler = (event) => {
    const { name, value } = event.target;
    console.log(filterValues);

    setFilterValues((prev) => ({ ...prev, [name]: value }));
  };
  const clearForm = () => {
    console.log(filterValues);
  };

  const users = [
    {
      id: '1',
      firstName: 'Joe',
      lastName: 'Doe',
      email: 'joedoe@example.com',
      role: 'user',
      createdAt: '2023-03-28 07:19:53.602 +00:00',
    },
    {
      id: '2',
      firstName: 'Joe',
      lastName: 'Doe',
      email: 'joedoe@example.com',
      role: 'user',
      createdAt: '2023-03-28 07:19:53.602 +00:00',
    },
    {
      id: '3',
      firstName: 'Joe',
      lastName: 'Doe',
      email: 'joedoe@example.com',
      role: 'user',
      createdAt: '2023-03-28 07:19:53.602 +00:00',
    },
    {
      id: '4',
      firstName: 'Joe',
      lastName: 'Doe',
      email: 'joedoe@example.com',
      role: 'user',
      createdAt: '2023-03-28 07:19:53.602 +00:00',
    },
  ];

  return (
    <Page>
      <Subtitle text="Test Page" main />
      <UsersFilter onChange={filterHandler} onClick={clearForm} />
      <UsersTable users={users} />
    </Page>
  );
}
