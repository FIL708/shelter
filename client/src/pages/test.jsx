import { Page, Subtitle, AdoptionForm } from 'components/ui';
import useAdoptionForm from 'hooks/use-adoption-form';

export default function Test() {
  const x = {
    id: 1,
    name: 'Rocky',
    description:
      "Meet Rocky! Rocky is a 3-year-old German Shepherd mix with a beautiful black and tan coat and soulful brown eyes. He was brought to the shelter by his previous owner who could no longer care for him. Despite the recent upheaval in his life, Rocky is a friendly and well-adjusted dog who loves to meet new people and make friends.\nRocky is a highly intelligent dog who would benefit from an owner who can provide him with plenty of mental stimulation and exercise. He already knows several commands, including sit, stay, and come, and is eager to learn more. Rocky is also an active dog who enjoys going on long walks and playing in the yard.\nRocky is a loyal and protective dog who would make an excellent companion for an experienced owner or family. He is good with children and gets along well with other dogs, although he can be a bit wary of strangers at first. Rocky is up-to-date on all his vaccinations, neutered, and microchipped. If you're looking for a loyal and devoted friend, then Rocky may be the perfect dog for you. Come meet Rocky and see if he's the right match for your family!",
    shortDescription:
      'Meet Rocky! Rocky is a 3-year-old German Shepherd mix with a beautiful black and tan coat and soulful brown eyes...',
    likes: 0,
    views: 7,
    gender: 'male',
    age: 11,
    weight: 32,
    species: 'dog',
    createdAt: '2023-07-09T21:46:33.978Z',
    address: {
      id: 1,
      city: 'Warsaw',
      country: 'Poland',
    },
    photos: [
      {
        id: 1,
        url: 'https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg',
        adoptionId: 1,
      },
      {
        id: 2,
        url: 'https://cdn.galleries.smcloud.net/t/galleries/gf-3YpJ-Szag-K4Gg_dog-niemiecki-1920x1080-nocrop.jpg',
        adoptionId: 1,
      },
      {
        id: 3,
        url: 'https://www.humanesociety.org/sites/default/files/2019/02/dog-451643.jpg',
        adoptionId: 1,
      },
      {
        id: 4,
        url: 'https://media.wired.com/photos/636eb5510ae5a121565fd729/4:3/w_1983,h_1487,c_limit/WI110122_FF_ForeverDogs_2400x1350_crop.jpg',
        adoptionId: 1,
      },
      {
        id: 5,
        url: 'https://th-thumbnailer.cdn-si-edu.com/SdKYWifCKfE2g8O-po_SO99hQ-Y=/1000x750/filters:no_upscale():focal(3126x2084:3127x2085)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ec/e6/ece69181-708a-496e-b2b7-eaf7078b99e0/gettyimages-1310156391.jpg',
        adoptionId: 1,
      },
    ],
  };

  const [form, formHandler] = useAdoptionForm(x);

  const confirmForm = () => {
    console.log(form);
  };

  return (
    <Page>
      <Subtitle text="Test Page" main />
      <AdoptionForm
        title="New Adoption"
        values={form}
        formHandler={formHandler}
        onConfirm={confirmForm}
      />
    </Page>
  );
}
