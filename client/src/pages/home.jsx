import { Page, ScrollButton, Subtitle } from '../components/ui';
import { WelcomeSection, GoalsSection, MissionSection } from '../features/home';

export default function Home() {
  return (
    <Page>
      <WelcomeSection />
      <GoalsSection />
      <Subtitle text="Our mission" />
      <MissionSection />
      <ScrollButton />
    </Page>
  );
}
