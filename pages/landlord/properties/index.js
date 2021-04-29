import PropTypes from 'prop-types';
import PleaseSignIn from '@/Components/PleaseSignIn';
import PageHeader from '@/Components/PageHeader';
import { Typography } from '@material-ui/core';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';
import PropertiesTable from '@/Components/Tables/PropertiesTable';

import AddIcon from '@material-ui/icons/Add';
import { ButtonGroup, Button } from '@material-ui/core';

import Router from 'next/router';

const handleLink = (route = '/', query = {}) => {
  Router.push({
    pathname: route,
    query: query,
  });
};

const PropertiesPage = props => {
  const {
    appData: { currentUser },
  } = props;
  const pleaseSignInMessage =
    'You must be signed in to manager your properties';

  const me = currentUser.data ? currentUser.data.me : null;

  const goToAddPropertyPage = () => {
    handleLink('/landlord/properties/add');
  };

  const goToAddBulkProperty = () => {
    handleLink('/landlord/properties/bulkadd');
  };

  return (
    <>
      <PageHeader
        title="My Properties"
        intro="You can find all of your properties here, where you can track the progress on your investments"
        children={[
          <Typography key={1} gutterBottom>
            You can also add property to the platform from here
          </Typography>,
        ]}
        metaData={{
          title: 'My Properties',
          content: 'The properties for the current logged in user',
        }}
      />
      <PleaseSignIn
        message={pleaseSignInMessage}
        alert={
          <Typography variant="body1" gutterBottom color="inherit">
            <Typography component="strong">{pleaseSignInMessage}</Typography>
          </Typography>
        }>
        <div style={{ marginBottom: '16px' }}>
          <ButtonGroup
            color="secondary"
            aria-label="outlined secondary button group">
            <Button onClick={goToAddPropertyPage} startIcon={<AddIcon />}>
              Property
            </Button>
            <Button onClick={goToAddBulkProperty} startIcon={<AddIcon />}>
              Bulk Upload
            </Button>
          </ButtonGroup>
        </div>
        <PropertiesTableBuildMethod me={me} />
      </PleaseSignIn>
    </>
  );
};

const PropertiesTableBuildMethod = ({ me }) => {
  const where = {
    owners_some: {
      id: me.id,
    },
  };
  return <PropertiesTable where={where} enableAddressParams />;
};

PropertiesPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

export default PropertiesPage;
