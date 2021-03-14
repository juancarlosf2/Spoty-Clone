import React, { ReactElement } from "react";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "material-ui-core";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarOption from "./option";
import { images } from "../images";
import { useTypedSelector } from "../../app/Store";

const useStyles = makeStyles({
  sideBar: {
    backgroundColor: "#000",
    width: "240px",
    zIndex: 0,
  },
  logo: {
    height: "100px",
    objectFit: "contain",
    padding: "10px",
  },
  mainLinks: {
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
  },
  playlistsContainer: {
    paddingLeft: "20px",
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "15px",
    color: "#8C8C8C",
    fontFamily: "circular std book",
  },
  br: {
    border: "1px solid rgba(140, 140, 140, 0.2)",
    borderRadius: "2px",
    width: "90%",
    margin: "0",
  },
});

function Sidebar(): ReactElement {
  const { playlists } = useTypedSelector((state) => state.spotify);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        variant="permanent"
        classes={{ paper: classes.sideBar }}
      >
        <div>
          <img src={images.spotifyLogo} className={classes.logo} alt="" />
          <div className={classes.mainLinks}>
            <SidebarOption Icon={HomeIcon} option="Home" />
            <SidebarOption Icon={SearchIcon} option="Search" />
            <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
          </div>
          <div className={classes.playlistsContainer}>
            <div>
              <h1 className={classes.title}>playlists</h1>
              <div className={classes.br}></div>
            </div>
            <div className="scrollable">
              <ul>
                {playlists?.items?.map((playlist) => (
                  <SidebarOption option={playlist.name} key={playlist.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default Sidebar;
