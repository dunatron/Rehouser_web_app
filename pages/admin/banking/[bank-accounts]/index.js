import PropTypes from 'prop-types';
import AppraisalManager from '@/AdminComponents/AppraisalManager';
import PageHeader from '@/Components/PageHeader';
import { Typography } from '@material-ui/core';
import AdminOnly from '@/Components/AdminOnly';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

// server side props
import BankAccountsTable from '@/AdminComponents/BankManager/BankAccountsTable';

const AdminBankingPage = ({ appData: { currentUser } }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <>
      <PageHeader
        title="Bank Accounts"
        intro="I hold the bank accounts on the system. A bank account gets a real bank account for its unique id on its creation.
        A user must select a bank account to make payments into before adding property. This bank account can then be associated with properties created by the user.
        The user could create/add more bank accounts if they wanted different properties tied to different accounts. When Rehouser Processes its payments. It looks for the code and reference and amount and unique paymentId. it then uses the code and reference to track down the lease by bankingRef and make a payment if the code was PLBR "
        metaData={{
          title: 'Bank Manager',
          content: `Managing ${COMPANY_NAME}'s banking system`,
        }}
      />
      <AdminOnly me={me}>
        <BankAccountsTable me={me} />
      </AdminOnly>
    </>
  );
};

AdminBankingPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

export default AdminBankingPage;
