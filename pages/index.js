import React, { Component } from 'react';
import dynamic from 'next/dynamic';
// import PropTypes from 'prop-types';
import ParticleBanner from '@/Components/Banner/ParticleBanner';
// import Banner from '@/Components/Banner/index';

import { Button, Typography, IconButton } from '@material-ui/core';
import ChangeRouteButton from '@/Components/Routes/ChangeRouteButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import Dashboard from '@/Components/Dashboard';

import HOME_PAGE_DASHBOARD_CONFIG from '@/Lib/configs/dashboards/homepageDashConf';

import { makeStyles } from '@material-ui/core/styles';
import SVG from '@/Components/Svg';

const bannerStyles = makeStyles(theme => ({
  logo: {
    textAlign: 'center',
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      // marginTop: '12%',
    },
    [theme.breakpoints.up('md')]: {
      // marginTop: '12%',
    },
  },
  logoContainer: {},
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    flexWrap: 'wrap',
    // height: '112px',
  },
}));

export const HomePageBannerBody = () => {
  const classes = bannerStyles();
  return (
    <>
      {/* <Typography variant="h1" className={classes.title}>
        Rehouser
      </Typography> */}
      {/* <div className={classes.logo}></div> */}
      <SVG name="main_logo" padding />
      <div className={classes.btnContainer}>
        <ChangeRouteButton
          title="Free Appraisal"
          variant="contained"
          color="primary"
          route="/landlord/appraisals/add"
          btnProps={{
            size: 'large',
            style: {
              pointerEvents: 'all',
              margin: '8px',
              minWidth: '180px',
            },
          }}
        />
        <ChangeRouteButton
          title="Search for rental"
          variant="outlined"
          color="primary"
          route="/property-search"
          btnProps={{
            size: 'large',
            style: {
              pointerEvents: 'all',
              margin: '8px',
              minWidth: '180px',
            },
          }}
        />
      </div>
      <div>
        <Typography
          variant="h4"
          color="default"
          style={{ marginTop: '32px', textAlign: 'center' }}>
          More
        </Typography>
        <IconButton
          style={{
            marginTop: '16px',
            pointerEvents: 'all',
          }}
          aria-label="read-more"
          href="#banner-footer"
          color="default">
          <ArrowDownwardIcon
            fontSize="large"
            style={{
              height: '3rem',
              width: '3rem',
            }}
          />
        </IconButton>
      </div>
    </>
  );
};

const HomePage = props => {
  return (
    <div>
      <ParticleBanner
        imageSrc="images/banners/home-page-banner.jpg"
        disablePointerEvents={true}
        footer={[
          <Typography
            key={1}
            variant="h5"
            color="default"
            style={{ textAlign: 'center', padding: '0 30px' }}>
            Turning empty houses into friendly abodes
          </Typography>,
        ]}>
        <HomePageBannerBody />
      </ParticleBanner>
      <Dashboard
        config={HOME_PAGE_DASHBOARD_CONFIG}
        elevation={0}
        heading=""
        intro=""
      />
    </div>
  );
};

export default HomePage;
