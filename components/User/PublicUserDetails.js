import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { PRIVATE_USER_QUERY } from '@/Gql/queries';
import Loader from '@/Components/Loader';
import Error from '@/Components/ErrorMessage';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@/Components/Alert';

import {
  Avatar,
  Typography,
  CardHeader,
  Paper,
  Button,
  Box,
  ButtonGroup,
  Tooltip,
} from '@material-ui/core';

import Modal from '@/Components/Modal';
//icons
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PublicDetailsDisplay from './PublicDetailsDisplay';

import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  card: {
    // backgroundColor: 'red',
    // maxWidth: '280px',
    width: 'fit-content',
    display: 'flex',
    // padding: theme.spacing(1), pass in param if you want this
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(8),
    height: theme.spacing(8),
    '&:hover': {
      cursor: 'pointer',
    },
  },
  small: {
    margin: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  large: {
    margin: theme.spacing(1),
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  name: {},
  content: {
    alignItems: 'left',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function PublicUserDetails({
  id,
  email,
  iconOnly = false,
  size,
  defaultOpen = false,
}) {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(defaultOpen);

  const { data, loading, error } = useQuery(PRIVATE_USER_QUERY, {
    variables: {
      where: {
        // id: id,
        ...(id && { id: id }),
        ...(email && { email: email }),
      },
    },
  });

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  if (loading)
    return (
      <Loader
        loading={loading}
        text={`loading in public user details for ${id}`}
      />
    );
  if (error) return <Error error={error} />;

  if (!data.user) return <div>No Public User data Available</div>;

  const fullName = `${data.user.firstName} ${data.user.lastName}`;

  const avatarClasses = clsx({
    [classes.avatar]: true,
    [classes.small]: size === 'small' ? true : false,
  });

  return (
    <>
      <Paper className={classes.card} elevation={0}>
        <Tooltip title={`${data.user.firstName} ${data.user.lastName}`}>
          <Avatar
            onClick={handleOpenModal}
            className={avatarClasses}
            src={data.user.profilePhoto ? data.user.profilePhoto.url : null}
            alt={`image of ${fullName}`}
          />
        </Tooltip>

        {!iconOnly && (
          <Box className={classes.content}>
            <Typography className={classes.name} gutterBottom>
              {data.user.firstName} {data.user.lastName}
            </Typography>
            <Button className={classes.name} variant="outlined">
              {data.user.email}
            </Button>
          </Box>
        )}
      </Paper>
      <Modal
        open={modalOpen}
        close={handleCloseModal}
        title={`${fullName} public profile`}>
        <PublicDetailsDisplay user={data.user} />
      </Modal>
    </>
  );
}
