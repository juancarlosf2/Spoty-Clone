import React, { ReactElement, useEffect } from "react";
import { Item, Spotify } from "../../api/types";
import { useThunkDispatch, useTypedSelector } from "../../app/Store";
import { setItem, setPlaying } from "../../slices/spotySlice";
import PlayerStructure from "./PlayerStructure";

interface Props {
  spotify: Spotify;
}

function Player(props: Props): ReactElement {
  const { spotify } = props;
  const dispatch = useThunkDispatch();
  const { isPlaying, item } = useTypedSelector((state) => state.spotify);
  useEffect(() => {
    getPlaybackState();
  }, [spotify]);

  const getPlaybackState = async () => {
    try {
      spotify.skipToPrevious();
      const data = await spotify.getMyCurrentPlaybackState();
      dispatch(setItem(data.item));
      dispatch(setPlaying(data.is_playing));
    } catch (e) {
      console.log(e);
    }
  };

  const handlePlayPause = () => {
    isPlaying ? spotify.pause() : spotify.play();
    dispatch(setPlaying(!isPlaying));
  };

  const skipToNext = async () => {
    try {
      spotify.skipToNext();
      const data = await spotify.getMyCurrentPlayingTrack();
      dispatch(setItem(data.item));
      dispatch(setPlaying(true));
    } catch (e) {
      console.log(e);
    }
  };

  const skipToPrevious = async () => {
    try {
      spotify.skipToPrevious();
      const data = await spotify.getMyCurrentPlayingTrack();
      dispatch(setItem(data.item));
      dispatch(setPlaying(true));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <PlayerStructure
        handlePlayPause={handlePlayPause}
        skipToNext={skipToNext}
        skipToPrevious={skipToPrevious}
        isPlaying={isPlaying as boolean}
        item={item as Item}
      />
    </React.Fragment>
  );
}

export default Player;
