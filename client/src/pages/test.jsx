import { Page, Subtitle, PetCardList, GalleryCardList } from '../components';

export default function Test() {
  const pets = [
    {
      id: '1',
      url: 'https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1600&q=88&f=b7a44663e082b8041129616b6b73328d',
      name: 'Reksio',
      location: 'Pcim, Poland',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a ducimus iure accusamus recusandae opti...',
      isFavorite: true,
      createdAt: '20 march 2022',
    },
    {
      id: '2',
      url: 'https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1600&q=88&f=b7a44663e082b8041129616b6b73328d',
      name: 'Reksio',
      location: 'Pcim, Poland',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a ducimus iure accusamus recusandae opti...',
      isFavorite: true,
      createdAt: '20 march 2022',
    },
    {
      id: '3',
      url: 'https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1600&q=88&f=b7a44663e082b8041129616b6b73328d',
      name: 'Reksio',
      location: 'Pcim, Poland',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a ducimus iure accusamus recusandae opti...',
      isFavorite: true,
      createdAt: '20 march 2022',
    },
    {
      id: '4',
      url: 'https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1600&q=88&f=b7a44663e082b8041129616b6b73328d',
      name: 'Reksio',
      location: 'Pcim, Poland',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a ducimus iure accusamus recusandae opti...',
      isFavorite: true,
      createdAt: '20 march 2022',
    },
    {
      id: '5',
      url: 'https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1600&q=88&f=b7a44663e082b8041129616b6b73328d',
      name: 'Reksio',
      location: 'Pcim, Poland',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a ducimus iure accusamus recusandae opti...',
      isFavorite: true,
      createdAt: '20 march 2022',
    },
    {
      id: '6',
      url: 'https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1600&q=88&f=b7a44663e082b8041129616b6b73328d',
      name: 'Reksio',
      location: 'Pcim, Poland',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a ducimus iure accusamus recusandae opti...',
      isFavorite: true,
      createdAt: '20 march 2022',
    },
  ];
  const photos = [
    {
      id: 1,
      url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2022%2F09%2F22%2Ffacts-about-cats-1292117990-2000.jpg&q=60',
    },
    {
      id: 2,
      url: 'https://alpha.aeon.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/header_essay-final-gettyimages-685469924.jpg',
    },
    {
      id: 3,
      url: 'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg',
    },
    {
      id: 4,
      url: 'https://www.thesprucepets.com/thmb/y4YEErOurgco9QQO-zJ6Ld1yVkQ=/3000x0/filters:no_upscale():strip_icc()/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.jpg',
    },
    {
      id: 5,
      url: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322716/relaxed-ginger-cat.jpg',
    },
    {
      id: 6,
      url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg',
    },
    {
      id: 7,
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/RedCat_8727.jpg',
    },
    {
      id: 8,
      url: 'https://media.npr.org/assets/img/2022/11/23/russian-toy-2-002--059b8a825dac13f92234d65777e6b29b0914e92f-s1100-c50.jpg',
    },
    {
      id: 9,
      url: 'https://www.mcgill.ca/oss/files/oss/styles/hd/public/cats-g365dbd748_1280.jpeg?itok=uu2EK-4K&timestamp=1655389542',
    },
  ];
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <PetCardList pets={pets} />
      <GalleryCardList photos={photos} />
    </Page>
  );
}
