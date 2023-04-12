import { useState } from 'react';
import {
  GalleryCardList,
  Page,
  Subtitle,
  Pagination,
  ScrollButton,
} from '../components';
import photos from '../photos.json';
import getDataChunks from '../helpers/get-data-chunks';
import { useScrollToggle } from '../hooks';

export default function Gallery() {
  const [petPhotos, setPetPhotos] = useState(photos);
  const [page, setPage] = useState(1);
  const isScrollButtonVisible = useScrollToggle(200);
  console.log(setPetPhotos);
  const photosChunks = getDataChunks(petPhotos, 12);

  const changePage = (value) => {
    if (value <= 0) return;
    if (value === page) return;
    if (value > photosChunks.length) return;
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Page>
      <Subtitle text="Gallery" main />
      <GalleryCardList photos={photosChunks[page - 1]} />
      <Pagination
        changePage={changePage}
        page={page}
        pages={photosChunks.length}
      />
      <ScrollButton visible={isScrollButtonVisible} />
    </Page>
  );
}
