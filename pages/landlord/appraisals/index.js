import PropTypes from 'prop-types';
import PleaseSignIn from '@/Components/PleaseSignIn';
import AppraisalsTable from '@/Components/Tables/AppraisalsTable';

const LandLordAppraisalsPage = ({
  appData: { currentUser },
  query: { id },
}) => {
  return (
    <PleaseSignIn
      currentUser={currentUser}
      message="Please Sign in to view: Landord Appraisals Page">
      <AppraisalsTable />
    </PleaseSignIn>
  );
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
