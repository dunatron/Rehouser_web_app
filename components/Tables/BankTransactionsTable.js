import React, { useRef, useState, useContext, useEffect } from 'react';
import Router from 'next/router';
import { store } from '../../store';
import gql from 'graphql-tag';
import { useApolloClient, useQuery, NetworkStatus } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
// import MaterialTable from 'material-table';
import ConnectionTable, {
  getEnumLookupList,
} from '@/Components/SuperiorTable/ConnectionTable';

//components
import Modal from '../Modal/index';
import Error from '@/Components/ErrorMessage';
import Loader from '@/Components/Loader';
import UserDetails from '../UserDetails';
import List from '@material-ui/core/List';

import { formatMoney } from '@/Lib/formatMoney';

//rentalApplicationsConnection
// connection querys
// mutations
import { OFFER_RENTAL_APPRAISAL_MUTATION } from '../../graphql/mutations';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const useStyles = makeStyles(theme => ({
  root: {},
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}));
//https://medium.com/@harshverma04111989/material-table-with-graphql-remote-data-approach-f05298e1d670
//https://github.com/harshmons/material-table-with-graphql-using-remote-data-approach
const PROPERTIES_CONNECTION_QUERY = gql`
  query PROPERTIES_CONNECTION_QUERY(
    $where: BankTransactionWhereInput
    $orderBy: BankTransactionOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    bankTransactionConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      aggregate {
        count
      }
      pageInfo {
        hasNextPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
          createdAt
          updatedAt
          bankAccount {
            id
          }
          accountNumber
          date
          reference
          amount
          txCode
          txType
          source
          otherPart
          particulars
          analysisCode
          serialNumber
          accountCode
          uniqueBnkTxId
          rehouserTransaction
        }
      }
    }
  }
`;
export const PROPERTIES_COUNT_QUERY = gql`
  query PROPERTIES_COUNT_QUERY(
    $where: BankTransactionWhereInput
    $orderBy: BankTransactionOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    bankTransactionConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      aggregate {
        count
      }
    }
  }
`;

const AdminRentalApplicationsTable = ({
  where,
  me,
  orderBy = 'createdAt_DESC',
}) => {
  const connectionKey = 'bankTransactionConnection'; // e.g inspectionsConnection
  const globalStore = useContext(store);
  const { dispatch, state } = globalStore;
  const classes = useStyles();
  const client = useApolloClient();
  const tableRef = useRef(null);

  const [tableErr, setTableErr] = useState({});

  const columns = React.useMemo(
    () => [
      {
        title: 'id',
        field: 'id',
        editable: false,
        searchable: true,
        filtering: false,
      },
      {
        title: 'amount',
        field: 'amount',
        editable: false,
        searchable: true,
        filtering: false,
        render: rowData => <div>{formatMoney(rowData.amount)}</div>,
      },
      {
        title: 'otherPart',
        field: 'otherPart',
        editable: false,
        searchable: true,
        filtering: false,
      },
      {
        title: 'code',
        field: 'code',
        editable: false,
        searchable: true,
        filtering: false,
      },

      {
        title: 'reference',
        field: 'reference',
        editable: false,
        searchable: true,
        filtering: false,
      },

      {
        title: 'created',
        field: 'createdAt',
        editable: false,
        type: 'date',
        sorting: true,
      },
    ],
    []
  );

  const manageBankAccount = (e, rowData) =>
    Router.push({
      pathname: `/admin/banking/bank-accounts/${rowData.id}`,
    });

  return (
    <div className={classes.root}>
      <Error error={tableErr} />
      <ConnectionTable
        title="All Properties"
        connectionKey={connectionKey}
        countQuery={PROPERTIES_COUNT_QUERY}
        gqlQuery={PROPERTIES_CONNECTION_QUERY}
        searchKeysOR={['id_contains']}
        orderBy="createdAt_DESC"
        tableRef={tableRef}
        columns={columns}
        actions={[
          {
            icon: 'account_balance',
            tooltip: 'Manage property',
            onClick: manageBankAccount,
          },
        ]}
      />
    </div>
  );
};

export default AdminRentalApplicationsTable;
