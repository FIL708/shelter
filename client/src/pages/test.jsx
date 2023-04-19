import { Page, Subtitle } from '../components';
import useFetch from '../hooks/use-fetch';

export default function Test() {
  const [data, loading, error] = useFetch('https://catfact.ninja/fact');
  console.log(data, loading, error);

  return (
    <Page>
      <Subtitle text="Test Page" main />
    </Page>
  );
}
