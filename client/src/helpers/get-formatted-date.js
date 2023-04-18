export default function getFormattedDate(date) {
  const rawDate = new Date(date);
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return rawDate.toLocaleString([], options);
}
