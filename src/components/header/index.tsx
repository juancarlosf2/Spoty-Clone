import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import ElevationScroll from "./ElevationScroll";
import "./styles.css";
import { useTypedSelector } from "../../app/Store";

const drawerWidth = 240;

const useStyles = makeStyles({
  toolBar: {
    padding: "0 30px",
  },
  appBar: {
    marginLeft: drawerWidth,
    background: "transparent",
    boxShadow: "none",
  },
});

function Header() {
  const { user } = useTypedSelector((state) => state.spotify);
  const classes = useStyles();
  return (
    <ElevationScroll>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className="left"></div>
          <div className="center"></div>
          <div className="right">
            <button>{user?.display_name}</button>
          </div>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
