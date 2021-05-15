import PropTypes from 'prop-types';
import React from 'react';
import PleaseSignIn from '@/Components/PleaseSignIn';
import Account from '@/Components/Account/index';
import { Typography } from '@material-ui/core';
import PageHeader from '@/Components/PageHeader';

import ConfirmEmail from '@/Components/ConfirmEmail';
import Dashboard from '@/Components/Dashboard/index';
import HOME_PAGE_DASHBOARD_CONFIG from '@/Lib/configs/dashboards/homepageDashConf';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

import SendConfrimEmailButton from '@/Components/MutationButtons/SendConfrimEmailButton';

const ConfirmAccountPage = ({ appData: { currentUser }, query }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <>
      <PageHeader
        title="Confirm account"
        intro={`Confirm ${COMPANY_NAME} account page`}
        metaData={{
          title: 'Confirm account',
          content: `Confirm ${COMPANY_NAME} account page`,
        }}
      />
      <SendConfrimEmailButton email={query.email} />
    </>
  );
};

ConfirmAccountPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

export default ConfirmAccountPage;
