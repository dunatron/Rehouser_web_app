import React from 'react';
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';

import styles from '../styles';
import moment from 'moment';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

const Section2 = () => {
  return (
    <View style={styles.section} wrap={false}>
      <View style={styles.column}>
        <Text style={{ ...styles.h2 }}>Objective</Text>
        <Text style={{ ...styles.body1 }}>
          {COMPANY_NAME} recognizes that it is handling sensitive and personal
          information. We have taken steps to identify these risks and mitigate
        </Text>
      </View>
    </View>
  );
};

export default Section2;
