import { Page, Subtitle } from 'components/ui';

import { useWindowSize } from 'hooks';

export default function Test() {
  const { width } = useWindowSize();
  console.log(width);

  return (
    <Page>
      <Subtitle text="Test Page" main />
    </Page>
  );
}
