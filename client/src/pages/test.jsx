import { Page, Subtitle } from '../components';
import { areObjectsEqual } from '../helpers';

export default function Test() {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  console.log(areObjectsEqual(obj1, obj2));

  return (
    <Page>
      <Subtitle text="Test Page" main />
    </Page>
  );
}
