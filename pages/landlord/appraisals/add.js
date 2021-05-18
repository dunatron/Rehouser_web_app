import PropTypes from 'prop-types';
import PleaseSignIn from '@/Components/PleaseSignIn';
import PropertyAppraisal from '@/Components/PropertyAppraisal';
import ConfirmEmail from '@/Components/ConfirmEmail';
import { COMPANY_NAME } from '@/Lib/const';

const LandlordAppraisalAddPage = ({ appData: { currentUser } }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <PleaseSignIn
      currentUser={currentUser}
      message={`Login / Signup to submit a Property to be Appraised by ${COMPANY_NAME}`}>
      <ConfirmEmail
        me={me}
        title="You must confirm your email address before requesting an appraisal">
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
