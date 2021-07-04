import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
const drawerWidth = 240;

export default function StaticAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start">Menu</IconButton>
        <Typography variant="h6">Ticket Open</Typography>
        <Button>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
