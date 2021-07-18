import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
  const [open, setOpen] = useState({
    campaigns: false,
    events: false,
    patrons: false,
    users: false,
    settings: false,
  });

  const handleCampaignsClick = () => {
    setOpen({ ...open, campaigns: !open.campaigns });
  };
  const handlePatronsClick = () => {
    setOpen({ ...open, patrons: !open.patrons });
  };
  const handleEventsClick = () => {
    setOpen({ ...open, events: !open.events });
  };
  const handleUsersClick = () => {
    setOpen({ ...open, profile: !open.profile });
  };

  return (
    <List
      component="nav"
      aria-labelledby="Menu header"
      subheader={
        <ListSubheader
          key="subheader"
          component="div"
          id="nested-list-subheader"
        >
          Menu
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem key="dashboardlist" button component={Link} to={"/dashboard"}>
        <ListItemIcon key="dashboardIcon">
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText key="dashboardText" primary="Dashboard" />
      </ListItem>
      {/* Campaigns */}
      <ListItem key="campaigns" button onClick={handleCampaignsClick}>
        <ListItemIcon key="campaignsIcon">
          <LoyaltyIcon />
        </ListItemIcon>
        <ListItemText key="campaignsText" primary="Campaigns" />
        {open.profile ? (
          <ExpandLess key={"campaignsExpandLess"} />
        ) : (
          <ExpandMore key="campaignsExpandMore" />
        )}
      </ListItem>
      <Collapse
        key="campaignsCollapse"
        in={open.campaigns}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {[
            ["/campaign/new", "Add New Campaign"],
            ["/campaign", "View Campaigns"],
            ["/campaign/edit", "Edit Campaign"],
          ].map(([path, linkText]) => {
            return (
              <ListItem
                key={linkText}
                button
                className={classes.nested}
                component={Link}
                to={path}
              >
                <ListItemText key={linkText + "Text"}>{linkText}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
      {/* Events */}
      <ListItem key="events" button onClick={handleEventsClick}>
        <ListItemIcon key="eventsIcon">
          <EventIcon />
        </ListItemIcon>
        <ListItemText key="eventsText" primary="Events" />
        {open.events ? (
          <ExpandLess key="eventsExpandLess" />
        ) : (
          <ExpandMore key="eventsExpandMore" />
        )}
      </ListItem>
      <Collapse
        key={"eventsCollapse"}
        in={open.events}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {[
            ["/event/new", "Make New Event"],
            ["/event", "View Events"],
            ["/reports/campaign", "Campaign Reports"],
          ].map(([path, linkText]) => {
            return (
              <ListItem
                key={linkText}
                button
                className={classes.nested}
                component={Link}
                to={path}
              >
                <ListItemText>{linkText}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
      {/* Patrons */}
      <ListItem key={"patrons"} button onClick={handlePatronsClick}>
        <ListItemIcon key={"patronsIcon"}>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText key={"patronsText"} primary="Patrons" />
        {open.patrons ? (
          <ExpandLess key={"patronsExpandLess"} />
        ) : (
          <ExpandMore key={"patronsExpandMore"} />
        )}
      </ListItem>
      <Collapse
        key={"patronsCollapse"}
        in={open.patrons}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {[
            ["/patron/new", "Make New Patron"],
            ["/patron", "View Patrons"],
            ["/reports/patron", "Patron Reports"],
            ["/patron/edit", "Edit Patron"],
          ].map(([path, linkText]) => {
            return (
              <ListItem
                key={linkText}
                button
                className={classes.nested}
                component={Link}
                to={path}
              >
                <ListItemText>{linkText}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
      {/* Profile */}
      <ListItem key={"users"} button onClick={handleUsersClick}>
        <ListItemIcon key={"usersIcon"}>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText key={"usersText"} primary="Users" />
        {open.users ? (
          <ExpandLess key={"usersExpandLess"} />
        ) : (
          <ExpandMore key={"usersExpandMore"} />
        )}
      </ListItem>
      <Collapse
        key={"usersCollapse"}
        in={open.profile}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {[
            ["/user/new", "Add New User"],
            ["/user", "View users"],
            ["/user/edit", "Edit User"],
          ].map(([path, linkText]) => {
            return (
              <ListItem
                key={linkText}
                button
                className={classes.nested}
                component={Link}
                to={path}
              >
                <ListItemText>{linkText}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
      {/* Settings */}
      <ListItem key={"settings"} button>
        <ListItemIcon key={"settingsIcon"}>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText
          key={"settingsIconText"}
          primary="Settings"
          component={Link}
          to="/settings"
        />
      </ListItem>{" "}
    </List>
  );
}
