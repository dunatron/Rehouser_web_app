import React, { useRef, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { store } from '../../store';
import { useApolloClient } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
// import MaterialTable from 'material-table';
import ConnectionTable, {
  getEnumLookupList,
} from '@/Components/SuperiorTable/ConnectionTable';

//components
import Error from '@/Components/ErrorMessage';
import { Typography } from '@material-ui/core';

import moment from 'moment';

import SinglePayment from '@/Components/Payments/SinglePayment';
import Modal from '@/Components/Modal/index';

import {
  FILES_CONNECTION_QUERY,
  FILES_COUNT_QUERY,
} from '../../graphql/connections';
// mutations

const useStyles = makeStyles(theme => ({
  root: {},
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}));
// Note havnt done anything except rename component from PropertiesTable to ChargesTable
const FilesTable = ({
  where,
  me,
  orderBy = 'createdAt_DESC',
  enableAddressParams,
}) => {
  const router = useRouter();

  const connectionKey = 'filesConnection'; // e.g inspectionsConnection
  const globalStore = useContext(store);
  const { dispatch, state } = globalStore;
  const classes = useStyles();
  const tableRef = useRef(null);
  const [tableErr, setTableErr] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalFileId, setModalFileId] = useState(null);

  const columns = React.useMemo(
    () => [
      {
        title: 'ID',
        field: 'id',
      },
      {
        title: 'filename',
        field: 'filename',
      },
      {
        title: 'createdAt',
        field: 'createdAt',
        render: rowData => {
          return (
            <Typography>
              {moment(rowData.createdAt).format('Do MMM YYYY')}
            </Typography>
          );
        },
      },
    ],
    []
  );

  const handleModalClose = () => setModalIsOpen(false);

  const _handleViewFile = (e, rowData) => {
    setModalFileId(rowData.id);
    setModalIsOpen(true);
  };

  return (
    <div className={classes.root}>
      <Error error={tableErr} />
      <ConnectionTable
        enableAddressParams={enableAddressParams}
        title="Payments Table"
        connectionKey={connectionKey}
        where={where}
        countQuery={FILES_COUNT_QUERY}
        gqlQuery={FILES_CONNECTION_QUERY}
        searchKeysOR={['id_contains', 'bankRef_contains']}
        orderBy="createdAt_DESC"
        tableRef={tableRef}
        columns={columns}
        actions={[
          {
            icon: 'settings',
            tooltip: 'View Payment',
            onClick: _handleViewFile,
          },
        ]}
      />
      <Modal open={modalIsOpen} close={handleModalClose} disableBackdrop={true}>
        {/* <SinglePayment paymentId={modalPaymentId} /> */}
        ToDo: Add A file viewer when we make a global one {modalFileId}
      </Modal>
    </div>
  );
};

export default FilesTable;
