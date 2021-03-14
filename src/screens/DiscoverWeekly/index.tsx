import { makeStyles } from "@material-ui/core";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React, { ReactElement } from "react";
import { DiscoverWeekly as DiscoverWeeklyType, Spotify } from "../../api/types";
import { useTypedSelector } from "../../app/Store";
import Playlist from "../../components/playlist";
import DiscoverSection from "./discoverSection";
import "./styles.css";
interface Props {
  spotify: Spotify;
}

const drawerWidth = 240;

const useStyles = makeStyles({
  container: {
    marginLeft: drawerWidth,
  },
  playButton: {
    color: "#1ED760",
    height: "80px",
    width: "80px",
  },
  favoriteIcon: {
    color: "#1ED760",
    height: "40px",
    width: "40px",
    marginLeft: "15px",
  },
  moreIcon: {
    color: "#FFF",
    height: "32px",
    width: "32px",
    marginLeft: "15px",
  },
});
export default function DiscoverWeekly(props: Props): ReactElement {
  const { spotify } = props;
  const { discoverWeekly } = useTypedSelector((state) => state.spotify);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className="container">
        <div className="discoverContainer">
          <DiscoverSection
            discoverWeekly={discoverWeekly as DiscoverWeeklyType}
          />
        </div>
        <div className="actionBarRow">
          <PlayCircleFilled className={classes.playButton} />
          <Favorite className={classes.favoriteIcon} />
          <MoreHoriz className={classes.moreIcon} />
        </div>
        <Playlist discoverWeekly={discoverWeekly as DiscoverWeeklyType} spotify={spotify} />
      </div>
    </div>
  );
}
