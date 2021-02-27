import PropTypes from 'prop-types';
import PageHeader from '@/Components/PageHeader';
import InspectionsTable from '@/Components/Tables/InspectionsTable';
import AdminOnly from '@/Components/AdminOnly';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const AdminFilesPage = ({ appData: { currentUser } }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <>
      <PageHeader
        title="Admin files manager"
        intro="AS an admin you should be able to view and delete most files, We will alter this in later stages to be more granular"
        metaData={{
          title: 'Admin Inspections',
          content:
            'View all system inspections so we never miss an inspection or fail to inform people of incoming inspections',
        }}
      />
      <AdminOnly me={me}>
        <div>SOme sort of file manager. each file hosuld have a relation</div>
      </AdminOnly>
    </>
  );
};

AdminFilesPage.propTypes = {};

export default AdminFilesPage;
