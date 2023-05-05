export default function getFormattedDate(date, setting) {
  const rawDate = new Date(date);

  const options =
    setting === 'full'
      ? {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }
      : {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        };

  return rawDate.toLocaleString([], options);
}
