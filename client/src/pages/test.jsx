import { Page, Subtitle } from '../components/ui';
import OpinionsListItem from '../features/adoption/opinions-list/opinions-list__item/opinions-list__item.jsx';

export default function Test() {
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <OpinionsListItem
        body="asdasdg asdhasdhasd hasdhasdh hasdhasd"
        user="Filip"
        updatedAt="1994-02-01"
      />
    </Page>
  );
}
