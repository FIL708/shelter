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

  const deleteAccount = () => {
    console.log('delete');
  };
  const updateProfile = () => {
    console.log('update');
  };
  const changePassword = () => {
    console.log('change password');
  };

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
      <UserCard
        userData={user}
        deleteAccount={deleteAccount}
        updateProfile={updateProfile}
        changePassword={changePassword}
      />
    </Page>
  );
}
