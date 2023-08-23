import { Page, Subtitle, Avatar } from 'components/ui';

export default function Test() {
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <Avatar
        photo="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
        size="small"
      />
    </Page>
  );
}
