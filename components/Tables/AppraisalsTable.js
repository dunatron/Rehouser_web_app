import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
  RENTAL_APPRAISALS_CONNECTION_QUERY,
  RENTAL_APPRAISALS_COUNT_QUERY,
} from '@/Gql/connections';
import { useRouter } from 'next/router';

import Modal from '@/Components/Modal/index';
import RentalAppraisal from '@/Components/RentalAppraisal';
import { Button } from '@material-ui/core';

import ConnectionTable, {
  getEnumLookupList,
} from '@/Components/SuperiorTable/ConnectionTable';
import { formatMoneyVal } from '@/Lib/formatMoney';

const useStyles = makeStyles(theme => ({
  root: {},
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
}));

const AppraisalsTable = ({
  where,
  me,
  enableAddressParams,
  baseManageLink = '/landlord/properties/',
}) => {
  const connectionKey = 'rentalAppraisalsConnection'; // e.g inspectionsConnection
  const classes = useStyles();
  const tableRef = useRef(null);
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appraisalModalData, setAppraisalModalData] = useState({});

  const columns = React.useMemo(
    () => [
      {
        title: 'location',
        field: 'location',
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
      {
        title: 'Appraised',
        field: 'appraised',
        type: 'boolean',
        // render: rowData => {
        //   const appraised = rowData.rent ? 'YES' : 'Waiting to be appraised';
        //   return appraised;
        // },
      },
      {
        title: 'rent',
        field: 'rent',
        editable: false,
        searchable: false,
        filtering: false,
        render: rowData => formatMoneyVal(rowData.rent),
      },
      {
        title: 'hasBeenUsed',
        field: 'hasBeenUsed',
        type: 'boolean',
        filtering: true,
      },
    ],
    []
  );

  const viewAppraisal = (e, d) => {
    setAppraisalModalData({ ...d });
    setIsModalOpen(true);
  };

  const addAppraisalRoute = () =>
    router.push({
      pathname: `${router.pathname}/add`,
    });

  const addPropertyFromAppraisal = (e, d) => {
    router.push({
      pathname: `/landlord/properties/add`,
      query: {
        appraisal_id: d.id,
      },
    });
  };

  const isAddPropertyDisabled = rowData => {
    if (rowData.hasBeenUsed || !rowData.rent) return true;
    return false;
  };

  return (
    <div className={classes.root}>
      <Modal
        title="Appraisal view"
        open={isModalOpen}
        close={() => setIsModalOpen(false)}>
        <RentalAppraisal
          me={me}
          // rentalAppraisal={appraisalModalData}
          id={appraisalModalData.id}
        />
      </Modal>

      <div className={classes.tableHeader}>
        <Button
          // startIcon={}
          onClick={addAppraisalRoute}
          color="primary"
          variant="outlined">
          Request new APPRAISAL
        </Button>
      </div>
      <ConnectionTable
        add={addAppraisalRoute}
        type="RentalAppraisal"
        enableAddressParams={enableAddressParams}
        title="Appraisals"
        connectionKey={connectionKey}
        where={where}
        countQuery={RENTAL_APPRAISALS_COUNT_QUERY}
        gqlQuery={RENTAL_APPRAISALS_CONNECTION_QUERY}
        searchKeysOR={['location_contains', 'id_contains']}
        orderBy="createdAt_DESC"
        tableRef={tableRef}
        columns={columns}
        actions={[
          {
            icon: 'pageview',
            tooltip: 'View appraisal details',
            onClick: viewAppraisal,
          },
          rowData => ({
            icon: 'add',
            tooltip: 'Add Property from appraisal',
            // onClick: (event, rowData) =>
            //   confirm('You want to delete ' + rowData.name),
            onClick: addPropertyFromAppraisal,
            disabled: isAddPropertyDisabled(rowData),
            hidden: isAddPropertyDisabled(rowData),
          }),
        ]}
      />
    </div>
  );
};

AppraisalsTable.propTypes = {
  where: PropTypes.object,
  orderBy: PropTypes.object,
};

export default AppraisalsTable;
