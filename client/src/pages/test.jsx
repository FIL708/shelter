import { useState } from 'react';
import { Page, Subtitle, UsersFilter } from '../components';

export default function Test() {
  const [filterValues, setFilterValues] = useState({
    usersNumber: 20,
    sortBy: '',
    search: '',
    searchBy: '',
  });
  console.log(filterValues, setFilterValues);

  const filterHandler = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
  };
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <UsersFilter onChange={filterHandler} />
    </Page>
  );
}
