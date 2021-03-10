// export individual objects from here to use
import { Box, Typography } from '@material-ui/core';
import YouTube from 'react-youtube';

const youTubeOptions = {
  height: '390',
  width: '100%',
  maxWidth: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const TENANT_APPLICATION_VISIBILTY_HELP = {
  title: 'Application Visibility',
  components: [
    <Typography key={1} gutterBottom>
      When you apply for a rental property it will create a "Rental Application"
      with its "visibility" set to "PRIVATE"
    </Typography>,
    <Typography key={2} gutterBottom>
      This means that your application will not be visible to other people
      browsing the same property.
    </Typography>,
    <Typography key={3} gutterBottom>
      "PRIVATE": Only users you invite will be able to join your tenancy
      application
    </Typography>,
    <Typography key={3} gutterBottom>
      "PUBLIC": Other rehouser users can view and join your application. Once
      they have joined you will need to approve them as the owner of the
      application
    </Typography>,
  ],
};

export { TENANT_APPLICATION_VISIBILTY_HELP };
