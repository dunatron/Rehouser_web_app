import { parseCookies } from 'nookies';
import { useApolloClient, useQuery, NetworkStatus } from '@apollo/client';
import { useRecoilState } from 'recoil';

import useInterval from '@/Lib/hooks/useInterval';
import { CURRENT_USER_QUERY } from '@/Gql/queries/index';
import { authState as reAuthedState } from '../../recoil/AuthState';

const MINUTE_MS = 3000; // 3 seconds

const TokenWatcher = () => {
  const [authState, setAuthState] = useRecoilState(reAuthedState);
  const client = useApolloClient();

  const _clearStore = () => {
    client.cache.reset();
    client.resetStore();
  };

  const handleUserFetchCompleted = data => {
    if (data.me === null) {
      setAuthState({
        ...authState,
        isAuthed: false,
      });
    } else {
      setAuthState({
        ...authState,
        isAuthed: true,
      });
    }
  };

  const { loading, error, data, refetch, networkStatus } = useQuery(
    CURRENT_USER_QUERY,
    {
      onCompleted: handleUserFetchCompleted,
      notifyOnNetworkStatusChange: true,
    }
  );

  useInterval(() => {
    if (networkStatus === NetworkStatus.refetch || loading) return;
    let cookies = parseCookies();
    if (cookies.reAuthed === 'Yes' && authState.isAuthed === false) {
      refetch();
    } else if (cookies.reAuthed !== 'Yes' && authState.isAuthed) {
      _clearStore();
    }
  }, MINUTE_MS);

  return null;
};

export default TokenWatcher;
