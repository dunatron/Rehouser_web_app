import PropTypes from 'prop-types';
import AppraisalManager from '@/AdminComponents/AppraisalManager';
import PageHeader from '@/Components/PageHeader';
import { Typography } from '@material-ui/core';
import AdminOnly from '@/Components/AdminOnly';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

// server side props
import BankTransactionsTable from '@/Components/Tables/BankTransactionsTable';

const AdminBankingPage = ({ appData: { currentUser }, query: { id } }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <>
      <PageHeader
        title={id}
        intro="Some Unfinished Page"
        metaData={{
          title: 'Bank Manager',
          content: `Managing ${COMPANY_NAME}'s banking system`,
        }}
      />
      <AdminOnly me={me}>
        <div>Incomplete Page</div>
      </AdminOnly>
    </>
  );
};

// AdminBankingPage.propTypes = {
//   appData: PropTypes.shape({
//     currentUser: PropTypes.object.isRequired,
//   }),
// };

export default AdminBankingPage;
