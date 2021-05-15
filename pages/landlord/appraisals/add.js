import PropTypes from 'prop-types';
import PleaseSignIn from '@/Components/PleaseSignIn';
import PropertyAppraisal from '@/Components/PropertyAppraisal';
import ConfirmEmail from '@/Components/ConfirmEmail';

const LandlordAppraisalAddPage = ({ appData: { currentUser } }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <PleaseSignIn
      currentUser={currentUser}
      message="Please Sign in to view: Landord Appraisals Page">
      <ConfirmEmail
        me={me}
        title="You must confrim your email address before requesting an appraisal">
        <PropertyAppraisal me={me} />
      </ConfirmEmail>
    </PleaseSignIn>
  );
};
LandlordAppraisalAddPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

export default LandlordAppraisalAddPage;
