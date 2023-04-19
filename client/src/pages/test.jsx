import { Page, Subtitle, UsersTable } from '../components';

export default function Test() {
  const users = [
    {
      id: '1',
      firstName: 'Joe',
      lastName: 'Doe',
      email: 'joedoe@example.com',
      role: 'user',
      createdAt: '2023-03-28 07:19:53.602 +00:00',
    },
    {
      id: '2',
      firstName: 'Joe',
      lastName: 'Doe',
      email: 'joedoe@example.com',
      role: 'user',
      createdAt: '2023-03-28 07:19:53.602 +00:00',
    },
    {
      id: '3',
      firstName: 'Joe',
      lastName: 'Doe',
      email: 'joedoe@example.com',
      role: 'user',
      createdAt: '2023-03-28 07:19:53.602 +00:00',
    },
    {
      id: '4',
      firstName: 'Joe',
      lastName: 'Doe',
      email: 'joedoe@example.com',
      role: 'user',
      createdAt: '2023-03-28 07:19:53.602 +00:00',
    },
  ];

  return (
    <Page>
      <Subtitle text="Test Page" main />
      <UsersTable users={users} />
    </Page>
  );
}
