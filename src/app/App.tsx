import React, { useEffect } from "react";
import "./App.css";
import Login from "../screens/Login";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from "../api/spotify";
import {
  setDiscoveryWeekly,
  setPlaying,
  setPlaylists,
  setToken,
  setTopArtists,
  setUser,
} from "../slices/spotySlice";
import DiscoverWeekly from "../screens/DiscoverWeekly";
import Sidebar from "../components/sidebar/";
import Header from "../components/header";
import { useThunkDispatch, useTypedSelector } from "./Store";
import Player from "../components/player";

// changes
const spotify = new SpotifyWebApi();

function App() {
  const dispatch = useThunkDispatch();
  const { token } = useTypedSelector((state) => state.spotify);
  useEffect(() => {
    const _token = getTokenFromResponse();
    window.location.hash = "";

    // const _token = hash.access_token;
    async function fn () {
    dispatch(setPlaying(true));
    if (_token) {
      dispatch(setToken(_token));
      spotify.setAccessToken(_token);

      try {
        const playlistId = "37i9dQZF1DX7QOv5kjbU68";
        const playlist = await spotify.getPlaylist(playlistId);
        dispatch(setDiscoveryWeekly(playlist));
        
        const topArtists = await spotify.getMyTopArtists();
        dispatch(setTopArtists(topArtists));
        
        const me = await spotify.getMe();
        dispatch(setUser(me));
        
        const userPlayLists = await spotify.getUserPlaylists();
        dispatch(setPlaylists(userPlayLists));
      } catch(error) {
          throw error;
      };
    }}
    fn();

  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && (
        <>
          <Header />
          <Sidebar />
          <DiscoverWeekly spotify={spotify} />
          <Player spotify={spotify} />
        </>
      )}
    </div>
  );
}

export default App;
