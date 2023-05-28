import { useParams, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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

  if (isLoading || error) {
    if (error?.status === 403) {
      navigate('/');
    }
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
  }

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
