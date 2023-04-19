import { useState, useEffect } from 'react';
import {
  Page,
  Subtitle,
  UsersTable,
  Pagination,
  ScrollButton,
  LoadingSpinner,
} from '../components';
import { getDataChunks, getFilteredUsers } from '../helpers';
import { useFetch, useScrollToggle } from '../hooks';

export default function Users() {
  const [users, isLoading, error] = useFetch('/api/user');
  console.log(isLoading, error);

  const [usersData, setUsersData] = useState({
    rawData: [],
    sortedData: [],
  });
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    usersNumber: 20,
    sortBy: '',
    search: '',
    searchBy: 'first name',
  });
  const isScrollButtonVisible = useScrollToggle(200);

  useEffect(() => {
    setUsersData((prev) => ({
      rawData: users,
      sortedData: getFilteredUsers(prev.rawData, filter),
    }));
  }, [filter, users]);

  const dataChunks = getDataChunks(usersData.sortedData, filter.usersNumber);

  const changePage = (value) => {
    if (value <= 0) return;
    if (value === page) return;
    if (value > dataChunks.length) return;
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const changeFilter = (event) => {
    setPage(1);
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
      sortedData: getFilteredUsers(prev.rawData, filter),
    }));
  };

  if (isLoading)
    return (
      <Page>
        <Subtitle text="Users" main />
        <LoadingSpinner />
      </Page>
    );

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
      <ScrollButton visible={isScrollButtonVisible} />
    </Page>
  );
}
