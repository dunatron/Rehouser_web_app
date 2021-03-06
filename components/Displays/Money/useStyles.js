import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      margin: theme.spacing(0, 0, 1, 0),
      // alignItems: props =>
      //   props.orientation === 'vertical' ? `flex-start` : `flex-end`,
      alignItems: props =>
        props.orientation === 'vertical' ? `flex-start` : `center`,
      flexDirection: props =>
        props.orientation === 'vertical' ? `column` : `row`,
    },
    icon: {
      margin: theme.spacing(0, 1, 0, 0),
    },
    title: {
      margin: theme.spacing(0, 1, 0, 0),
      order: props => (props.reverse ? 1 : 0),
    },
    value: {
      margin: theme.spacing(0, 1, 0, 0),
      order: props => (props.reverse ? 0 : 1),
    },
  })
);

export default useStyles;
