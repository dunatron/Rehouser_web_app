import { Badge } from '@material-ui/core';

import TextFieldsIcon from '@material-ui/icons/TextFields';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import SettingsIcon from '@material-ui/icons/Settings';

const ADMIN_DASHBOARD_CONFIG = ({ state }) => [
  {
    label: 'Appraisals',
    route: '/admin/appraisals',
    description: 'Review system appraisals',
    color: 'default',
    icon: (
      <Badge badgeContent={state.newRentalAppraisalCount} color="primary">
        <HomeWorkIcon color="default" />
      </Badge>
    ),
  },
  {
    label: 'Rental Applications',
    route: '/admin/applications',
    description: 'View all rental applications currently in the system',
    color: 'default',
    icon: (
      <Badge badgeContent={state.newRentalApplicationsCount} color="primary">
        <HomeWorkIcon />
      </Badge>
    ),
  },
  {
    label: 'Properties',
    route: '/admin/properties',
    description: 'View all properties on the system',
    color: 'default',
    icon: (
      <Badge badgeContent={state.newPropertiesCount} color="primary">
        <HomeWorkIcon />
      </Badge>
    ),
  },
  {
    label: 'Leases',
    route: '/admin/leases',
    description: 'View all property leases that exist on the system',
    color: 'default',
    icon: (
      <Badge badgeContent={state.newPropertiesCount} color="primary">
        <HomeWorkIcon />
      </Badge>
    ),
  },
  {
    label: 'Inspections',
    route: '/admin/inspections',
    description: 'View allinspections on the system',
    color: 'default',
    icon: <HomeWorkIcon />,
  },
  {
    label: 'Typography',
    route: '/admin/typography',
    description: 'Review system typography',
    color: 'default',
    icon: <TextFieldsIcon />,
  },
  {
    label: 'Admin Settings',
    route: '/admin/settings',
    description: 'Subscribe to system events',
    color: 'default',
    icon: <SettingsIcon />,
  },
  {
    label: 'Legal Statements',
    route: '/legal',
    description:
      'View our Legal Statements such as our Privacy Policy and Terms of Engagement',
    color: 'default',
    icon: <SettingsIcon />,
  },
  {
    label: 'Users List',
    route: '/admin/users',
    description: 'View all of our users and update things such as permissions',
    color: 'default',
    icon: <SettingsIcon />,
  },
  {
    label: 'Bank Manager',
    route: '/admin/banking',
    description: 'This is where you can manage all banking for leases',
    color: 'default',
    icon: <SettingsIcon />,
  },
  {
    label: 'Contact Enquiries',
    route: '/admin/contact-submissions',
    description:
      'Anyone who has submitted an enquiry/contact form, the data will be found here. We should, respond via the system, then enter any replies through emails to trace everything',
    color: 'default',
    icon: <SettingsIcon />,
  },
  {
    label: 'Files',
    route: '/admin/files',
    description: 'All files on the system, user, and property files etc',
    color: 'default',
    icon: <SettingsIcon />,
  },
  {
    label: 'Media Library 2',
    route: '/admin/media',
    description:
      'Our Media provider is cloudinary, the Api will take the current user and try log them into cludinary. ToDo: create siganture where admin users would hit our backend and get a signature which would handle the auth',
    color: 'default',
    icon: <SettingsIcon />,
  },
  {
    label: 'Test Crashes',
    route: '/admin/test/server-crashes',
    description: 'Run server crashes',
    color: 'default',
    icon: <SettingsIcon />,
  },
];

export default ADMIN_DASHBOARD_CONFIG;
