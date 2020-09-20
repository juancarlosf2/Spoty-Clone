import React, { ReactElement } from "react";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "material-ui-core";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarOption from "./option";
import { useSelector } from "react-redux";
import { RootState } from "../../app/RootReducer";

const useStyles = makeStyles({
  sideBar: {
    backgroundColor: "#000",
    width: "200px",
  },
  logo: {
    height: "70px",
    objectFit: "contain",
    padding: "10px",
  },
  mainLinks: {
    display: "flex",
    flexDirection: "column",
    padding: "0 15px",
  },
  playlistsContainer: {
    paddingLeft: "15px",
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "15px",
    color: "#8C8C8C",
  },
  br: {
    border: "1px solid rgba(140, 140, 140, 0.2)",
    borderRadius: "2px",
    width: "90%",
    margin: "0",
  },
});

function Sidebar(): ReactElement {
  const { playlists } = useSelector((state: RootState) => state.spotify);
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
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            className={classes.logo}
            alt=""
          />
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
