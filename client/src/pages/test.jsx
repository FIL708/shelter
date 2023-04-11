import { useState } from 'react';
import {
  Page,
  Subtitle,
  PetCard,
  Pagination,
  ErrorCard,
  ScrollButton,
} from '../components';

export default function Test() {
  const [page, setPage] = useState(1);
  const pages = 10;
  const changePage = (value) => {
    if (value <= 0) return;
    if (value === page) return;
    if (value > pages) return;
    setPage(value);
  };
  return (
    <Page>
      <Subtitle text="Test Page" main />
      <PetCard
        url="https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg"
        name="Mialczynski"
        location="Ameryka, Poland"
        description="asdadasd asd asd asd asd asd a dasd asd asdasd asda sdasd as..."
        createdAt="05 march 1995"
        mode="list"
      />
      <Pagination page={page} changePage={changePage} pages={pages} />
      <ErrorCard errorCode="404" errorMessage="Page not found!" />
      <ScrollButton />
    </Page>
  );
}
