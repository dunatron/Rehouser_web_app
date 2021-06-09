import gql from 'graphql-tag';

const WALLET_TRANSACTION_SUBSCRIPTION = gql`
  subscription walletTransactionSub($where: WalletSubscriptionWhereInput) {
    walletSub(where: $where) {
      node {
        id
        amount
        wallet {
          id
          amount
        }
      }
    }
  }
`;

export { WALLET_TRANSACTION_SUBSCRIPTION };
