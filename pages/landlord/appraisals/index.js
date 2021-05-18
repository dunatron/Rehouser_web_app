import PropTypes from 'prop-types';
import PleaseSignIn from '@/Components/PleaseSignIn';
import AppraisalsTable from '@/Components/Tables/AppraisalsTable';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const LandLordAppraisalsPage = ({ appData: { currentUser } }) => {
  const me = currentUser.data ? currentUser.data.me : null;

  return (
    <PleaseSignIn
      currentUser={currentUser}
      message="Signup / Login to view your Property Appraisals">
      {/* Let these load after 1st paint. i.e dont get it with serverside props */}
      <AppraisalsTableBuildMethod me={me} />
    </PleaseSignIn>
  );
};

const AppraisalsTableBuildMethod = ({ me }) => {
  const where = {
    requestedBy: {
      id: me?.id,
    },
  };
  return <AppraisalsTable where={where} enableAddressParams={false} />;
};

LandLordAppraisalsPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
  query: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default LandLordAppraisalsPage;
