// icons
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import HouseIcon from '@material-ui/icons/House';
import AddIcon from '@material-ui/icons/Add';
import MoneyIcon from '@material-ui/icons/Money';

const LANDLORD_DASHBOARD_CONFIG = [
  {
    icon: <HomeWorkIcon color="default" />,
    label: 'Free Appraisal',
    route: '/landlord/appraisals/add',
    description: 'Create a new Rental Appraisal ',
    color: 'default',
    requiresLogin: false,
  },
  {
    icon: <HomeWorkIcon color="default" />,
    label: 'Appraisals',
    route: '/landlord/appraisals',
    description: 'Land lord appraisals',
    color: 'default',
    requiresLogin: true,
  },
  {
    icon: <AddIcon color="default" />,
    label: 'Add Property',
    route: '/landlord/properties/add',
    description: 'Add property to the platform',
    color: 'default',
    requiresLogin: true,
  },
  {
    icon: <HouseIcon color="default" />,
    label: 'Properties',
    route: '/landlord/properties',
    description:
      'Review your properties. This is where you can accept applications for your property and do general management for your property',
    color: 'default',
    requiresLogin: true,
  },
  {
    icon: <MoneyIcon color="default" />,
    label: 'Fees',
    route: '/landlord/fees',
    description: 'Review the rehouser fees for the system',
    color: 'default',
    requiresLogin: false,
  },
  {
    icon: <MoneyIcon color="default" />,
    label: 'Terms of engagement',
    route: '/landlord/terms-of-engagement',
    description: 'Review the terms of engagement for using our system',
    color: 'default',
  },

  // {
  //   icon: <ApartmentIcon />,
  //   label: 'Leases',
  //   route: '/leases',
  //   description: 'Review your leases for your properties',
  //   color: "primary",
  // },
];

export default LANDLORD_DASHBOARD_CONFIG;
