import MoneyIcon from '@material-ui/icons/Money';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GroupIcon from '@material-ui/icons/Group';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import HomeWorkIcon from '@material-ui/icons/HomeWork';

const HOME_PAGE_DASHBOARD_CONFIG = [
  {
    label: 'Landlorld',
    route: '/landlord',
    description: 'Information concerning landlords',
    color: 'default',
    icon: <HomeWorkIcon />,
  },
  {
    label: 'Tenant',
    route: '/tenant',
    description: 'Information concerning tenants',
    color: 'default',
    icon: <GroupIcon />,
  },
  {
    label: 'Legal Statements',
    route: '/legal',
    description: 'Our Legal Statments such as our "Privacy Policy"',
    color: 'default',
    icon: <AssignmentIcon />,
  },
  {
    label: 'Contact',
    route: '/contact',
    description: 'All info about anyway you could want to contact us',
    color: 'default',
    icon: <ContactPhoneIcon />,
  },
];

export default HOME_PAGE_DASHBOARD_CONFIG;
