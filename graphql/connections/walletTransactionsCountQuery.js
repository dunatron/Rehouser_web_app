import gql from 'graphql-tag';

const WALLET_TRANSACTIONS_COUNT_QUERY = gql`
  query WALLET_TRANSACTIONS_COUNT_QUERY(
    $where: WalletTransactionWhereInput
    $orderBy: WalletTransactionOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    walletTransactionsConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      aggregate {
        count
      }
    }
  }
`;
export { WALLET_TRANSACTIONS_COUNT_QUERY };
