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
  user: User;
  token: string;
  playlists: Playlist;
  topArtists: TopArtists;
  isPlaying: boolean;
  discoverWeekly: DiscoverWeekly;
  item: Item | null;
};

const initialState: Partial<CurrentState> = {} as CurrentState;

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
