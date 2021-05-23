import VirtualList from 'react-virtual-list';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

const PROCESS_BANT_TRANSACTIONS_MUTATION = gql`
  mutation processBankTransactions($data: [BankTransactionCreateInput]!) {
    processBankTransactions(data: $data) {
      id
    }
  }
`;

const ItemValue = ({ keyVal, value }) => {
  return (
    <Tooltip title={`${keyVal}: ${value}`} arrow>
      <div style={{ padding: '16px', minWidth: '130px' }}>
        <div>{keyVal}</div>
        <div>{value}</div>
      </div>
    </Tooltip>
  );
};

const MYOB_IMPORT_KEYS = [
  'Account Number',
  'Date',
  'Reference',
  'Amount',
  'Transaction Code',
  'Transaction Type',
  'Source',
  'Other Party',
  'Particulars',
  'Analysis (Code)',
  'Serial Number',
  'Account Code',
  'Unique ID',
];

const MYOBVirtualList = ({ virtual, itemHeight }) => (
  <ul style={virtual.style}>
    {virtual.items.map(item => {
      console.log('Virtual Item => ', item);
      const key = item.data['Unique ID'];
      return (
        <li
          key={`item_${key}`}
          style={{
            height: itemHeight,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          {/* {item.data.map((cell, cellIdx) => {
            return <span key={cellIdx}>{cell}</span>;
          })} */}
          <h3>Transaction {item.data['Unique ID']}</h3>
          <h3>
            Ref ({item.data['Reference']}) {item.data['Amount']}
          </h3>
          <div
            style={{
              display: 'flex',
              overflow: 'scroll',
              maxWidth: '100%',
            }}>
            {MYOB_IMPORT_KEYS.map((importKey, idx) => {
              return (
                <ItemValue
                  key={`${key}_${importKey}`}
                  keyVal={importKey}
                  value={item.data[importKey]}
                />
              );
            })}
          </div>
        </li>
      );
    })}
  </ul>
);

const MYOBImporter = ({ rows }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  // const [rowsToProcess, setRowsToProcess] = useState(rows);
  const [rowsToProcess, setRowsToProcess] = useState(
    rows.map((row, idx) => {
      console.log('tHE BASIC row => ', row);
      const rData = formatRowData({ data: row.data });
      return {
        processed: false,
        data: {
          ...rData,
        },
      };
    })
  );

  let unprocessedRows = rowsToProcess.filter((r, idx) => r.processed !== true);

  console.log('rowsToProcess => ', rowsToProcess);
  console.log('unprocessedRows => ', unprocessedRows);

  const _handleProcessed = data => {
    console.log(
      'DATA BACK FROM PROCESSED TRANSACTIONS => ',
      data.processBankTransactions
    );

    const processedIds = data.processBankTransactions.map(t => t.id);
    console.log('Processed Ids => ', processedIds);

    const updatedRows = rowsToProcess.map(row => {
      const processed = processedIds.includes(row.data.id);
      console.log('processed => ', processed);
      return {
        ...row,
        data: {
          ...row.data,
          processed: processed,
        },
      };
    });

    setRowsToProcess(updatedRows);
  };

  console.log('MYOB ROW rowsToProcess => ', unprocessedRows.length);
  const MyVirtualList = VirtualList()(MYOBVirtualList);

  return (
    <>
      <ProcessTransactions
        rows={unprocessedRows}
        isProcessing={isProcessing}
        setIsProcessing={v => setIsProcessing(v)}
        handleProcessed={data => _handleProcessed(data)}
      />
      {Math.abs(rowsToProcess.length - unprocessedRows.length)} /{' '}
      {rowsToProcess.length}
      <MyVirtualList items={rowsToProcess} itemHeight={180} />
    </>
  );
};

const formatRowData = ({ data }) => {
  console.log('FORMAT ROW DATA BEFOR SEND => ', data);
  if (!data['Unique ID']) return null;
  return {
    id: data['Unique ID'],
    accountNumber: data['Account Number'],
    date: data['Date'],
    reference: data['Reference'],
    amount: parseFloat(data['Amount']),
    txCode: data['Transaction Code'],
    txType: data['Transaction Type'],
    source: data['Source'],
    otherPart: data['Other Party'],
    particulars: data['Particulars'],
    analysisCode: data['Analysis (Code)'],
    serialNumber: data['Serial Number'],
    accountCode: data['Account Code'],
    uniqueBnkTxId: data[''],
    rehouserTransaction: false, // server will know based on the ref or using rehouser BankAccountNumber
    bankAccount: {
      create: {
        id: '123123123', // server must try and get it
        amount: 0,
      },
    },
  };
};

const ProcessTransactions = ({
  rows,
  setIsProcessing,
  isProcessing,
  handleProcessed,
}) => {
  const _handleOnCompleted = data => {
    // alert('FINISHED');
    setIsProcessing(false);
    handleProcessed(data);
  };

  const _handleOnError = error => {
    // alert('error');
    setIsProcessing(false);
  };

  const [processTransactions, { error, loading }] = useMutation(
    PROCESS_BANT_TRANSACTIONS_MUTATION,
    {
      onCompleted: _handleOnCompleted,
      onError: _handleOnError,
    }
  );

  const _beginProcessing = () => {
    setIsProcessing(true);
    let filteredRows = rows
      // .filter((r, idx) => r.processed !== true)
      .reduce((acc, r) => {
        return [
          ...acc,
          {
            ...r.data,
          },
        ];
      }, []);
    var size = 3;
    var batchItems = filteredRows.slice(0, size).map(item => item);
    // get the first 50 items that havnt been processed and format those to just be the data

    processTransactions({
      variables: {
        data: batchItems,
      },
    });
  };

  return (
    <div>
      Begin Processing {rows.length} transactions
      <Button
        disabled={isProcessing}
        onClick={() => _beginProcessing()}
        color="primary"
        variant="contained">
        Process Transactions
      </Button>
    </div>
  );
};

export { MYOB_IMPORT_KEYS };
export default MYOBImporter;
