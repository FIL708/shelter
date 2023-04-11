export default function getPages(page, pages) {
  const pagesArray = [];
  if (pages <= 5) {
    for (let index = 1; index <= pages; index += 1) {
      pagesArray.push({ value: index, current: page === index });
    }
  } else if (pages > 5 && page <= 3) {
    for (let index = 1; index <= 5; index += 1) {
      pagesArray.push({ value: index, current: page === index });
    }
  } else if (pages > 5 && page > 3 && page + 2 > pages) {
    for (let index = pages - 5; index <= pages; index += 1) {
      pagesArray.push({ value: index, current: page === index });
    }
  } else if (pages > 5 && page > 3) {
    for (let index = page - 2; index <= page + 2; index += 1) {
      pagesArray.push({ value: index, current: page === index });
    }
  }
  return pagesArray;
}
