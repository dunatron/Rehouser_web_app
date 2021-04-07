import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Configure, Stats } from 'react-instantsearch-dom';
import dollarsToCents from '@/Lib/dollarsToCents';
import { formatCentsToDollarsVal } from '@/Lib/formatCentsToDollars';
import TextInput from '@/Components/Inputs/TextInput';
import DateInput from '@/Components/Inputs/DateInput';
import moment from 'moment';
import CurrentRefinements from './refinements/CurrentRefinements';
import ConnectedRefinements from './refinements/ConnectedRefinements';
import ExpansionRefinement from './refinements/ExpansionRefinement';
import PriceFilter from './refinements/PriceFilter';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Input,
  Box,
} from '@material-ui/core';

import DatePicker from '@/Components/Pickers/DatePicker';

import Typography from '@material-ui/core/Typography';
// icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TuneIcon from '@material-ui/icons/Tune';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TodayIcon from '@material-ui/icons/Today';

const useStyles = makeStyles(theme => ({
  AccordionRoot: {
    alignItems: 'center',
    // fontSize: '1.3rem',
    // backgroundColor: 'rgb(212,220,231)',
    // color: theme.palette.secondary.main,
  },
  rentLabel: {
    // fontSize: '1.3rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
  },
  ExpandIcon: {
    width: '2em !important',
    height: '2em !important',
  },
  AccordionDetails: {
    padding: 0,
  },
  AccordionSummaryContent: {
    display: 'flex',
    alignItems: 'center',
  },
  textInputRoot: {},
  filterGrid: {
    display: 'grid',
    gridGap: '16px',
    width: '100%',
    padding: '0 16px',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr ',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
  },
}));

const SearchFilter = () => {
  const stopPropagation = e => e.stopPropagation();
  const classes = useStyles();
  const now = moment();
  const [expanded, setExpanded] = useState(false);
  const [bottomPrice, setBottomPrice] = useState(0);
  const [topPrice, setTopPrice] = useState(999999);
  const [moveInDate, setMoveInDate] = useState(now.format());
  const [moveInDateStamp, setMoveInDateStamp] = useState(now.unix());

  // room price
  const [bottomRoomPrice, setBottomRoomPrice] = useState(0);
  const [topRoomPrice, setTopRoomPrice] = useState(9999999999);

  const setAndFormatMoveInDate = date => {
    // setMoveInDate(date);
    setMoveInDateStamp(moment(date).unix());
  };

  // topPrice, bottomPrice
  const handleSetPriceFilter = ({ bottomPrice, topPrice }) => {
    setTopPrice(topPrice);
    setBottomPrice(bottomPrice);
  };

  const handleSetRoomPriceFilter = ({ bottomPrice, topPrice }) => {
    setTopRoomPrice(topPrice);
    setBottomRoomPrice(bottomPrice);
  };

  // 9,000,690.24

  // must be a all on one line
  // const filterLogic = `move_in_date_timestamp:0000000000 TO ${moveInDateStamp} AND onTheMarket: true AND rent >= ${bottomPrice} AND rent <= ${topPrice}`;
  // const filterLogic = `onTheMarket: true AND lowestRoomPrice >= ${bottomPrice} AND lowestRoomPrice <= ${topPrice}`;
  const filterLogic = `onTheMarket: true AND lowestRoomPrice >= ${bottomPrice} AND lowestRoomPrice <= ${topPrice}`;
  return (
    <div>
      <Configure filters={filterLogic} />
      <ExpansionRefinement
        // title="Property price per week"
        title={
          <Typography className={classes.rentLabel}>
            {formatCentsToDollarsVal(bottomPrice)} -{' '}
            {formatCentsToDollarsVal(topPrice)} per room
          </Typography>
        }
        icon={<AttachMoneyIcon />}>
        <PriceFilter
          setPrice={handleSetPriceFilter}
          items={[
            {
              label: 'ALL',
              bottomPrice: 0,
              // topPrice: dollarsToCents(9999999),
              topPrice: 900069024,
            },
            {
              label: '$80 - $120',
              bottomPrice: dollarsToCents(80),
              topPrice: dollarsToCents(120),
            },
            {
              label: '$120 - $180',
              bottomPrice: dollarsToCents(120),
              topPrice: dollarsToCents(180),
            },
            {
              label: '$180 - $240',
              bottomPrice: dollarsToCents(180),
              topPrice: dollarsToCents(240),
            },
            {
              label: '$240 - $280',
              bottomPrice: dollarsToCents(240),
              topPrice: dollarsToCents(280),
            },
            {
              label: '$280 - $360',
              bottomPrice: dollarsToCents(280),
              topPrice: dollarsToCents(360),
            },
            {
              label: '$360 - $420',
              bottomPrice: dollarsToCents(360),
              topPrice: dollarsToCents(420),
            },
          ]}
        />
      </ExpansionRefinement>
      <Accordion
        square={true}
        className={classes.AccordionRoot}
        expanded={expanded}>
        <AccordionSummary
          classes={{
            root: classes.AccordionRoot,
            content: classes.AccordionSummaryContent,
            expandIcon: classes.ExpandIcon,
          }}
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <TuneIcon style={{ marginRight: '8px' }} />
          <Typography variant="button">Filters</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.AccordionDetails}>
          <ConnectedRefinements childrenBefore={true}>
            {/* <ExpansionRefinement title="Price per room">
              <PriceFilter setPrice={handleSetRoomPriceFilter} />
            </ExpansionRefinement> */}
            {/* <ExpansionRefinement title={'Available before date'} icon={<TodayIcon />}>
              <div
                style={{
                  padding: '16px',
                }}>
                <DatePicker
                  value={moveInDate}
                  onChange={setAndFormatMoveInDate}
                />
              </div>
            </ExpansionRefinement> */}
          </ConnectedRefinements>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SearchFilter;
