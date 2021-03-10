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
import { Typography, Button } from '@material-ui/core';

import formatCentsToDollars from '@/Lib/formatCentsToDollars';
import moment from 'moment';

import SinglePayment from '@/Components/Payments/SinglePayment';
import Modal from '@/Components/Modal/index';

// maybe if user is admin swap public out with private
import PublicUserDetails from '@/Components/User/PublicUserDetails';
import Help from '@/Components/Help';

import PropertyPublicDetails from '@/Components/Property/PublicDetails';
import ApplicationFullDetails from '@/Components/RentalApplication/FullDetails';

import {
  RENTAL_APPLICATIONS_CONNECTION_QUERY,
  RENTAL_APPLICATIONS_COUNT_QUERY,
} from '../../graphql/connections';
// mutations

//help configs
import { TENANT_APPLICATION_VISIBILTY_HELP } from '@/Lib/configs/help/tenant/applications/visibility';

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
const RentalApplicationsTable = ({
  where,
  me,
  orderBy = 'createdAt_DESC',
  enableAddressParams,
}) => {
  const router = useRouter();

  const connectionKey = 'rentalApplicationsConnection'; // e.g inspectionsConnection
  const globalStore = useContext(store);
  const { dispatch, state } = globalStore;
  const classes = useStyles();
  const tableRef = useRef(null);
  const [tableErr, setTableErr] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPaymentId, setModalPaymentId] = useState(null);

  // modals state
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [propertyId, setPropertyId] = useState('');

  const handleClosePropertyModal = () => setIsPropertyModalOpen(false);
  const handleOpenPropertyModal = id => {
    setPropertyId(id);
    setIsPropertyModalOpen(true);
  };

  const columns = React.useMemo(
    () => [
      {
        title: 'ID',
        field: 'id',
      },
      {
        title: 'property',
        field: 'property.description',
        render: rowData => {
          return (
            <div>
              {rowData.property.location}
              <Button
                variant="contained"
                onClick={() => handleOpenPropertyModal(rowData.property.id)}>
                Property Details
              </Button>
            </div>
          );
        },
      },
      {
        title: 'visibility',
        field: 'visibility',
        render: rowData => {
          return (
            <div>
              <Help helpConf={TENANT_APPLICATION_VISIBILTY_HELP} />
              {rowData.visibility}
            </div>
          );
        },
      },
      {
        title: 'stage',
        field: 'stage',
      },
      {
        title: 'leaseId',
        field: 'leaseId',
      },
      {
        title: 'applicants',
        field: 'applicats',
        render: rowData => {
          return (
            <div>
              {rowData?.applicants.map((applicant, idx) => (
                <div>
                  {/* {JSON.stringify(applicant, null, 2)} */}
                  {/* {applicant.user.email} */}

                  <PublicUserDetails
                    id={applicant.user.id}
                    iconOnly
                    size="small"
                  />
                </div>
              ))}
            </div>
          );
        },
      },
    ],
    []
  );

  const goToApplication = (e, d) => {
    router.push({
      pathname: `/tenant/applications/${d.id}`,
    });
  };

  return (
    <div className={classes.root}>
      <Error error={tableErr} />
      <ConnectionTable
        enableAddressParams={enableAddressParams}
        title="Applications"
        connectionKey={connectionKey}
        where={where}
        countQuery={RENTAL_APPLICATIONS_COUNT_QUERY}
        gqlQuery={RENTAL_APPLICATIONS_CONNECTION_QUERY}
        searchKeysOR={['id_contains']}
        orderBy="createdAt_DESC"
        tableRef={tableRef}
        columns={columns}
        actions={[
          {
            icon: 'settings',
            tooltip: 'Go To Application',
            onClick: goToApplication,
          },
        ]}
      />
      <Modal open={isPropertyModalOpen} close={handleClosePropertyModal}>
        <PropertyPublicDetails id={propertyId} />
      </Modal>
    </div>
  );
};

export default RentalApplicationsTable;
