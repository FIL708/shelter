import { useState } from 'react';
import { GalleryCardList, Page, Subtitle } from '../components';
import photos from '../photos.json';
import getDataChunks from '../helpers/get-data-chunks';

export default function Gallery() {
  const [petPhotos, setPetPhotos] = useState(photos);
  console.log(setPetPhotos);
  const photosChunks = getDataChunks(petPhotos, 12);
  return (
    <Page>
      <Subtitle text="Gallery" main />
      <GalleryCardList photos={photosChunks[0]} />
    </Page>
  );
}
