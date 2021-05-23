import PropTypes from 'prop-types';
import { useState } from 'react';

import { CSVReader } from 'react-papaparse';
import VirtualList from 'react-virtual-list';
import RehouserPaper from '@/Styles/RehouserPaper';
import Typography from '@material-ui/core/Typography';

import findType from './findType';

import MYOBImporter from './MYOBImporter';

const MyList = ({ virtual, itemHeight }) => (
  <ul style={virtual.style}>
    {virtual.items.map(item => {
      return (
        <li key={`item_`} style={{ height: itemHeight }}>
          {JSON.stringify(item)}
        </li>
      );
    })}
  </ul>
);

MyList.propTypes = {
  itemHeight: PropTypes.any,
  virtual: PropTypes.shape({
    items: PropTypes.shape({
      map: PropTypes.func,
    }),
    style: PropTypes.any,
  }).isRequired,
};

const BulkUploader = () => {
  const [type, setType] = useState('');
  const [rows, setRows] = useState([]);

  const handleOnDrop = data => {
    const foundType = findType(data[0]);
    setRows(data);
    setType(foundType);
  };

  const handleOnError = (err, file, inputElem, reason) => {};

  const handleOnRemoveFile = data => {
    setType('');
  };

  const handleComplete = (results, file) => {
    console.log('Parsing complete:', results, file);
  };

  const MyVirtualList = VirtualList()(MyList);

  return (
    <RehouserPaper>
      <Typography gutterBottom>Payments Manager</Typography>
      <Typography gutterBottom>
        Ths works by dropping a bank statement from the Rehouser bank account.
        It will add the payments into the system and update any lease wallets
      </Typography>
      <Typography gutterBottom>{type}</Typography>
      <div
        style={{
          height: '180px',
        }}>
        <CSVReader
          onDrop={handleOnDrop}
          onError={handleOnError}
          addRemoveButton
          onRemoveFile={handleOnRemoveFile}
          header={false}
          complete={handleComplete}
          delimiter=","
          config={{
            header: true,
          }}></CSVReader>
      </div>
      count: {rows.length}
      {type === 'UNDEFINED_TYPE' && (
        <MyVirtualList items={rows} itemHeight={100} />
      )}
      {type === 'MYOB_CASHBOOK' && <MYOBImporter rows={rows} />}
    </RehouserPaper>
  );
};

export default BulkUploader;
