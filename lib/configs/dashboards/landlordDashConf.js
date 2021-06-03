// icons
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import HouseIcon from '@material-ui/icons/House';
import AddIcon from '@material-ui/icons/Add';
import MoneyIcon from '@material-ui/icons/Money';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

const LANDLORD_DASHBOARD_CONFIG = [
  {
    icon: <HomeWorkIcon color="inherit" />,
    label: 'Free Appraisal',
    route: '/landlord/appraisals/add',
    description: 'Create a new Rental Appraisal ',
    color: 'inherit',
    requiresLogin: false,
  },
  {
    icon: <HomeWorkIcon color="inherit" />,
    label: 'Appraisals',
    route: '/landlord/appraisals',
    description: 'Land lord appraisals',
    color: 'inherit',
    requiresLogin: true,
  },
  {
    icon: <AddIcon color="inherit" />,
    label: 'Add Property',
    route: '/landlord/properties/add',
    description: 'Add property to the platform',
    color: 'inherit',
    requiresLogin: true,
  },
  {
    icon: <HouseIcon color="inherit" />,
    label: 'Properties',
    route: '/landlord/properties',
    description:
      'Review your properties. This is where you can accept applications for your property and do general management for your property',
    color: 'inherit',
    requiresLogin: true,
  },
  {
    icon: <MoneyIcon color="inherit" />,
    label: 'Terms of engagement',
    route: '/landlord/terms-of-engagement',
    description: 'Review the terms of engagement for using our system',
    color: 'inherit',
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
