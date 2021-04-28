import { useCurrentUser } from '@/Components/User/index';

import PrivateUserDetails from '@/Components/User/PrivateUserDetails';
import PublicUserDetails from '@/Components/User/PublicUserDetails';

const CorrectUserDetails = ({ id }) => {
  const { data, loading, error } = useCurrentUser();

  if (data?.me?.isWizard) return <PrivateUserDetails id={id} />;
  if (data?.me?.isAdmin) return <PrivateUserDetails id={id} />;

  return <PublicUserDetails id={id} />;
};

export default CorrectUserDetails;
