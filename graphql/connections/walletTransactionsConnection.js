import gql from 'graphql-tag';
import { WalletTransactionInfoFragment } from '../fragments/index';

const WALLET_TRANSACTIONS_CONNECTION_QUERY = gql`
  query WALLET_TRANSACTIONS_CONNECTION_QUERY(
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
      pageInfo {
        hasNextPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          ...walletTransactionInfo
        }
      }
    }
  }
  ${WalletTransactionInfoFragment}
`;
export { WALLET_TRANSACTIONS_CONNECTION_QUERY };
