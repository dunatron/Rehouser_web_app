import React from 'react';
import {
  ListItem,
  ListItemSecondaryAction,
  Avatar,
  ListItemText,
  ListItemAvatar,
} from '@material-ui/core';

// components
import UserMenu from './UserMenu';

import PropTypes from 'prop-types';
import { mePropTypes, filePropTypes } from '../../propTypes';

import PublicUserDetails from '@/Components/User/PublicUserDetails';
import PrivateUserDetails from '@/Components/User/PrivateUserDetails';

const UserDetails = ({ me, user }) => {
  const fullname = user.firstName + ' ' + user.lastName;
  return (
    <ListItem dense={true}>
      <ListItemAvatar>
        {/* <Avatar
          alt={fullname}
          src={user.profilePhoto ? user.profilePhoto.url : null}
        /> */}
        {me?.isAdmin ? (
          <PrivateUserDetails id={user.id} />
        ) : (
          <PublicUserDetails id={user.id} iconOnly={true} />
        )}
      </ListItemAvatar>
      <ListItemText primary={fullname} secondary={'Friend'} />
      <ListItemSecondaryAction>
        <UserMenu me={me} user={user} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    profilePhoto: filePropTypes,
  }),
  me: mePropTypes,
};

export default UserDetails;
