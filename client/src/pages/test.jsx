import { Page, Subtitle } from 'components/ui';
import { IconButton } from 'components/form';
import UserCardAvatar from 'features/profile/components/user-card/user-card__avatar/user-card__avatar';

export default function Test() {
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <IconButton />
      <UserCardAvatar
        user={{
          role: 'admin',
          id: 1,
          firstName: 'Filip',
          lastName: 'Zebrowski',
          avatar:
            'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
        }}
      />
    </Page>
  );
}
