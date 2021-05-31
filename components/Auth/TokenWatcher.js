import { parseCookies } from 'nookies';
import { CURRENT_USER_QUERY } from '../../graphql/queries/index';

import { useApolloClient, useQuery, NetworkStatus } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { authState as rAuthState } from '../../recoil/AuthState';
import useInterval from '@/Lib/hooks/useInterval';

const MINUTE_MS = 3000; // 3 seconds

const TokenWatcher = () => {
  const [authState, setAuthState] = useRecoilState(rAuthState);
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
