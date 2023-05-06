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

  // const pet = {
  //   address: { city: 'Olsztyn', country: 'Poland' },
  //   name: 'Reks',
  //   views: 2137,
  //   likes: 2137,
  //   createdAt: '2023-04-24 17:32:36.188 +00:00',
  //   species: 'dog',
  //   isFavorite: false,
  //   description:
  //     'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.\nCurabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.',
  // };
  return (
    <Page>
      <Subtitle main text={`Adoption no. ${id}`} />
      {isLoading && !pet ? (
        <LoadingSpinner />
      ) : (
        <>
          <PetDetails address={pet.address} />
          <PetGallery gallery={gallery} />
          <Subtitle text="Something About Me" />
          <PetDescription text={pet.description} />
          <Subtitle text="What people think about me" />
          <ScrollButton visible={isScrollButtonVisible} />
        </>
      )}
    </Page>
  );
}
