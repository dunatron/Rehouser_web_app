import PropTypes from 'prop-types';
import AppraisalManager from '@/AdminComponents/AppraisalManager';
import PageHeader from '@/Components/PageHeader';
import { Typography } from '@material-ui/core';
import AdminOnly from '@/Components/AdminOnly';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';
// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const AdminSingleContactSubmissionPage = ({ appData: { currentUser } }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <>
      <PageHeader
        title="Contact submission"
        intro="A Single Contact Submission"
        metaData={{
          title: 'Contact submission',
          content: `A Single Contact Submission`,
        }}
      />
      <AdminOnly me={me}>
        <div>Hook Into more such as the email stream of our admins</div>
      </AdminOnly>
    </>
  );
};

AdminSingleContactSubmissionPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

export default AdminSingleContactSubmissionPage;
