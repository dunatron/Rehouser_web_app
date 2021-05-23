/**
 * I will find a lease via bankRef
 */
import AddBankTransferToLease from './AddBankTransferToLease';
import BulkStatementsImporter from './BulkStatementsImporter/index';
const BankManager = () => {
  return (
    <div>
      <AddBankTransferToLease />
      <BulkStatementsImporter />
    </div>
  );
};

export default BankManager;
