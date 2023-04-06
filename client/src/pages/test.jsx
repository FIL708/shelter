import { Page, Subtitle, PetCard } from '../components';

export default function Test() {
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
    </Page>
  );
}
