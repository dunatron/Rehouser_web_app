import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Modal from '../Modal/index';
import LeasePdf from '../Pdfs/LeasePdf';
import Collapse from '@material-ui/core/Collapse';

import TextPdfGeneratorCombo from '@/Components/Pdfs/TextPdfGeneratorCombo';
import _generateLeasePdf from '@/Lib/configs/pdfs/_generateLeasePdf';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: '16px',
  },
  entered: {},
  hidden: {},
  wrapper: {},
  blurWrapper: {
    opacity: 0.3,
  },
  wrapperInner: {},
}));

const DownloadLease = ({ lease, me }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => setChecked(!checked);

  const leasePdfConf = _generateLeasePdf(lease);
  return (
    <>
      <Button
        style={{
          marginTop: '8px',
          borderRadius: 0,
        }}
        color="primary"
        variant="outlined"
        onClick={toggleChecked}>
        {checked ? 'Hide' : 'Show'} Lease
      </Button>
      <Collapse
        in={checked}
        collapsedHeight={50}
        classes={{
          container: classes.container,
          entered: classes.entered,
          hidden: classes.hidden,
          wrapper: checked ? classes.wrapper : classes.blurWrapper,
          wrapperInner: classes.wrapperInner,
        }}>
        <TextPdfGeneratorCombo
          config={leasePdfConf}
          docConf={{
            title: 'Lease',
            author: COMPANY_LEGAL_NAME,
            subject: `${COMPANY_NAME} Property Lease`,
            keywords: `${COMPANY_NAME}, property, lease, pdf`,
            creator: COMPANY_NAME,
            producer: COMPANY_NAME,
          }}
        />
      </Collapse>
    </>
  );
};

DownloadLease.propTypes = {
  lease: PropTypes.any,
  me: PropTypes.any,
};

export default DownloadLease;
