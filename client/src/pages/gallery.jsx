import { useEffect, useState } from 'react';
import {
  Page,
  Subtitle,
  Pagination,
  ScrollButton,
  LoadingSpinner,
  ErrorCard,
} from 'components/ui';
import { GalleryCardList, GalleryController } from 'features/gallery';
import { getDataChunks } from 'utils';
import { useFetch } from 'hooks';

export default function Gallery() {
  const [photos, isLoading, error] = useFetch('/api/photo');
  const [petPhotos, setPetPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [filteringTag, setFilteringTag] = useState('all');

  useEffect(() => {
    setPage(1);
    if (filteringTag === 'all') {
      setPetPhotos(photos);
    } else if (filteringTag === 'dogs') {
      setPetPhotos(
        photos.filter((photo) => photo.tags.some((tag) => tag.name === 'dog')),
      );
    } else if (filteringTag === 'cats') {
      setPetPhotos(
        photos.filter((photo) => photo.tags.some((tag) => tag.name === 'cat')),
      );
    } else if (filteringTag === 'events') {
      setPetPhotos(
        photos.filter((photo) =>
          photo.tags.some((tag) => tag.name === 'event'),
        ),
      );
    }
  }, [filteringTag, photos]);

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

  if (isLoading || error)
    return (
      <Page>
        <Subtitle text="Gallery" main />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ErrorCard errorCode={error.status} errorMessage={error.message} />
        )}
      </Page>
    );

  return (
    <Page>
      <Subtitle text="Gallery" main />
      <GalleryController onChange={filterByTag} value={filteringTag} />
      {isLoading ? <LoadingSpinner /> : false}
      <GalleryCardList photos={photosChunks[page - 1]} />
      <Pagination
        changePage={changePage}
        page={page}
        pages={photosChunks.length}
      />
      <ScrollButton />
    </Page>
  );
}
