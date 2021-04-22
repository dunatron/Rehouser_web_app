// icons
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import HouseIcon from '@material-ui/icons/House';
import AddIcon from '@material-ui/icons/Add';
import MoneyIcon from '@material-ui/icons/Money';

const LANDLORD_DASHBOARD_CONFIG = [
  {
    icon: <HomeWorkIcon />,
    label: 'Free Appraisal',
    route: '/landlord/appraisals/add',
    description: 'Create a new Rental Appraisal ',
    color: 'primary',
    requiresLogin: false,
  },
  {
    icon: <HomeWorkIcon />,
    label: 'Appraisals',
    route: '/landlord/appraisals',
    description: 'Land lord appraisals',
    color: 'primary',
    requiresLogin: false,
  },
  {
    icon: <AddIcon />,
    label: 'Add Property',
    route: '/landlord/properties/add',
    description: 'Add property to the platform',
    color: 'primary',
    requiresLogin: true,
  },
  {
    icon: <HouseIcon />,
    label: 'Properties',
    route: '/landlord/properties',
    description:
      'Review your properties. This is where you can accept applications for your property and do general management for your property',
    color: 'primary',
    requiresLogin: true,
  },
  {
    icon: <MoneyIcon />,
    label: 'Fees',
    route: '/landlord/fees',
    description: 'Review the rehouser fees for the system',
    color: 'primary',
    requiresLogin: false,
  },
  {
    icon: <MoneyIcon />,
    label: 'Terms of engagement',
    route: '/landlord/terms-of-engagement',
    description: 'Review the terms of engagement for using our system',
    color: 'primary',
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
