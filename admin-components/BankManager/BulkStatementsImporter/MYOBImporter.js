import { toast } from 'react-toastify';

import VirtualList from 'react-virtual-list';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import ButtonLoader from '@/Components/Loader/ButtonLoader';

const PROCESS_BANT_TRANSACTIONS_MUTATION = gql`
  mutation processBankTransactions($data: [BankTransactionCreateInput]!) {
    processBankTransactions(data: $data) {
      id
      amount
      bankAccount {
        id
        amount
      }
    }
  }
`;

const ItemValue = ({ keyVal, value }) => {
  return (
    <Tooltip title={`${keyVal}: ${value}`} arrow>
      <div style={{ padding: '16px', minWidth: '130px' }}>
        <div>{keyVal}</div>
        <div>{value.toString()}</div>
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

// this is to demonstrate what actually goes into our database transaction
// ALso not done probably, as it just handles primative value pairs and not objects
// when a transaction is processed it could return exactly what it did
// could add a message property, then we can always return the transaction and if it had already been processed
const DATABASE_TRANSACTION_KEYS = [
  'id',
  'amount',
  'accountNumber',
  'date',
  'reference',
  'txCode',
  'txType',
  'source',
  'otherPart',
  'particulars',
  'analysisCode',
  'serialNumber',
  'accountCode',
  'uniqueBnkTxId',
  'rehouserTransaction',
];
// 0309150417517000,20210526,-20.00,,ONLINE BANKING,,TO 0915-0417517-17,,,00:51-76042,,,202105260001
const formatRowData = ({ data }) => {
  if (!data['Unique ID']) return null;
  var date = new Date(
    data['Date'].substring(0, 4),
    data['Date'].substring(5, 6),
    data['Date'].substring(7, 8)
  );
  console.log('THE NEW DATE => ', date);
  return {
    id: data['Unique ID'],
    accountNumber: data['Account Number'],
    date: date, // 20210526 as yyyy/05/26
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
    uniqueBnkTxId: data['Unique ID'], // what were you doing here? check our banks most detailed export
    rehouserTransaction: false, // server will know based on the ref or using rehouser BankAccountNumber, could also predict once we have ref codes to know
    bankAccount: {
      create: {
        id: '123123123', // server must try and get it
        amount: 0,
      },
    },
  };
};

const MYOBVirtualList = ({ virtual, itemHeight }) => (
  <ul style={virtual.style}>
    {virtual.items.map(item => {
      const key = item.data['id'];
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
          <h3>Transaction {item.data['amount']}</h3>
          <h3>
            Ref ({item.data['Reference']}) {item.data['amount']}
            Processed {item.processed ? 'YES' : 'NO'}
          </h3>
          <div
            style={{
              display: 'flex',
              overflow: 'scroll',
              maxWidth: '100%',
            }}>
            {DATABASE_TRANSACTION_KEYS.map((importKey, idx) => {
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
const batchSize = 5;
const MYOBImporter = ({ rows }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  // const [rowsToProcess, setRowsToProcess] = useState(rows);
  const [rowsToProcess, setRowsToProcess] = useState(
    rows
      .map((row, idx) => {
        const rData = formatRowData({ data: row.data });
        return {
          processed: false,
          data: {
            ...rData,
          },
        };
      })
      .filter(i => i.data.id)
  );

  let unprocessedRows = rowsToProcess.filter((r, idx) => r.processed !== true);

  const _beginProcessing = async () => {
    // if (unprocessedRowsCount > 0) setIsProcessing(true);
    setIsProcessing(true);
    let filteredRows = unprocessedRows
      // .filter((r, idx) => r.processed !== true)
      .reduce((acc, r) => {
        return [
          ...acc,
          {
            ...r.data,
            date: r.data.date.toISOString(),
            amount: r.data.amount,
          },
        ];
      }, []);

    var batchItems = filteredRows.slice(0, batchSize).map(item => item);
    // get the first 50 items that havnt been processed and format those to just be the data

    processTransactions({
      variables: {
        data: batchItems,
      },
    });
  };

  const _handleProcessed = data => {
    const processedIds = data.processBankTransactions.map(t => t.id);
    const updatedRows = rowsToProcess.map(row => {
      const processed = processedIds.includes(row.data.id);
      return {
        ...row,
        processed: row.processed ? row.processed : processed,
        data: {
          ...row.data,
        },
      };
    });

    setRowsToProcess(updatedRows);
  };

  const _handleOnCompleted = data => {
    _handleProcessed(data);
  };

  const _handleOnError = error => {
    setIsProcessing(false);
    toast.error('An error Occurred');
  };

  const [processTransactions, { error, loading }] = useMutation(
    PROCESS_BANT_TRANSACTIONS_MUTATION,
    {
      onCompleted: _handleOnCompleted,
      onError: _handleOnError,
    }
  );

  useEffect(() => {
    if (isProcessing) {
      if (unprocessedRows.length > 0) {
        console.log('KEEP RUNNING');
        _beginProcessing();
      } else {
        console.log('FINISH');
        setIsProcessing(false);
        toast.success('Finished processing transactions');
      }
    }
    return () => {};
  }, [rowsToProcess]);

  console.log('unprocessedRows => ', unprocessedRows);

  return (
    <>
      <ProcessTransactionsBtn
        onClick={() => _beginProcessing()}
        isProcessing={isProcessing}
      />
      {Math.abs(rowsToProcess.length - unprocessedRows.length)} /{' '}
      {rowsToProcess.length}
      <Typography>{unprocessedRows.length} to Process</Typography>
      <TheVirtualTable rows={rowsToProcess} />
    </>
  );
};

const TheVirtualTable = ({ rows }) => {
  const MyVirtualList = VirtualList()(MYOBVirtualList);

  return <MyVirtualList items={rows} itemHeight={240} />;
};

const ProcessTransactionsBtn = ({ isProcessing, onClick }) => {
  return (
    <div>
      {/* loading,
    success,
    onClick,
    text,
    successText,
    cy,
    btnProps,
    children, */}
      <ButtonLoader
        loading={isProcessing}
        onClick={onClick}
        color="primary"
        variant="contained"
        text="Process Transactions"></ButtonLoader>
    </div>
  );
};

export { MYOB_IMPORT_KEYS };
export default MYOBImporter;
