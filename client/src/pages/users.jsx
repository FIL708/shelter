import { useState, useEffect } from 'react';
import { Page, Subtitle, UsersTable, Pagination } from '../components';
import { getDataChunks, getSortedData } from '../helpers';
import users from '../users.json';

export default function Users() {
  const [usersData, setUsersData] = useState({
    rawData: users,
    sortedData: users,
  });
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    usersNumber: 20,
    sortBy: '',
    search: '',
    searchBy: 'first name',
  });
  console.log(usersData.rawData);

  useEffect(() => {
    setUsersData((prev) => ({
      ...prev,
      sortedData: getSortedData(prev.rawData, filter.sortBy),
    }));
  }, [filter]);

  const dataChunks = getDataChunks(usersData.sortedData, filter.usersNumber);

  const changePage = (value) => {
    if (value <= 0) return;
    if (value === page) return;
    if (value > dataChunks.length) return;
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const changeFilter = (event) => {
    const { name, value } = event.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const cleanFilter = () => {
    setFilter({
      usersNumber: 20,
      sortBy: '',
      search: '',
      searchBy: 'first name',
    });
    setUsersData((prev) => ({
      ...prev,
      sortedData: getSortedData(prev.rawData, 'index'),
    }));
  };

  return (
    <Page>
      <Subtitle text="Users" main />
      <UsersTable
        users={dataChunks[page - 1]}
        filter={filter}
        changeFilter={changeFilter}
        cleanFilter={cleanFilter}
      />
      <Pagination
        changePage={changePage}
        page={page}
        pages={dataChunks.length}
      />
    </Page>
  );
}
