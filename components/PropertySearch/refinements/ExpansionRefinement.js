import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // backgroundColor: theme.palette.primary.main,
    // color: theme.palette.primary.contrastText,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listItemTextRoot: {
    // color: theme.palette.primary.contrastText,
  },
  listItemIcon: {
    // color: theme.palette.primary.contrastText,
  },
}));

const ExpansionRefinement = ({
  children,
  title,
  nested,
  defaultOpen = false,
  icon,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(defaultOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem
        button
        onClick={handleClick}
        classes={{
          root: classes.root,
        }}>
        <ListItemIcon
          classes={{
            root: classes.listItemIcon,
          }}>
          {icon ? icon : <FilterListIcon />}
        </ListItemIcon>
        <ListItemText
          primary={title}
          classes={{
            root: classes.listItemTextRoot,
            primary: classes.listItemTextRoot,
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div
          style={{
            padding: nested ? '16px' : 0,
          }}>
          {children}
        </div>
      </Collapse>
    </>
  );
};

export default ExpansionRefinement;
