export default function getSortedData(data, filter) {
  if (filter === 'newest') {
    return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  if (filter === 'oldest') {
    return data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }
  if (filter === 'role') {
    return data.sort((a, b) => a.role.localeCompare(b.role));
  }

  return data;
}
