import { useEffect, useState } from 'react';
import {
  GalleryCardList,
  Page,
  Subtitle,
  Pagination,
  ScrollButton,
  GalleryController,
} from '../components';
import photos from '../photos.json';
import getDataChunks from '../helpers/get-data-chunks';
import { useScrollToggle } from '../hooks';

export default function Gallery() {
  const [petPhotos, setPetPhotos] = useState(photos);
  const [page, setPage] = useState(1);
  const isScrollButtonVisible = useScrollToggle(200);
  const [filteringTag, setFilteringTag] = useState('all');
  console.log(setPetPhotos);

  useEffect(() => {
    if (filteringTag === 'all') {
      setPetPhotos(photos);
    } else if (filteringTag === 'dogs') {
      setPetPhotos(photos.filter((photo) => photo.tags.includes('dog')));
    } else if (filteringTag === 'cats') {
      setPetPhotos(photos.filter((photo) => photo.tags.includes('cat')));
    } else if (filteringTag === 'events') {
      setPetPhotos(photos.filter((photo) => photo.tags.includes('event')));
    }
  }, [filteringTag]);

  const photosChunks = getDataChunks(petPhotos, 12);

  const changePage = (value) => {
    if (value <= 0) return;
    if (value === page) return;
    if (value > photosChunks.length) return;
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const filterByTag = (event) => {
    setFilteringTag(event.target.value);
  };
  return (
    <Page>
      <Subtitle text="Gallery" main />
      <GalleryController onChange={filterByTag} value={filteringTag} />
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
