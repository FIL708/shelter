import { useParams } from 'react-router-dom';
import {
  Page,
  Subtitle,
  PetGallery,
  ScrollButton,
  PetDetails,
  PetDescription,
  LoadingSpinner,
} from '../components';
import { useScrollToggle, useFetch } from '../hooks';

export default function Adoption() {
  const { id } = useParams();
  const [pet, isLoading, error] = useFetch(`/api/adoption/${id}`);
  console.log(isLoading, error);

  const isScrollButtonVisible = useScrollToggle(200);
  const gallery = [
    'https://media.os.fressnapf.com/cms/2020/07/ratgeber_hund_rasse_portraits_australian_cattle_dog_1200x527.jpg?t=seoimg_937',
    'https://www.sbb.ch/content/dam/internet/sharedimages/personen/GA-Hund.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
    'https://www.purina.co.uk/sites/default/files/2020-11/11%20English%20and%20British%20Dog%20BreedsTEASER.jpeg',
    'https://chico.ca.us/sites/main/files/imagecache/lightbox/main-images/dog_license.jpg',
    'https://live-production.wcms.abc-cdn.net.au/7c3fcd8375709868e6577df7769af974?impolicy=wcms_crop_resize&cropH=1080&cropW=1920&xPos=0&yPos=76&width=862&height=485',
  ];

  return (
    <Page>
      <Subtitle main text={`Adoption no. ${id}`} />
      {isLoading || !pet ? (
        <LoadingSpinner />
      ) : (
        <>
          <PetDetails data={pet} />
          <PetGallery gallery={gallery} photos={pet.photos} />
          <Subtitle text="Something About Me" />
          <PetDescription text={pet.description} />
          <Subtitle text="What people think about me" />
          <ScrollButton visible={isScrollButtonVisible} />
        </>
      )}
    </Page>
  );
}
