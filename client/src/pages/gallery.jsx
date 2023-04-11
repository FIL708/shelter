import { GalleryCardList, Page, Subtitle } from '../components';
import photos from '../photos.json';

export default function Gallery() {
  return (
    <Page>
      <Subtitle text="Gallery" main />
      <GalleryCardList photos={photos} />
    </Page>
  );
}
