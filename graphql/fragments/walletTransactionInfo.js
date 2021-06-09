import gql from 'graphql-tag';

const WalletTransactionInfoFragment = gql`
  fragment walletTransactionInfo on WalletTransaction {
    id
    transactionType
    txCode
    wallet {
      id
    }
    userId
    bankName
    bankNumber
    bankBranch
    bankAccount
    bankSuffix
    bankRef
    type
    reason
    leaseId
    propertyId
    stripePaymentId
    object
    amount
    createdAt
    description
    status
  }
`;

export { WalletTransactionInfoFragment };
export default WalletTransactionInfoFragment;
