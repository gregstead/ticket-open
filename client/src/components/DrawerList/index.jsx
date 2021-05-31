import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import FaceIcon from "@material-ui/icons/Face";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
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
  let history = useHistory();
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
          <ListItem
            button
            className={classes.nested}
            onClick={history.push("/patron")}
          >
            <ListItemText primary="New campaign" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Edit campaigns" />
          </ListItem>
        </List>
      </Collapse>
      {/* Events */}
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
            <ListItemText primary="New patron" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="View patrons" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
