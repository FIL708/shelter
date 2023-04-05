import { Page, Subtitle, PetCard } from '../components';

export default function Test() {
  const pet = {
    url: 'https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1600&q=88&f=b7a44663e082b8041129616b6b73328d',
    name: 'Reksio',
    location: 'Pcim, Poland',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a ducimus iure accusamus recusandae opti...',
    isFavourite: true,
    createdAt: '20 march 2022',
  };
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <PetCard {...pet} />
    </Page>
  );
}
