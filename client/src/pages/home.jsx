import {
  Page,
  ScrollButton,
  Subtitle,
  HomeWelcomeSection,
  HomeGoalsSection,
} from '../components';
import { useScrollToggle } from '../hooks';

export default function Home() {
  const isScrollButtonVisible = useScrollToggle(200);

  return (
    <Page>
      <HomeWelcomeSection />
      <HomeGoalsSection />
      <Subtitle text="our mission" />
      <ScrollButton visible={isScrollButtonVisible} />
    </Page>
  );
}
