import { useParams } from 'react-router-dom';
import {
  ErrorCard,
  LoadingSpinner,
  Page,
  Subtitle,
  UserCard,
} from '../components';
import { useFetch } from '../hooks';

export default function User() {
  const { id } = useParams();
  const [user, isLoading, error] = useFetch(`/api/user/${id}`);

  if (isLoading || error)
    return (
      <Page>
        <Subtitle text="Gallery" main />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ErrorCard errorCode={error.status} errorMessage={error.message} />
        )}
      </Page>
    );
  return (
    <Page>
      <Subtitle text="Profile" main />
      <UserCard userData={user} />
    </Page>
  );
}
