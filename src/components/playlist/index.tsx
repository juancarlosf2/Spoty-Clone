import React, { ReactElement } from "react";
import { CssBaseline } from "@material-ui/core";
import { AvTimer } from "@material-ui/icons";
import { DiscoverWeekly, Spotify } from "../../api/types";
import "./styles.css";
import { makeStyles } from "material-ui-core";
import SongRow from "../songRow";
import { useThunkDispatch } from "../../app/Store";
import { setItem, setPlaying } from "../../slices/spotySlice";

interface Props {
  discoverWeekly: DiscoverWeekly | null;
  spotify: Spotify
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
  const { discoverWeekly, spotify } = props;
  const classes = useStyles();
  const dispatch = useThunkDispatch()

  const playSong = async (id: string) => {
    const uris = [`spotify:track:${id}`];
    try {
      await spotify.play({uris: uris});
      const response = await spotify.getMyCurrentPlayingTrack();
      dispatch(setItem(response.item));
      dispatch(setPlaying(true));
    } catch (error) {
      throw error;
    }
  }

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
          <div className="derecha">
            <AvTimer className={classes.timer} />
          </div>
        </div>
        <hr className="line"></hr>
      </div>
      {discoverWeekly?.tracks.items.map((item, index) => {
        const { track } = item;
        const newTrack = track as SpotifyApi.TrackObjectFull;
        return <SongRow track={newTrack} playSong={playSong} index={index + 1} key={index} />;
      })}
    </div>
  );
}

export default Playlist;
