export default function getSortedData(data, filter) {
  let newData = [...data];

  if (filter.sortBy === 'newest') {
    newData = data.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
  } else if (filter.sortBy === 'oldest') {
    newData = data.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    );
  } else if (filter.sortBy === 'role') {
    newData = data.sort((a, b) => a.role.localeCompare(b.role));
  } else if (filter.sortBy === 'A-Z') {
    newData = data.sort((a, b) => a.lastName.localeCompare(b.lastName));
  } else if (filter.sortBy === 'Z-A') {
    newData = data.sort((a, b) => b.lastName.localeCompare(a.lastName));
  } else if (filter.sortBy === '') {
    newData = data.sort((a, b) => a.id - b.id);
  }

  if (!filter.search) return newData;

  if (filter.searchBy === 'first name') {
    newData = data.filter((item) =>
      item.firstName.toLowerCase().includes(filter.search.toLowerCase()),
    );
  }
  if (filter.searchBy === 'last name') {
    newData = data.filter((item) =>
      item.lastName.toLowerCase().includes(filter.search.toLowerCase()),
    );
  }
  if (filter.searchBy === 'email') {
    newData = data.filter((item) =>
      item.email.toLowerCase().includes(filter.search.toLowerCase()),
    );
  }

  return newData;
}
