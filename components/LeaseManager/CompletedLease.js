import PropTypes from 'prop-types';
import React from 'react';
import DownloadLease from './DownloadLease';
import LeaseWallet from '../LeaseWallet';

const CompletedLease = ({ leaseId, lease, me }) => {
  // get payments from the lease wallet the query will be a paginated one that fetches them all
  return (
    <div>
      <DownloadLease lease={lease} me={me} />
      <h4>Lease Payments</h4>
      <LeaseWallet lease={lease} me={me} />
    </div>
  );
};

CompletedLease.propTypes = {
  lease: PropTypes.any,
  leaseId: PropTypes.any,
  me: PropTypes.any,
};

export default CompletedLease;
