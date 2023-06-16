import { Page, ScrollButton, Subtitle } from '../components/ui';
import { WelcomeSection, GoalsSection, MissionSection } from '../features/home';

export default function Home() {
  return (
    <Page>
      <WelcomeSection />
      <GoalsSection />
      <Subtitle text="our mission" />
      <MissionSection />
      <ScrollButton />
    </Page>
  );
}
