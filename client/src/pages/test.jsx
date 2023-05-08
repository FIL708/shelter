import { Page, Subtitle, OpinionsList } from '../components';

export default function Test() {
  const array = [
    {
      id: 1,
      body: 'Lorem ipsum dolor sit amet consectetur. Neque eleifend turpis consequat in amet ipsum amet. Neque eleifend turpis consequat in amet ipsum amet. ',
      user: { firstName: 'John', lastName: 'Smith' },
      createdAt: '2023-05-06 14:14:00.606 +00:00',
    },
    {
      id: 2,
      body: 'Lorem ipsum dolor sit amet consectetur. Neque eleifend turpis consequat in amet ipsum amet. Neque eleifend turpis consequat in amet ipsum amet. ',
      user: { firstName: 'John', lastName: 'Smith' },
      createdAt: '2023-05-06 14:14:00.606 +00:00',
    },
    {
      id: 3,
      body: 'Lorem ipsum dolor sit amet consectetur. Neque eleifend turpis consequat in amet ipsum amet. Neque eleifend turpis consequat in amet ipsum amet. ',
      user: { firstName: 'John', lastName: 'Smith' },
      createdAt: '2023-05-06 14:14:00.606 +00:00',
    },
    {
      id: 4,
      body: 'Lorem ipsum dolor sit amet consectetur. Neque eleifend turpis consequat in amet ipsum amet. Neque eleifend turpis consequat in amet ipsum amet. ',
      user: { firstName: 'John', lastName: 'Smith' },
      createdAt: '2023-05-06 14:14:00.606 +00:00',
    },
  ];
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <OpinionsList opinions={array} />
    </Page>
  );
}
