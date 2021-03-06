import PropTypes from 'prop-types';
import AppraisalManager from '@/AdminComponents/AppraisalManager';
import PageHeader from '@/Components/PageHeader';
import { Typography } from '@material-ui/core';
import AdminOnly from '@/Components/AdminOnly';

import ContactSubmissionsTable from '@/Components/Tables/ContactSubmissionsTable';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const AdminContactSubmissionsPage = ({ appData: { currentUser } }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <>
      <PageHeader
        title="Contact submissions"
        intro="To track if they have responded and will also render a profile if the email they used was in the system"
        metaData={{
          title: 'Contact Submissions page',
          content: `Managing ${COMPANY_NAME}'s contact submissions`,
        }}
      />
      <AdminOnly me={me}>
        <ContactSubmissionsTable />
      </AdminOnly>
    </>
  );
};

AdminContactSubmissionsPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

export default AdminContactSubmissionsPage;
