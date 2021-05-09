import PropTypes from 'prop-types';
import PageHeader from '@/Components/PageHeader';
import AcceptTermsOfEngagementForm from '@/Components/Forms/AcceptTermsOfEngagementForm';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const TermsOfEngagementPage = props => {
  const {
    appData: { currentUser },
  } = props;

  const me = currentUser.data ? currentUser.data.me : null;

  return (
    <>
      <PageHeader
        metaData={{
          title: `${COMPANY_NAME} | Terms of engagement`,
          content: `These are the terms of engagement a landlord will need to agree to so ${COMPANY_LEGAL_NAME} can act on their behalf.`,
        }}
      />
      <AcceptTermsOfEngagementForm me={me} />
    </>
  );
};

TermsOfEngagementPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

export default TermsOfEngagementPage;
