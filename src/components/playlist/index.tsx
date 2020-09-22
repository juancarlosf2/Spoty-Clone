import React, { ReactElement } from "react";
import { CssBaseline, Divider } from "@material-ui/core";
import { AvTimer } from "@material-ui/icons";
import { DiscoverWeekly } from "../../api/types";
import "./styles.css";
import { makeStyles } from "material-ui-core";
import SongRow from "../songRow";

interface Props {
  discoverWeekly: DiscoverWeekly | null;
}

const useStyles = makeStyles({
  timer: {
    color: "#8C8C8C",
    width: "24px",
    height: "24px",
  },
  divider: {
    display: "flex",
    color: "#8C8C8C",
    opacity: "20%",
  },
});
function Playlist(props: Props): ReactElement {
  const { discoverWeekly } = props;
  const classes = useStyles();
  return (
    <div className="container">
      <CssBaseline />
      <div className="labelsContainer">
        <div className="labels">
          <div className="left">
            <span>#</span>
            <h6 className="label">title</h6>
          </div>
          <div className="center">
            <h6 className="label">album</h6>
          </div>
          <div className="right">
            <AvTimer className={classes.timer} />
          </div>
        </div>
        <hr className="line"></hr>
      </div>
      {discoverWeekly?.tracks.items.map((item, index) => {
        const { track } = item;
        const newTrack = track as SpotifyApi.TrackObjectFull;
        return <SongRow track={newTrack} index={index + 1} />;
      })}
    </div>
  );
}

export default Playlist;
