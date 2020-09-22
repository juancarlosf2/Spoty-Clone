import { makeStyles } from "@material-ui/core";
import {
  Favorite,
  FavoriteBorderOutlined,
  MoreHoriz,
  PlayCircleFilled,
} from "@material-ui/icons";
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Spotify } from "../../api/types";
import { RootState } from "../../app/RootReducer";
import Playlist from "../../components/playlist";
import DiscoverSection from "./discoverSection";
import "./styles.css";
interface Props {
  spotify: Spotify;
}

const drawerWidth = 200;

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
export default function DiscoverWeekly({ spotify }: Props): ReactElement {
  const { discoverWeekly } = useSelector((state: RootState) => state.spotify);

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className="container">
        <div className="discoverContainer">
          <DiscoverSection discoverWeekly={discoverWeekly} />
        </div>
        <div className="actionBarRow">
          <PlayCircleFilled className={classes.playButton} />
          <Favorite className={classes.favoriteIcon} />
          <MoreHoriz className={classes.moreIcon} />
        </div>
        <Playlist discoverWeekly={discoverWeekly} />
      </div>
    </div>
  );
}
