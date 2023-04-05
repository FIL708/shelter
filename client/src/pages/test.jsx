import { Page, Subtitle, PetCardList, GalleryItem } from '../components';

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
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <PetCardList pets={pets} />
      <GalleryItem url="https://www.thesprucepets.com/thmb/y4YEErOurgco9QQO-zJ6Ld1yVkQ=/3000x0/filters:no_upscale():strip_icc()/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.jpg" />
    </Page>
  );
}
