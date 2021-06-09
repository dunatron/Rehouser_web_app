import useStyles from './useStyles';
import Loader from '@/Components/Loader';
import Skeleton from '@material-ui/lab/Skeleton';

const MapLoadingContainer = props => {
  const classes = useStyles();
  return (
    <div className={classes.mapWrapper}>
      <div className={classes.loadingContainer}>
        {/* <Loader loading={true} text="Loading google maps..." color="primary" /> */}
        <Skeleton variant="rect" width={'100%'} height={'100%'}></Skeleton>
      </div>
    </div>
  );
};

export default MapLoadingContainer;
