import { useState } from 'react';
import { Page, Subtitle, UsersTable, Pagination } from '../components';
import { getDataChunks } from '../helpers';
import users from '../users.json';

export default function Users() {
  const [usersData, setUsersData] = useState(users);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    usersNumber: 20,
    sortBy: '',
    search: '',
    searchBy: 'first name',
  });

  //   useEffect(() => {
  //     if (filter.sortBy === 'newest') {
  //       const filteredData = usersData.sort(
  //         (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  //       );
  //       setUsersData(filteredData);
  //     } else if (filter.sortBy === 'oldest') {
  //       const filteredData = usersData.sort(
  //         (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  //       );
  //       setUsersData(filteredData);
  //     } else if (filter.sortBy === 'role') {
  //       const filteredData = usersData.sort((a, b) =>
  //         a.role.localeCompare(b.role),
  //       );
  //       setUsersData(filteredData);
  //     }
  //   }, [filter, usersData]);

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
    if (filter.sortBy === 'newest') {
      const filteredData = usersData.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
      setUsersData(filteredData);
    } else if (filter.sortBy === 'oldest') {
      const filteredData = usersData.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      );
      setUsersData(filteredData);
    } else if (filter.sortBy === 'role') {
      const filteredData = usersData.sort((a, b) =>
        a.role.localeCompare(b.role),
      );
      setUsersData(filteredData);
    }
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
