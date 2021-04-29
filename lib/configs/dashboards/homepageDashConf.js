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
    icon: <HomeWorkIcon color="default" />,
  },
  {
    label: 'Tenant',
    route: '/tenant',
    description: 'Information concerning tenants',
    color: 'default',
    icon: <GroupIcon color="default" />,
  },
  {
    label: 'Legal Statements',
    route: '/legal',
    description: 'Our Legal Statments such as our "Privacy Policy"',
    color: 'default',
    icon: <AssignmentIcon color="default" />,
  },
  {
    label: 'Contact',
    route: '/contact',
    description: 'Have any questions or need to contact us? You can do it here',
    color: 'default',
    icon: <ContactPhoneIcon color="default" />,
  },
];

export default HOME_PAGE_DASHBOARD_CONFIG;
