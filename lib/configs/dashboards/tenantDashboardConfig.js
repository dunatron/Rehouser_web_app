import TextFieldsIcon from '@material-ui/icons/TextFields';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const TENANT_DASHBOARD_CONFIG = [
  {
    label: 'Applications',
    route: '/tenant/applications',
    description: 'Review your rental applications',
    color: 'default',
    icon: <HomeWorkIcon />,
  },
  {
    label: 'Leases',
    route: 'tenant/leases',
    description: 'Review your leases',
    color: 'default',
    icon: <TextFieldsIcon />,
  },
];

export default TENANT_DASHBOARD_CONFIG;
