import { Page, ErrorCard } from '../components/ui';

export default function NotFound() {
  return (
    <Page>
      <ErrorCard errorCode="404" errorMessage="Page not found!" />
    </Page>
  );
}
