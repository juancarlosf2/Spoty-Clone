import {
  User,
  Playlist,
  TopArtists,
  CurrentPlayback,
  DiscoverWeekly,
  Item,
} from "./../api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrentState = {
  user: User | null;
  token: string | null;
  playlists: Playlist | null;
  topArtists: TopArtists | null;
  isPlaying: boolean;
  discoverWeekly: DiscoverWeekly | null;
  item: Item | null;
};

const initialState: CurrentState = {
  user: null,
  playlists: null,
  discoverWeekly: null,
  topArtists: null,
  isPlaying: false,
  item: null,
  token: null,
};

const spotify = createSlice({
  name: "spoty",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setPlaying(state, action: PayloadAction<boolean>) {
      state.isPlaying = action.payload;
    },
    setDiscoveryWeekly(state, action: PayloadAction<DiscoverWeekly>) {
      state.discoverWeekly = action.payload;
    },
    setTopArtists(state, action: PayloadAction<TopArtists>) {
      state.topArtists = action.payload;
    },
    setPlaylists(state, action: PayloadAction<Playlist>) {
      state.playlists = action.payload;
    },
    setItem(state, action: PayloadAction<Item | null>) {
      state.item = action.payload;
    },
  },
});

export const {
  setToken,
  setUser,
  setPlaying,
  setDiscoveryWeekly,
  setTopArtists,
  setPlaylists,
  setItem,
} = spotify.actions;

export default spotify.reducer;
