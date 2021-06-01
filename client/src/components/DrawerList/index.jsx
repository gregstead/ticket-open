import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import FaceIcon from "@material-ui/icons/Face";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import EventIcon from "@material-ui/icons/Event";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListOfLinks from "../ListofLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState({
    campaigns: false,
    events: false,
    patrons: false,
    profile: false,
    settings: false,
  });

  const handleCampaignClick = ({ target }) => {
    setOpen({ ...open, campaigns: !open.campaigns });
  };
  const handlePatronsClick = () => {
    setOpen({ ...open, patrons: !open.patrons });
  };
  const handleEventsClick = () => {
    setOpen({ ...open, events: !open.events });
  };
  const handleProfileClick = () => {
    setOpen({ ...open, profile: !open.profile });
  };

  // const listOfLinks = (arr) => {
  //   arr.map(([path, linkText]) => {
  //     return (
  //       <ListItem button className={classes.nested}>
  //         <NavLink to={path}>{linkText}</NavLink>
  //       </ListItem>
  //     );
  //   });
  // };
  return (
    <List
      component="nav"
      aria-labelledby="Menu header"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menu
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      {/* Campaigns */}
      <ListItem button onClick={handleCampaignClick}>
        <ListItemIcon>
          <LoyaltyIcon />
        </ListItemIcon>
        <ListItemText primary="Campaigns" />
        {open.campaigns ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.campaigns} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="New campaign" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Edit campaigns" />
          </ListItem>
        </List>
      </Collapse>
      {/* Events */}
      <ListItem button onClick={handleEventsClick}>
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary="Events" />
        {open.events ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.events} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListOfLinks
            links={[
              ["/event/new", "Make new event"],
              ["/event", "View Events"],
            ]}
          />
        </List>
      </Collapse>
      {/* Patrons */}
      <ListItem button onClick={handlePatronsClick}>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary="Patrons" />
        {open.patrons ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.patrons} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <NavLink to="/patron/new">Add patron</NavLink>
          </ListItem>
          <ListItem button className={classes.nested}>
            <NavLink to="/patron">View patrons</NavLink>
          </ListItem>
        </List>
      </Collapse>
      {/* Profile */}
      <ListItem button onClick={handleProfileClick}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
        {open.profile ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.profile} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <NavLink to="/profile">Edit profile</NavLink>
          </ListItem>
        </List>
      </Collapse>
      {/* Settings */}
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  );
}
