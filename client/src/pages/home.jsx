import { Page, ScrollButton, Subtitle } from '../components/ui';
import { WelcomeSection, GoalsSection, MissionSection } from '../features/home';
import { useScrollToggle } from '../hooks';

export default function Home() {
  const isScrollButtonVisible = useScrollToggle(200);

  return (
    <Page>
      <WelcomeSection />
      <GoalsSection />
      <Subtitle text="our mission" />
      <MissionSection />
      <ScrollButton visible={isScrollButtonVisible} />
    </Page>
  );
}
