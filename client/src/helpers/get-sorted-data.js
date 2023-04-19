export default function getSortedData(data, filter) {
  if (filter === 'newest') {
    return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return data;
}
