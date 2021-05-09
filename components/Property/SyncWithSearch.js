import { Button } from '@material-ui/core';
import ButtonLoader from '@/Components/Loader/ButtonLoader';

import { gql, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

const SYNC_PROPERTY_WITH_SEARCH_MUTATION = gql`
  mutation SYNC_PROPERTY_WITH_SEARCH_MUTATION($id: String!) {
    syncPropertySearchState(id: $id) {
      message
    }
  }
`;

// could potentially reset any algolia cache the user has on success
const SyncWithSearch = ({ id }) => {
  const handleOnCompleted = data => {
    toast.success(data?.syncPropertySearchState?.message);
  };
  const [syncPropertySearchState, { data, loading, error }] = useMutation(
    SYNC_PROPERTY_WITH_SEARCH_MUTATION,
    {
      onCompleted: handleOnCompleted,
    }
  );
  return (
    <ButtonLoader
      loading={loading}
      btnProps={{
        color: 'primary',
      }}
      text="Sync Search State"
      onClick={() =>
        syncPropertySearchState({
          variables: {
            id: id,
          },
        })
      }
    />
  );
};

export default SyncWithSearch;
