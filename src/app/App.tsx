import React, { useState } from "react";
import "./App.css";
import Login from "./screens/Login";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from "./api/spotify";
// changes
const spotify = new SpotifyWebApi();
function App() {
  const [token, setToken] = useState<string | null>(null);
  const getState = () => {
    const hash = getTokenFromResponse();
    window.location.hash = "";

    const _token = hash.access_token;

    console.log(_token);
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe();
    }
  };
  getTokenFromResponse();
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
