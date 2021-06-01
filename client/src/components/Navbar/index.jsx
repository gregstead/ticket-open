import React from "react";
import {
 
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  List,
  makeStyles,
 
  Toolbar,

} from "@material-ui/core";
import 
 { IconButton}

from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";


  const useStyles = makeStyles((theme) => ({
    root: { display: "flex" },
  }));


  export default function Navbar() {

    const classes = useStyles()
    return (
        <div className={classes.root}>
          <CssBaseline />
    
          <AppBar>
            <Toolbar>
              <IconButton>
             <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

        </div>
      );
    }