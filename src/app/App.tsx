import React, { useEffect } from "react";
import "./App.css";
import Login from "../screens/Login";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from "../api/spotify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./RootReducer";
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
import { AppDispatch } from "./Store";
import Player from "../components/player";

// changes
const spotify = new SpotifyWebApi();

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.spotify);
  useEffect(() => {
    const _token = getTokenFromResponse();
    window.location.hash = "";

    // const _token = hash.access_token;

    dispatch(setPlaying(true));
    if (_token) {
      dispatch(setToken(_token));
      spotify.setAccessToken(_token);

      spotify
        .getPlaylist("37i9dQZF1DX7QOv5kjbU68")
        .then((res) => dispatch(setDiscoveryWeekly(res)))
        .catch((e) => console.log(e));

      spotify
        .getMyTopArtists()
        .then((res) => dispatch(setTopArtists(res)))
        .catch((e) => console.log(e));

      spotify
        .getMe()
        .then((user) => dispatch(setUser(user)))
        .catch((e) => console.log(e));

      spotify
        .getUserPlaylists()
        .then((res) => dispatch(setPlaylists(res)))
        .catch((e) => console.log(e));
    }
    console.log(token);
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
