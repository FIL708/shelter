import { Page, Subtitle, FormMessage } from '../components';

export default function Test() {
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <div
        style={{
          width: '300px',
          height: '200px',
          backgroundColor: 'red',
          position: 'relative',
        }}
      >
        <FormMessage text="its ok" isValid bottom="10%" />
      </div>
    </Page>
  );
}
