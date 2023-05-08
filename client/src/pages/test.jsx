import { Page, Subtitle, UserCard } from '../components';

export default function Test() {
  const user = {
    id: '123',
    email: 'example.user@example.com',
    firstName: 'Filip',
    lastName: 'Zebrowski',
    role: 'admin',
    createdAt: '2023-05-06 17:18:01.651 +00:00',
    phone: '123 123 123',
    address: { city: 'Wroclaw', country: 'Poland' },
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    birthday: '1995-05-06 17:18:01.651 +00:00',
  };
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <UserCard userData={user} />
    </Page>
  );
}
