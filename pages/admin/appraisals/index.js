import PropTypes from 'prop-types';
import AppraisalManager from '@/AdminComponents/AppraisalManager';
import PageHeader from '@/Components/PageHeader';
import { Typography } from '@material-ui/core';
import AdminOnly from '@/Components/AdminOnly';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const AdminAppraisalsPage = ({ appData: { currentUser } }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <>
      <PageHeader
        title="Admin Appraisals"
        intro="This is where our admins will find appraisals that need to be appraised."
        children={[
          <Typography key={1} gutterBottom>
            Make sure to give an accurate as possible appraisal
          </Typography>,
          <Typography key={2} gutterBottom>
            Remember to refresh as the tables get cached. Emails are also sent
            to the admin account when a new appraisal is requested
          </Typography>,
        ]}
        metaData={{
          title: 'Admin portal',
          content: 'Admin portal to manage clients and day to day activities',
        }}
      />
      <AdminOnly me={me}>
        <AppraisalManager />
      </AdminOnly>
    </>
  );
};

AdminAppraisalsPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

export default AdminAppraisalsPage;
