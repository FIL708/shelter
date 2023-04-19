export default function getFilteredData(data, inputValue, filterBy) {
  if (filterBy === 'first name') {
    return data.filter((item) => item.firstName.includes(inputValue));
  }
  if (filterBy === 'last name') {
    return data.filter((item) => item.lastName.includes(inputValue));
  }
  if (filterBy === 'email') {
    return data.filter((item) => item.email.includes(inputValue));
  }
  return data;
}
