import { useState } from 'react';
import { Page, Subtitle, UsersTable, Pagination } from '../components';
import { getDataChunks } from '../helpers';
import users from '../users.json';

export default function Users() {
  const [usersData, setUsersData] = useState(users);
  const [page, setPage] = useState(1);
  console.log(usersData, setUsersData);
  const dataChunks = getDataChunks(usersData, 10);

  const changePage = (value) => {
    if (value <= 0) return;
    if (value === page) return;
    if (value > dataChunks.length) return;
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <Page>
      <Subtitle text="Users" main />
      <UsersTable users={dataChunks[page - 1]} />
      <Pagination
        changePage={changePage}
        page={page}
        pages={dataChunks.length}
      />
    </Page>
  );
}
