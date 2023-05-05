export default function getFormattedDate(date) {
  const rawDate = new Date(date);
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  return rawDate.toLocaleString([], options);
}
