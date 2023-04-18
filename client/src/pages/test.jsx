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
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <UsersFilter onChange={filterHandler} onClick={clearForm} />
      <UsersTable />
    </Page>
  );
}
