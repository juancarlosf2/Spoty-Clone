import SpotifyWebApi from "spotify-web-api-js";

export interface User extends SpotifyApi.CurrentUsersProfileResponse {}

export interface Token {
  token: string;
}

export interface Playlist extends SpotifyApi.SinglePlaylistResponse {}

export interface TopArtists extends SpotifyApi.UsersTopArtistsResponse {}

export interface Spotify extends SpotifyWebApi.SpotifyWebApiJs {}

export interface CurrentPlayback extends SpotifyApi.CurrentPlaybackResponse {}

export interface Playing {
  playing: boolean;
}
