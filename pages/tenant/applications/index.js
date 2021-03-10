import PropTypes from 'prop-types';
import PleaseSignIn from '@/Components/PleaseSignIn';
import RentalApplications from '@/Components/RentalApplications/index';

import RentalApplicationsTable from '@/Components/Tables/RentalApplicationsTable';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const TenantApplicationsPage = ({ appData: { currentUser } }) => {
  return (
    <>
      {/* PageHeader is on this component */}
      <PleaseSignIn
        currentUser={currentUser}
        message="You must be signed in to manage this property">
        {/* <RentalApplications /> */}
        <RentalApplicationsTable />
      </PleaseSignIn>
    </>
  );
};

TenantApplicationsPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
  query: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default TenantApplicationsPage;
