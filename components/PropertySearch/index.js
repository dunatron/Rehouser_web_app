import { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import PropTypes from 'prop-types';

import { Box, Paper, Checkbox } from '@material-ui/core';
import { SearchInterface } from './styles';
import SearchFilter from './SearchFilter';

import PropertyResultHit from './PropertyResultHit';
// connected refinements
import ConnectedCurrentRefinements from './refinements/CurrentRefinements';
import GeoSearch from './GeoSearch';
import DynamicGeoSearch from './DynamicGeoSearch';

import { InstantSearch, Pagination, Stats } from 'react-instantsearch-dom';

import ConnectedCheckBoxRefinementList from './refinements/CheckBoxList';

import CustomSearchBox from './CustomSearchBox';
import EnableBoundingBox from './EnableBoundingBox';
import ClearQuery from './ClearQuery';

import HorizonScrollHits from './HorizonScrollHits';
import SearchHeader from './SearchHeader';
import useStyles from './useStyles';

//icons
import PublicIcon from '@material-ui/icons/Public';

// THIS FOR NEXT JS
// https://github.com/algolia/react-instantsearch/tree/master/examples/next

var applicationId = process.env.ALGOLIA_APP_ID;
var apiKey = process.env.ALGOLIA_API_KEY;
const searchClient = algoliasearch(applicationId, apiKey);
const indexPrefix = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';

// const Hit = ({ hit, me }) => (
//   <div className="si-hit">
//     <PropertyResultHit hit={hit} me={me} />
//   </div>
// );

const Hit = ({ hit, me }) => {
  console.log('Does a hit get me => ', me);
  return (
    <div className="si-hit">
      <PropertyResultHit hit={hit} me={me} />
    </div>
  );
};
Hit.propTypes = {
  hit: PropTypes.any,
};

const Content = ({ me }) => (
  <div className="si-content">
    {/* <div className="si-info">
      <Stats />
    </div> */}

    <HorizonScrollHits hitComponent={<Hit me={me} />} me={me} />
    <div className="pagination">
      {/* <ConnectedMaterialPagination /> */}
      <Pagination />
    </div>
  </div>
);

const PropertySearch = props => {
  const { me } = props;
  const classes = useStyles();

  const [enableBoundingBox, setEnableBoundingBox] = useState(false);
  return (
    <InstantSearch
      indexName={`${indexPrefix}_PropertySearch`}
      searchClient={searchClient}>
      <SearchInterface>
        <div className={classes.root}>
          <Paper variant="outlined" square={true}>
            <Box className={classes.searchPanel}>
              <Box className={classes.leftSearchPanel}>
                <SearchHeader />
                <ConnectedCheckBoxRefinementList
                  attribute="administrative_area_level_1"
                  operator="or"
                  expansionProps={{
                    title: 'Administrative Area',
                    defaultOpen: true,
                    icon: <PublicIcon />,
                  }}
                />
                <CustomSearchBox />
                <SearchFilter />
                <EnableBoundingBox
                  enableBoundingBox={enableBoundingBox}
                  setEnableBoundingBox={() =>
                    setEnableBoundingBox(!enableBoundingBox)
                  }
                  transformItems={items =>
                    items.filter(({ attribute }) => attribute !== 'Rooms')
                  }
                />
              </Box>
              <Box className={classes.rightSearchPanel}>
                <DynamicGeoSearch enableBoundingBox={enableBoundingBox} />
              </Box>
            </Box>
            <ClearQuery clearsQuery />
            <ConnectedCurrentRefinements />
          </Paper>
          <Content me={me} />
        </div>
      </SearchInterface>
    </InstantSearch>
  );
};

export default PropertySearch;
