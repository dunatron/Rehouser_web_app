/**
 * I will find a lease via bankRef
 */

import Box from '@material-ui/core/Box';

import ChangeRouteButton from '@/Components/Routes/ChangeRouteButton';

import AddBankTransferToLease from './AddBankTransferToLease';
import BulkStatementsImporter from './BulkStatementsImporter/index';
import BankingCodes from './BankingCodes';

const BankManager = () => {
  return (
    <div>
      <ChangeRouteButton
        title="Bank Accounts"
        color="primary"
        route={`/admin/banking/bank-accounts`}
      />
      <Box m={2} />
      <AddBankTransferToLease />
      <Box m={2} />
      <BulkStatementsImporter />
      <BankingCodes />
      <Box m={2} />
    </div>
  );
};

export default BankManager;
