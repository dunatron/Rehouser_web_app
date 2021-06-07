import PropTypes from 'prop-types';
import PleaseSignIn from '@/Components/PleaseSignIn';
import ConfirmEmail from '@/Components/ConfirmEmail';
import PageHeader from '@/Components/PageHeader';
import { Box, Typography } from '@material-ui/core';
import Dashboard from '@/Components/Dashboard';
import LANDLORD_DASHBOARD_CONFIG from '@/Lib/configs/dashboards/landlordDashConf';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const LandlordPage = ({ appData: { currentUser } }) => {
  const pleaseSignInMessage =
    'You must be signed in to manager your properties';
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <>
      <PageHeader
        title="Landlord Portal"
        intro={`Welcome to the ${COMPANY_NAME} landlord portal`}
        children={[
          <Typography key={1} gutterBottom>
            This is your main area as a landlord where you can reach tools to
            add new properties, documents and data to the platform
          </Typography>,
          <Typography key={1} gutterBottom>
            You will also find tools to keep an eye on your investment
          </Typography>,
        ]}
        metaKeywords="Rentals, Property, Management, Landlord"
        metaData={{
          title: 'Landlord Portal',
          content: `Manage your rental properties from the ${COMPANY_NAME} landlord portal`,
        }}
      />
      <PleaseSignIn
        currentUser={currentUser}
        message={pleaseSignInMessage}
        alert={
          <Box>
            <Typography component="p" variant="h6" gutterBottom color="inherit">
              Alert!
            </Typography>
            <Typography component="strong" color="inherit" gutterBottom>
              {pleaseSignInMessage}
            </Typography>
          </Box>
        }>
        <ConfirmEmail me={me} attrs={{ disablePadding: false }}></ConfirmEmail>
      </PleaseSignIn>
      <Dashboard
        config={LANDLORD_DASHBOARD_CONFIG}
        me={me}
        elevation={10}
        heading="Landlord Dashboard"
        intro="Landlord portal dashboard"
      />
    </>
  );
};

LandlordPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

export default LandlordPage;
