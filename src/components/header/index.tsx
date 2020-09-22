import React from "react";
import { useSelector } from "react-redux";
import {
  AppBar,
  Avatar,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { RootState } from "../../app/RootReducer";
import ElevationScroll from "./ElevationScroll";
import "./styles.css";

const drawerWidth = 200;

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
  const { user } = useSelector((state: RootState) => state.spotify);
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
