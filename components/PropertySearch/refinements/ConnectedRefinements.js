import { makeStyles } from '@material-ui/core/styles';
import ConnectedCheckBoxRefinementList from './CheckBoxList';

// icons
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // backgroundColor: theme.palette.primary.main,
    // color: theme.palette.primary.contrastText,
  },
}));

const ConnectedRefinements = ({ children, childrenBefore }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {childrenBefore && children}
      <ConnectedCheckBoxRefinementList
        attribute="rooms"
        operator="or"
        expansionProps={{
          icon: <MeetingRoomIcon />,
        }}
      />
      <ConnectedCheckBoxRefinementList
        attribute="type"
        operator="or"
        expansionProps={{
          icon: <HomeIcon />,
        }}
      />
      <ConnectedCheckBoxRefinementList
        attribute="outdoorFeatures"
        operator="or"
      />
      <ConnectedCheckBoxRefinementList
        attribute="indoorFeatures"
        operator="or"
      />
      {!childrenBefore && children}
    </div>
  );
};

export default ConnectedRefinements;
