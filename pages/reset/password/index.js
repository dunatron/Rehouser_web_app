import PropertySearch from '@/Components/PropertySearch/index';

import PageHeader from '@/Components/PageHeader';
import { Typography } from '@material-ui/core';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

const ResetPasswordPage = ({ appData: { currentUser } }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <>
      <PageHeader
        hidden={false}
        title="Property search"
        id="property-search"
        intro="Browse our range of available rental properties from your at-home comforts. 
        We are always working on new listings, so make sure to come back for a visit every once and a while."
        metaData={{
          title: 'Look for properties',
          content: 'Look or search for rental properties available in NZ',
        }}
        children={[
          <Typography key={1} gutterBottom>
            See something you like? Click {`"Get viewing time"`} and one of our
            agents will be in touch with you shortly.
          </Typography>,
        ]}
      />
      <div>Reset Password Page</div>
    </>
  );
};

ResetPasswordPage.propTypes = {};

export default ResetPasswordPage;
