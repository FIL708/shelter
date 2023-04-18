import { useEffect, useState } from 'react';
import { Page, Subtitle, UsersTable, Pagination } from '../components';
import { getDataChunks } from '../helpers';
import users from '../users.json';

export default function Users() {
  const [usersData, setUsersData] = useState(users);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    usersNumber: 20,
    sortBy: 'newest',
    search: '',
    searchBy: 'first name',
  });
  console.log(usersData, setUsersData);

  useEffect(() => {
    if (filter.sortBy === 'newest')
      setUsersData((prev) =>
        prev.sort((a, b) => Date(a.createdAt) - Date(b.createdAt)),
      );
  }, [filter]);

  const dataChunks = getDataChunks(usersData, filter.usersNumber);

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

  return (
    <Page>
      <Subtitle text="Users" main />
      <UsersTable
        users={dataChunks[page - 1]}
        filter={filter}
        changeFilter={changeFilter}
      />
      <Pagination
        changePage={changePage}
        page={page}
        pages={dataChunks.length}
      />
    </Page>
  );
}
