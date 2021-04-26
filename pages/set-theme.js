import PageHeader from '@/Components/PageHeader';
import { Typography } from '@material-ui/core';

// server side props
import { initializeApollo, addApolloState } from '@/Lib/apolloClient';
import { CURRENT_USER_QUERY } from '@/Gql/queries';

import ThemeManipulator from '@/Components/ThemeManipulator';

const SetThemePage = ({ appData: { currentUser } }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <>
      <PageHeader
        hidden={false}
        title="Set Theme"
        id="set-theme"
        intro="Rehouser allows you to set your prefered theme using the material UI guidelines"
        metaData={{
          title:
            'Rehouser allows you to set your prefered theme using the material UI guidelines',
          content:
            'Rehouser allows you to set your prefered theme using the material UI guidelines',
        }}
      />
      <ThemeManipulator />
    </>
  );
};

SetThemePage.propTypes = {};

export default SetThemePage;
