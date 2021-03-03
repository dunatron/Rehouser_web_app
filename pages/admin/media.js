import PropTypes from 'prop-types';
import React from 'react';

//components
import PageHeader from '@/Components/PageHeader';
// admin components
import AdminOnly from '@/Components/AdminOnly';

import MediaLibrary from '@/Components/MediaLibrary';

const AdminMediaPage = ({ appData: { currentUser } }) => {
  const me = currentUser.data ? currentUser.data.me : null;
  return (
    <>
      <PageHeader
        title="Admin Settings"
        intro="Decide what system updates you want to subscribe to"
        metaData={{
          title: 'Admin Settings',
          content: 'Admin settings for subscriptions',
        }}
      />
      <AdminOnly me={me}>
        <MediaLibrary />
      </AdminOnly>
    </>
  );
};

AdminMediaPage.propTypes = {
  appData: PropTypes.shape({
    currentUser: PropTypes.object.isRequired,
  }),
};

export default AdminMediaPage;
