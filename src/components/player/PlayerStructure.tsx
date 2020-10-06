import React, { ReactElement } from "react";
import { AppBar, Grid, makeStyles, Slider, Toolbar } from "@material-ui/core";
import { Item } from "../../api/types";
import {
  PauseCircleOutline,
  PlayCircleOutline,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
} from "@material-ui/icons";
import "./styles.css";

interface Props {
  handlePlayPause: () => void;
  skipToNext: () => Promise<void>;
  skipToPrevious: () => Promise<void>;
  item: Item | null;
  isPlaying: boolean;
}

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#282828",
    bottom: 0,
    top: "auto",
    height: 90,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

function PlayerStructure(props: Props): ReactElement {
  const {
    handlePlayPause,
    skipToNext,
    skipToPrevious,
    item,
    isPlaying,
  } = props;

  const classes = useStyles();
  //   const { album, artists, name, duration_ms } = item;
  const authors = item?.artists.map((artist) => artist.name).join(", ");

  let playButton;

  if (isPlaying) {
    playButton = (
      <PauseCircleOutline
        onClick={handlePlayPause}
        fontSize="large"
        className="playIcon"
      />
    );
  } else {
    playButton = (
      <PlayCircleOutline
        onClick={handlePlayPause}
        fontSize="large"
        className="playIcon"
      />
    );
  }

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className="containel">
        <div className="first">
          <img className="imagen" src={item?.album.images[0].url} alt="" />
          {item ? (
            <div className="infoContainer">
              <h4 className="titulo">{item?.name}</h4>
              <caption className="author">{authors}</caption>
            </div>
          ) : (
            <div className="infoContainer">
              <h4 className="titulo">No song is playing</h4>
              <caption className="author">...</caption>
            </div>
          )}
        </div>
        <div className="second">
          <Grid className="playerCentralOptions" container spacing={2}>
            <Grid item>
              <Shuffle />
            </Grid>
            <Grid item>
              <SkipPrevious onClick={skipToPrevious} className="playIcon" />
            </Grid>
            <Grid item>{playButton}</Grid>
            <Grid item>
              <SkipNext onClick={skipToNext} className="playIcon" />
            </Grid>
            <Grid item>
              <Repeat />
            </Grid>
          </Grid>
          <Slider aria-labelledby="continuous-slider" />
        </div>
        <div className="third">
          <PlaylistPlay />
          <VolumeDown />
          <Slider aria-labelledby="continuous-slider" />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default PlayerStructure;
