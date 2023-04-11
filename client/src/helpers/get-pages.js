export default function getPages(page, pages) {
  const pagesArray = [];
  if (pages >= 5) {
    for (let index = 1; index <= pages; index += 1) {
      pagesArray.push({ value: index, current: page === index });
    }
  }
  return pagesArray;
}
