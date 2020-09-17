import { combineReducers } from "@reduxjs/toolkit";
import spotifyReducer from "../slices/spotySlice";
const rootReducer = combineReducers({
  spotify: spotifyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
