import React, { ReactElement } from "react";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "material-ui-core";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarOption from "./option";

const useStyles = makeStyles({
  sideBar: {
    backgroundColor: "#000",
    width: "240px",
    padding: "20px, 30px",
  },
  logo: {
    margin: "15px",
    height: "40px",
    width: "138px",
  },
});

function Sidebar(): ReactElement {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Drawer
        variant="permanent"
        className={classes.sideBar}
        classes={{ paper: classes.sideBar }}
      >
        <div>
          <img
            src="../assets/images/Spotify_Logo_RGB_White.png"
            className={classes.logo}
            alt=""
          />
          <div>
            <SidebarOption Icon={HomeIcon} option="Home" />
            <SidebarOption Icon={SearchIcon} option="Search" />
            <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default Sidebar;
