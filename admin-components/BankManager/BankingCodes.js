import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const BankingCodeItems = [
  {
    code: 'PLRP',
    description:
      'property lease rental payment. This code is used for lessees paying a property lease rental payment',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  details: {
    flexDirection: 'column',
  },
  code: {
    fontWeight: 900,
  },
}));

const BankingCodes = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className={classes.heading}>Banking Codes</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography gutterBottom>
            This is the Transaction Banking codes we will make everyone add when
            making different payments to us. so we know what to do with it when
            imported
          </Typography>
          <Box m={1} />
          <div>
            {BankingCodeItems.map((item, idx) => {
              return (
                <Typography variant="body1" gutterBottom>
                  <Typography component="span" className={classes.code}>
                    {item.code}
                  </Typography>{' '}
                  - {item.description}
                </Typography>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BankingCodes;
